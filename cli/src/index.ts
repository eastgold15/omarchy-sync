#!/usr/bin/env node
import { createCerebro } from "@visulima/cerebro";

import { executeApply } from "./commands/apply";
import { executeConflicts } from "./commands/conflicts";
import { executeDoctor } from "./commands/doctor";
import { executeInit } from "./commands/init";
import { executeLogin } from "./commands/login";
import { executeMigrate } from "./commands/migrate";
import { executePull } from "./commands/pull";
import { executePush } from "./commands/push";
import { executeSetup } from "./commands/setup";
import { executeStatus } from "./commands/status";
import { die } from "./lib/log";
import { ensureLocalScope } from "./lib/scope";
import { cmdTrustKey } from "./lib/trust";
import { paths } from "./lib/paths";

// omarchy.sync CLI(visulima 重构版)
// 核心思想:track 模式点对点配置同步;推之前手动存;拉之后先审阅再应用;本机保留决定权。
// 命令描述与注释一律使用中文。

const cli = createCerebro("omarchy.sync", {
    packageName: "omarchy.sync",
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

cli.addCommand({
    name: "push",
    description: "手动存检查点,展示元数据与文件 diff,确认后签名并发布",
    options: [
        {
            name: "yes",
            type: Boolean,
            description: "跳过发布确认(供面板自动推送使用)",
        },
    ],
    execute: async ({ options }) => {
        await executePush(options["yes"] === true);
    },
});

cli.addCommand({
    name: "login",
    description: "登录 GitHub(浏览器流程)",
    execute: () => {
        executeLogin();
    },
});

cli.addCommand({
    name: "init",
    description: "初始化:创建/连接元数据仓库与 dotfiles 仓库",
    options: [
        {
            name: "repo",
            type: String,
            description: "仓库名,形如 owner/name(默认 <你>/omarchy-config)",
        },
    ],
    execute: ({ options }) => {
        executeInit(typeof options["repo"] === "string" ? options["repo"] : undefined);
    },
});

cli.addCommand({
    name: "setup",
    description: "一键装机引导:装依赖、登录 GitHub、初始化仓库",
    execute: () => {
        executeSetup();
    },
});

cli.addCommand({
    name: "migrate",
    description: "老格式迁移:home/ 镜像目录搬到 mise dot 历史",
    execute: () => {
        executeMigrate();
    },
});

cli.addCommand({
    name: "apply",
    description: "审阅自上次应用以来的全部更改,确认后才写入(需要 --commit)",
    options: [
        {
            name: "commit",
            type: String,
            description: "你审阅过的 40 位 commit sha(必填)",
        },
        {
            name: "no-packages",
            type: Boolean,
            description: "跳过官方包安装",
        },
        {
            name: "no-exec",
            type: Boolean,
            description: "跳过插件与 hooks",
        },
        {
            name: "trust-signer",
            type: Boolean,
            description: "信任这个 commit 的签名者(免确认)",
        },
        {
            name: "force",
            type: Boolean,
            description: "跳过签名检查,只应用配置(插件与 hooks 关闭)",
        },
    ],
    execute: async ({ options }) => {
        await executeApply({
            commit: typeof options["commit"] === "string" ? options["commit"] : undefined,
            noPackages: options["no-packages"] === true,
            noExec: options["no-exec"] === true,
            trustSigner: options["trust-signer"] === true,
            force: options["force"] === true,
        });
    },
});

cli.addCommand({
    name: "conflicts",
    description: "列出 mise dot 同步冲突,用本机编辑器打开审阅",
    execute: () => {
        executeConflicts();
    },
});

cli.addCommand({
    name: "trust-key",
    description: "把一把 ssh 公钥加入信任名单(可附私钥作为签名密钥)",
    options: [
        {
            name: "pubkey",
            type: String,
            description: "ssh 公钥文件路径(必填)",
        },
        {
            name: "privkey",
            type: String,
            description: "对应私钥路径(可选)",
        },
    ],
    execute: ({ options }) => {
        cmdTrustKey(
            typeof options["pubkey"] === "string" ? options["pubkey"] : undefined,
            typeof options["privkey"] === "string" ? options["privkey"] : undefined,
        );
    },
});

cli.addCommand({
    name: "scope-path",
    description: "打印本机 scope 文件路径(不存在则从示例复制一份)",
    execute: () => {
        // scope 示例文件在仓库根目录(dist/index.js 的上两级)
        const root = new URL("../..", import.meta.url).pathname;

        try {
            ensureLocalScope(root);
        } catch {
            die(`scope 示例不存在: ${root}/omarchy.sync.scope.example`);
        }

        process.stdout.write(`${paths.scopeFile}\n`);
    },
});

await cli.run();
