import { mkdirSync, readdirSync, symlinkSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { dirname } from "node:path";

import { openInEditor } from "./editor";
import { capture, exists, isDir, isFile, isLink, mktempDir, realpath, resolveTool, rmrf } from "./exec";
import { gitCapture, gitOut } from "./git";
import { refreshUserServices, listHooks, runHooks } from "./hooks";
import { die, log, readTextFile } from "./log";
import * as mise from "./mise";
import { omarchy, omarchyShell, rsync, BACKUP_KEEP, dotBranch, dotOriginUrl } from "./omarchy";
import { installMissingPackages } from "./packages";
import { paths } from "./paths";
import { installMissingPlugins } from "./plugins";
import { readScope } from "./scope";
import { appliedStampFile, isFullSha } from "./trust";

// apply 编排:备份 → mise dot pull(文件)→ 主题/壁纸 → 包/插件/hooks。
// 文件的写入由 mise 负责(自带保护检查点与 undo);这里保留本机备份作为第二道保险。
// 1:1 移植自 src/apply.lua。

const HOME = homedir();

export function pruneBackups(): void {
    const root = paths.backupDir;

    if (!isDir(root)) {
        return;
    }

    const names = readdirSync(root).sort();

    for (const name of names.slice(0, Math.max(0, names.length - BACKUP_KEEP))) {
        rmrf(`${root}/${name}`);
    }
}

/** 按 scope 备份 $HOME 的现有文件(在 mise pull 覆盖之前) */
export function backupTree(): string {
    const date = resolveTool("date");
    const stamp = (date ? capture(date, ["+%Y%m%d-%H%M%S"]).stdout.trim() : "") || "unknown";
    const dest = `${paths.backupDir}/${stamp}`;

    for (const entry of readScope(paths.scopeFile)) {
        const src = `${HOME}/${entry.rel}`;

        if (exists(src) || isLink(src)) {
            const parent = `${dest}/home/${dirname(entry.rel)}`;

            mkdirSync(parent, { recursive: true });
            rsync(["-a", src, `${parent}/`]);
        }
    }

    const state = `${HOME}/.local/state/omarchy/current`;

    if (isDir(state)) {
        mkdirSync(`${dest}/current`, { recursive: true });

        const theme = readTextFile(`${state}/theme.name`);

        if (theme) {
            writeFileSync(`${dest}/current/theme.name`, theme);
        }

        const bg = `${state}/background`;

        if (isLink(bg) || exists(bg)) {
            const target = realpath(bg);

            if (target) {
                writeFileSync(`${dest}/current/background.path`, `${target}\n`);
            }
        }
    }

    return dest;
}

/** 应用主题与壁纸(在线模式调用 omarchy;OMARSYNC_SKIP_LIVE=1 时只写状态文件)。
 *  在线的 `omarchy theme set` 会跑 ~/.config/omarchy/hooks,所以不可信的 apply 跳过它。 */
export function applyCurrent(mirror: string, withExec: boolean): boolean {
    const theme = (readTextFile(`${mirror}/current/theme.name`) ?? "").replaceAll(/\s+/g, "");
    const background = (readTextFile(`${mirror}/current/background`) ?? "").replaceAll(/\s+/g, "");

    const state = `${HOME}/.local/state/omarchy/current`;
    let target = "";

    if (background.startsWith("rel:")) {
        target = `${HOME}/.config/omarchy/backgrounds/${background.slice(4)}`;
    } else if (background.startsWith("abs:")) {
        target = background.slice(4);
    }

    if (process.env["OMARSYNC_SKIP_LIVE"] === "1") {
        mkdirSync(state, { recursive: true });

        if (theme !== "") {
            writeFileSync(`${state}/theme.name`, `${theme}\n`);
        }

        if (target !== "" && exists(target)) {
            rmrf(`${state}/background`);
            symlinkSync(target, `${state}/background`);
        }

        return true;
    }

    if (!withExec) {
        if (theme !== "" || background !== "") {
            log.info("已跳过主题切换;可执行内容恢复需要可信签名");
        }

        return true;
    }

    let failed = false;

    if (theme !== "") {
        log.info(`设置主题 ${theme}`);

        if (!omarchy(["theme", "set", theme])) {
            log.warn(`设置主题 ${theme} 失败`);
            failed = true;
        }
    }

    if (target !== "") {
        if (exists(target)) {
            log.info(`设置壁纸 ${target}`);

            if (!omarchy(["theme", "bg", "set", target])) {
                log.warn("设置壁纸失败");
                failed = true;
            }
        } else {
            log.warn(`壁纸文件不存在: ${target}`);
            failed = true;
        }
    }

    return !failed;
}

/** 清洗后的进程不携带 HYPRLAND_INSTANCE_SIGNATURE;从 /run/user/<uid>/hypr 下唯一的会话目录推导 */
function hyprInstanceSignature(): string | undefined {
    const runtime = process.env["XDG_RUNTIME_DIR"] ?? "";

    if (!/^\/run\/user\/\d+/.test(runtime) || !isDir(`${runtime}/hypr`)) {
        return undefined;
    }

    const found: string[] = [];

    for (const name of readdirSync(`${runtime}/hypr`)) {
        if (
            /^[0-9a-f]+_[0-9]+_[0-9]+$/.test(name) &&
            isDir(`${runtime}/hypr/${name}`) &&
            isFile(`${runtime}/hypr/${name}/hyprland.lock`)
        ) {
            found.push(name);
        }
    }

    return found.length === 1 ? found[0] : undefined;
}

export function reloadDesktop(): void {
    if (process.env["OMARSYNC_SKIP_LIVE"] === "1") {
        return;
    }

    if (resolveTool("omarchy-shell")) {
        if (!omarchyShell(["shell", "reloadConfig"])) {
            log.warn("shell reload 失败");
        }
    }

    const hyprctl = resolveTool("hyprctl");

    if (!hyprctl) {
        return;
    }

    const sig = hyprInstanceSignature();

    if (!sig) {
        log.warn("跳过 hyprctl reload;这个用户没有唯一的 Hyprland 会话");

        return;
    }

    const result = capture(hyprctl, ["reload"], [
        `XDG_RUNTIME_DIR=${process.env["XDG_RUNTIME_DIR"] ?? ""}`,
        `HYPRLAND_INSTANCE_SIGNATURE=${sig}`,
    ]);

    if (result.code !== 0) {
        log.warn("hyprctl reload 失败");
    }
}

export function assertPinned(mirror: string, sha: string): void {
    if (!isFullSha(sha)) {
        die("拒绝激活未钉住的版本");
    }

    const head = gitOut(["-C", mirror, "rev-parse", "--verify", "HEAD"]);

    if (head !== sha) {
        die(`镜像 HEAD ${head ?? "?"} 不是审阅过的 commit ${sha}`);
    }

    if (gitCapture(["-C", mirror, "symbolic-ref", "-q", "HEAD"]).ok) {
        die("镜像挂在分支上,拒绝应用");
    }
}

const HOOKS_REL = ".config/omarchy/hooks";

/** 不可信的 apply 不能把快照里的 Omarchy hooks 落到磁盘。先拷走本机原样,pull 之后放回去。 */
function stashOmarchyHooks(): { tmp: string; existed: boolean } {
    const src = `${HOME}/${HOOKS_REL}`;
    const existed = exists(src) || isLink(src);
    const tmp = mktempDir();

    if (existed && !rsync(["-a", src, `${tmp}/`])) {
        die("无法在不可信的 apply 之前保留 ~/.config/omarchy/hooks");
    }

    return { tmp, existed };
}

function restoreOmarchyHooks(stash: { tmp: string; existed: boolean }): void {
    const dst = `${HOME}/${HOOKS_REL}`;

    rmrf(dst);

    if (stash.existed && stash.tmp !== "") {
        const saved = `${stash.tmp}/hooks`;

        if (exists(saved) || isLink(saved)) {
            mkdirSync(`${HOME}/.config/omarchy`, { recursive: true });
            rsync(["-a", saved, `${HOME}/.config/omarchy/`]);
        }
    }

    if (stash.tmp !== "") {
        rmrf(stash.tmp);
    }

    log.info("已跳过 Omarchy hooks,保留本机原样");
}

/** 另一台机器往往还没跑过 setup,mise 没有 origin。先连上再抓取。连接用 manual,不在这里发布本机历史。 */
export function prepareDotfiles(): boolean {
    if (!mise.available()) {
        log.warn("mise 未安装;跳过 dotfiles。运行: omarchy pkg add mise");

        return false;
    }

    const url = dotOriginUrl();
    const branch = dotBranch();
    const already = mise.originMatches(url, branch);
    const connected = mise.connect(url, branch);

    if (!connected.ok) {
        log.warn(`无法连接 mise dot origin ${url === "" ? "(未配置)" : url}`);

        if (connected.out.trim() !== "") {
            log.warn(connected.out);
        }

        return false;
    }

    if (!already) {
        log.info(`已连接 mise dot origin ${url} 分支 ${branch}`);
    }

    const fetch = mise.sync(true);

    if (!fetch.ok) {
        log.warn(`mise fetch 失败: ${fetch.out}`);

        return false;
    }

    return true;
}

/** mise 侧的文件同步:连接 origin → fetch → pull(miseHead 只留档) */
export function syncDotfiles(): boolean {
    if (!prepareDotfiles()) {
        return false;
    }

    const pull = mise.pull({ takeRemoteAll: true });

    if (!pull.ok) {
        log.warn(`mise pull 失败: ${pull.out}`);
        log.warn("解决冲突: mise dot conflicts / mise dot pull --take-remote-all");

        return false;
    }

    return true;
}

export function applyMirror(mirror: string, withPackages: boolean, sha: string, withExec: boolean): boolean {
    assertPinned(mirror, sha);
    log.info(`激活 commit ${sha}`);

    const backup = backupTree();

    log.info(`已备份现有文件到 ${backup}`);

    let failed = false;
    const hooksStash = withExec ? undefined : stashOmarchyHooks();

    if (!syncDotfiles()) {
        failed = true;
    }

    if (hooksStash) {
        restoreOmarchyHooks(hooksStash);
    }

    if (!applyCurrent(mirror, withExec)) {
        failed = true;
    }

    reloadDesktop();

    if (withPackages) {
        if (!installMissingPackages(mirror)) {
            failed = true;
        }
    } else {
        log.info("跳过官方包安装");
    }

    if (!installMissingPlugins(mirror, withExec)) {
        failed = true;
    }

    if (withExec) {
        if (!refreshUserServices()) {
            failed = true;
        }
    } else {
        log.info("已跳过用户服务启动");
    }

    if (!runHooks(mirror, withExec)) {
        failed = true;
    }

    assertPinned(mirror, sha);
    pruneBackups();

    return !failed;
}

/** 合并前审查:显示自上次应用以来元数据仓库里的全部更改(只读) */
export function showChanges(mirror: string, sha: string): void {
    const applied = (readTextFile(appliedStampFile()) ?? "").trim();

    if (!isFullSha(applied)) {
        log.info("没有应用过的 commit;这份快照将整体应用");

        return;
    }

    if (applied === sha) {
        log.info("这台机器已经应用过这个 commit");

        return;
    }

    if (!gitCapture(["-C", mirror, "cat-file", "-e", `${applied}^{commit}`]).ok) {
        log.info(`上次应用的 commit ${applied} 不在镜像里;无法 diff`);

        return;
    }

    log.info(`自上次应用的 commit ${applied.slice(0, 12)} 以来的更改:`);

    const logOut = gitOut(["-C", mirror, "log", "--oneline", "--no-decorate", `${applied}..${sha}`]);

    if (logOut && /\S/.test(logOut)) {
        for (const line of logOut.split("\n")) {
            log.info(`  commit ${line}`);
        }
    }

    const stat = gitOut(["-C", mirror, "diff", "--stat", applied, sha]);

    if (stat && /\S/.test(stat)) {
        for (const line of stat.split("\n")) {
            log.info(`  ${line}`);
        }
    } else {
        log.info("  (元数据无变化)");
    }

    // 关键文本文件给出完整 diff,必须能逐行看到改了什么;
    // 同时汇总写进 pending-apply.diff 并用用户的编辑器打开审阅
    let review = "";

    for (const file of ["plugins.json", "packages/pacman.txt", "packages/flatpak.txt", "current/theme.name", "current/background"]) {
        const d = gitOut(["-C", mirror, "diff", "--color=never", applied, sha, "--", file]);

        if (d && /\S/.test(d)) {
            process.stdout.write(`${d}\n`);
            review += `${d}\n`;
        }
    }

    if (review !== "") {
        const reviewFile = `${paths.stateDir}/pending-apply.diff`;

        writeFileSync(reviewFile, `自 ${applied} 到 ${sha} 的元数据更改\n\n${review}`);
        log.info(`完整 diff 已写入 ${reviewFile}`);
        openInEditor([reviewFile]);
    }
}

export function previewApply(mirror: string, sha: string, withExec: boolean): void {
    log.info(`commit ${sha}`);
    log.info("文件(mise dot 跟踪):");

    for (const entry of readScope(paths.scopeFile)) {
        log.info(`  ${entry.rel}`);
    }

    if (mise.available()) {
        const { out } = mise.pull({ dryRun: true, takeRemoteAll: true });

        if (/\S/.test(out)) {
            for (const line of out.split("\n")) {
                log.info(`  ${line}`);
            }
        }
    }

    const pac = readTextFile(`${mirror}/packages/pacman.txt`);

    if (pac) {
        const n = pac.split("\n").filter((line) => line.trim() !== "").length;

        log.info(`官方包清单: ${n} 个`);
    }

    const fp = readTextFile(`${mirror}/packages/flatpak.txt`);

    if (fp) {
        log.info("flatpak:");

        for (const line of fp.split("\n")) {
            const app = /^([^\t]+)/.exec(line)?.[1];

            if (app && app !== "") {
                log.info(`  ${app}`);
            }
        }
    }

    const pj = readTextFile(`${mirror}/plugins.json`);

    if (pj) {
        try {
            const data = JSON.parse(pj) as Record<string, unknown>[];

            if (Array.isArray(data)) {
                log.info("插件:");

                for (const row of data) {
                    const note =
                        row["local"] === true ? "(本地快照)" : typeof row["commit"] === "string" ? row["commit"] : "";

                    log.info(`  ${String(row["id"])} ${note}`);
                }
            }
        } catch {
            // 预览阶段不致命
        }
    }

    for (const name of listHooks(mirror)) {
        log.info(`hook ${name}`);
    }

    if (!withExec) {
        log.info("插件与 hooks 不会执行");
        log.info("主题切换和 Omarchy hooks 会被跳过");
    }
}
