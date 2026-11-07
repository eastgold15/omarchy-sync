import { git } from "../lib/git";
import { log, die } from "../lib/log";
import * as mise from "../lib/mise";
import { paths } from "../lib/paths";
import { collectRepoState } from "../lib/repo";
import { refreshStatusFile } from "./status";

// apply:快进拉取远程 → mise dot apply 同步链接与 copy 文件。
// --commit 仅为兼容旧面板的调用形式,新架构不需要钉 sha(普通 git 分支,无签名门)。

export function executeApply(options: { commit?: string; yes?: boolean }): void {
    void options;

    const repo = paths.configRepo;
    const state = collectRepoState();

    if (!state.initialized) {
        die(`配置仓库不存在或不是 git 仓库: ${repo}`);
    }

    if (!mise.available()) {
        die("mise 不可用,无法部署");
    }

    // 工作区有未提交改动时,ff 拉取可能失败或覆盖现场;先让用户自己处理
    if (state.dirty) {
        die("本地有未提交改动,请先 push 或 stash 后再 apply");
    }

    if ((state.behind ?? 0) === 0) {
        log.info("远程没有新提交,直接执行 mise dot apply");
    } else {
        log.info(`快进拉取 ${state.behind} 个远程提交…`);

        // ff-only:绝不产生隐式 merge commit;分叉时明确报错让人处理
        if (!git(repo, ["pull", "--ff-only"])) {
            die("git pull --ff-only 失败(历史可能已分叉),请在仓库里手动解决后重试");
        }
    }

    log.info("执行 mise dot apply…");

    if (!mise.dotApply()) {
        die("mise dot apply 失败,见上方输出");
    }

    log.info("应用完成");
    refreshStatusFile();
}
