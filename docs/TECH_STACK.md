# 技术栈(3.x 纯 mise deploy 架构)

Omarsync 是 TypeScript 写的薄 CLI,外面包一层 bash wrapper。同步内核完全交给普通 git 与 `mise dot`,本项目不重新实现任何同步逻辑。

## 运行时与打包

| 项 | 选择 | 说明 |
|---|---|---|
| 语言 | TypeScript(纯 ESM) | 禁止 CJS 语法 |
| 运行时 | 系统 Node.js ≥ 22 | 只接受 `/usr/bin/node` 等不可写系统目录里的副本 |
| 包管理 | bun | 仅开发期需要 |
| 打包 | `@visulima/packem` | 单文件 `cli/dist/index.js`,依赖全部内联,插件目录不需要 node_modules |
| 分发 | 随插件仓库真实复制 | Omarchy 插件目录不允许符号链接 |

## 运行期依赖

只保留两个 Visulima 包,旧的 tabular/interactive 等已随功能裁剪移除:

| 包 | 职责 |
|---|---|
| `@visulima/cerebro` | CLI 框架:子命令注册、参数解析、help |
| `@visulima/pail` | 结构化日志(log/warn/die) |

外部命令(全部经可信 PATH 解析为子进程调用):

| 命令 | 用途 |
|---|---|
| `git` | 配置仓库的全部同步语义:status/fetch/pull --ff-only/add/commit/push |
| `mise` | `dot apply` 部署、`dot add --changed` 回收 copy 改动、`dot status` 体检 |
| `gh` | 登录态与 GitHub 用户信息(面板展示用) |
| `flock` | push/apply 的进程互斥锁 |
| `notify-send` | 可选的桌面通知 |

## 目录结构

```
cli/src/
  index.ts              # createCerebro 入口,4 个命令:status/push/apply/doctor
  commands/
    status.ts           # 聚合 git+mise 状态,落盘 status.json(面板 FileView 监听)
    push.ts             # adopt --changed → git add → diff 审阅 → commit → push
    apply.ts            # 脏仓拒绝 → pull --ff-only → mise dot apply
    doctor.ts           # 依赖与仓库体检,退出码 0/1
  lib/
    paths.ts            # 路径常量;OMARSYNC_REPO 可覆盖配置仓库位置
    repo.ts             # collectRepoState:纯 git 采集(porcelain/rev-list/parseRemote)
    mise.ts             # mise dot 薄封装,不含业务判断
    git.ts              # git 子进程封装,统一 -C 仓库与 core.hooksPath=/dev/null
    gh.ts               # gh 登录态探测
    exec.ts             # 可信 PATH 下的子进程解析与执行
    log.ts              # pail 实例与 die
    util.ts             # hostname/时间/TTY 确认等纯函数
bin/omarsync            # bash wrapper:环境清洗、shim 自愈、flock、系统 node 检查
BarWidget.qml           # 状态栏图标与 Process 调用
Panel.qml               # 弹出面板(薄壳,所有动作映射到 CLI 子命令)
Model.js                # 状态解析、图标态、中英双语文案
```

## 与 2.x 的根本差异

| 维度 | 2.x(track 架构) | 3.x(deploy 架构) |
|---|---|---|
| 真相源 | mise 私有 history + main 元数据分支 | 一个普通 git 仓库的 main 分支 |
| 文件部署 | `mise dot track` 原地跟踪 | `dotfile_groups` symlink-each + copy 条目 |
| 冲突模型 | manifest 整字段三方合并(enrollment conflict 频发) | git 行级合并,冲突语义与普通仓库一致 |
| 机器差异 | scope/push-ignore 条件排除 | `machines/<hostname>/` 组 + bootstrap 选组 |
| 安全门 | SSH 签名 + trusted-keys + 钉 sha | 私有仓库 + wrapper 环境清洗,无签名门 |
| CLI 命令面 | 12 个(setup/login/migrate/trust-key/...) | 4 个(status/push/apply/doctor) |
| 依赖数量 | 10+ Visulima 包 | 2 个(cerebro/pail) |
