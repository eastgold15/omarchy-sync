-- mise dot 的封装:track/untrack/exclude/save/sync/pull/status/history。
-- 文件同步的全部传输都由 mise 负责(track 模式,原地跟踪,不建符号链接)。

local common = require("common")
local exec = require("exec")
local json = require("json")
local proxy = require("proxy")

local M = {}

local HOME = os.getenv("HOME")

function M.available()
  return exec.resolve_tool("mise") ~= nil
end

-- mise dot 功能探测:status -J 能跑通即可
function M.feature_ok()
  local bin = exec.resolve_tool("mise")
  if not bin then return false end
  local _, ok = exec.capture(bin, { "dot", "status", "-J" })
  return ok
end

local function mise(args, opts)
  local bin = exec.resolve_tool("mise") or common.die("mise is not installed. Run: omarchy pkg add mise")
  opts = opts or {}
  local env = proxy.assignments()
  if opts.env then
    for _, item in ipairs(opts.env) do
      env[#env + 1] = item
    end
  end
  local full = { "dot", table.unpack(args) }
  if opts.capture then
    local cap = {}
    for key, value in pairs(opts) do
      cap[key] = value
    end
    cap.env = env
    return exec.capture(bin, full, cap)
  end
  return exec.run(bin, full, env)
end

-- status -J,返回解码后的 table;失败返回 nil
function M.status()
  local out, ok = mise({ "status", "-J" }, { capture = true })
  if not ok then return nil end
  return json.decode(out)
end

-- paths -J,返回 { entries=..., exclude=... };失败返回 nil
function M.paths()
  local out, ok = mise({ "paths", "-J" }, { capture = true })
  if not ok then return nil end
  return json.decode(out)
end

-- 已跟踪的根路径集合(rel 相对 $HOME,不带 ~/ 前缀)
function M.tracked_rels()
  local result = {}
  local data = M.paths()
  if not data or type(data.entries) ~= "table" then return result end
  for _, e in ipairs(data.entries) do
    if type(e.path) == "string" then
      local rel = e.path:gsub("^~/", "")
      result[rel] = true
    end
  end
  return result
end

-- 当前全局排除 glob 列表
function M.current_excludes()
  local result = {}
  local data = M.paths()
  if not data or type(data.exclude) ~= "table" then return result end
  for _, g in ipairs(data.exclude) do
    if type(g) == "string" then result[#result + 1] = g end
  end
  return result
end

-- track 一个路径(幂等;不存在的位置也能 track,probe 已验证)
function M.track(rel)
  local _, ok = mise({ "track", "-y", "~/" .. rel }, { capture = true })
  return ok
end

function M.untrack(rel)
  local _, ok = mise({ "untrack", "~/" .. rel }, { capture = true })
  return ok
end

function M.exclude_add(glob)
  local _, ok = mise({ "exclude", glob }, { capture = true })
  return ok
end

-- include 即移除一条排除规则
function M.exclude_del(glob)
  local _, ok = mise({ "include", glob }, { capture = true })
  return ok
end

-- 保存检查点。返回 true(有新检查点)/false(无变化);失败返回 nil + 输出
function M.save()
  local out, ok = mise({ "save" }, { capture = true, merge_stderr = true })
  if not ok then return nil, out end
  -- 输出含 "nothing changed" 表示无新检查点
  if out:find("nothing changed", 1, true) then
    return false
  end
  return true
end

-- 最新检查点的 tree.snapshot(git 树哈希,跨机稳定);失败返回 nil
function M.head_snapshot()
  local out, ok = mise({ "history", "ls", "-J" }, { capture = true })
  if not ok then return nil end
  local data = json.decode(out)
  if type(data) ~= "table" or type(data[1]) ~= "table" then return nil end
  local tree = data[1].tree
  if type(tree) == "table" and type(tree.snapshot) == "string" then
    return tree.snapshot
  end
  return nil
end

local function norm_origin(url)
  if type(url) ~= "string" then return "" end
  return url:gsub("/+$", ""):gsub("%.git$", "")
end

-- 是否已连接 origin。新版 mise 把地址放在 status -J 的 history.sync.origin;
-- 旧版只在文本里写 "Setup repository:"。两种都认。
function M.origin_connected()
  local origin = M.origin_url()
  return origin ~= ""
end

function M.origin_url()
  local data = M.status()
  if type(data) == "table" and type(data.history) == "table"
    and type(data.history.sync) == "table" then
    local origin = data.history.sync.origin
    if type(origin) == "string" then return origin end
    return ""
  end
  local out = mise({ "status" }, { capture = true })
  if type(out) ~= "string" then return "" end
  local line = out:match("Setup repository: ([^\n]+)")
  if line and not line:find("^none") then return line end
  local repo = out:match("Repository\n%s*([^\n]+)")
  if repo and not repo:find("^none") then return repo end
  return ""
end

function M.origin_branch()
  local data = M.status()
  if type(data) == "table" and type(data.history) == "table"
    and type(data.history.sync) == "table" then
    local branch = data.history.sync.branch
    if type(branch) == "string" then return branch end
  end
  return ""
end

-- 地址和分支都对上才算已经连好。换仓库或换分支时要重连。
function M.origin_matches(url, branch)
  if norm_origin(M.origin_url()) == "" or norm_origin(M.origin_url()) ~= norm_origin(url) then
    return false
  end
  local got = M.origin_branch()
  if branch and branch ~= "" and got ~= "" and got ~= branch then
    return false
  end
  return true
end

-- 接收机在 fetch 之前调用。已经连到同一地址和分支时什么都不做。
-- 只写入连接,不 reconcile、不 save、不 push,避免本地基线和远程历史变成 unrelated。
function M.connect(url, branch)
  if type(url) ~= "string" or url == "" then
    return false, "metadata repository is not configured"
  end
  if M.origin_matches(url, branch) then
    return true, nil
  end
  return M.origin_set(url, branch)
end

-- 连接 origin(非交互)。用 manual,避免第一次发布失败时连连接记录都不留下。
function M.origin_set(url, branch)
  local out, ok = mise({
    "origin", "set", url, "--branch", branch or "main", "--sync", "manual", "-y",
  }, { capture = true, merge_stderr = true })
  return ok, out
end

-- 发布 + 抓取;fetch_only=true 时只抓取。
-- mise 会把快捷键一类的字符串当成密钥而拒绝整次发布;私有仓库仍要发出去。
function M.sync(fetch_only)
  local args = { "sync" }
  if fetch_only then args[#args + 1] = "--fetch-only" end
  local out, ok = mise(args, { capture = true, merge_stderr = true })
  if ok or fetch_only or type(out) ~= "string" or not out:find("allow-plaintext-history", 1, true) then
    return ok, out
  end
  common.warn("mise blocked publication because a saved version looks like a secret; publishing the private history anyway")
  args[#args + 1] = "--allow-plaintext-history"
  return mise(args, { capture = true, merge_stderr = true })
end

-- pull:把远程共享内容写进活文件。opts: dry_run / take_remote_all
function M.pull(opts)
  opts = opts or {}
  local args = { "pull", "-y" }
  if opts.take_remote_all then args[#args + 1] = "--take-remote-all" end
  if opts.dry_run then args[#args + 1] = "--dry-run" end
  if opts.capture then
    return mise(args, { capture = true, merge_stderr = true })
  end
  return mise(args)
end

-- 未保存的本地编辑数量(status -J 的 edits 数组;实测 save 前恒为空,
-- 真正可靠的探测是跑一次 save 看是否产生新检查点,见 scopemap/status)
function M.unsaved_edits()
  local data = M.status()
  if not data or type(data.edits) ~= "table" then return 0 end
  return #data.edits
end

return M
