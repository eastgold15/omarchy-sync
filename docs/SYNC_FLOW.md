# 同步流程(3.x 纯 mise deploy)

核心模型:**配置仓库是一个普通私有 git 仓库,git 负责同步,`mise dot apply` 负责部署。** 没有 track、没有 history 分支、没有签名门。

```
              ┌──────────────────────────────────┐
              │ 私有 GitHub: eastgold15/omarchy-config │
              │ 唯一分支 main(普通 git 历史)         │
              └──────────────┬───────────────────┘
                             │ git push / pull --ff-only
              ┌──────────────┴───────────────┐
              │  本机仓库 ~/Documents/GitHub/  │
              │  omarchy-config(git 工作区)    │
              └──────────────┬───────────────┘
                             │ mise dot apply
                  symlink-each 组 + copy 条目
                             ▼
              ~/.config、~/.local、~/.cc-switch …(live 配置)
```

## push —— 本机改动上传

入口:`omarsync push`(面板手动,浮动终端审阅)或 `omarsync push --yes`(面板自动定时器)。

```
executePush()
  ├─ 1. 前置:collectRepoState() 确认仓库存在且是 git 工作树,否则 die
  ├─ 2. mise dot add --changed
  │      把 copy 模式下被应用改写的 live 文件回收到源
  │      (cc-switch.db、FlClash 偏好;symlink 组的改动本就直接落在源上)
  │      失败只 warn 不中断——copy 回收失败不应挡住普通配置提交
  ├─ 3. git add -A
  ├─ 4. git diff --cached --name-only 为空 → "没有需要推送的改动",温和退出
  ├─ 5. git diff --cached --stat 展示给真人审阅
  ├─ 6. 非 --yes 时终端 confirm(y/N);取消则保留暂存区退出
  ├─ 7. git commit -m "sync: <主机名> <YYYY-MM-DD HH:MM>"
  ├─ 8. 有 upstream → git push;无 upstream → git push -u origin main
  └─ 9. OMARSYNC_NOTIFY=1 时 notify-send,并刷新 status.json
```

copy 回收的判定基于**内容比对**:只改 mtime(touch)不会产生 differs,没有假脏状态。

## apply —— 远程改动落地

入口:`omarsync apply`(面板按钮在 behind>0 时出现,浮动终端执行)。

```
executeApply()
  ├─ 1. collectRepoState();工作区 dirty → die,要求先 push 或 stash
  ├─ 2. behind = 0 → 跳过 pull,直接进第 4 步
  ├─ 3. git pull --ff-only
  │      只接受快进;远程与本地分叉时拒绝隐式 merge,把决定权留给人
  └─ 4. mise -C <repo> dot apply
         按 mise.toml 对账:
         ├─ symlink-each 组:逐文件建/修符号链接,容器目录自动创建
         ├─ copy 条目:源内容复制到 live 目标
         └─ --prune 语义:源已删除的旧链接标记 orphaned,apply --prune 清理
```

`--commit`/`--yes` 参数仍被接收但忽略,仅为兼容旧面板调用;新架构不钉 sha,远程是私有仓库的普通 main 分支。

## 状态采集(status)

`collectRepoState()` 全部走原生 git,不再有任何 mise history 参与:

| 字段 | 来源 |
|---|---|
| `initialized` | 仓库路径下存在 `.git` 且 `rev-parse --is-inside-work-tree` 为 true |
| `branch` | `symbolic-ref --short HEAD` |
| `repo` | origin URL 经 `parseRemote` 解析出 owner/name(兼容 https 与 ssh) |
| `dirty`/`changedFiles` | `status --porcelain -uall`,前 30 条供面板展示 |
| `behind`/`ahead` | 有 upstream 时先 `fetch` 再 `rev-list --left-right --count`;无 upstream 记 0 |
| `remoteCommit` | upstream 尖端的 40 位 sha(面板正则门依赖) |
| `error` | fetch 失败时置 "could not fetch origin",本地视角照常输出 |

面板兼容字段固定为:`remoteSigned:true`、`remoteSignature:"trusted"`、`hasTrustedKeys:true`、`firstApply:false`、`pinnedCommit:""`、`signerFingerprint:""`——签名门移除后让面板的 apply 门自然敞开。

## 冲突场景

| 场景 | 行为 |
|---|---|
| 两台机器改同一文件 | push 时 git 拒绝非快进;apply 的 `pull --ff-only` 同样拒绝分叉。人在仓库里按普通 git 冲突流程解决,没有私有合并器 |
| 本机有未提交改动时 apply | 直接 die,不碰工作区 |
| copy 文件被应用改写 | 下次 push 的 `add --changed` 自动回收进源,作为普通 git 改动接受审阅 |
| 源里删了文件 | live 符号链接变 orphaned,`mise dot apply --prune` 清理 |
| 运行态垃圾混入仓库目录 | `manifest = "git"` 白名单兜底:未进 git 索引的文件物理上不可部署 |

## 并发与安全

- `push`/`apply` 经 wrapper 持 `flock` 写锁(`~/.local/state/omarsync/omarsync.lock`),非阻塞,抢锁失败立即退出;`status`/`doctor` 只读不取锁。
- wrapper 以 `env -i` 清洗环境,PATH 固定为系统可信目录,`GIT_TERMINAL_PROMPT=0` 杜绝挂起式凭据交互。
