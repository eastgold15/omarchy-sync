import { isDir } from "../lib/exec";
import { log, readTextFile } from "../lib/log";
import { configGet, paths } from "../lib/paths";

// status 只读版(脚手架阶段):显示仓库配置、镜像位置、本机策略文件。
// 完整版(dirty/behind/签名状态,供面板 --json)在核心移植阶段实现。

export function executeStatus(json: boolean): void {
    const repo = configGet("REPO", readTextFile) ?? "";
    const branch = configGet("BRANCH", readTextFile) ?? "main";
    const initialized = isDir(`${paths.mirrorDir}/.git`);

    if (json) {
        process.stdout.write(
            `${JSON.stringify(
                {
                    repo,
                    branch,
                    initialized,
                    mirror: initialized ? paths.mirrorDir : undefined,
                },
                undefined,
                2,
            )}\n`,
        );

        return;
    }

    if (!initialized) {
        log.warn("未初始化。运行: omarsync init");

        return;
    }

    log.info(`仓库 ${repo}(${branch})`);
    log.info(`镜像 ${paths.mirrorDir}`);
    log.info(`本机 scope ${paths.scopeFile}`);
}
