#!/usr/bin/env bash
# Omarsync 3.x(纯 mise deploy 架构)关键路径冒烟测试。
#   1. CLI 能跑,4 个新命令齐全、旧命令已移除
#   2. status --json 输出合法 JSON 且带面板依赖的全部字段与兼容语义
#   3. 配置仓库的 git 状态采集:初始化、分支、dirty、remote 解析
#   4. push 主链路:干净仓库温和退出;有改动时经本地 bare remote 完整提交推送
#   5. doctor 可执行;插件身份与 dist 体积达标
# 全程使用临时 HOME(仓库放在默认路径 Documents/GitHub/omarchy-config 下),不碰本机真实配置。

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

# 临时 HOME 下的默认仓库路径,与 paths.ts 的约定保持一致
THOME="$TMP/home"
REPO="$THOME/Documents/GitHub/omarchy-config"
mkdir -p "$THOME"

run_cli() {
  set +e
  HOME="$THOME" "$CLI" "$@" >"$TMP/cli.out" 2>"$TMP/cli.err"
  local rc=$?
  set -e
  printf '%s' "$rc"
}

# ---- 1. help 与命令面 -------------------------------------------------------

help_text=$(HOME="$THOME" "$CLI" --help 2>&1 || true)
if grep -qw status <<<"$help_text" && grep -qw push <<<"$help_text" \
  && grep -qw apply <<<"$help_text" && grep -qw doctor <<<"$help_text"; then
  ok "help 列出 status/push/apply/doctor"
else
  bad "help 列出 status/push/apply/doctor"
fi

if grep -qE '\b(setup|login|migrate|trust-key|conflicts|repair-remote)\b' <<<"$help_text"; then
  bad "help 仍出现旧架构命令"
else
  ok "旧架构命令已移除"
fi

# ---- 2. 无仓库时的 status ---------------------------------------------------

json=$(HOME="$THOME" "$CLI" status --json 2>/dev/null) || true
missing=$(printf '%s' "$json" | node -e '
let s = ""; process.stdin.on("data", (d) => (s += d)).on("end", () => {
  const need = ["ghInstalled","loggedIn","user","repo","dotRepo","dotBranch","branch","initialized","dirty","behind","ahead",
    "remoteCommit","pinnedCommit","remoteSigned","remoteSignature","signerFingerprint","hasTrustedKeys",
    "firstApply","lastPush","running","error","miseConnected","changedFiles"];
  try {
    const st = JSON.parse(s);
    const miss = need.filter((k) => !(k in st));
    if (st.initialized !== false) miss.push("initialized!=false");
    process.stdout.write(miss.join(","));
  } catch {
    process.stdout.write("<not-json>");
  }
});')
if [[ -z $missing ]]; then
  ok "无仓库 status --json 字段齐全且 initialized=false"
else
  bad "无仓库 status --json: $missing"
fi

if [[ -f $THOME/.local/state/omarsync/status.json ]]; then
  ok "status.json 落盘"
else
  bad "status.json 落盘"
fi

# ---- 3. 构造临时配置仓库 ----------------------------------------------------

mkdir -p "$REPO"
git -C "$REPO" init -q -b main
git -C "$REPO" config user.email omarsync-test@localhost
git -C "$REPO" config user.name omarsync-test
printf '# test\n' >"$REPO/README.md"
git -C "$REPO" add README.md
git -C "$REPO" commit -q -m init

json=$(HOME="$THOME" "$CLI" status --json 2>/dev/null)
echo "$json" | node -e '
let s = ""; process.stdin.on("data", (d) => (s += d)).on("end", () => {
  const st = JSON.parse(s);
  const errs = [];
  if (st.initialized !== true) errs.push("initialized");
  if (st.branch !== "main" || st.dotBranch !== "main") errs.push("branch");
  if (st.dirty !== false) errs.push("dirty");
  if (st.behind !== 0 || st.ahead !== 0) errs.push("behind/ahead 无 upstream 应为 0");
  // 签名门移除后的面板兼容语义:apply 门必须自然敞开
  if (st.remoteSigned !== true || st.remoteSignature !== "trusted") errs.push("remoteSignature");
  if (st.hasTrustedKeys !== true || st.firstApply !== false) errs.push("trust 兼容位");
  if (st.pinnedCommit !== "" || st.signerFingerprint !== "") errs.push("钉 sha/指纹应为空");
  if (st.error !== "") errs.push("error:" + st.error);
  if (errs.length) { console.error(errs.join(",")); process.exit(1); }
});'
if [[ $? -eq 0 ]]; then
  ok "已初始化仓库的 status 语义"
else
  bad "已初始化仓库的 status 语义: $(cat "$TMP/cli.err" 2>/dev/null)"
fi

# remote 解析:https 与 ssh 两种写法都要得到 owner/name(面板 openRepo 依赖)
git -C "$REPO" remote add origin https://github.com/eastgold15/omarchy-config.git
repo_field=$(HOME="$THOME" "$CLI" status --json 2>/dev/null | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>process.stdout.write(JSON.parse(s).repo))')
if [[ $repo_field == "eastgold15/omarchy-config" ]]; then
  ok "parseRemote(https)"
else
  bad "parseRemote(https): $repo_field"
fi
git -C "$REPO" remote set-url origin git@github.com:eastgold15/omarchy-config.git
repo_field=$(HOME="$THOME" "$CLI" status --json 2>/dev/null | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>process.stdout.write(JSON.parse(s).repo))')
if [[ $repo_field == "eastgold15/omarchy-config" ]]; then
  ok "parseRemote(ssh)"
else
  bad "parseRemote(ssh): $repo_field"
fi

# ---- 4. dirty 探测 ----------------------------------------------------------

printf 'local\n' >"$REPO/local-change.txt"
json=$(HOME="$THOME" "$CLI" status --json 2>/dev/null)
echo "$json" | node -e '
let s = ""; process.stdin.on("data", (d) => (s += d)).on("end", () => {
  const st = JSON.parse(s);
  if (st.dirty !== true || !st.changedFiles.includes("local-change.txt")) process.exit(1);
});'
if [[ $? -eq 0 ]]; then
  ok "dirty 与 changedFiles 探测"
else
  bad "dirty 与 changedFiles 探测"
fi

# ---- 5. push 安全边界 -------------------------------------------------------

# 无仓库(把仓库临时挪走)时 push 必须拒绝
mv "$REPO" "$TMP/repo-held"
rc=$(run_cli push --yes)
mv "$TMP/repo-held" "$REPO"
if [[ $rc -ne 0 ]]; then
  ok "无仓库时 push 拒绝"
else
  bad "无仓库时 push 拒绝"
fi

# 干净仓库(先清掉上面的未跟踪文件)的 push --yes 温和退出,不产生提交
rm -f "$REPO/local-change.txt"
base_head=$(git -C "$REPO" rev-parse HEAD)
rc=$(run_cli push --yes)
if [[ $rc -eq 0 && $(git -C "$REPO" rev-parse HEAD) == "$base_head" ]] \
  && grep -q '没有需要推送的改动' "$TMP/cli.out"; then
  ok "干净仓库 push --yes 温和退出"
else
  bad "干净仓库 push --yes 温和退出 (rc=$rc)"
fi

# ---- 6. 完整 push 链路(本地 bare remote,离线) ------------------------------

bare="$TMP/origin.git"
git init -q --bare -b main "$bare"
git -C "$REPO" remote set-url origin "$bare"
printf 'payload\n' >"$REPO/local-change.txt"
rc=$(run_cli push --yes --message "sync: test-host 2026-11-08 00:00")
if [[ $rc -eq 0 ]] && git --git-dir="$bare" cat-file -e main:local-change.txt 2>/dev/null \
  && [[ $(git -C "$REPO" status --porcelain | wc -l) -eq 0 ]] \
  && git -C "$REPO" log -1 --format=%s | grep -q '^sync: '; then
  ok "push --yes 提交并推送到本地 bare remote"
else
  bad "push --yes 完整链路 (rc=$rc): $(cat "$TMP/cli.err")"
fi

# 第二次 push(无新改动)应幂等
rc=$(run_cli push --yes)
if [[ $rc -eq 0 ]]; then
  ok "push 幂等"
else
  bad "push 幂等 (rc=$rc)"
fi

# ---- 7. 旧命令确实不可用 ----------------------------------------------------

rc=$(run_cli setup)
if [[ $rc -ne 0 ]]; then
  ok "omarsync setup 已不存在"
else
  bad "omarsync setup 已不存在"
fi

# ---- 8. doctor --------------------------------------------------------------

rc=$(run_cli doctor)
if grep -qE '^(✓|✗) ' "$TMP/cli.out"; then
  ok "doctor 输出体检行(rc=$rc)"
else
  bad "doctor 输出体检行"
fi

# ---- 9. 插件身份与 dist 体积 ------------------------------------------------

id=$(node -e 'const m=require(process.argv[1]); process.stdout.write(m.id+" "+m.name+" "+m.version)' "$ROOT/manifest.json")
if [[ $id == "io.github.lukebest.omarsync Omarsync 3.0.0" ]]; then
  ok "插件身份 3.0.0"
else
  bad "插件身份: $id"
fi

too_big=""
while IFS= read -r file; do
  size=$(wc -c <"$file")
  if (( size > 2097152 )); then
    too_big="$too_big $file($size)"
  fi
done < <(find "$ROOT/cli/dist" -name '*.js' -type f)
if [[ -z $too_big ]]; then
  ok "dist 单个文件不超过 2 MiB"
else
  bad "dist 超过 2 MiB:$too_big"
fi

printf '%d passed, %d failed\n' "$pass" "$fail"
[[ $fail -eq 0 ]]
