import { existsSync, renameSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

// 公共路径与配置读写(~/.config/omarchy.sync/config,KEY=VALUE 格式)。
// 对应旧版 src/common.lua 的路径与配置部分。

const HOME = homedir();

// 命名规范从 omarsync 改为 omarchy.sync 后的一次性数据目录迁移:
// 旧目录存在且新目录不存在时整体改名,保留 scope/信任密钥/镜像。
// 迁移失败只警告不崩溃(下次启动会重试)。
function migrateLegacyDir(legacy: string, current: string): void {
    if (!existsSync(legacy) || existsSync(current)) {
        return;
    }

    try {
        renameSync(legacy, current);
    } catch (error) {
        console.warn(`omarchy.sync: 无法迁移旧目录 ${legacy} -> ${current}:`, error);
    }
}

migrateLegacyDir(join(HOME, ".config", "omarsync"), join(HOME, ".config", "omarchy.sync"));
migrateLegacyDir(join(HOME, ".local", "state", "omarsync"), join(HOME, ".local", "state", "omarchy.sync"));

export const paths = {
    /** 本机配置目录(信任文件、scope、plugins-skip 都在这,永不上传) */
    configDir: join(HOME, ".config", "omarchy.sync"),
    configFile: join(HOME, ".config", "omarchy.sync", "config"),
    /** 状态目录(镜像、备份、applied 印章、last.log) */
    stateDir: join(HOME, ".local", "state", "omarchy.sync"),
    mirrorDir: join(HOME, ".local", "state", "omarchy.sync", "repo"),
    backupDir: join(HOME, ".local", "state", "omarchy.sync", "backup"),
    scopeFile: join(HOME, ".config", "omarchy.sync", "scope"),
    pluginsSkipFile: join(HOME, ".config", "omarchy.sync", "plugins-skip"),
    trustedKeysFile: join(HOME, ".config", "omarchy.sync", "trusted-keys"),
    appliedStamp: join(HOME, ".local", "state", "omarchy.sync", "applied"),
    lastLog: join(HOME, ".local", "state", "omarchy.sync", "last.log"),
    lockFile: join(HOME, ".local", "state", "omarchy.sync", "omarchy.sync.lock"),
    statusJson: join(HOME, ".local", "state", "omarchy.sync", "status.json"),
} as const;

/** 读配置项(KEY=VALUE,取最后一处出现,与旧版一致);不存在返回 undefined */
export function configGet(key: string, readFile: (path: string) => string | undefined): string | undefined {
    const data = readFile(paths.configFile);

    if (data === undefined) {
        return undefined;
    }

    let value: string | undefined;

    for (const line of data.split("\n")) {
        const match = /^([A-Z_]+)=(.*)$/.exec(line);

        if (match && match[1] === key) {
            value = match[2];
        }
    }

    return value;
}
