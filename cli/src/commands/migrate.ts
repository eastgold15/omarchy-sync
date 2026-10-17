import { isDir } from "../lib/exec";
import { git } from "../lib/git";
import { die, log, readTextFile } from "../lib/log";
import * as mise from "../lib/mise";
import { configGet, paths } from "../lib/paths";
import { readScope, reconcile } from "../lib/scope";
import { ensureDotfilesRepo } from "./init";

// migrate:老格式迁移——镜像里还有 home/ 目录,或已配置但 mise 未连接。
// 对应旧版 needs_migrate 与 cmd_migrate。

export function needsMigrate(): boolean {
    const mirror = paths.mirrorDir;

    if (!isDir(`${mirror}/.git`)) {
        return false;
    }

    if (isDir(`${mirror}/home`)) {
        return true;
    }

    return configGet("REPO", readTextFile) !== undefined && mise.available() && !mise.originConnected();
}

export function executeMigrate(): void {
    if (!isDir(`${paths.mirrorDir}/.git`)) {
        die("未初始化。运行: omarchy.sync init");
    }

    const mirror = paths.mirrorDir;
    const branch = configGet("BRANCH", readTextFile) ?? "main";

    log.info("迁移到 mise dot 布局");

    // 1. 建立 dotfiles 仓库并发布当前文件
    ensureDotfilesRepo();

    if (mise.available() && mise.originConnected()) {
        reconcile(readScope(paths.scopeFile));

        if (mise.save() === undefined) {
            die("迁移过程中 mise dot save 失败");
        }

        const { ok, out } = mise.sync(false);

        if (!ok) {
            die(`迁移过程中 mise dot sync 失败: ${out}`);
        }
    } else {
        log.warn("mise dot origin 未连接;dotfiles 未迁移");
    }

    // 2. 元数据仓库移除旧的 home/ 镜像(历史里仍可找回)
    if (isDir(`${mirror}/home`)) {
        git(["-C", mirror, "rm", "-rq", "home"]);
        git(["-C", mirror, "commit", "-S", "-m", "drop file mirror; dotfiles moved to mise history"]);
        git(["-C", mirror, "push", "--quiet", "-u", "origin", `HEAD:${branch}`]);
        log.info("已移除旧文件镜像(仍可从 git 历史找回)");
    }

    log.info(`迁移完成;旧备份在 ${paths.backupDir},可手动删除`);
}
