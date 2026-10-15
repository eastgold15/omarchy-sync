import { readFileSync, writeFileSync } from "node:fs";
import * as readline from "node:readline";

import { paths } from "./paths";

// 小工具:主机名、时间戳、tty 确认、配置写入。

/** 主机名(只留安全字符) */
export function hostnameSafe(): string {
    let name = "";

    try {
        name = readFileSync("/etc/hostname", "utf8").split("\n")[0] ?? "";
    } catch {
        // 忽略
    }

    name = name.replaceAll(/[^A-Za-z0-9._-]/g, "");

    return name === "" ? "unknown" : name;
}

/** 本地时区的 ISO8601(等价 date -Iseconds) */
export function iso8601(): string {
    const date = new Date();
    const offset = -date.getTimezoneOffset();
    const sign = offset >= 0 ? "+" : "-";
    const abs = Math.abs(offset);
    const pad = (n: number): string => String(n).padStart(2, "0");
    const local = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;

    return `${local}${sign}${pad(Math.floor(abs / 60))}:${pad(abs % 60)}`;
}

/** 标准输入输出都是终端(交互提示用) */
export function stdinIsTty(): boolean {
    return process.stdin.isTTY === true && process.stdout.isTTY === true;
}

/** y/N 确认;非终端一律返回 false(合并确认必须真人输入) */
export async function confirm(prompt: string): Promise<boolean> {
    if (!stdinIsTty()) {
        return false;
    }

    const rl = readline.createInterface({ input: process.stdin, output: process.stderr });

    return new Promise((resolve) => {
        rl.question(`${prompt} [y/N] `, (answer) => {
            rl.close();
            resolve(answer === "y" || answer === "Y");
        });
    });
}

/** 写配置项(KEY=VALUE,替换同名行,与旧版一致) */
export function configSet(key: string, value: string): void {
    let lines: string[] = [];

    try {
        lines = readFileSync(paths.configFile, "utf8")
            .split("\n")
            .filter((line) => line !== "" && !line.startsWith(`${key}=`));
    } catch {
        // 文件不存在,从空开始
    }

    lines.push(`${key}=${value}`);
    writeFileSync(paths.configFile, `${lines.join("\n")}\n`);
}
