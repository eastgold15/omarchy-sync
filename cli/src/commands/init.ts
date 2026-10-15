import { mkdirSync } from "node:fs";

import { isDir } from "../lib/exec";
import { gh, ghCapture, ghInstalled, ghLoggedIn, githubUser } from "../lib/gh";
import { git, gitOut } from "../lib/git";
import { die, log, readTextFile } from "../lib/log";
import * as mise from "../lib/mise";
import { dotOriginUrl, dotRepoName, ensureIdentity } from "../lib/omarchy";
import { paths } from "../lib/paths";
import { readScope, reconcile, ensureLocalScope } from "../lib/scope";
import { checkoutPinnedCommit } from "../lib/trust";
import { configSet } from "../lib/util";

// init:创建/连接元数据仓库与 dotfiles 仓库,钉住已有提交。
// 关键顺序:新机器连接已有仓库时,先整体 adopt 远程历史(pull),
// 绝不在 pull 之前 reconcile/save——否则两边历史变成 "unrelated",mise 拒绝合并。
// 对应旧版 cmd_init 与 ensure_dotfiles_repo。

function validRepoName(name: string): boolean {
    return /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(name);
}

/** 确保 dotfiles 仓库存在并连接 mise origin(幂等) */
export function ensureDotfilesRepo(): void {
    if (!mise.available()) {
        log.warn("mise 未安装;跳过 dotfiles 仓库。运行: omarchy pkg add mise");

        return;
    }

    if (mise.originConnected()) {
        return;
    }

    const url = dotOriginUrl();

    if (!process.env["OMARSYNC_DOT_ORIGIN"] && !process.env["OMARSYNC_ORIGIN"]) {
        // 只有 GitHub 流程才负责建仓库
        const dotRepo = dotRepoName();
        const name = dotRepo.split("/").pop() ?? dotRepo;

        if (!ghCapture(["repo", "view", dotRepo]).ok) {
            log.info(`创建私有仓库 ${dotRepo}`);
            gh(["repo", "create", name, "--private", "--description", "Omarchy dotfiles synced by omarsync via mise"]);
        }
    }

    if (!mise.originSet(url, "main")) {
        log.warn(`无法连接 mise dot origin ${url}`);

        return;
    }

    log.info(`已连接 mise dot origin ${url}`);

    if (mise.incomingPending()) {
        // 接收方:直接采用远程历史(含远程声明的 track 条目)
        const pull = mise.pull({ takeRemoteAll: true });

        if (!pull.ok) {
            log.warn(`mise adopt pull 失败: ${pull.out}`);
        }
    } else {
        // 第一台机器(空仓库):从 scope 建立跟踪
        reconcile(readScope(paths.scopeFile));
    }
}

export function executeInit(repoArg: string | undefined): void {
    let repo = repoArg ?? "";

    const user = githubUser();

    if (!process.env["OMARSYNC_ORIGIN"]) {
        if (!ghInstalled()) {
            die("GitHub CLI 未安装。运行: omarchy pkg add github-cli");
        }

        if (!ghLoggedIn()) {
            die("未登录 GitHub。运行: omarsync login");
        }

        if (!user) {
            die("读取不到 GitHub 用户");
        }

        if (repo === "") {
            repo = `${user}/omarchy-config`;
        }

        if (!validRepoName(repo)) {
            die(`仓库名必须形如 owner/name: ${repo}`);
        }

        if (!ghCapture(["repo", "view", repo]).ok) {
            const [owner, name] = repo.split("/");

            if (owner !== user) {
                die(`仓库 ${repo} 不存在,也不属于 ${user}`);
            }

            log.info(`创建私有仓库 ${repo}`);
            gh(["repo", "create", name!, "--private", "--description", "Omarchy configuration synced by omarsync"]);
        }
    } else {
        if (repo === "") {
            repo = "local/omarchy-config";
        }

        if (!validRepoName(repo)) {
            die(`仓库名必须形如 owner/name: ${repo}`);
        }
    }

    const branch = "main";
    const url = process.env["OMARSYNC_ORIGIN"] || `https://github.com/${repo}.git`;
    const mirror = paths.mirrorDir;

    mkdirSync(paths.stateDir, { recursive: true });

    if (isDir(`${mirror}/.git`)) {
        if (gitOut(["-C", mirror, "remote", "get-url", "origin"])) {
            git(["-C", mirror, "remote", "set-url", "origin", url]);
        } else {
            git(["-C", mirror, "remote", "add", "origin", url]);
        }
    } else {
        mkdirSync(mirror, { recursive: true });
        git(["-C", mirror, "init", "-b", branch]);
        git(["-C", mirror, "remote", "add", "origin", url]);

        if (
            git(["-C", mirror, "fetch", "--quiet", "origin", branch]) &&
            gitOut(["-C", mirror, "rev-parse", "--verify", "--quiet", `refs/remotes/origin/${branch}^{commit}`])
        ) {
            const sha = gitOut(["-C", mirror, "rev-parse", "--verify", `refs/remotes/origin/${branch}^{commit}`])!;

            checkoutPinnedCommit(mirror, sha);
            log.info(`已钉住 ${sha}`);
        } else {
            log.info(`远程分支 ${branch} 是空的`);
        }
    }

    // scope 示例文件在仓库根目录
    ensureLocalScope(new URL("../..", import.meta.url).pathname);
    ensureIdentity(mirror);
    configSet("REPO", repo);
    configSet("BRANCH", branch);
    log.info(`已初始化 ${repo} 于 ${mirror}`);

    ensureDotfilesRepo();
}
