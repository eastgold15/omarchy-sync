# Omarsync

把 [Omarchy](https://omarchy.org) 机器的 dotfiles 同步到私有 GitHub 仓库,并在另一台机器上恢复。3.x 是一次彻底的架构重写:**普通 git 仓库做唯一真相源,[mise dot](https://mise.jdx.dev) 的 deploy 模式负责部署,Omarsync 本身只是编排流程和喂给状态栏的薄壳。**

## 架构

```
~/Documents/GitHub/omarchy-config(普通私有 git 仓库,main 分支)
├── mise.toml                 dotfile_groups 与 copy 条目的唯一定义处
├── home/                     home 组源树(dot_prefix:dot-config → .config)
│   ├── dot-config/...
│   └── dot-local/{bin,share}/...
├── machines/<主机名>/         机器专属组(如显示器、输入设备配置)
├── flclash/                  FlClash 偏好与代理订阅(copy 模式)
└── cc-switch/                cc-switch 数据库(copy 模式,含代理商凭据)
```

- **同步 = git。** 所有冲突都是普通 git 行级冲突,旧架构里 mise manifest 整字段三方合并导致的 enrollment conflict 整类问题不复存在。
- **部署 = `mise dot apply`。** `symlink-each` 逐文件把源树链接到 `~`;容器目录由 mise 创建,目录内每个文件各自是符号链接,已存在的真实目录会递归 merge。
- **机器差异用组表达,不用条件排除。** 每台机器在 `~/.config/mise/config.local.toml` 里选择自己的 `dotfile_groups`;机器专属配置放 `machines/<主机名>/`,不进 home 组。
- **会被应用原子重写的文件用 `copy` 而不是 symlink。** FlClash 偏好和 cc-switch 数据库由应用自己写,符号链接会被重写顶断;copy 条目不回写,每次 push 前由 `mise dot add --changed` 把 live 改动回收进源。
- **没有签名门、没有 track、没有 history、没有选择性推送。** 私有仓库的威胁模型下,git 本身的历史和访问控制已经足够。

## 命令

```sh
omarsync status [--json]   # 聚合 git 与 mise 状态,落盘 ~/.local/state/omarsync/status.json
omarsync push [--yes] [--notify] [--message <msg>]   # 回收 copy 改动 → add → 终端审阅 diff → commit → push
omarsync apply             # git pull --ff-only(拒绝隐式 merge)→ mise dot apply
omarsync doctor            # 体检:git/node/mise/gh/flock、仓库、origin、upstream、mise trust
```

`push` 默认在浮动终端里展示 `git diff --cached --stat`,按 y 才提交;`--yes` 跳过确认(面板自动推送使用)。默认提交信息是 `sync: <主机名> <YYYY-MM-DD HH:MM>`。`apply` 的 `--commit`/`--yes` 参数仅为兼容旧面板保留,值被忽略。

## 安装

```sh
omarchy plugin add https://github.com/lukebest/omarsync.git --enable
```

Omarchy 插件系统不会把插件的 `bin/` 加入 PATH,wrapper 第一次运行时会自愈创建 `~/.local/bin/omarsync` shim(只在自己创建的文件上更新,不覆盖同名文件)。

依赖:`git`、系统 `node`(≥22,`/usr/bin/node`)、`mise`、`gh`、`flock`。只装在用户目录里的 node 副本会被 wrapper 拒绝。

```sh
omarchy pkg add nodejs mise github-cli
```

## 新机器接入

1. 安装插件并准备好私有仓库的 GitHub 凭据(gh 登录或 git 凭据)。
2. 克隆配置仓库并信任:
   ```sh
   git clone https://github.com/<owner>/omarchy-config.git ~/Documents/GitHub/omarchy-config
   mise trust ~/Documents/GitHub/omarchy-config/mise.toml
   ```
3. 在 `~/.config/mise/config.local.toml` 选择本机的组:
   ```toml
   [bootstrap]
   dotfile_groups = ["home", "pori-linux"]
   ```
4. `omarsync apply`,或点面板上的 **apply**。

## 状态栏

- 左键打开面板,中键 push(弹终端审阅 diff),右键立即扫描。
- 图标只有一条规则:变红表示你需要做点什么。

| 图标 | 含义 |
| --- | --- |
| 变暗的云 | 配置仓库未就绪 |
| 普通的云 | 已同步 |
| 红色上箭头 | 本机有改动,需要 push |
| 红色下箭头 | 远程有新提交,需要 apply |
| 红色叹号 | 上次命令失败,**查看日志** 看细节 |
| 转动 | 正在检查或推送 |

扫描间隔、自动 push、桌面通知、界面语言都在面板的 **设置** 折叠区里。

## 安全模型

wrapper(`bin/omarsync`)是安全边界,CLI 业务逻辑全部在 `cli/src/` 的 TypeScript 里:

- 启动时 `env -i` 清洗环境,只保留白名单变量(HOME、LANG、GUI 套接字、代理等),固定 PATH 为 `/usr/bin:/bin:/usr/sbin:/usr/share/omarchy/bin`。
- `node` 必须来自不可写的系统目录;`GIT_TERMINAL_PROMPT=0`、`GH_PROMPT_DISABLED=1` 杜绝挂起式交互。
- `push`/`apply` 持 `flock` 写锁(`~/.local/state/omarsync/omarsync.lock`),整个进程生命周期互斥;`status`/`doctor` 不取锁。
- 代理变量按名透传,只用于 git/mise 的网络访问。

## 开发

```sh
scripts/dev-install.sh   # 打包 CLI 并复制到插件目录,然后重扫 shell
omarchy plugin validate .
qmllint -I "${OMARCHY_PATH:-/usr/share/omarchy}/shell" BarWidget.qml Panel.qml
```

CLI 开发:`cd cli && bun install` 后,`bun run dev -- <args>` 跑源码,`bun run typecheck` 类型检查,`bun run build` 用 packem 打包成单文件 `dist/index.js`(依赖全部内联,插件目录不需要 node_modules)。插件目录不允许符号链接,dev-install 是真实复制。

技术栈:[visulima](https://visulima.com) 生态(`@visulima/cerebro` 做 CLI、`@visulima/pail` 做日志)、ESM、TypeScript 原生。
