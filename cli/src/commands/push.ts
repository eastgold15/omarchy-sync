import { mkdirSync, writeFileSync } from "node:fs";

import { openInEditor } from "../lib/editor";
import { isDir } from "../lib/exec";
import { git, gitCapture } from "../lib/git";
import { die, log } from "../lib/log";
import { collectInto } from "../lib/meta";
import * as mise from "../lib/mise";
import { discardRemoteScope, dotOriginUrl, ensureIdentity, notify } from "../lib/omarchy";
import { configGet, paths } from "../lib/paths";
import { readTextFile } from "../lib/log";
import { readScope, reconcile } from "../lib/scope";
import { ensurePushSigner, preparePushBranch, signUntrustedTip } from "../lib/trust";
import { confirm, hostnameSafe, iso8601 } from "../lib/util";

// push:对齐 track → 手动存检查点 → 元数据签名提交 → 发布 mise 历史。
// 按 SYNC_FLOW:发布前展示 mise dot diff 预览,人工 y 确认才推。对应旧版 cmd_push。

function requireMirror(): string {
    if (!isDir(`${paths.mirrorDir}/.git`)) {
        die("未初始化。运行: omarchy.sync init");
    }

    return paths.mirrorDir;
}

function remoteHasBranch(mirror: string, branch: string): boolean {
    return gitCapture(["-C", mirror, "ls-remote", "--exit-code", "--heads", "origin", branch]).ok;
}

export async function executePush(skipConfirm = false): Promise<void> {
    const mirror = requireMirror();
    const branch = configGet("BRANCH", readTextFile) ?? "main";

    ensurePushSigner();
    ensureIdentity(mirror);
    preparePushBranch(mirror, branch);

    // 文件同步:对齐 track 集合,保存检查点,记录历史头
    let miseHead: string | undefined;

    if (mise.available()) {
        reconcile(readScope(paths.scopeFile));

        const saved = mise.save();

        if (saved === undefined) {
            die("mise dot save 失败");
        }

        if (saved) {
            log.info("mise dot 检查点已保存");
        }

        miseHead = mise.headSnapshot();
    } else {
        log.warn("mise 未安装;只推元数据。运行: omarchy pkg add mise");
    }

    // 推之前先看这次要发布什么:元数据完整 diff + 文件差异,
    // 汇总写进 pending-push.diff 并用用户的编辑器打开审阅
    collectInto(mirror, miseHead);
    git(["-C", mirror, "add", "-A"]);

    const metaStat = gitCapture(["-C", mirror, "diff", "--cached", "--stat"]).out;
    const metaDiff = gitCapture(["-C", mirror, "diff", "--cached", "--color=never"]).out;
    const miseDiff = mise.available() ? mise.diff().out : "";

    if (/\S/.test(metaStat)) {
        log.info("元数据变化:");

        for (const line of metaStat.split("\n")) {
            log.info(`  ${line}`);
        }
    } else {
        log.info("元数据无变化");
    }

    let review = "";

    if (/\S/.test(metaDiff)) {
        review += `===== 元数据 diff(omarchy-config)=====\n${metaDiff}\n`;
    }

    if (/\S/.test(miseDiff)) {
        log.info("文件差异(mise dot diff):");

        for (const line of miseDiff.split("\n")) {
            log.info(`  ${line}`);
        }

        review += `===== 文件 diff(omarchy-dotfiles)=====\n${miseDiff}\n`;
    }

    if (review !== "") {
        mkdirSync(paths.stateDir, { recursive: true });

        const reviewFile = `${paths.stateDir}/pending-push.diff`;

        writeFileSync(reviewFile, review);
        log.info(`完整 diff 已写入 ${reviewFile}`);
        openInEditor([reviewFile]);
    }

    // 发布默认要人工确认;--yes 只给面板的自动推送用
    if (!skipConfirm && !(await confirm("发布这份快照到远程仓库?"))) {
        die("已取消,未推送");
    }

    if (gitCapture(["-C", mirror, "diff", "--cached", "--quiet"]).ok) {
        log.info("没有要提交的本地变化");
    } else {
        git(["-C", mirror, "commit", "-S", "-m", `sync from ${hostnameSafe()} @ ${iso8601()}`]);
        log.info("已提交本地变化");
    }

    if (remoteHasBranch(mirror, branch)) {
        if (!git(["-C", mirror, "pull", "--quiet", "--rebase", "-X", "theirs", "origin", branch])) {
            git(["-C", mirror, "rebase", "--abort"]);
            die(`rebase 到 origin/${branch} 失败`);
        }
    }

    // rebase 可能把远程的 scope 文件带回来;它不是策略
    discardRemoteScope(mirror);

    if (!gitCapture(["-C", mirror, "diff", "--cached", "--quiet"]).ok) {
        git(["-C", mirror, "commit", "-S", "-m", "drop untrusted remote scope file"]);
    }

    signUntrustedTip(mirror);

    if (!git(["-C", mirror, "push", "--quiet", "-u", "origin", `HEAD:${branch}`])) {
        die("git push 失败");
    }

    log.info(`已推送 ${branch}`);

    // 元数据先行,然后发布 mise 历史(顺序保证签名提交记录的 miseHead 已存在)
    if (mise.available()) {
        const { ok, out } = mise.sync(false);

        if (!ok) {
            log.warn(`mise dot sync 失败: ${out}`);
            log.warn("解决冲突: mise dot conflicts / mise dot pull --take-remote <path>");
            process.exitCode = 1;

            return;
        }

        log.info("mise dot 历史已发布");
    }

    notify("omarchy.sync", `已推送 ${configGet("REPO", readTextFile) ?? ""}`);
}
