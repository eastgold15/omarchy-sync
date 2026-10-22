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

printf '%d passed, %d failed\n' "$pass" "$fail"
[[ $fail -eq 0 ]]
