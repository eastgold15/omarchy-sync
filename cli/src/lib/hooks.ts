import { chmodSync, constants, accessSync, copyFileSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { homedir } from "node:os";

import { capture, exists, isDir, resolveTool, rmrf, run } from "./exec";
import { log } from "./log";
import { readScope } from "./scope";
import { paths } from "./paths";

// post-apply hooks:由编写的机器放入 ~/.config/omarsync-hooks/post-apply.d,
// push 时复制进签名快照;apply 仅对可信提交执行。1:1 移植自 src/hooks.lua。

const HOME = homedir();

export function hooksSourceDir(): string {
    return `${HOME}/.config/omarsync-hooks/post-apply.d`;
}

/** 目录下的普通文件名(排除符号链接),按名字排序 */
function hookNames(dir: string): string[] {
    if (!isDir(dir)) {
        return [];
    }

    const names: string[] = [];

    for (const entry of readdirSync(dir, { withFileTypes: true })) {
        if (entry.isFile()) {
            names.push(entry.name);
        }
    }

    return names.sort();
}

export function exportHooks(dest: string): void {
    rmrf(`${dest}/hooks`);

    const src = hooksSourceDir();

    if (!isDir(src)) {
        return;
    }

    mkdirSync(`${dest}/hooks/post-apply.d`, { recursive: true });

    for (const name of hookNames(src)) {
        if (/^[A-Za-z0-9._-]+$/.test(name)) {
            copyFileSync(`${src}/${name}`, `${dest}/hooks/post-apply.d/${name}`);
            // cp -a 语义:保留可执行位
            chmodSync(`${dest}/hooks/post-apply.d/${name}`, statSync(`${src}/${name}`).mode);
        }
    }
}

export function listHooks(mirror: string): string[] {
    return hookNames(`${mirror}/hooks/post-apply.d`);
}

function isExec(path: string): boolean {
    try {
        accessSync(path, constants.X_OK);

        return true;
    } catch {
        return false;
    }
}

export function runHooks(mirror: string, allowExec: boolean): boolean {
    const dir = `${mirror}/hooks/post-apply.d`;

    if (!allowExec) {
        if (isDir(dir)) {
            log.warn("跳过 post-apply hooks;可执行内容恢复需要可信签名");
        }

        return true;
    }

    if (!isDir(dir)) {
        return true;
    }

    let failed = false;

    for (const name of hookNames(dir)) {
        const path = `${dir}/${name}`;

        if (!isExec(path)) {
            chmodSync(path, 0o755);
        }

        log.info(`运行 hook ${name}`);

        if (!run("/usr/bin/bash", [path])) {
            log.warn(`hook ${name} 失败`);
            failed = true;
        }
    }

    return !failed;
}

/** scope 覆盖 .config/systemd/user 时,apply 后重载用户服务 */
export function refreshUserServices(): boolean {
    const systemctl = resolveTool("systemctl");

    if (!systemctl) {
        return true;
    }

    const wanted = readScope(paths.scopeFile).some(
        (entry) =>
            entry.rel === ".config/systemd/user" || entry.rel.startsWith(".config/systemd/user/") || entry.rel === ".config/systemd",
    );

    if (!wanted || !isDir(`${HOME}/.config/systemd/user`)) {
        return true;
    }

    const runtime = process.env["XDG_RUNTIME_DIR"];

    if (!runtime || runtime === "" || !exists(`${runtime}/systemd/private`)) {
        return true;
    }

    let okAll = true;

    if (!run(systemctl, ["--user", "daemon-reload"])) {
        log.warn("systemctl --user daemon-reload 失败");
        okAll = false;
    }

    // 启动 *.target.wants 里链接的 service
    const find = resolveTool("find");
    const out = find
        ? capture(find, [`${HOME}/.config/systemd/user`, "-type", "l", "-path", "*.target.wants/*", "-printf", "%f\n"]).stdout
        : "";

    for (const unit of out.split("\n")) {
        if (unit.endsWith(".service")) {
            if (!run(systemctl, ["--user", "start", unit])) {
                log.warn(`无法启动 ${unit}`);
                okAll = false;
            }
        }
    }

    return okAll;
}
