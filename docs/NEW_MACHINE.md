# 新电脑接入指南

把一台新 Omarchy 机器纳入 omarchy-config 同步的完整步骤与排查方法。3.x 不再有 setup/签名信任流程,全程是普通 git 克隆加 mise 部署。

## 同步内容

| 内容 | 仓库位置 | 部署方式 |
|---|---|---|
| 全机共享 dotfiles(hypr、nvim、终端、omarchy 配置、`~/.local/bin` 脚本等) | `home/` | home 组,symlink-each 到 `~` |
| 机器专属配置(显示器、输入设备) | `machines/<hostname>/` | 同名机组,symlink-each |
| FlClash 偏好与代理订阅 | `flclash/` | copy |
| cc-switch 数据库(AI 代理商配置) | `cc-switch/` | copy |

**不同步的内容**:Omarchy 插件(`~/.config/omarchy/plugins`,由 omarchy 插件系统自管)、软件包、壁纸主题、系统服务。新机器需要的插件用 `omarchy plugin add` 单独安装。

## 前提条件

1. 已装好 Omarchy
2. 能访问私有 GitHub 仓库 `omarchy-config`(gh 登录或配置 git 凭据)
3. 安装 Omarsync 插件:

```sh
omarchy plugin add https://github.com/lukebest/omarsync.git --enable
omarchy pkg add nodejs mise github-cli
```

插件首次运行(面板状态扫描)会自愈创建 `~/.local/bin/omarsync` shim。

## 接入步骤

### 1. 克隆配置仓库并信任

```sh
git clone https://github.com/<owner>/omarchy-config.git ~/Documents/GitHub/omarchy-config
mise trust ~/Documents/GitHub/omarchy-config/mise.toml
```

仓库路径是约定值(`~/Documents/GitHub/omarchy-config`);需要偏离时用环境变量 `OMARSYNC_REPO` 覆盖。

### 2. 选择本机的组

编辑 `~/.config/mise/config.local.toml`:

```toml
[bootstrap]
dotfile_groups = ["home", "<这台机器的主机名>"]
```

- 组名必须在仓库 `mise.toml` 的 `[dotfile_groups.<name>]` 里有声明,否则 mise 警告。
- 不写这一段时,所有声明的组默认全部生效;写了就以这份列表为准(替换语义)。
- `[dotfiles]` 的 copy 条目与选组无关,每台机器始终生效。
- 新机器需要专属配置时,在仓库建 `machines/<hostname>/` 目录并在 `mise.toml` 声明同名单。

### 3. 部署

```sh
omarsync apply
# 等价于:git pull --ff-only && mise -C <repo> dot apply
```

symlink-each 会逐文件建立符号链接,已存在的真实目录递归 merge;copy 条目把数据库和偏好文件复制到位。`omarsync doctor` 应输出 9 项全绿。

### 4. 安装不同步的部分

- Omarchy 插件:按各插件文档 `omarchy plugin add`
- 系统软件包:按本机需要 `omarchy pkg add` / pacman
- 然后正常 `omarsync push` 上传本机新配置

## 排查

### apply 后某个文件没出现

按顺序检查:

```sh
omarsync doctor                          # 先看 9 项体检有没有红的
mise -C ~/Documents/GitHub/omarchy-config dot status --verbose
```

1. **源里有没有这个文件**:`git -C ~/Documents/GitHub/omarchy-config ls-files | grep <名称>`。没有就是旧机器没推上去,回旧机器 `omarsync push`。
2. **白名单拦截**:组启用了 `manifest = "git"`,未进 git 索引的文件不会部署。确认 `git ls-files` 能列出它。
3. **组没选上**:机器专属文件只在对应 `machines/<hostname>` 组被选中时部署,检查 `config.local.toml`。
4. **live 是真实目录挡住链接**:symlink-each 对已存在的真实目录递归 merge 而不是替换,进目录看内部文件是否已是指向仓库的符号链接。

### copy 文件被应用改写后没同步

copy 模式不回写。push 流程开头的 `mise dot add --changed` 负责回收,也可以手动先跑:

```sh
mise -C ~/Documents/GitHub/omarchy-config dot add --changed
mise -C ~/Documents/GitHub/omarchy-config dot status --verbose   # differs 应消失
omarsync push
```

### pull 被拒绝(非快进)

本机有提交而远程也前进了。在配置仓库里按普通 git 流程处理(rebase 或 merge),没有私有合并器:

```sh
cd ~/Documents/GitHub/omarchy-config
git fetch origin
git rebase origin/main
```

### 孤儿链接清理

源里删除文件后,live 的旧符号链接会标为 orphaned:

```sh
mise -C ~/Documents/GitHub/omarchy-config dot apply --prune --dry-run   # 先看计划
mise -C ~/Documents/GitHub/omarchy-config dot apply --prune             # 确认后执行
```

prune 只删 mise 自己建立的符号链接,不碰真实文件与目录。
