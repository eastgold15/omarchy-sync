import { resolveTool, run } from "../lib/exec";
import { git, gitCapture, gitOut } from "../lib/git";
import { log, die } from "../lib/log";
import * as mise from "../lib/mise";
import { paths } from "../lib/paths";
import { collectRepoState } from "../lib/repo";
import { confirm, hostnameSafe, iso8601 } from "../lib/util";
import { refreshStatusFile } from "./status";

// push:copy 回写 → 暂存 → 终端审阅 diff → 确认 → 提交 → 推送。
// 普通 git 仓库的行级合并取代了旧架构的 manifest 整字段合并,不再有 enrollment conflict。

function notify(message: string): void {
    if (process.env["OMARSYNC_NOTIFY"] !== "1") {
        return;
    }

    const bin = resolveTool("notify-send");

    if (bin) {
        run(bin, ["Omarsync", message]);
    }
}

export async function executePush(yes: boolean, message?: string): Promise<void> {
    const repo = paths.configRepo;
    const initial = collectRepoState();

    if (!initial.initialized) {
        die(`配置仓库不存在或不是 git 仓库: ${repo}`);
    }

    // 1. copy 模式文件(cc-switch.db、FlClash 偏好)被应用改写后,先回收到源
    const adopted = mise.adoptChanged();

    if (!adopted.ok && /\S/.test(adopted.stderr)) {
        log.warn(`mise dot add --changed 未完全成功(继续执行): ${adopted.stderr.trim()}`);
    }

    // 2. 暂存全部改动(白名单由 .gitignore + 人工 git add 纪律保证,源仓库不入库运行态文件)
    if (!git(repo, ["add", "-A"])) {
        die("git add 失败");
    }

    const staged = gitOut(repo, ["diff", "--cached", "--name-only"]) ?? "";

    if (staged === "") {
        log.info("没有需要推送的改动");
        refreshStatusFile();

        return;
    }

    const files = staged.split("\n").filter((line) => line !== "");

    log.info(`本次发布 ${files.length} 个文件:`);

    if (!git(repo, ["diff", "--cached", "--stat"])) {
        die("无法生成 diff 统计");
    }

    // 3. 真人在终端里审阅后确认;--yes 供面板的自动 push 定时器使用
    if (!yes) {
        const ok = await confirm("确认提交并推送到远程?");

        if (!ok) {
            // 保留暂存区,用户可以自己接着处理
            die("已取消,改动仍在暂存区");
        }
    }

    const commitMessage = message && message !== "" ? message : `sync: ${hostnameSafe()} ${iso8601().slice(0, 16).replace("T", " ")}`;

    if (!git(repo, ["commit", "-m", commitMessage])) {
        die("git commit 失败");
    }

    // 4. 推送;本地分支还没有 upstream 时自动建立跟踪
    const upstream = gitOut(repo, ["rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{upstream}"]);
    const pushed = upstream
        ? git(repo, ["push"])
        : git(repo, ["push", "-u", "origin", initial.branch || "main"]);

    if (!pushed) {
        const detail = gitCapture(repo, ["push"]).stderr.trim();

        die(`git push 失败${detail === "" ? "" : `: ${detail}`}`);
    }

    log.info("推送完成");
    notify(`${files.length} 个文件已推送`);
    refreshStatusFile();
}
