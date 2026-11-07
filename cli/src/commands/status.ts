import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

import { resolveTool } from "../lib/exec";
import { ghInstalled, ghLoggedIn, githubUser } from "../lib/gh";
import { log } from "../lib/log";
import * as mise from "../lib/mise";
import { paths } from "../lib/paths";
import { collectRepoState } from "../lib/repo";
import { hostnameSafe } from "../lib/util";

// status --json 聚合与 status.json 落盘。
// 字段名沿用旧 schema(面板 Panel.qml/Model.js 依赖),语义已换成纯 git/mise 视角:
// 签名门整体移除,remoteSignature 固定 "trusted",让面板的 apply 门自然敞开。

interface Status {
    ghInstalled: boolean;
    loggedIn: boolean;
    user: string;
    repo: string;
    dotRepo: string;
    dotBranch: string;
    branch: string;
    initialized: boolean;
    dirty: boolean;
    behind: number | null;
    ahead: number | null;
    remoteCommit: string;
    pinnedCommit: string;
    remoteSigned: boolean;
    remoteSignature: string;
    signerFingerprint: string;
    hasTrustedKeys: boolean;
    firstApply: boolean;
    lastPush: { host: string; time: string; omarchyVersion: string };
    running: boolean;
    error: string;
    miseConnected: boolean;
    changedFiles: string[];
}

/** 是否有其他 omarsync 进程在跑(flock 探测);持锁进程刷新自身状态时不算 */
function isRunning(): boolean {
    if (process.env["OMARSYNC_LOCK_HELD"] === "1") {
        return false;
    }

    const flock = resolveTool("flock");

    if (!flock) {
        return false;
    }

    mkdirSync(dirname(paths.lockFile), { recursive: true });

    const result = spawnSync(flock, ["-n", paths.lockFile, "-c", "true"]);

    return result.status !== 0;
}

export function collect(): Status {
    const repoState = collectRepoState();

    const st: Status = {
        ghInstalled: ghInstalled(),
        loggedIn: false,
        user: "",
        repo: repoState.remote,
        // 面板有"打开文件分支"入口;新架构只有一个仓库一个分支,两个字段同源
        dotRepo: repoState.remote,
        dotBranch: repoState.branch || "main",
        branch: repoState.branch || "main",
        initialized: repoState.initialized,
        dirty: repoState.dirty,
        behind: repoState.behind,
        ahead: repoState.ahead,
        remoteCommit: repoState.remoteCommit,
        pinnedCommit: "",
        // 私有仓库 + 无签名门:所有远程内容一视同仁
        remoteSigned: true,
        remoteSignature: "trusted",
        signerFingerprint: "",
        hasTrustedKeys: true,
        firstApply: false,
        lastPush: { host: hostnameSafe(), time: repoState.lastCommitTime, omarchyVersion: "" },
        running: isRunning(),
        error: repoState.error,
        miseConnected: mise.available() && repoState.initialized,
        changedFiles: repoState.changedFiles,
    };

    if (st.ghInstalled && ghLoggedIn()) {
        st.loggedIn = true;
        st.user = githubUser() ?? "";
    }

    return st;
}

/** 落盘 status.json 并返回文本 */
function writeJson(st: Status): string {
    const text = JSON.stringify(st);

    mkdirSync(paths.stateDir, { recursive: true });
    writeFileSync(paths.statusJson, `${text}\n`);

    return text;
}

export function executeStatus(json: boolean): void {
    const st = collect();
    const text = writeJson(st);

    if (json) {
        process.stdout.write(`${text}\n`);

        return;
    }

    const githubState = st.loggedIn ? st.user : st.ghInstalled ? "signed out" : "cli missing";

    log.info(`github: ${githubState}`);
    log.info(`repo: ${st.repo === "" ? "<unset>" : st.repo} (${st.branch})`);
    log.info(`local: ${st.initialized ? paths.configRepo : "not initialized"}`);
    log.info(`mise dot: ${st.miseConnected ? "available" : "unavailable"}`);
    log.info(`local changes: ${st.dirty ? "yes" : "no"}`);
    log.info(`behind: ${String(st.behind)}  ahead: ${String(st.ahead)}`);

    if (st.lastPush.time !== "") {
        log.info(`last commit: ${st.lastPush.time} on ${st.lastPush.host}`);
    }

    if (st.error !== "") {
        log.warn(st.error);
    }
}

// 供 push/apply 结束后静默刷新一次落盘状态
export function refreshStatusFile(): void {
    writeJson(collect());
}
