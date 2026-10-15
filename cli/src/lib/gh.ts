import { capture, resolveTool, run } from "./exec";
import { die, log } from "./log";

// GitHub CLI 封装(gh 是可选工具,未登录/未安装只影响 GitHub 流程)。

export function ghInstalled(): boolean {
    return resolveTool("gh") !== undefined;
}

function ghBin(): string {
    const bin = resolveTool("gh");

    if (!bin) {
        die("GitHub CLI 未安装。运行: omarchy pkg add github-cli");
    }

    return bin;
}

export function gh(args: readonly string[]): boolean {
    return run(ghBin(), args);
}

export function ghCapture(args: readonly string[]): { ok: boolean; out: string } {
    const result = capture(ghBin(), args);

    return { ok: result.code === 0, out: result.stdout };
}

export function ghLoggedIn(): boolean {
    return ghInstalled() && ghCapture(["auth", "status"]).ok;
}

export function githubUser(): string | undefined {
    if (!ghLoggedIn()) {
        return undefined;
    }

    const { ok, out } = ghCapture(["api", "user", "--jq", ".login"]);

    const user = out.trim();

    return ok && user !== "" ? user : undefined;
}
