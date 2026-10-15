import { capture, resolveTool, run } from "./exec";
import { die, log } from "./log";

// git 包装:禁用 hooks,指定 ssh-keygen 作为签名程序。
// 对应旧版 common.lua 的 git/git_out。

function gitBin(): string {
    const bin = resolveTool("git");

    if (!bin) {
        die("git 不可用");
    }

    return bin;
}

function baseArgs(): string[] {
    const keygen = resolveTool("ssh-keygen");

    if (!keygen) {
        die("ssh-keygen 不可用");
    }

    return ["-c", "core.hooksPath=/dev/null", "-c", `gpg.ssh.program=${keygen}`];
}

/** 执行并把输出透传到终端;成功返回 true */
export function git(args: readonly string[]): boolean {
    return run(gitBin(), [...baseArgs(), ...args]);
}

/** 执行并捕获输出 */
export function gitCapture(args: readonly string[]): { ok: boolean; code: number; out: string } {
    const result = capture(gitBin(), [...baseArgs(), ...args]);

    return { ok: result.code === 0, code: result.code, out: result.stdout };
}

/** 捕获输出并去掉尾部空白;失败返回 undefined */
export function gitOut(args: readonly string[]): string | undefined {
    const { ok, out } = gitCapture(args);

    if (!ok) {
        return undefined;
    }

    return out.trimEnd();
}
