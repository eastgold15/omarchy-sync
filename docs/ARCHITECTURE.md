# Omarsync 架构指南(给改代码的人)

面向第一次接手本仓库的开发者:进程怎么跑、数据在哪、一次 push/apply 经过哪些函数、哪些规则不能破坏。

用户视角看 [README.md](../README.md),流程细节看 [SYNC_FLOW.md](SYNC_FLOW.md),新机接入看 [NEW_MACHINE.md](NEW_MACHINE.md),选型看 [TECH_STACK.md](TECH_STACK.md)。

---

## 1. 一分钟理解这个项目

Omarsync 是 [Omarchy](https://omarchy.org) 的 dotfiles 同步插件,两层结构:

- **QML 状态栏小部件**:云图标 + 弹出面板,只做展示和按钮,所有动作映射到 CLI 子命令。
- **TypeScript CLI**:4 个命令 `status`/`push`/`apply`/`doctor`,打包成单文件由系统 node 执行。

3.x 的核心思想:

> **一个普通私有 git 仓库是唯一真相源。git 负责同步,`mise dot apply` 负责部署,CLI 只做流程编排和状态聚合。**

2.x 的 track/history/SSH 签名门/选择性推送已全部删除。私有仓库的威胁模型下,git 自身的历史与访问控制就是安全边界。

### 1.1 三个组件

```
┌────────────────────┐     git(push/pull --ff-only)     ┌──────────────────┐
│  omarchy-config    │ ◄──────────────────────────────► │  GitHub 私有仓库  │
│  普通 git 工作区    │                                   │  唯一分支 main    │
│  + mise.toml       │                                  └──────────────────┘
└─────────┬──────────┘
          │ mise dot apply(symlink-each / copy)
          ▼
┌────────────────────┐
│  live 配置(~ 下)   │
└────────────────────┘
          ▲
          │ 子进程(git/mise/gh/flock)
┌─────────┴──────────┐
│  omarsync CLI      │ ◄── Process/浮动终端 ── QML 面板
│  + bash wrapper    │
└────────────────────┘
```

## 2. 数据布局

### 2.1 配置仓库(`~/Documents/GitHub/omarchy-config`,可用 `OMARSYNC_REPO` 覆盖)

| 路径 | 角色 |
|---|---|
| `mise.toml` | 两个 `dotfile_groups`(home、机器组)与 3 个 copy 条目的唯一定义处 |
| `home/dot-config`、`home/dot-local` | home 组源树,`dot_prefix` 把 `dot-` 映射为 `.` |
| `machines/<hostname>/` | 机器专属组源树 |
| `flclash/`、`cc-switch/` | copy 模式源(应用会原子重写,不能 symlink) |
| `.gitignore` | 排除 omarchy 插件安装态、`*.bak*`、字节码、`*.lock` |

两组都启用 `manifest = "git"`:**部署集 = `git ls-files`**,未跟踪文件即使物理躺在源目录里也不可部署。

### 2.2 live 侧的部署形态

symlink-each 不是整目录软链,而是**逐文件**建链:

- mise 创建容器目录(如 `~/.config/foot/`),目录内每个文件是指向源的符号链接。
- 目标已存在真实目录时**递归 merge**(进目录继续逐文件处理),不替换目录本身。
- 因此 `~/.config/omarchy/plugins` 这类安装态真实目录永远不会被组接管——这也是插件不入库仍能与部署共存的原因。
- copy 条目在 live 是真实文件;应用改写后源不会自动更新,靠 push 前的 `mise dot add --changed` 回收。
- 源文件被删除后,live 旧链接标记为 orphaned,`dot apply --prune` 只清理 mise 自己建的符号链接,不碰真实文件。

### 2.3 状态目录(`~/.local/state/omarsync/`,插件身份不变所以路径不变)

| 文件 | 写入者 | 消费者 |
|---|---|---|
| `status.json` | `status` 命令及 push/apply 结尾的 `refreshStatusFile()` | 面板 FileView 实时监听 |
| `last.log` | pail 日志 | 面板"查看日志" |
| `omarsync.lock` | wrapper 的 flock | 写操作互斥 |

## 3. 代码分层

```
bin/omarsync                 安全边界(见第 5 节),不含业务逻辑
cli/src/index.ts             cerebro 注册 4 命令
cli/src/commands/
  status.ts                  collect() 聚合 → writeJson 落盘
  push.ts                    adopt → add → 审阅 → commit → push
  apply.ts                   脏仓拒绝 → ff-only pull → mise dot apply
  doctor.ts                  依赖/仓库/信任体检,0/1 退出码
cli/src/lib/
  repo.ts                    唯一的 git 状态采集器,纯函数式读 git 输出
  mise.ts                    mise dot 三子命令的薄封装,失败语义交给调用方
  git.ts / gh.ts / exec.ts   可信 PATH 下的子进程
  paths.ts                   路径常量(单点)
  util.ts / log.ts           纯函数与日志
BarWidget.qml / Panel.qml    薄壳;Model.js 管 schema 兼容与双语文案
```

依赖方向:commands → lib,lib 之间平级。面板依赖的 JSON 字段名是**对外契约**,改字段名必须同步 `Model.js` 与 `scripts/self-test.sh`。

### 3.1 status schema 的兼容位

签名门删除后,面板旧版的信任 UI 靠以下固定值自然关闭,不要删字段:

```ts
remoteSigned: true,
remoteSignature: "trusted",
hasTrustedKeys: true,
firstApply: false,
pinnedCommit: "",
signerFingerprint: "",
```

`remoteCommit` 必须是 40 位 sha 或空串(Panel.qml 用正则判定 canApply)。

## 4. 关键流程的函数级路径

**push**(`commands/push.ts`):
`collectRepoState()` 守卫 → `mise.adoptChanged()`(失败仅 warn)→ `git add -A` → 空暂存温和退出 → `diff --cached --stat` → 非 yes 时 `confirm()` → commit(默认消息 `sync: <host> <时间>`)→ 有 upstream 用 `push`,否则 `push -u origin main` → `refreshStatusFile()`。

**apply**(`commands/apply.ts`):
`collectRepoState()` 发现 dirty 即 die → behind=0 跳过 pull → `git pull --ff-only`(分叉即失败,绝不隐式 merge)→ `mise.dotApply()`。

**status**(`lib/repo.ts`):
无 `.git` 直接返回未初始化;有 upstream 才 fetch,fetch 失败置 `error` 并把计数归零,本地视角照常输出——网络故障不亮假灯。

## 5. 安全模型与不可破坏的不变量

1. **wrapper 是唯一入口边界**:`env -i` 清洗后只放行白名单变量;PATH 钉死 `/usr/bin:/bin:/usr/sbin:/usr/share/omarchy/bin`;node 必须位于不可写系统目录。
2. **写操作持锁**:push/apply 经 wrapper 取 flock 非阻塞锁;status/doctor 只读不取锁。
3. **禁止隐式合并**:apply 只接受 ff-only;push 走普通 git,冲突交给人。
4. **无终端不挂起**:`GIT_TERMINAL_PROMPT=0`、`GH_PROMPT_DISABLED=1`;面板的自动 push 只用 `--yes`。
5. **白名单兜底**:`manifest = "git"` 让运行态垃圾物理上不可部署;`.gitignore` 是第二道防线。
6. **prune 只删符号链接**:mise 与本项目都不得删除 live 的真实文件/目录。
7. **copy 回收失败不阻塞**:`adoptChanged` 失败只 warn,普通配置提交不能被一个 copy 条目卡死。

## 6. 面板与 CLI 的契约

- 面板用 `Process` 以清洗环境调用 wrapper,或用浮动终端跑交互式 push/apply。
- `status --json` 同时输出 stdout 并落盘;面板 FileView 监听落盘文件,Process stdout 是兜底。
- 面板按钮名与 CLI 子命令一一对应;`apply --commit/--yes` 是废弃兼容参数,CLI 接收但忽略,移除前先确认面板不再传。
- 图标四态在 `Model.js/iconState`:未就绪(暗云)、behind(红下箭头)、dirty/ahead(红上箭头)、失败(红叹号)。

## 7. 测试

`scripts/self-test.sh` 用临时 HOME 做全离线冒烟(16 项):命令面、status schema 与兼容位、git 状态采集、https/ssh remote 解析、push 完整链路(本地 bare remote)、旧命令移除、doctor、dist 体积(≤2 MiB)。新增命令或改 schema 时先更新它。
