#!/usr/bin/env bash
# Omarsync 关键路径冒烟测试(TypeScript CLI)。
#   1. CLI 能跑(--help)
#   2. status --json 输出合法 JSON,且带面板依赖的字段(含 dotRepo/dotBranch)
#   3. 非交互 apply 一律拒绝(审阅模型不能被绕过)
#   4. 插件身份仍是 Omarsync
# 使用临时 HOME,不碰本机真实配置。

set -euo pipefail

ROOT=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
CLI="$ROOT/bin/omarsync"
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

pass=0
fail=0

ok() { printf 'PASS %s\n' "$1"; pass=$((pass + 1)); }
bad() { printf 'FAIL %s\n' "$1"; fail=$((fail + 1)); }

if [[ ! -f $ROOT/cli/dist/index.js ]]; then
  printf 'cli/dist/index.js 不存在;先跑 (cd cli && bun run build)\n' >&2
  exit 1
fi

if "$CLI" --help 2>&1 | grep -q '审阅'; then
  ok "cli --help"
else
  bad "cli --help"
fi

json=$(HOME="$TMP/home" XDG_CONFIG_HOME="$TMP/home/.config" XDG_STATE_HOME="$TMP/home/.local/state" \
  "$CLI" status --json 2>/dev/null) || true
missing=$(printf '%s' "$json" | node -e '
let s = ""; process.stdin.on("data", (d) => (s += d)).on("end", () => {
  const need = ["ghInstalled","loggedIn","user","repo","dotRepo","dotBranch","branch","initialized","dirty","behind","ahead",
    "remoteCommit","pinnedCommit","remoteSigned","remoteSignature","signerFingerprint","hasTrustedKeys",
    "firstApply","lastPush","running","error","miseConnected","changedFiles"];
  try {
    const st = JSON.parse(s);
    const miss = need.filter((k) => !(k in st));
    if (st.dotBranch !== "dotfiles") miss.push("dotBranch!=dotfiles");
    process.stdout.write(miss.join(","));
  } catch {
    process.stdout.write("<not-json>");
  }
});')
if [[ -z $missing ]]; then
  ok "status --json 字段齐全"
else
  bad "status --json 缺字段: $missing"
fi

if [[ -f $TMP/home/.local/state/omarsync/status.json ]]; then
  ok "status.json 落盘"
else
  bad "status.json 落盘"
fi

if HOME="$TMP/home" "$CLI" apply </dev/null >/dev/null 2>&1; then
  bad "apply 无 --commit 竟然成功"
else
  ok "apply 无 --commit 被拒绝"
fi

fake=$(printf 'a%.0s' {1..40})
if HOME="$TMP/home" "$CLI" apply --commit "$fake" </dev/null >/dev/null 2>&1; then
  bad "apply 伪造 commit 竟然成功"
else
  ok "apply 伪造 commit 被拒绝"
fi

id=$(node -e 'const m=require(process.argv[1]); process.stdout.write(m.id+" "+m.name+" "+m.version)' "$ROOT/manifest.json")
if [[ $id == "io.github.lukebest.omarsync Omarsync 2.0.0" ]]; then
  ok "插件身份"
else
  bad "插件身份: $id"
fi

if grep -R -n -E 'eastgold15|omarchy\.sync|OMARCHY_SYNC' \
  --exclude-dir node_modules --exclude-dir dist --exclude-dir .git \
  "$ROOT/cli/src" "$ROOT/bin" "$ROOT/manifest.json" "$ROOT/BarWidget.qml" "$ROOT/Panel.qml" >/dev/null; then
  bad "仍有 omarchy.sync / eastgold15 命名"
else
  ok "命名已恢复为 Omarsync"
fi

if grep -q 'signUntrustedTip' "$ROOT/cli/src/commands/push.ts" "$ROOT/cli/src/lib/trust.ts"; then
  bad "仍会给未审阅的尖端补签名"
else
  ok "不再给未审阅的尖端补签名"
fi

# 未签名的远程尖端必须在合并前被拒绝;签名函数也不能给另一棵树补签。
trust="$TMP/trust"
mkdir -p "$trust/home/.config/omarsync"
ssh-keygen -q -t ed25519 -f "$trust/key" -N "" -C omarsync-test
pub=$(awk '{print $1 " " $2}' "$trust/key.pub")
printf '* namespaces="git" %s\n' "$pub" > "$trust/home/.config/omarsync/trusted-keys"
git init -q -b main "$trust/mirror"
git -C "$trust/mirror" config user.email omarsync@localhost
git -C "$trust/mirror" config user.name omarsync
git -C "$trust/mirror" config gpg.format ssh
git -C "$trust/mirror" config user.signingkey "$trust/key"
git -C "$trust/mirror" config commit.gpgsign true
git -C "$trust/mirror" config gpg.ssh.program "$(command -v ssh-keygen)"
echo base > "$trust/mirror/file"
git -C "$trust/mirror" add file
git -C "$trust/mirror" commit -q -m base
base_commit=$(git -C "$trust/mirror" rev-parse HEAD)
base_tree=$(git -C "$trust/mirror" rev-parse 'HEAD^{tree}')
git init -q --bare -b main "$trust/origin.git"
git -C "$trust/mirror" remote add origin "$trust/origin.git"
git -C "$trust/mirror" push -q origin HEAD:main
git clone -q -b main "$trust/origin.git" "$trust/attacker"
git -C "$trust/attacker" config user.email attacker@example.com
git -C "$trust/attacker" config user.name attacker
git -C "$trust/attacker" config commit.gpgsign false
mkdir -p "$trust/attacker/hooks/post-apply.d"
printf 'echo pwned\n' > "$trust/attacker/hooks/post-apply.d/evil.sh"
git -C "$trust/attacker" add hooks/post-apply.d/evil.sh
git -C "$trust/attacker" -c commit.gpgsign=false commit -q -m 'add hook'
git -C "$trust/attacker" push -q origin HEAD:main
git -C "$trust/mirror" fetch -q origin '+refs/heads/main:refs/remotes/origin/main'
remote_tip=$(git -C "$trust/mirror" rev-parse origin/main)
set +e
(
  cd "$ROOT/cli"
  HOME="$trust/home" MIRROR="$trust/mirror" SHA="$remote_tip" bun -e '
import { requireTrustedRemoteTip } from "./src/lib/trust.ts";
requireTrustedRemoteTip(process.env.MIRROR, process.env.SHA);
' >/dev/null 2>&1
)
trust_status=$?
set -e
if [[ $trust_status -ne 0 && $(git -C "$trust/mirror" rev-parse HEAD) == "$base_commit" ]]; then
  ok "未签名远程尖端被拒绝"
else
  bad "未签名远程尖端被拒绝"
fi
git -C "$trust/mirror" rebase -q "$remote_tip"
set +e
(
  cd "$ROOT/cli"
  HOME="$trust/home" MIRROR="$trust/mirror" TREE="$base_tree" bun -e '
import { signReviewedTip } from "./src/lib/trust.ts";
signReviewedTip(process.env.MIRROR, process.env.TREE);
' >/dev/null 2>&1
)
sign_status=$?
set -e
if [[ $sign_status -ne 0 && $(git -C "$trust/mirror" rev-parse HEAD) == "$remote_tip" ]]; then
  ok "变基后的树不会被补签"
else
  bad "变基后的树不会被补签"
fi
git -C "$trust/mirror" reset -q --hard "$base_commit"
set +e
(
  cd "$ROOT/cli"
  HOME="$trust/home" MIRROR="$trust/mirror" TREE="$base_tree" bun -e '
import { signReviewedTip } from "./src/lib/trust.ts";
signReviewedTip(process.env.MIRROR, process.env.TREE);
' >/dev/null 2>&1
)
same_status=$?
set -e
if [[ $same_status -eq 0 && $(git -C "$trust/mirror" rev-parse HEAD) == "$base_commit" ]]; then
  ok "已审阅且已签名的树保持原样"
else
  bad "已审阅且已签名的树保持原样"
fi

printf '%d passed, %d failed\n' "$pass" "$fail"
[[ $fail -eq 0 ]]
