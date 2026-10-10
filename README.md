# Omarsync

把一台 [Omarchy](https://omarchy.org) 机器的整体环境同步到私有 GitHub 仓库,并在另一台机器上恢复。状态栏图标可以 push 和 pull;同样的功能在终端里都有对应命令——**面板按钮的名字就是 CLI 子命令**(`setup` / `push` / `apply`)。

文件同步由 **[mise dot](https://mise.jdx.dev)** 负责:Omarsync 用 `mise dot track` 跟踪配置目录(文件留在原地,不做符号链接),保存历史检查点,并发布到私有 dotfiles 仓库。mise 做不了的事——软件包清单、钉住 commit 的 Flatpak、shell 插件、post-apply 钩子、信任/签名门槛——都放在 Omarsync 的签名元数据仓库里。

使用两个私有仓库:

- `<github用户名>/omarchy-config` — 签名元数据:软件包清单、`plugins.json`、本地插件快照、钩子、当前主题/壁纸,以及 `omarsync.json`(记录 push 时的 mise 历史头)。
- `<github用户名>/omarchy-dotfiles` — mise dot 的远端,保存真正的文件历史。

Omarsync 会记录:

- `~/.config/omarsync/scope` 里列出的目录(默认包括 `~/.config/omarchy`、`~/.config/hypr`,以及存在的终端/Neovim/btop/lazygit 配置),由 mise 原地跟踪
- 当前主题名和壁纸
- 显式安装的官方/AUR 软件包,以及钉住安装时 commit 的用户 Flatpak 应用。没有下载地址的 remote 会被记录并跳过
- 第三方 shell 插件。有 https 远端的插件按 commit 记录、恢复时按该 commit 克隆;没有远端的插件整体复制进快照。Omarsync 自己不复制。插件永远不经 mise 跟踪——可执行代码只走签名元数据通道
- `~/.config/omarsync-hooks/post-apply.d` 里的 post-apply 钩子

## 安装

```sh
omarchy plugin add https://github.com/lukebest/omarsync.git --enable
```

Omarchy 插件系统不会把插件的 `bin/` 加入 PATH,所以 CLI 会自己装一个 shim:wrapper 第一次运行时(装好后面板扫描状态时)创建 `~/.local/bin/omarsync`,该目录在 Omarchy 里本就在 PATH 上。已存在且不是 Omarsync 创建的同名文件不会被覆盖。

依赖:`git`、`rsync`、系统的 `lua` 和 `mise`(`/usr/bin/lua`、`/usr/bin/mise`),以及 `/usr/bin/gh`。只装在用户目录里的副本会被忽略。缺依赖可以让面板安装,或手动:

```sh
omarchy pkg add lua mise github-cli
```

## 第一次同步

1. 点状态栏云图标,点 **setup**(对应 `omarsync setup`)。它会装缺失的依赖、登录 GitHub、创建两个私有仓库,并把 `mise dot` 连到 dotfiles 仓库。
2. 点 **push**(对应 `omarsync push`)。元数据提交会签名:push 优先使用无密码的 `~/.ssh/id_ed25519`;否则会创建 `~/.config/omarsync/signing_key` 并在本机信任它(私钥不出本机)。文件用 `mise dot save` 存检查点,用 `mise dot sync` 发布。

命令结束后状态栏立即刷新,不需要右键扫描。打开面板本身不会扫描。

在另一台机器上:装插件 → 点 **setup** → 点 **apply**。init 会整体采用远程 mise 历史(绝不先建本地基线,所以两边历史永远能合并)。apply 会先展示改动预览、询问后才写入。带可信签名的提交可以安装缺失插件、跑钩子;未签名的首次 apply 或 `apply --force` 只写配置、跳过这些可执行步骤;`--no-exec` 即使签名可信也跳过。

面板显示短 commit id。**apply** 只针对那个确切的快照运行,运行前会在终端里显示预览。

apply 覆盖任何文件之前,会把现有文件复制到 `~/.local/state/omarsync/backup/<时间戳>/`,保留最近 5 份。另外 `mise dot pull` 自己会留保护检查点,支持撤销。

新机器的详细步骤与排查方法见 [docs/NEW_MACHINE.md](docs/NEW_MACHINE.md)。

## 签名与 trust-key

push 时用哪把密钥签名,取决于本机情况:

- `~/.ssh/id_ed25519` 存在且无密码 → 用它,公钥是 `~/.ssh/id_ed25519.pub`
- 否则 → 自动创建 `~/.config/omarsync/signing_key`,公钥是 `~/.config/omarsync/signing_key.pub`

push 时终端会打印 `signing with ...`,以那个路径为准。**大多数情况下不需要手动 trust-key**:新机器首次 apply 时会提示是否信任签名者,确认即可。需要手动信任时,把上面那个 `.pub` 文件拷到新机器(U 盘、scp 均可),然后:

```sh
omarsync trust-key ~/.config/omarsync/signing_key.pub   # 路径换成你拷过来的实际位置
```

## 状态栏

- 左键打开面板
- 中键 push
- 右键刷新状态
- 未登录时图标变暗;命令运行中转动;有本地改动待 push 时显示圆点

**扫描改动**默认每小时一次。同一个菜单可设 15 分钟、30 分钟、6 小时、24 小时,或关闭定时扫描。**立即扫描**或右键图标会立刻检查。自动 push 跟随 **Auto push** 间隔(分钟),`0` 为关闭;从面板开启后默认 30 分钟。

## 命令行

```sh
omarsync login
omarsync setup
omarsync init [owner/name]
omarsync push
omarsync trust-key <公钥> [私钥]
omarsync pull
omarsync apply --commit <40位sha> [--no-packages] [--no-exec] [--force]
omarsync migrate
omarsync status
omarsync doctor
```

`push --quiet` 跳过桌面通知;静默 push 仍要通知时加 `--notify`。面板上的 Notify 开关控制这个行为。

`migrate` 升级旧安装:元数据仓库里还有 `home/` 文件镜像的旧布局,改为通过 mise 发布文件并从仓库删除 `home/`(旧内容仍可从 git 历史找回)。

## 同步哪些文件

上传哪些文件只由本机的 `~/.config/omarsync/scope` 决定,可从面板编辑。同步仓库里的同名 scope 文件会被忽略(包括 `git pull` 之后),push 时会把它从快照里移除。每台机器各管各的 scope;远程改动无法让本机开始上传新路径。

```
.config/omarchy | plugins/,*.bak.*,*.mp4,*.mkv,*.webm,*.mov,*.avi,*.m4v
.config/hypr | *.bak.*
.config/nvim
.config/btop
.config/lazygit
.config/autostart
.local/bin | agent,cursor,cursor-agent
.local/share/applications | mimeinfo.cache
.local/share/icons/hicolor | icon-theme.cache
```

路径相对于 `$HOME`。`|` 后面是逗号分隔的排除模式,会转换为 mise 的排除 glob。不存在的路径会被跳过。删掉某行就停止跟踪该目录(mise 保留已有历史)。会包含 `.ssh`、`.config/gh`、`.config/git`、`.gnupg`、`.config/doubao-murmur`、`.var`、`.config/mise` 或 mise 状态目录、密钥文件、omarsync 信任目录的路径会被拒绝。

钩子不是 scope 条目。把可执行脚本放进 `~/.config/omarsync-hooks/post-apply.d/`。apply 会把它们复制进快照;提交可信时,文件写完后在终端里执行。`examples/hooks/10-murmur.sh` 会重新应用 Doubao Murmur 补丁,F9 读不到输入设备时用 sudo 装 udev 规则。`~/.config/doubao-murmur` 下的会话 cookie 不同步。

## apply 的行为

- 先备份各 scope 路径下的现有文件,然后 `mise dot pull --take-remote-all` 写入远程版本。与旧的 rsync 镜像不同:被排除同步的文件(如 `*.bak.*`)在接收端**不会**被删除——mise 只写它跟踪的文件。
- apply 不会动 `~/.config/omarchy/plugins`。该目录不在跟踪范围内,omarsync 和其他已装插件都会保留。
- apply 只解析一次远程分支,分离(detach)检出那个完整 commit,并在改动任何东西之前对照 `~/.config/omarsync/trusted-keys` 检查签名。命令必须指定同一个 40 位 id。没有可信密钥的机器,首次 apply 可以使用未签名提交;提交已签名时则钉住该签名者。之后的 apply 要求可信签名。`--force` 强行应用该 commit,且不把签名密钥加进信任文件。
- 签名快照里的官方软件包用 `omarchy pkg add` 安装(走 Arch 签名仓库)。用户 Flatpak 应用按记录的 remote 安装后移动到记录的 commit;缺 Flathub 用户 remote 时自动添加。没有下载地址的 remote(如被禁用的本地源)对应的应用会跳过。AUR 包只打印名字,Omarsync 不跑 `yay`。
- 签名快照里缺失的插件会被安装:https 插件按记录的 commit 克隆检出;无远端的插件从快照复制。每个插件在移入 `~/.config/omarchy/plugins` 前都会校验。Omarsync 不安装自己的目录。`--no-exec`、未签名的首次 apply、`--force` 都会跳过这步。
- 两台机器改了同一个文件时,apply 以远程为准(`--take-remote-all`)。push 报 mise 冲突时,用 `mise dot conflicts`(或 `mise dot pull --take-remote-all` / `--keep-local`)解决后再 push。
- `omarsync.json` 把 push 时的 mise 历史头记为 `miseHead`(仅留档取证;接收机本地历史头合法地不同,所以不做钉死校验)。

## 权限

本插件在 Omarchy shell 里以你的用户身份非沙箱运行。自动状态和 push 用清空的环境和固定 PATH 启动 CLI。CLI 是 Lua(系统 `/usr/bin/lua`),外面包一层薄薄的 bash wrapper,只从可信系统目录调用 `git`、`rsync`、`mise`、`gh` 和 Omarchy 工具。apply 可以覆盖配置、重载 Hyprland、用 sudo 装官方软件包。启用前请审查仓库。

`OMARSYNC_ORIGIN` 和 `OMARSYNC_DOT_ORIGIN` 可以把 git 和 mise 指向非 GitHub 远端。那是开发用的钩子;面板流程走 GitHub。

## 卸载

```sh
omarchy plugin remove io.github.lukebest.omarsync
```

卸载插件不会删除 `~/.local/state/omarsync`、mise 跟踪配置或 GitHub 仓库。

## 开发

```sh
scripts/dev-install.sh
omarchy plugin enable io.github.lukebest.omarsync
scripts/self-test.sh
omarchy plugin validate .
qmllint -I "${OMARCHY_PATH:-/usr/share/omarchy}/shell" BarWidget.qml Panel.qml
```

`scripts/dev-install.sh` 把本目录复制到 `~/.config/omarchy/plugins/io.github.lukebest.omarsync` 并让 shell 重新扫描。插件目录不允许符号链接,所以是真实复制。

`scripts/self-test.sh` 用本地裸仓库和假 HOME 跑完整端到端测试:签名 push、脏检测、双机 apply、冲突、信任策略(TOFU、未签名、陌生签名者、`--force`)、scope 投毒、禁用路径、删 scope 后 untrack、插件与钩子、密码密钥回退、旧镜像迁移。
