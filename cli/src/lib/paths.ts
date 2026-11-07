import { homedir } from "node:os";
import { join } from "node:path";

// 纯 deploy 架构的路径常量。
// 唯一真相源是一个普通 git 仓库(dotfiles.root 指向它),
// 插件身份仍是 omarsync:状态目录名不变,面板的 FileView 监听路径不用改。

const HOME = homedir();

export const paths = {
    /** 配置仓库(源文件 + mise.toml),可用 OMARSYNC_REPO 覆盖 */
    configRepo: process.env["OMARSYNC_REPO"] ?? join(HOME, "Documents", "GitHub", "omarchy-config"),
    /** 状态目录(status.json、last.log、锁) */
    stateDir: join(HOME, ".local", "state", "omarsync"),
    statusJson: join(HOME, ".local", "state", "omarsync", "status.json"),
    lastLog: join(HOME, ".local", "state", "omarsync", "last.log"),
    lockFile: join(HOME, ".local", "state", "omarsync", "omarsync.lock"),
} as const;
