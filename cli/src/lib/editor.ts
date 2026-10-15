import { spawn } from "node:child_process";

import { resolveTool } from "./exec";
import { log } from "./log";

// 用用户的编辑器打开文件审阅(非阻塞;用户看完回终端按 y)。
// 优先级:OMARSYNC_EDITOR → VISUAL → EDITOR → omarchy-launch-editor → code。

function editorCommand(): string | undefined {
    const fromEnv = process.env["OMARSYNC_EDITOR"] ?? process.env["VISUAL"] ?? process.env["EDITOR"];

    if (fromEnv && fromEnv.trim() !== "") {
        return fromEnv.trim();
    }

    const launcher = resolveTool("omarchy-launch-editor");

    if (launcher) {
        return launcher;
    }

    return resolveTool("code");
}

export function openInEditor(files: readonly string[]): void {
    if (files.length === 0) {
        return;
    }

    const editor = editorCommand();

    if (!editor) {
        log.warn("找不到可用的编辑器;diff 只在终端显示");

        return;
    }

    const quoted = files.map((f) => `'${f.replaceAll("'", "'\\''")}'`).join(" ");

    // 编辑器可能带参数(如 "code --wait"),走 shell;后台启动不阻塞
    const child = spawn(`${editor} ${quoted}`, {
        detached: true,
        shell: true,
        stdio: "ignore",
    });

    child.unref();
    log.info(`已用编辑器打开审阅: ${editor}`);
}
