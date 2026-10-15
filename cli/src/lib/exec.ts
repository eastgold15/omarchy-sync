import { spawnSync } from "node:child_process";
import { accessSync, constants, existsSync, statSync } from "node:fs";
import { join } from "node:path";

// 可信子进程封装:只从固定系统目录解析工具,挡住 PATH 投毒(影子二进制)。
// 对应旧版 src/exec.lua。

/** 可信目录,按优先级排列 */
const TRUSTED_DIRS = ["/usr/bin", "/bin", "/usr/sbin", "/usr/share/omarchy/bin"];

/** 解析工具到可信目录下的真实路径;找不到返回 undefined */
export function resolveTool(name: string): string | undefined {
    for (const dir of TRUSTED_DIRS) {
        const candidate = join(dir, name);

        try {
            // 必须是常规文件且可执行(符号链接解析后检查)
            if (statSync(candidate).isFile()) {
                accessSync(candidate, constants.X_OK);

                return candidate;
            }
        } catch {
            // 不存在或不可执行,试下一个目录
        }
    }

    return undefined;
}

export interface ExecResult {
    readonly code: number;
    readonly stdout: string;
    readonly stderr: string;
}

/** 执行并捕获输出;env 以 KEY=VALUE 形式附加(默认清空环境再加白名单) */
export function capture(binary: string, args: readonly string[], env: readonly string[] = []): ExecResult {
    const base: Record<string, string> = {
        HOME: process.env["HOME"] ?? "",
        PATH: TRUSTED_DIRS.join(":"),
        LANG: "C.UTF-8",
    };

    for (const entry of env) {
        const eq = entry.indexOf("=");

        if (eq > 0) {
            base[entry.slice(0, eq)] = entry.slice(eq + 1);
        }
    }

    const result = spawnSync(binary, [...args], {
        env: base,
        encoding: "utf8",
        maxBuffer: 64 * 1024 * 1024,
    });

    return {
        code: result.status ?? 1,
        stdout: result.stdout ?? "",
        stderr: result.stderr ?? "",
    };
}

/** 执行并把输出直接透传到终端(交互/长输出用);成功返回 true */
export function run(binary: string, args: readonly string[]): boolean {
    const result = spawnSync(binary, [...args], { stdio: "inherit" });

    return result.status === 0;
}

export function isFile(path: string): boolean {
    try {
        return statSync(path).isFile();
    } catch {
        return false;
    }
}

export function isDir(path: string): boolean {
    try {
        return statSync(path).isDirectory();
    } catch {
        return false;
    }
}

export function exists(path: string): boolean {
    return existsSync(path);
}
