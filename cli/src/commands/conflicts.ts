import { spawnSync } from "node:child_process";

import { die, log } from "../lib/log";
import * as mise from "../lib/mise";
import { stdinIsTty } from "../lib/util";

// conflicts:列出 mise dot 同步冲突,并用本机编辑器打开审阅。
// 按 SYNC_FLOW:最好使用用户的编辑器打开查看更改。

export function executeConflicts(): void {
    if (!mise.available()) {
        die("mise 未安装。运行: omarchy pkg add mise");
    }

    const { out } = mise.conflicts();

    if (!/\S/.test(out)) {
        log.info("没有同步冲突");

        return;
    }

    for (const line of out.split("\n")) {
        log.info(`  ${line}`);
    }

    log.info("解决方式:编辑对应文件后运行 mise dot save;或整体采用远程: mise dot pull --take-remote-all");

    // 用用户的编辑器打开冲突文件审阅($EDITOR 是用户自己的选择,不走可信目录)
    const editor = process.env["VISUAL"] ?? process.env["EDITOR"];

    if (!editor || !stdinIsTty()) {
        return;
    }

    const home = process.env["HOME"] ?? "";
    const files = out
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.startsWith("~/") || line.startsWith(`${home}/`));

    if (files.length === 0) {
        return;
    }

    log.info(`用 ${editor} 打开 ${files.length} 个冲突文件`);

    // editor 可能带参数(如 "code --wait"),走 shell;路径只含白名单字符以外的统一加引号
    const quoted = files.map((f) => `'${(f.startsWith("~/") ? `${home}/${f.slice(2)}` : f).replaceAll("'", "'\\''")}'`).join(" ");

    spawnSync(`${editor} ${quoted}`, { shell: true, stdio: "inherit" });
}
