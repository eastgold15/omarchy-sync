import { capture, resolveTool, run } from "./exec";
import { die, log } from "./log";

// mise dot 的封装:track/untrack/exclude/save/sync/pull/status/history。
// 文件同步的全部传输都由 mise 负责(track 模式,原地跟踪,不建符号链接)。
// 1:1 移植自 src/mise.lua。

export function available(): boolean {
    return resolveTool("mise") !== undefined;
}

function miseBin(): string {
    const bin = resolveTool("mise");

    if (!bin) {
        die("mise 未安装。运行: omarchy pkg add mise");
    }

    return bin;
}

function mise(args: readonly string[]): boolean {
    return run(miseBin(), ["dot", ...args]);
}

function miseCapture(args: readonly string[], mergeStderr = false): { ok: boolean; out: string } {
    const result = capture(miseBin(), ["dot", ...args]);

    return { ok: result.code === 0, out: mergeStderr ? result.stdout + result.stderr : result.stdout };
}

/** mise dot 功能探测:status -J 能跑通即可 */
export function featureOk(): boolean {
    return miseCapture(["status", "-J"]).ok;
}

export interface MiseStatus {
    readonly edits?: readonly unknown[];
    readonly [key: string]: unknown;
}

/** status -J;失败返回 undefined */
export function status(): MiseStatus | undefined {
    const { ok, out } = miseCapture(["status", "-J"]);

    if (!ok) {
        return undefined;
    }

    try {
        return JSON.parse(out) as MiseStatus;
    } catch {
        return undefined;
    }
}

interface MisePaths {
    readonly entries?: readonly { readonly path?: string }[];
    readonly exclude?: readonly string[];
}

function pathsJson(): MisePaths | undefined {
    const { ok, out } = miseCapture(["paths", "-J"]);

    if (!ok) {
        return undefined;
    }

    try {
        return JSON.parse(out) as MisePaths;
    } catch {
        return undefined;
    }
}

/** 已跟踪的根路径集合(rel 相对 $HOME,不带 ~/ 前缀) */
export function trackedRels(): Set<string> {
    const result = new Set<string>();
    const data = pathsJson();

    for (const entry of data?.entries ?? []) {
        if (typeof entry.path === "string") {
            result.add(entry.path.replace(/^~\//, ""));
        }
    }

    return result;
}

/** 当前全局排除 glob 列表 */
export function currentExcludes(): string[] {
    return [...(pathsJson()?.exclude ?? [])];
}

/** track 一个路径(幂等;不存在的位置也能 track) */
export function track(rel: string): boolean {
    return miseCapture(["track", "-y", `~/${rel}`]).ok;
}

export function untrack(rel: string): boolean {
    return miseCapture(["untrack", `~/${rel}`]).ok;
}

export function excludeAdd(glob: string): boolean {
    return miseCapture(["exclude", glob]).ok;
}

/** include 即移除一条排除规则 */
export function excludeDel(glob: string): boolean {
    return miseCapture(["include", glob]).ok;
}

/** 保存检查点。返回 true(有新检查点)/false(无变化);失败返回 undefined */
export function save(): boolean | undefined {
    const { ok, out } = miseCapture(["save"], true);

    if (!ok) {
        return undefined;
    }

    return !out.includes("nothing changed");
}

/** 最新检查点的 tree.snapshot(git 树哈希,跨机稳定);失败返回 undefined */
export function headSnapshot(): string | undefined {
    const { ok, out } = miseCapture(["history", "ls", "-J"]);

    if (!ok) {
        return undefined;
    }

    try {
        const data = JSON.parse(out) as { tree?: { snapshot?: string } }[];
        const snapshot = data[0]?.tree?.snapshot;

        return typeof snapshot === "string" ? snapshot : undefined;
    } catch {
        return undefined;
    }
}

/** 是否已连接 origin(解析 status 文本里的 Setup repository 行) */
export function originConnected(): boolean {
    const { out } = miseCapture(["status"]);
    const line = /Setup repository: ([^\n]+)/.exec(out)?.[1];

    return line !== undefined && !line.startsWith("none");
}

/** 连接 origin(非交互) */
export function originSet(url: string, branch = "main"): boolean {
    return mise(["origin", "set", url, "--branch", branch, "--sync", "sync", "-y"]);
}

/** 发布 + 抓取;fetchOnly=true 时只抓取 */
export function sync(fetchOnly: boolean): { ok: boolean; out: string } {
    const args = ["sync"];

    if (fetchOnly) {
        args.push("--fetch-only");
    }

    return miseCapture(args, true);
}

export interface PullOptions {
    readonly dryRun?: boolean;
    readonly takeRemoteAll?: boolean;
}

/** pull:把远程共享内容写进活文件 */
export function pull(options: PullOptions = {}): { ok: boolean; out: string } {
    const args = ["pull", "-y"];

    if (options.takeRemoteAll) {
        args.push("--take-remote-all");
    }

    if (options.dryRun) {
        args.push("--dry-run");
    }

    return miseCapture(args, true);
}

/** conflicts:列出同步冲突 */
export function conflicts(): { ok: boolean; out: string } {
    return miseCapture(["conflicts"], true);
}

/** diff:本地与已保存检查点的差异(push 前的预览) */
export function diff(): { ok: boolean; out: string } {
    return miseCapture(["diff"], true);
}

/** mise dot status 文本里是否有待应用的远程变更 */
export function incomingPending(): boolean {
    if (!available()) {
        return false;
    }

    const { out } = miseCapture(["status"]);

    return /incoming change\(s\) pending/.test(out);
}
