import { unlinkSync } from "node:fs";

import { exists, isDir, isFile, isLink, resolveTool, run } from "./exec";
import { ghCapture, ghLoggedIn } from "./gh";
import { git, gitOut } from "./git";
import { die, log, readTextFile } from "./log";
import { configGet, paths } from "./paths";

// omarchy 生态入口与镜像杂项:omarchy/omarchy-shell 调用、git 身份、
// 远程 scope 丢弃、通知、dotfiles 仓库名推导。对应旧版 common.lua 的相应部分。

export const PLUGIN_ID = "io.github.eastgold15.omarsync";
export const MAX_FILE_SIZE = "50m";
export const BACKUP_KEEP = 5;

export function omarchy(args: readonly string[]): boolean {
    const bin = resolveTool("omarchy");

    if (!bin) {
        die("omarchy 不在可信目录里");
    }

    return run(bin, args);
}

export function omarchyShell(args: readonly string[]): boolean {
    const bin = resolveTool("omarchy-shell");

    if (!bin) {
        die("omarchy-shell 不在可信目录里");
    }

    return run(bin, args);
}

export function rsync(args: readonly string[]): boolean {
    const bin = resolveTool("rsync");

    if (!bin) {
        die("rsync 不可用");
    }

    return run(bin, args);
}

/** 桌面通知(OMARSYNC_NOTIFY=1 时启用) */
export function notify(headline: string, body: string): void {
    if (process.env["OMARSYNC_NOTIFY"] !== "1") {
        return;
    }

    const bin = resolveTool("omarchy-notification-send");

    if (!bin) {
        return;
    }

    const args = ["--app-name", "omarsync", headline];

    if (body !== "") {
        args.push(body);
    }

    run(bin, args);
}

/** dotfiles 仓库名:元数据仓库的兄弟仓库 */
export function dotRepoName(): string {
    const repo = configGet("REPO", readTextFile) ?? "";

    if (repo === "") {
        return "";
    }

    const owner = /^(.+)\/[^/]+$/.exec(repo)?.[1] ?? repo;

    return `${owner}/omarchy-dotfiles`;
}

export function dotOriginUrl(): string {
    const override = process.env["OMARSYNC_DOT_ORIGIN"];

    if (override && override !== "") {
        return override;
    }

    return `https://github.com/${dotRepoName()}.git`;
}

/** 镜像里的 omarsync.scope 永远不是策略:删掉并从索引移除 */
export function discardRemoteScope(mirror: string): void {
    if (!isDir(mirror)) {
        return;
    }

    const file = `${mirror}/omarsync.scope`;

    if (exists(file) || isLink(file)) {
        try {
            unlinkSync(file);
        } catch {
            // 忽略
        }
    }

    if (isDir(`${mirror}/.git`) && gitOut(["-C", mirror, "ls-files", "--error-unmatch", "--", "omarsync.scope"])) {
        git(["-C", mirror, "rm", "-q", "--ignore-unmatch", "--", "omarsync.scope"]);
    }
}

/** 镜像的 git 提交身份与签名配置(幂等) */
export function ensureIdentity(mirror: string): void {
    let email = configGet("SIGNING_EMAIL", readTextFile);
    let name = configGet("SIGNING_NAME", readTextFile);

    if (!email) {
        if (ghLoggedIn()) {
            if (!name) {
                const { ok, out } = ghCapture(["api", "user", "--jq", ".name // .login"]);

                if (ok) {
                    name = out.trimEnd();
                }
            }

            const login = ghCapture(["api", "user", "--jq", ".login"]).out.trim();
            const id = ghCapture(["api", "user", "--jq", ".id"]).out.trim();

            if (login !== "" && id !== "") {
                email = `${id}+${login}@users.noreply.github.com`;
            }
        }

        email ??= "omarsync@localhost";
    }

    git(["-C", mirror, "config", "user.name", name && name !== "" ? name : "Omarsync"]);
    git(["-C", mirror, "config", "user.email", email]);

    const signingKey = configGet("SIGNING_KEY", readTextFile);

    if (signingKey && isFile(signingKey)) {
        git(["-C", mirror, "config", "gpg.format", "ssh"]);
        git(["-C", mirror, "config", "user.signingkey", signingKey]);
        git(["-C", mirror, "config", "commit.gpgsign", "true"]);
    }
}
