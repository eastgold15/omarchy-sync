import { isDir } from "../lib/exec";
import { die, log } from "../lib/log";
import * as mise from "../lib/mise";
import { configGet, paths } from "../lib/paths";
import { readTextFile } from "../lib/log";
import { checkoutPinnedCommit, resolveRemoteSha } from "../lib/trust";

// pull:只抓取,一个字节都不写进活配置。
// 钉住 origin 分支的完整 commit,抓取 mise 历史,然后停下——
// 下一步是 apply 的"先审阅再应用"。对应旧版 cmd_pull。

function requireMirror(): string {
    if (!isDir(`${paths.mirrorDir}/.git`)) {
        die("未初始化。运行: omarsync init");
    }

    return paths.mirrorDir;
}

export function executePull(): void {
    const mirror = requireMirror();
    const branch = configGet("BRANCH", readTextFile) ?? "main";

    const sha = resolveRemoteSha(mirror, branch);

    checkoutPinnedCommit(mirror, sha);

    if (mise.available()) {
        mise.sync(true); // 只抓取,不写活文件
    }

    log.info(`已钉住 ${sha}`);
    log.info("下一步: omarsync apply --commit " + sha + "(会先展示更改再请你确认)");
}
