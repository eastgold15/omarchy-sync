# 新电脑同步指南

把一台 Omarchy 机器的完整环境搬到另一台新电脑的详细步骤与排查方法。

## 同步内容总览

Omarsync 使用**一个私有 GitHub 仓库** `<用户名>/omarchy-config`，数据走两条分支：

| 分支 | 内容 | 通道 |
|---|---|---|
| `dotfiles` | scope 里列出的所有配置文件（hypr、nvim、终端、omarchy 主题等） | mise dot |
| `main` | 软件包清单、`plugins.json`、本地插件快照、钩子、当前主题/壁纸 | 带签名的元数据提交 |

恢复时会自动处理：

- **配置文件**：按 `~/.config/omarsync/scope` 的条目，由 mise dot 整体拉回
- **官方/AUR 软件包**：安装缺失的显式安装包
- **Flatpak 应用**：按钉住的 commit 安装
- **shell 插件**：按 `plugins.json` 里钉死的 commit 克隆、校验、安装、按原状态启用
- **主题与壁纸**：恢复 apply 时记录的主题和壁纸
- **post-apply 钩子**：`~/.config/omarsync-hooks/post-apply.d` 里的脚本

> 插件、钩子等"可执行内容"只在**提交带可信签名**（或你明确信任签名者）时才会执行。
> 未签名的首次 apply 只写配置，跳过这些步骤——这是安全设计，不是故障。

## 前提条件

新电脑需要：

1. 已装好 Omarchy
2. 能登录同一个 GitHub 账号（对私有仓库 `omarchy-config` 有访问权）
3. 安装 Omarsync 插件：

```sh
omarchy plugin add https://github.com/lukebest/omarsync.git --enable
```

插件装好后，面板第一次扫描状态时会自动创建 `~/.local/bin/omarsync` 命令（Omarchy 已把该目录加入 PATH）。

缺少依赖（`nodejs`、`mise`、`github-cli`）可以在面板里点装，或手动：

```sh
omarchy pkg add nodejs mise github-cli
```

## 新机同步步骤

### 1. setup（初始化）

点击面板上的云图标 → **setup**（对应 `omarsync setup`）。这一步会：

- 安装缺失的依赖
- 登录 GitHub（`gh auth login`）
- 连接（或创建）私有仓库 `omarchy-config`
- 把 mise dot 指向该仓库的 `dotfiles` 分支，并**整体采用远程历史**——
  新机器永远不会先建本地基线，所以两边历史一定能合并

等价命令：

```sh
omarsync init
```

### 2. apply（应用快照）

初始化完成后，面板会显示远程最新提交的短 id。点 **apply**（对应 `omarsync apply --commit <sha>`）：

1. 弹出终端，先用编辑器打开自上次应用以来的 diff，并显示哪些文件、包和插件会变
2. **必须输入 y** 才真正写入；没有终端时直接拒绝
3. 写入前自动把现有文件备份到 `~/.local/state/omarsync/backup/<时间戳>/`（保留最近 5 份）
4. 依次执行：mise dot 拉取文件 → 恢复主题/壁纸 → 装缺失软件包 → 装插件 → 跑钩子 → 重载桌面。主题切换、`~/.config/omarchy/hooks` 和用户服务只在签名可信时发生；被排除的文件（例如 `*.bak.*`、`.env`）不会在接收端被删掉。

等价命令（sha 为面板显示的完整 40 位提交号）：

```sh
omarsync apply --commit <40位sha>
```

### 3. 关于签名信任

插件安装、post-apply 钩子、`~/.config/omarchy/hooks` 的恢复、在线主题切换和用户服务都属于"可执行内容"，只有提交带**可信签名**才会跑；否则只写配置文件。

**签名密钥在旧（push）机器上**，位置只有两种可能：

- `~/.ssh/id_ed25519` 存在且无密码 → 用它签名，公钥是 `~/.ssh/id_ed25519.pub`
- 否则 → 自动创建 `~/.config/omarsync/signing_key`，公钥是 `~/.config/omarsync/signing_key.pub`

在旧机器上跑 `omarsync push` 时终端会打印 `signing with ...`，以那个路径为准。

**大多数情况下你什么都不用做**：新机器第一次 apply 时，终端会提示是否信任这个签名者，确认一次，之后该密钥的提交就全自动通过。

需要手动信任时（比如想跳过首次确认），把旧机器的 `.pub` 文件拷到新机器（U 盘、scp 都行），然后：

```sh
# 路径换成你拷过来的实际位置，例如：
omarsync trust-key --pubkey ~/signing_key.pub
```

`apply --force` 或提交不受信任时：只写配置，**不装插件、不跑钩子、不恢复 Omarchy hooks、不切换主题、不启动用户服务**。

## 排查：apply 之后某个文件没出现

以 `~/.config/hypr/input.lua` 为例，按顺序在新机器上检查：

### ① 确认远程仓库里确实有该文件

```sh
gh api repos/<用户名>/omarchy-config/contents/home/.config/hypr?ref=dotfiles --jq '.[].name'
```

列表里没有 `input.lua` → 问题在**旧机器没推上去**，回旧机器执行：

```sh
mise dot status      # 看 ~/.config/hypr 是否 tracked、有无未保存改动
omarsync push
```

### ② 确认新机器 mise dot 已连接远程

```sh
mise dot status
```

- 显示 `Setup repository: ...omarchy-config.git`，分支是 `dotfiles`，且有文件列表 → 正常
- 提示没有 setup 仓库 → 重新跑 `omarsync init`
- 显示 `incoming change(s) pending` → 有改动还没拉下来，执行：

```sh
mise dot pull --take-remote-all
```

### ③ 确认该目录在新机器上被 track

```sh
mise dot paths | grep hypr
```

没有输出说明 track 条目没生效（scope 文件缺失或被改过）。检查：

```sh
cat ~/.config/omarsync/scope    # 应包含 .config/hypr
```

scope 正常后再执行 `mise dot pull --take-remote-all`，或直接重新 apply。

### ④ 拉取失败/有冲突时

```sh
mise dot conflicts                      # 查看冲突
mise dot pull --take-remote-all         # 全部以远程为准
```

### ⑤ 文件被覆盖错了？恢复备份

apply 前的旧文件都在：

```sh
ls ~/.local/state/omarsync/backup/
```

mise 自己也留了保护检查点，可以 `mise dot recover` 撤销。

## 常见问题

**Q: apply 后插件没装上？**
提交未受信任（未签名或密钥未登记）。见上文"关于签名信任"。

**Q: `~/.config/omarchy/plugins/` 下的插件源码不在 `dotfiles` 分支里？**
正常现象。插件目录本身是嵌套 git 仓库，mise dot 会跳过它们；它们由 `plugins.json` 按钉死的 commit 在 apply 时自动克隆安装。

**Q: 新机器 apply 后又想同步回旧机器？**
两台机器都正常 push/pull 即可。mise dot 历史是双向合并的，冲突时用 `mise dot conflicts` 处理。
