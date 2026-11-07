import { capture, resolveTool, run } from "./exec";
import { die } from "./log";

// git 薄封装:禁用 hooks(防止仓库钩子注入),不再做任何签名相关处理。
// 所有操作都针对配置仓库,通过 -C <repo> 指定,不依赖调用方工作目录。

function gitBin(): string {
    const bin = resolveTool("git");

    if (!bin) {
        die("git 不可用");
    }

    return bin;
}

function baseArgs(repo: string): string[] {
    return ["-C", repo, "-c", "core.hooksPath=/dev/null"];
}

/** 执行并把输出透传到终端;成功返回 true */
export function git(repo: string, args: readonly string[]): boolean {
    return run(gitBin(), [...baseArgs(repo), ...args]);
}

/** 执行并捕获输出(含 stderr) */
export function gitCapture(repo: string, args: readonly string[]): { ok: boolean; code: number; stdout: string; stderr: string } {
    const result = capture(gitBin(), [...baseArgs(repo), ...args]);

    return { ok: result.code === 0, code: result.code, stdout: result.stdout, stderr: result.stderr };
}

/** 捕获 stdout 并去掉尾部空白;失败返回 undefined */
export function gitOut(repo: string, args: readonly string[]): string | undefined {
    const { ok, stdout } = gitCapture(repo, args);

    return ok ? stdout.trimEnd() : undefined;
}
