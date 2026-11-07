import { resolveTool } from "../lib/exec";
import { gitOut } from "../lib/git";
import * as mise from "../lib/mise";
import { paths } from "../lib/paths";
import { collectRepoState } from "../lib/repo";

// 依赖与仓库体检。纯只读,退出码:0 健康,1 有问题。

interface Check {
    name: string;
    ok: boolean;
    detail: string;
}

export function executeDoctor(): number {
    const checks: Check[] = [];

    for (const tool of ["git", "node", "mise", "gh", "flock"] as const) {
        const bin = resolveTool(tool);

        checks.push({ name: tool, ok: bin !== undefined, detail: bin ?? "未在可信目录中找到" });
    }

    const state = collectRepoState();

    checks.push({
        name: "config repo",
        ok: state.initialized,
        detail: state.initialized ? paths.configRepo : "仓库不存在",
    });

    if (state.initialized) {
        checks.push({ name: "origin", ok: state.remote !== "", detail: state.remote || "未配置 origin" });
        checks.push({
            name: "upstream",
            ok: (gitOut(paths.configRepo, ["rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{upstream}"]) ?? "") !== "",
            detail: state.branch || "(detached)",
        });

        const miseStatus = mise.dotStatus();

        checks.push({
            name: "mise trust",
            ok: miseStatus.ok,
            detail: miseStatus.ok ? "配置受信任" : miseStatus.stderr.trim() || "mise dot status 失败,试试 mise trust",
        });
    }

    let failed = 0;

    for (const check of checks) {
        const mark = check.ok ? "✓" : "✗";

        process.stdout.write(`${mark} ${check.name.padEnd(12)} ${check.detail}\n`);

        if (!check.ok) {
            failed += 1;
        }
    }

    return failed === 0 ? 0 : 1;
}
