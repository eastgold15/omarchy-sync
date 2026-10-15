#!/usr/bin/env bash
# omarsync 关键路径冒烟测试(新 TypeScript CLI)。
# 只测最关键的部分:
#   1. CLI 能跑(--help)
#   2. status --json 输出合法 JSON 且带面板依赖的全部字段
#   3. 非交互 apply 一律拒绝(审阅模型不能被绕过)
# 全程只读,不动镜像、不动配置。

set -euo pipefail

ROOT=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
CLI="$ROOT/bin/omarsync"

pass=0
fail=0

ok() { printf 'PASS %s\n' "$1"; pass=$((pass + 1)); }
bad() { printf 'FAIL %s\n' "$1"; fail=$((fail + 1)); }

# 产物必须是最新的
if [[ ! -f $ROOT/cli/dist/index.js ]]; then
  printf 'cli/dist/index.js 不存在;先跑 scripts/dev-install.sh 或 (cd cli && bun run build)\n' >&2
  exit 1
fi

# 1. --help 能跑,且中文描述在
if "$CLI" --help 2>&1 | grep -q '审阅'; then
  ok "cli --help"
else
  bad "cli --help"
fi

# 2. status --json:合法 JSON + 面板依赖字段齐全
json=$("$CLI" status --json 2>/dev/null) || true
missing=$(printf '%s' "$json" | node -e '
let s = ""; process.stdin.on("data", (d) => (s += d)).on("end", () => {
  const need = ["ghInstalled","loggedIn","user","repo","branch","initialized","dirty","behind","ahead",
    "remoteCommit","pinnedCommit","remoteSigned","remoteSignature","signerFingerprint","hasTrustedKeys",
    "firstApply","lastPush","running","error","miseConnected","changedFiles"];
  try {
    const st = JSON.parse(s);
    const miss = need.filter((k) => !(k in st));
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

# 3. status.json 已落盘(面板 FileView 读它)
if [[ -f $HOME/.local/state/omarsync/status.json ]]; then
  ok "status.json 落盘"
else
  bad "status.json 落盘"
fi

# 4. 非交互 apply 必须拒绝:缺 --commit
if "$CLI" apply </dev/null >/dev/null 2>&1; then
  bad "apply 无 --commit 竟然成功"
else
  ok "apply 无 --commit 被拒绝"
fi

# 5. 非交互 apply 必须拒绝:伪造的 commit(不是远程顶端)
fake=$(printf 'a%.0s' {1..40})
if "$CLI" apply --commit "$fake" </dev/null >/dev/null 2>&1; then
  bad "apply 伪造 commit 竟然成功"
else
  ok "apply 伪造 commit 被拒绝"
fi

printf '%d passed, %d failed\n' "$pass" "$fail"
[[ $fail -eq 0 ]]
