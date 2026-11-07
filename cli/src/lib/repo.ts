import { join } from "node:path";

import { isDir } from "./exec";
import { gitCapture, gitOut } from "./git";
import { hostnameSafe } from "./util";
import { paths } from "./paths";

// 配置仓库的状态采集。仓库是普通 git 仓库,behind/ahead/dirty 全部走原生 git,
// 不再有私有 history、manifest 合并和签名验证。

export interface RepoState {
    initialized: boolean;
    branch: string;
    /** origin 解析出的 owner/name,供面板打开 GitHub 链接 */
    remote: string;
    dirty: boolean;
    /** null 表示无法联系远程;否则为与 upstream 的提交差 */
    behind: number | null;
    ahead: number | null;
    /** upstream 的 40 位 sha(面板依赖 40 位正则),取不到为 "" */
    remoteCommit: string;
    changedFiles: string[];
    /** 最后一个本地提交的 ISO 时间,取不到为 "" */
    lastCommitTime: string;
    error: string;
}

const SHA40 = /^[0-9a-f]{40}$/;

/** 从 git remote url 解析 owner/name;兼容 https 与 ssh 两种写法 */
export function parseRemote(url: string): string {
    const cleaned = url.trim().replace(/\.git$/, "");
    const match = /(?:https:\/\/github\.com\/|git@github\.com:)([^/]+\/[^/]+)$/.exec(cleaned);

    return match ? match[1] : "";
}

/** porcelain 一行 -> 展示用路径(处理 rename 的 "old -> new") */
function porcelainPath(line: string): string {
    const rest = line.slice(3);
    const arrow = rest.indexOf(" -> ");

    return arrow >= 0 ? rest.slice(arrow + 4) : rest;
}

export function collectRepoState(): RepoState {
    const state: RepoState = {
        initialized: false,
        branch: "",
        remote: "",
        dirty: false,
        behind: null,
        ahead: null,
        remoteCommit: "",
        changedFiles: [],
        lastCommitTime: "",
        error: "",
    };

    const repo = paths.configRepo;

    if (!isDir(`${repo}/.git`)) {
        return state;
    }

    // 连 .git 都在却不是工作树(极少见),按未初始化处理
    if (gitOut(repo, ["rev-parse", "--is-inside-work-tree"]) !== "true") {
        return state;
    }

    state.initialized = true;
    state.branch = gitOut(repo, ["symbolic-ref", "--short", "HEAD"]) ?? "";

    const remoteUrl = gitOut(repo, ["remote", "get-url", "origin"]) ?? "";

    state.remote = parseRemote(remoteUrl);
    state.lastCommitTime = gitOut(repo, ["log", "-1", "--format=%cI"]) ?? "";

    // 工作区改动(含未跟踪文件)
    const porcelain = gitOut(repo, ["status", "--porcelain=v1", "-uall"]) ?? "";
    const lines = porcelain === "" ? [] : porcelain.split("\n");

    state.dirty = lines.length > 0;
    // 输出绝对路径:面板"查看改动"直接拿路径调 code,不再拼 HOME
    state.changedFiles = lines.slice(0, 30).map((line) => join(repo, porcelainPath(line)));

    // upstream 未配置(全新本地仓库)时不算错误,计数为 0
    const upstream = gitOut(repo, ["rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{upstream}"]);

    if (!upstream) {
        state.behind = 0;
        state.ahead = 0;

        return state;
    }

    // 先 fetch;网络失败时保留本地视角,把错误交给面板展示
    const fetched = gitCapture(repo, ["fetch", "--quiet", "origin", state.branch || upstream.split("/").pop()!]);

    if (!fetched.ok) {
        state.error = "could not fetch origin";
        state.behind = 0;
        state.ahead = 0;

        return state;
    }

    const counts = gitOut(repo, ["rev-list", "--left-right", "--count", "HEAD...@{upstream}"]) ?? "0\t0";
    const [aheadText, behindText] = counts.split(/\s+/);

    state.ahead = Number(aheadText ?? 0);
    state.behind = Number(behindText ?? 0);

    const tip = gitOut(repo, ["rev-parse", "@{upstream}"]) ?? "";

    state.remoteCommit = SHA40.test(tip) ? tip : "";

    return state;
}

/** 面板 lastPush 展示用:主机名 + 最后提交时间 */
export function lastPushInfo(): { host: string; time: string } {
    return { host: hostnameSafe(), time: collectRepoState().lastCommitTime };
}
