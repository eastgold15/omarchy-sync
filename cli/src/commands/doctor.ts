import { isDir, resolveTool } from "../lib/exec";
import { ghInstalled, ghLoggedIn, githubUser } from "../lib/gh";
import { log } from "../lib/log";
import * as mise from "../lib/mise";
import { configGet, paths } from "../lib/paths";
import { readTextFile } from "../lib/log";

// doctor:依赖体检。对应旧版 cmds.lua 的 cmd_doctor。

export function executeDoctor(): number {
    let missing = false;

    for (const tool of ["git", "rsync", "node", "mise"]) {
        if (resolveTool(tool)) {
            log.info(`ok  ${tool}`);
        } else {
            log.warn(`missing ${tool}${tool === "mise" ? "。运行: omarchy pkg add mise" : ""}`);
            missing = true;
        }
    }

    if (ghInstalled()) {
        if (ghLoggedIn()) {
            log.info(`ok  gh (${githubUser() ?? "?"})`);
        } else {
            log.warn("gh 已安装但未登录。运行: omarchy.sync login");
        }
    } else {
        log.warn("missing gh。运行: omarchy pkg add github-cli");
        missing = true;
    }

    if (mise.available()) {
        if (mise.featureOk()) {
            log.info("ok  mise dot");
        } else {
            log.warn("mise dot 不工作;检查 `mise dot status`");
            missing = true;
        }

        if (mise.originConnected()) {
            log.info("ok  mise dot origin 已连接");
        } else {
            log.warn("mise dot origin 未连接。运行: omarchy.sync init");
        }
    }

    if (isDir(`${paths.mirrorDir}/.git`)) {
        const repo = configGet("REPO", readTextFile) ?? "";
        const branch = configGet("BRANCH", readTextFile) ?? "main";

        log.info(`ok  镜像 ${paths.mirrorDir}(${repo} ${branch})`);
    } else {
        log.warn("镜像未初始化。运行: omarchy.sync init");
    }

    return missing ? 1 : 0;
}
