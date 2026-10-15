#!/usr/bin/env node
import { createCerebro } from "@visulima/cerebro";

import { executeDoctor } from "./commands/doctor";
import { executePull } from "./commands/pull";
import { executeStatus } from "./commands/status";

// Omarsync CLI(visulima 重构版)
// 核心思想:track 模式点对点配置同步;推之前手动存;拉之后先审阅再应用;本机保留决定权。
// 命令描述与注释一律使用中文。

const cli = createCerebro("omarsync", {
    packageName: "omarsync",
    packageVersion: "2.0.0",
});

cli.addCommand({
    name: "status",
    description: "显示同步状态(仓库、镜像、本机策略)",
    options: [
        {
            name: "json",
            type: Boolean,
            description: "以 JSON 输出(供状态栏面板读取)",
        },
    ],
    execute: ({ options }) => {
        executeStatus(options["json"] === true);
    },
});

cli.addCommand({
    name: "doctor",
    description: "依赖体检(git/rsync/node/mise/gh、镜像与 dotfiles 仓库)",
    execute: () => {
        process.exitCode = executeDoctor();
    },
});

cli.addCommand({
    name: "pull",
    description: "只抓取远程快照并钉住 commit,不写任何活文件(下一步用 apply 审阅)",
    execute: () => {
        executePull();
    },
});

// 后续阶段注册的命令(与旧版同名,面板接口不变):
//   login   GitHub 登录     init    初始化镜像
//   setup   一键装机引导
//   push    推前手动存 + 审阅后发布
//   apply   审阅 diff 后手动确认才写入
//   conflicts 用本机编辑器审阅并解决同步冲突
//   trust-key / scope-path / migrate

await cli.run();
