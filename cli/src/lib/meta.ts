import { mkdirSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";

import { capture, exists, isDir, isFile, isLink, mktempDir, realpath, resolveTool, rmrf } from "./exec";
import { gitOut } from "./git";
import { readTextFile } from "./log";
import { discardRemoteScope } from "./omarchy";
import { exportHooks } from "./hooks";
import { exportPackages } from "./packages";
import { exportPlugins } from "./plugins";
import { hostnameSafe, iso8601 } from "./util";

// 元数据导出:当前主题/壁纸、包清单、插件清单、hooks、omarsync.json。
// 文件本体同步已由 mise dot 接管,这里只处理"非文件"的机器状态。1:1 移植自 src/meta.lua。

const HOME = homedir();

/** 导出当前主题名与壁纸记录(rel:/abs: 形式) */
export function exportCurrent(dest: string): void {
    const state = `${HOME}/.local/state/omarchy/current`;

    mkdirSync(`${dest}/current`, { recursive: true });
    writeFileSync(`${dest}/current/theme.name`, readTextFile(`${state}/theme.name`) ?? "");

    let record = "";
    const bg = `${state}/background`;
    const target = isLink(bg) || exists(bg) ? realpath(bg) : undefined;
    const base = `${HOME}/.config/omarchy/backgrounds`;

    if (target?.startsWith(`${base}/`)) {
        record = `rel:${target.slice(base.length + 1)}`;
    } else if (target) {
        record = `abs:${target}`;
    }

    writeFileSync(`${dest}/current/background`, `${record}\n`);
}

/** omarsync.json:主机、Omarchy 版本、推送时间、mise 历史头(tree.snapshot) */
export function writeMeta(dest: string, miseHead: string | undefined): void {
    let version = "unknown";
    const vf = `${process.env["OMARCHY_PATH"] ?? "/usr/share/omarchy"}/version`;
    const v = readTextFile(vf);

    if (v) {
        version = v.replaceAll(/\s+/g, "");
    }

    const data = {
        schemaVersion: 2,
        host: hostnameSafe(),
        omarchyVersion: version,
        pushedAt: iso8601(),
        miseHead: miseHead ?? null,
    };

    writeFileSync(`${dest}/omarsync.json`, `${JSON.stringify(data)}\n`);
}

/** 采集元数据到镜像(不再含 home/ 目录;dotfiles 走 mise) */
export function collectInto(dest: string, miseHead: string | undefined): void {
    discardRemoteScope(dest);
    exportCurrent(dest);
    exportPackages(dest);
    exportPlugins(dest, "apply");
    exportHooks(dest);
    writeMeta(dest, miseHead);
}

/** 比较两棵树(文件级,调 diff/cmp 这两个可信工具) */
function treesDiffer(left: string, right: string): boolean {
    if (isDir(left) || isDir(right)) {
        const diff = resolveTool("diff");

        if (!diff) {
            return true;
        }

        return capture(diff, ["-rq", left, right]).code !== 0;
    }

    if (!isFile(left) && !isFile(right)) {
        return false;
    }

    const cmp = resolveTool("cmp");

    if (!cmp) {
        return true;
    }

    return capture(cmp, ["-s", left, right]).code !== 0;
}

/** 元数据是否脏(本机状态与镜像不一致)。dotfiles 的脏判定在 status 里由 mise 负责 */
export function mirrorDirty(mirror: string): boolean {
    const tmp = mktempDir();

    try {
        exportCurrent(tmp);
        exportPackages(tmp);
        const pluginsKnown = exportPlugins(tmp, "check");

        let dirty = treesDiffer(`${mirror}/current`, `${tmp}/current`);

        if (!dirty && treesDiffer(`${mirror}/packages`, `${tmp}/packages`)) {
            dirty = true;
        }

        if (!dirty && pluginsKnown) {
            if (treesDiffer(`${mirror}/plugins.json`, `${tmp}/plugins.json`)) {
                dirty = true;
            }

            if (!dirty && (isDir(`${mirror}/plugins-local`) || isDir(`${tmp}/plugins-local`))) {
                if (treesDiffer(`${mirror}/plugins-local`, `${tmp}/plugins-local`)) {
                    dirty = true;
                }
            }
        }

        if (!dirty) {
            const out = gitOut(["-C", mirror, "status", "--porcelain"]);

            if (out && /\S/.test(out)) {
                dirty = true;
            }
        }

        return dirty;
    } finally {
        rmrf(tmp);
    }
}
