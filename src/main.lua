-- omarsync 入口:命令分发、usage、全局开关。
-- 由 bin/omarsync(bash wrapper,负责清洗环境)以 /usr/bin/lua 启动。

-- 模块搜索路径:src/ 目录本身
local src = arg and arg[0] and arg[0]:match("^(.*)/[^/]*$") or "."
package.path = src .. "/?.lua;" .. package.path

local common = require("common")
local cmds = require("cmds")
local status_mod = require("status")
local trust = require("trust")

local USAGE = [[
用法: omarsync <命令> [选项]

命令:
  status [--json]     显示登录信息、仓库,以及本机是否与远端有差异
  doctor              检查 git、rsync、lua、mise、gh 和本地镜像
  login               使用 GitHub CLI 登录(设备码,交互式)
  init [owner/name]   创建或克隆私有数据仓库,
                      并连接 mise dot 远端(omarchy-dotfiles)
  push [--quiet] [--notify]
                      用 mise dot 跟踪 scope 文件、保存检查点、
                      提交签名元数据并推送。--quiet 跳过通知
  trust-key <pub> [priv]
                      信任一个 SSH 签名密钥。push 会自动信任自己的密钥
  pull                拉取一次,并将镜像分离(detach)到那个确切的提交
  apply --commit <40位十六进制> [--no-packages] [--no-exec] [--trust-signer] [--force]
                      应用该提交。SHA 必须是你审查过的那个。
                      文件通过 mise dot pull 到达;软件包、插件、
                      post-apply 钩子、Omarchy hooks、主题切换和用户服务
                      仅在签名可信时执行,除非指定了 --no-exec 或 --force。
  setup               按需安装 mise/GitHub CLI,登录,并创建仓库
  sync [--quiet] [--notify]
                      先 push,再 pull
  migrate             把旧的 rsync 镜像仓库迁移到 mise dot 布局
  scope-path          打印本地 scope 文件路径

文件通过 mise dot 同步(track 模式;远端是 <github-user>/omarchy-dotfiles)。
签名元数据(软件包、插件、钩子、主题)保存在 <github-user>/omarchy-config。
设置 OMARSYNC_ORIGIN / OMARSYNC_DOT_ORIGIN 可使用非 GitHub 远端。
]]

-- 退出时刷新一次 status.json(面板通过它感知状态变化)
local function status_trap()
  if status_mod.written then return end
  local ok = pcall(function()
    local st = status_mod.collect()
    status_mod.write_json(st)
  end)
  if not ok then
    -- 状态刷新失败不影响主命令的退出码
  end
end

local function main(argv)
  local cmd = argv[1] or "status"
  local args = {}
  for i = 2, #argv do args[#args + 1] = argv[i] end

  local rc = 0
  if cmd == "-h" or cmd == "--help" or cmd == "help" then
    io.write(USAGE)
  elseif cmd == "status" then
    rc = status_mod.cmd_status(args)
  elseif cmd == "doctor" then
    rc = cmds.cmd_doctor()
  elseif cmd == "login" then
    rc = cmds.cmd_login()
  elseif cmd == "trust-key" then
    trust.cmd_trust_key(args)
  elseif cmd == "init" then
    rc = cmds.cmd_init(args)
  elseif cmd == "setup" then
    rc = cmds.cmd_setup()
  elseif cmd == "push" or cmd == "sync" then
    common.NOTIFY = true
    for _, a in ipairs(args) do
      if a == "--quiet" then
        common.QUIET = true
        common.NOTIFY = false
      elseif a == "--notify" then
        common.NOTIFY = true
      else
        common.die("unknown " .. cmd .. " option: " .. a)
      end
    end
    rc = cmds.cmd_push()
    if rc == 0 and cmd == "sync" then
      rc = cmds.cmd_pull()
    end
  elseif cmd == "pull" then
    rc = cmds.cmd_pull()
  elseif cmd == "apply" then
    rc = cmds.cmd_apply(args)
  elseif cmd == "migrate" then
    rc = cmds.cmd_migrate()
  elseif cmd == "scope-path" then
    rc = cmds.cmd_scope_path()
  else
    io.stderr:write(USAGE)
    common.die("unknown command: " .. cmd)
  end
  return rc or 0
end

common.require_tools()
local rc = main(arg)
status_trap()
os.exit(rc)
