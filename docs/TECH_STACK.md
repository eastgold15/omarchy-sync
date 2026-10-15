# Omarsync CLI 重构技术栈

目标：把现有 `src/*.lua`（约 3400 行）+ `bin/omarsync`（bash wrapper）重构为
TypeScript CLI，全面使用 [Visulima 生态](https://visulima.com/llms.txt)。
同步内核仍交给 **mise dot**（子进程调用，不重新实现）；QML 面板接口
（`status --json`、子命令名）保持不变。

## 运行时

| 选项 | 说明 | 结论 |
|---|---|---|
| Node.js ≥ 22 | 最普遍，Omarchy 机器基本都有；`#!/usr/bin/env node` | **推荐** |




打包：使用bun包管理,不构建二进制.   `@visulima/packem` 打成单个 ESM 文件（`dist/omarsync.mjs`），
插件安装时复制进插件目录，不依赖用户机器装 npm 包。

## 依赖映射（Lua 模块 → visulima 包）

| 现有模块 | 职责 | 替换为 |
|---|---|---|
| `main.lua` / `cmds.lua` | 子命令分发、参数解析 | `@visulima/cerebro`（CLI 框架，自带 options/env/logger） |
| `common.lua` 日志 | log/warn/die、last.log | `@visulima/pail`（日志）+ `@visulima/colorize`（着色） |
| `common.lua` 文件/路径 | 读写、mkdirp、realpath | `@visulima/fs` + `@visulima/path` |
| `json.lua` | JSON 编解码 | `@visulima/fs` 的 readJson/writeJson（或原生 JSON） |
| `exec.lua` | 子进程、可信 PATH 解析 | `node:child_process`（visulima 无对应包）自写薄封装 |
| `apply.lua` 确认提示 | y/N 交互 | cerebro logger + `node:readline`（按 colorize 示例封装 confirm） |
| 错误输出 | 堆栈美化 | `@visulima/error` + `@visulima/ono`（致命错误渲染） |
| 状态/预览表格输出 | status、apply 预览 | `@visulima/tabular` / `@visulima/boxen`（可选，二期） |
| 长操作反馈 | push/pull 等待 | `@visulima/spinner`（可选，二期） |
| 日志脱敏 | 路径/令牌入日志 | `@visulima/redact`（可选） |

## 保持不变的部分

- **mise dot**：文件同步、历史、冲突解决全部仍是 `mise` 子进程
- **git/gh/omarchy 子进程**：可信目录解析逻辑（`/usr/bin` 等）原样移植
- **QML 面板**：`Panel.qml` / `BarWidget.qml` 只调 CLI，接口不变
- **安全模型**：签名提交、trusted-keys、plugins-skip、apply 前强制审查
- `scripts/self-test.sh`：端到端测试不变，只换 CLI 入口路径


- 即使这里保持不变 但这mise 要改为  track 模式,  做点对点配置同步，每台电脑推之前手动存，拉之后先审阅再应用，本机保留决定权。”

## 目录结构（草案）

```
cli/
  package.json          # @visulima/* 依赖
  tsconfig.json
  packem.config.ts
  src/
    index.ts            # createCerebro 入口
    commands/           # init/push/pull/apply/status/login/doctor/...
    lib/
      exec.ts           # 可信子进程封装
      scope.ts          # scope 解析与安全校验
      mise.ts           # mise dot 封装
      trust.ts          # 签名/信任
      plugins.ts        # 插件导出/安装/plugins-skip
      meta.ts           # 元数据采集
      apply.ts          # apply 编排 + 审查 diff
    types.ts
```

## 阶段划分

1. **脚手架**：`cli/` 初始化、packem 构建出可运行的空 CLI（status 只读版）
2. **核心移植**：common/exec/mise/scopemap/trust → status/push/pull 可用
3. **apply 链路**：meta/packages/plugins/hooks/apply 编排 + 审查 diff
4. **面板对接**：bin/omarsync 改为调 dist 产物，self-test 全绿
5. spinner/tabular/boxen 美化

- cli命令描述注释都使用中文

1. 运行时定  Bun
2. `cli/` 放本仓库
3. 直接做 tabular/boxen 的输出美化
