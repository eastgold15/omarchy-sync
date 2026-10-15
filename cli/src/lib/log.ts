import { appendFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname } from "node:path";

import { createPail } from "@visulima/pail";

import { paths } from "./paths";

// 日志:终端走 pail(彩色),同时追加一份到 last.log(面板查看用)。
// 对应旧版 common.lua 的 log/warn/die。

export const logger = createPail({
    logLevel: "informational",
    stderr: process.stderr,
    stdout: process.stdout,
});

/** 追加一行到 last.log;失败静默忽略 */
function appendLog(level: string, message: string): void {
    try {
        mkdirSync(dirname(paths.lastLog), { recursive: true });
        appendFileSync(paths.lastLog, `${new Date().toISOString()} omarsync[${level}]: ${message}\n`);
    } catch {
        // 日志失败不影响主流程
    }
}

export const log = {
    info(message: string): void {
        appendLog("info", message);
        logger.info(`omarsync: ${message}`);
    },
    warn(message: string): void {
        appendLog("warn", message);
        logger.warn(`omarsync: ${message}`);
    },
    /** 致命错误:写日志、打印、退出 */
    die(message: string): never {
        appendLog("error", message);
        logger.error(`omarsync: ${message}`);
        process.exit(1);
    },
};

/** 读文本文件;不存在返回 undefined(配合 paths.configGet 使用) */
export function readTextFile(path: string): string | undefined {
    try {
        return readFileSync(path, "utf8");
    } catch {
        return undefined;
    }
}
