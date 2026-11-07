import { capture, resolveTool } from "./exec";

// GitHub CLI 封装(可选工具:未安装/未登录只影响面板的登录态展示)。

export function ghInstalled(): boolean {
    return resolveTool("gh") !== undefined;
}

export function ghLoggedIn(): boolean {
    const bin = resolveTool("gh");

    if (!bin) {
        return false;
    }

    return capture(bin, ["auth", "status"]).code === 0;
}

export function githubUser(): string | undefined {
    const bin = resolveTool("gh");

    if (!bin) {
        return undefined;
    }

    const result = capture(bin, ["api", "user", "--jq", ".login"]);
    const user = result.stdout.trim();

    return result.code === 0 && user !== "" ? user : undefined;
}
