import { createCerebro } from "@visulima/cerebro";

import { executeApply } from "./commands/apply";
import { executeDoctor } from "./commands/doctor";
import { executePush } from "./commands/push";
import { executeStatus } from "./commands/status";

// omarsync CLI —— 纯 mise deploy 架构的薄壳。
// 唯一真相源:~/Documents/GitHub/omarchy-config(普通私有 git 仓库)。
// 同步 = git;部署 = mise dot apply;本 CLI 只负责状态合成与流程编排。

const cli = createCerebro("omarsync", {
    packageName: "omarsync",
    packageVersion: "3.0.0",
});

cli.addCommand({
    name: "status",
    description: "聚合 git 与 mise dot 状态,落盘 status.json 供面板读取",
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
    name: "push",
    description: "回写 copy 改动,暂存并在终端审阅 diff,确认后提交推送",
    options: [
        {
            name: "yes",
            type: Boolean,
            description: "跳过确认(供面板自动推送使用)",
        },
        {
            name: "notify",
            type: Boolean,
            description: "推送完成后弹出桌面通知",
        },
        {
            name: "message",
            type: String,
            description: "自定义提交信息(默认按主机名和时间生成)",
        },
    ],
    execute: async ({ options }) => {
        if (options["notify"] === true) {
            process.env["OMARSYNC_NOTIFY"] = "1";
        }

        await executePush(options["yes"] === true, typeof options["message"] === "string" ? options["message"] : undefined);
    },
});

cli.addCommand({
    name: "apply",
    description: "快进拉取远程改动并执行 mise dot apply",
    options: [
        {
            // 兼容旧面板调用;新架构不钉 sha,值被忽略
            name: "commit",
            type: String,
            description: "已废弃,仅为兼容旧面板保留",
        },
        {
            // 兼容旧面板的自动化调用
            name: "yes",
            type: Boolean,
            description: "已废弃,仅为兼容旧面板保留",
        },
    ],
    execute: ({ options }) => {
        executeApply({
            commit: typeof options["commit"] === "string" ? options["commit"] : undefined,
            yes: options["yes"] === true,
        });
    },
});

cli.addCommand({
    name: "doctor",
    description: "体检:git/mise/node/gh/flock 与配置仓库、信任状态",
    execute: () => {
        process.exitCode = executeDoctor();
    },
});

await cli.run();
