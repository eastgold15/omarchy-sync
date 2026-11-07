import { capture, resolveTool, run } from "./exec";
import { paths } from "./paths";

// mise dot 薄封装。新架构的所有部署动作都委托给 mise,本文件不含任何业务判断。

export function miseBin(): string | undefined {
    return resolveTool("mise");
}

export function available(): boolean {
    return miseBin() !== undefined;
}

/** mise dot apply:按仓库 mise.toml 把链接/copy 文件同步到目标 */
export function dotApply(): boolean {
    const bin = miseBin();

    if (!bin) {
        return false;
    }

    return run(bin, ["-C", paths.configRepo, "dot", "apply"]);
}

/**
 * 把 copy 模式下应用自写的改动回收到源(cc-switch.db、FlClash 偏好等)。
 * 仅影响 copy 条目;symlink 组的改动本来就直接发生在源上。
 */
export function adoptChanged(): { ok: boolean; stderr: string } {
    const bin = miseBin();

    if (!bin) {
        return { ok: false, stderr: "mise 不可用" };
    }

    const result = capture(bin, ["-C", paths.configRepo, "dot", "add", "--changed"]);

    return { ok: result.code === 0, stderr: result.stderr };
}

/** 只读:mise dot status --json,供 doctor 判断信任/配置健康度 */
export function dotStatus(): { ok: boolean; stdout: string; stderr: string } {
    const bin = miseBin();

    if (!bin) {
        return { ok: false, stdout: "", stderr: "mise 不可用" };
    }

    const result = capture(bin, ["-C", paths.configRepo, "dot", "status", "--json"]);

    return { ok: result.code === 0, stdout: result.stdout, stderr: result.stderr };
}
