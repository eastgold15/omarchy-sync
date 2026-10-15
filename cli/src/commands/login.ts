import { gh, ghInstalled, ghLoggedIn, githubUser } from "../lib/gh";
import { die, log } from "../lib/log";
import { stdinIsTty } from "../lib/util";

// login:GitHub CLI 登录(浏览器流程),已登录则只刷新 git 凭据。对应旧版 cmd_login。

export function executeLogin(): void {
    if (!ghInstalled()) {
        die("GitHub CLI 未安装。运行: omarchy pkg add github-cli");
    }

    if (ghLoggedIn()) {
        log.info(`已登录 ${githubUser() ?? "?"}`);
        gh(["auth", "setup-git"]);

        return;
    }

    if (!stdinIsTty()) {
        die("GitHub 登录需要终端。运行: omarsync login");
    }

    gh(["auth", "login", "-h", "github.com", "-p", "https", "-w"]);
    gh(["auth", "setup-git"]);
    log.info(`已登录 ${githubUser() ?? "?"}`);
}
