-- status --json 聚合与 status.json 落盘。
-- JSON schema 与原 bash 版完全一致(面板依赖),新增可选字段 miseConnected。
-- dirty 判定:元数据脏(meta.mirror_dirty)或 mise 有未保存/未发布的改动。

local common = require("common")
local exec = require("exec")
local json = require("json")
local trust = require("trust")
local meta = require("meta")
local mise = require("mise")

local M = {}

-- 本次进程是否已经写过 status.json(避免退出时的重复刷新)
M.written = false

-- 与 bash 版 read_counts 等价:返回 behind, ahead, remote_sha
-- 无法联系远程时返回 nil
local function read_counts(mirror, branch)
  local _, ls_ok, ls_code = common.git({ "-C", mirror, "ls-remote", "--exit-code", "--heads", "origin", branch }, { capture = true })
  if ls_code == 2 then
    return 0, 0, ""
  end
  if not ls_ok then
    return nil
  end
  if not select(2, common.git({ "-C", mirror, "fetch", "--quiet", "origin", branch }, { capture = true })) then
    return nil
  end
  local sha = common.git_out({ "-C", mirror, "rev-parse", "--verify", "refs/remotes/origin/" .. branch .. "^{commit}" })
  if not trust.is_full_sha(sha) then
    sha = nil
  end
  local head = common.git_out({ "-C", mirror, "rev-parse", "--verify", "--quiet", "HEAD" })
  if not head then
    -- 本地尚无提交
    local remote_count = 0
    if sha then
      remote_count = tonumber(common.git_out({ "-C", mirror, "rev-list", "--count", sha })) or 0
    end
    return remote_count, 0, sha or ""
  end
  if not sha then
    return 0, 0, ""
  end
  local behind = tonumber(common.git_out({ "-C", mirror, "rev-list", "--count", "HEAD.." .. sha })) or 0
  local ahead = tonumber(common.git_out({ "-C", mirror, "rev-list", "--count", sha .. "..HEAD" })) or 0
  return behind, ahead, sha
end

-- mise 侧是否有改动:跑一次 save(无变化是幂等 no-op),看是否产生新检查点。
-- 已保存但未发布的检查点属于边界情况:push 失败才会出现,下次 push 会发布。
local function mise_dirty()
  if not mise.available() or not mise.feature_ok() then
    return false
  end
  local saved = mise.save()
  return saved == true
end

-- 最近一次 mise 检查点改动的文件(dirty 时面板据此展示/用编辑器打开)。
-- 历史仓库里路径带 home/ 前缀,剥掉后相对于 $HOME。
local function changed_files()
  local repo = os.getenv("HOME") .. "/.local/state/mise/history/repo.git"
  if not exec.is_dir(repo) then return {} end
  local out = common.git_out({ "--git-dir=" .. repo, "show", "--name-only", "--format=", "HEAD" }) or ""
  local files, seen = {}, {}
  for line in out:gmatch("[^\n]+") do
    local rel = line:gsub("^home/", "")
    if rel ~= "" and not seen[rel] then
      seen[rel] = true
      files[#files + 1] = rel
      if #files >= 30 then break end
    end
  end
  return files
end

function M.collect()
  local st = {
    ghInstalled = false, loggedIn = false, user = "",
    repo = "", dotRepo = "", dotBranch = "dotfiles", branch = "main",
    initialized = false, dirty = false,
    behind = json.null, ahead = json.null,
    remoteCommit = "", pinnedCommit = "",
    remoteSigned = false, remoteSignature = "none", signerFingerprint = "",
    hasTrustedKeys = false, firstApply = false,
    lastPush = { host = "", time = "", omarchyVersion = "" },
    running = false, error = "",
    miseConnected = false,
    changedFiles = {},
  }

  if common.gh_installed() then
    st.ghInstalled = true
    if common.gh_logged_in() then
      st.loggedIn = true
      st.user = common.github_user() or ""
    end
  end
  st.repo = common.configured_repo()
  st.dotRepo = common.dot_repo_name()
  st.dotBranch = common.dot_branch()
  st.branch = common.configured_branch()
  if common.is_running() then
    st.running = true
  end
  if mise.available() then
    st.miseConnected = mise.origin_connected()
  end
  if common.mirror_ready() then
    st.initialized = true
    local mirror = common.mirror_dir()
    if not st.running then
      local dirty = meta.mirror_dirty(mirror)
      if not dirty then
        dirty = mise_dirty()
        if dirty then
          st.changedFiles = changed_files()
        end
      end
      st.dirty = dirty
      local behind, ahead, tip = read_counts(mirror, st.branch)
      if behind then
        st.behind = behind
        st.ahead = ahead
        if trust.is_full_sha(tip) then
          st.remoteCommit = tip
          if trust.trusted_keys_present() then st.hasTrustedKeys = true end
          local sig_state, sig_fp = trust.commit_signature_state(mirror, tip)
          st.remoteSignature = sig_state ~= "" and sig_state or "none"
          st.signerFingerprint = sig_fp
          if st.remoteSignature == "trusted" then
            st.remoteSigned = true
          end
          if trust.first_apply_available() then
            st.firstApply = true
          end
        end
      else
        st.error = "could not fetch origin"
      end
      if not select(2, common.git({ "-C", mirror, "symbolic-ref", "-q", "HEAD" }, { capture = true })) then
        local head = common.git_out({ "-C", mirror, "rev-parse", "--verify", "HEAD" })
        if trust.is_full_sha(head) then
          st.pinnedCommit = head
        end
      end
    end
    local meta_raw = common.read_file(mirror .. "/omarsync.json")
    if meta_raw then
      local data = json.decode(meta_raw)
      if type(data) == "table" then
        st.lastPush.host = common.display_token(type(data.host) == "string" and data.host or "")
        st.lastPush.time = common.display_time(type(data.pushedAt) == "string" and data.pushedAt or "")
        st.lastPush.omarchyVersion = common.display_token(
          type(data.omarchyVersion) == "string" and data.omarchyVersion or "")
      end
    end
  end
  return st
end

function M.write_json(st)
  local text = json.encode(st)
  common.mkdirp(common.state_dir())
  common.write_file(common.state_dir() .. "/status.json", text .. "\n")
  return text
end

function M.cmd_status(args)
  local as_json = false
  for _, a in ipairs(args) do
    if a == "--json" then
      as_json = true
    else
      common.die("unknown status option: " .. a)
    end
  end
  local st = M.collect()
  -- 两种模式都落盘本次采集结果:否则退出时的二次采集里 mise save
  -- 已经消费过改动,status.json 会错误地写成 dirty=false
  local text = M.write_json(st)
  M.written = true
  if as_json then
    io.write(text .. "\n")
    return 0
  end
  local github_state = "cli missing"
  if st.loggedIn then
    github_state = st.user
  elseif st.ghInstalled then
    github_state = "signed out"
  end
  common.log("github: " .. github_state)
  common.log("repo: " .. (st.repo ~= "" and st.repo or "<unset>") .. " (" .. st.branch .. ")")
  common.log("mirror: " .. (st.initialized and "ready" or "not initialized"))
  common.log("mise dot: " .. (st.miseConnected and "connected" or "not connected"))
  common.log("local changes: " .. (st.dirty and "yes" or "no"))
  common.log("behind: " .. tostring(st.behind) .. "  ahead: " .. tostring(st.ahead))
  if st.remoteCommit ~= "" then
    common.log("signature: " .. st.remoteSignature ..
      (st.signerFingerprint ~= "" and (" " .. st.signerFingerprint) or ""))
  end
  if st.lastPush.time ~= "" then
    common.log("last push: " .. st.lastPush.time .. " from " .. st.lastPush.host)
  end
  if st.error ~= "" then
    common.warn(st.error)
  end
  return 0
end

return M
