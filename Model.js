.pragma library

function pathFromUrl(url) {
  var value = String(url || "")
  if (value.indexOf("file://") === 0)
    value = value.substring(7)
  try {
    value = decodeURIComponent(value)
  } catch (error) {
    // Keep the raw path when a percent-escape is malformed.
  }
  return value
}

function parseStatus(text) {
  try {
    var data = JSON.parse(String(text || ""))
    if (!data || typeof data !== "object")
      return null
    return data
  } catch (error) {
    return null
  }
}

function shellQuote(value) {
  return "'" + String(value).replace(/'/g, "'\\''") + "'"
}

function safeRepo(repo) {
  return /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(String(repo || ""))
}

function fullCommit(value) {
  var sha = String(value || "")
  return /^[0-9a-f]{40}$/.test(sha) ? sha : ""
}

function pluginVersion(manifestText) {
  try {
    var data = JSON.parse(String(manifestText || ""))
    var version = data && data.version ? String(data.version) : ""
    if (/^[A-Za-z0-9][A-Za-z0-9._+-]{0,63}$/.test(version))
      return version
  } catch (error) {
    // Ignore a manifest that is not JSON yet.
  }
  return ""
}

function systemLanguage() {
  var name = ""
  try {
    name = Qt.locale().name || ""
  } catch (error) {
    name = ""
  }
  return /^zh/i.test(String(name)) ? "zh" : "en"
}

function normalizeLanguage(lang) {
  return lang === "zh" ? "zh" : "en"
}

var copy = {
  zh: {
    notLoggedIn: "未登录 GitHub",
    noRepo: "尚未克隆配置仓库",
    checking: "正在检查状态…",
    running: "执行中…",
    notSetUp: "配置仓库尚未就绪",
    dirtyAndBehind: function(n) { return "本地有改动待 push，远程还有 " + n + " 个提交待 apply" },
    dirty: "本地有改动，点 push 上传",
    behind: function(n) { return "远程有 " + n + " 个新提交，点 apply 恢复" },
    ahead: function(n) { return n + " 个提交还没上传到远程" },
    synced: "一切已同步",
    never: "从未",
    justNow: "刚刚",
    minutesAgo: function(n) { return n + " 分钟前" },
    hoursAgo: function(n) { return n + " 小时前" },
    daysAgo: function(n) { return n + " 天前" },
    noPush: "还没有提交过",
    lastPush: function(a) { return "上次提交：" + a.when + "，来自 " + a.host },
    unknownHost: "未知机器",
    version: function(v) { return " · 版本 " + v },
    pushOk: function(a) { return "上次结果：成功，" + a.when + " 来自 " + a.host },
    pushNever: "还没有推送过",
    remoteCommit: function(sha) { return "远程提交 " + sha },
    applyTip: "git 快进拉取后执行 mise dot apply",
    autoPushOn: function(n) { return "每 " + n + " 分钟自动上传本机改动" },
    autoPushOff: "已关闭，开启后默认每 30 分钟上传",
    changes: function(a) {
      return a.extra > 0 ? ("改动：" + a.names + " 等 " + a.extra + " 个文件") : ("改动：" + a.names)
    },
    changesMore: function(n) { return "… 共 " + n + " 个" },
    legend: "暗云：仓库未就绪。云：已同步。红上箭头：需要 push。红下箭头：需要 apply。红叹号：上次失败。",
    viewChanges: "查看改动",
    viewChangesDesc: "用 VS Code 打开这些文件，确认无误再 push",
    doctor: "体检",
    doctorDesc: "检查 git、mise、仓库与信任状态",
    pushRunning: "push（执行中…）",
    pushDesc: "弹出终端，看完 diff 按 y 才提交推送",
    applyRunning: "apply（执行中…）",
    applyDesc: "快进拉取远程改动，再由 mise dot apply 部署到本机",
    scanRunning: "检查中…",
    scan: "检查更新",
    scanDesc: "只检查差异，不同步文件",
    scanTip: "本地有改动 → 显示 push；远程有新提交 → 显示 apply",
    openConfig: "打开配置仓库",
    openConfigDesc: "github.com 上的 omarchy-config",
    viewLog: "查看日志",
    settingsHide: "收起设置",
    settings: "设置",
    scanInterval: "自动检查间隔",
    intervalOff: "关闭，手动检查",
    interval15: "每 15 分钟",
    interval30: "每 30 分钟",
    intervalHour: "每小时",
    interval6: "每 6 小时",
    interval24: "每 24 小时",
    autoPush: "自动 push",
    notify: "桌面通知",
    notifyDesc: "push 完成后弹出通知",
    helpHide: "收起指南",
    help: "使用指南",
    language: "界面语言",
    languageDesc: "向右是英文。没拨过时跟随系统。",
    helpBody: "架构:普通 git 仓库(~/Documents/GitHub/omarchy-config)做唯一真相源,\n" +
      "git 负责同步,mise dot apply 负责部署,没有签名门。\n\n" +
      "这台电脑（日常）:\n" +
      "改完配置点 push,终端里看完 diff 按 y 才上传。中键图标 = push。\n\n" +
      "新电脑（恢复）:\n" +
      "1. git clone 配置仓库并 mise trust\n" +
      "2. 在 ~/.config/mise/config.local.toml 选择本机的 dotfile_groups\n" +
      "3. 点 apply,或终端跑 omarsync apply\n\n" +
      "检查更新 = 只看差异,不同步文件。\n" +
      "copy 模式文件(cc-switch.db、FlClash 偏好)会在 push 前自动回收到源。\n\n" +
      "完整文档：配置仓库里的 README.md"
  },
  en: {
    notLoggedIn: "Not signed in to GitHub",
    noRepo: "Config repo not cloned",
    checking: "Checking status…",
    running: "Working…",
    notSetUp: "Config repo is not ready",
    dirtyAndBehind: function(n) { return "Local changes need a push, and " + n + " remote commit(s) need apply" },
    dirty: "Local changes. Push to upload them",
    behind: function(n) { return n + " new remote commit(s). Apply to restore them" },
    ahead: function(n) { return n + " commit(s) are not on the remote yet" },
    synced: "Everything is in sync",
    never: "never",
    justNow: "just now",
    minutesAgo: function(n) { return n + " minutes ago" },
    hoursAgo: function(n) { return n + " hours ago" },
    daysAgo: function(n) { return n + " days ago" },
    noPush: "No commit yet",
    lastPush: function(a) { return "Last commit: " + a.when + ", from " + a.host },
    unknownHost: "unknown machine",
    version: function(v) { return " · version " + v },
    pushOk: function(a) { return "Last result: ok, " + a.when + " from " + a.host },
    pushNever: "Nothing has been pushed yet",
    remoteCommit: function(sha) { return "Remote commit " + sha },
    applyTip: "git fast-forward pull, then mise dot apply",
    autoPushOn: function(n) { return "Uploads local changes every " + n + " minutes" },
    autoPushOff: "Off. Turning it on uploads every 30 minutes",
    changes: function(a) {
      return a.extra > 0 ? ("Changes: " + a.names + " (" + a.extra + " files)") : ("Changes: " + a.names)
    },
    changesMore: function(n) { return "… " + n + " total" },
    legend: "Faded cloud: repo not ready. Cloud: up to date. Red up: push. Red down: apply. Red !: failed.",
    viewChanges: "Review changes",
    viewChangesDesc: "Open the files in VS Code, then push",
    doctor: "Doctor",
    doctorDesc: "Check git, mise, the repo and trust state",
    pushRunning: "push (working…)",
    pushDesc: "Open a terminal, review the diff, press y to commit and push",
    applyRunning: "apply (working…)",
    applyDesc: "Fast-forward pull, then deploy with mise dot apply",
    scanRunning: "Checking…",
    scan: "Check for updates",
    scanDesc: "Look for differences. Do not sync files",
    scanTip: "Local changes show push. Newer remote commits show apply",
    openConfig: "Open config repo",
    openConfigDesc: "omarchy-config on github.com",
    viewLog: "View log",
    settingsHide: "Hide settings",
    settings: "Settings",
    scanInterval: "Check interval",
    intervalOff: "Off, check manually",
    interval15: "Every 15 minutes",
    interval30: "Every 30 minutes",
    intervalHour: "Every hour",
    interval6: "Every 6 hours",
    interval24: "Every 24 hours",
    autoPush: "Auto push",
    notify: "Desktop notification",
    notifyDesc: "Notify when a push finishes",
    helpHide: "Hide guide",
    help: "Guide",
    language: "Language",
    languageDesc: "To the right is English. Follows the system until you change it.",
    helpBody: "Model: a plain git repo (~/Documents/GitHub/omarchy-config) is the single source of truth.\n" +
      "git syncs, mise dot apply deploys. No signing gate.\n\n" +
      "This machine:\n" +
      "Push after changing configuration. A terminal shows the diff; press y to upload. Middle-click the icon to push.\n\n" +
      "A new machine:\n" +
      "1. git clone the repo and run mise trust\n" +
      "2. Pick this machine's dotfile_groups in ~/.config/mise/config.local.toml\n" +
      "3. Run apply, or omarsync apply in a terminal\n\n" +
      "Check for updates only looks for differences.\n" +
      "Copy-mode files (cc-switch.db, FlClash prefs) are adopted back before every push.\n\n" +
      "Full notes: README.md in the config repo"
  }
}

function tr(lang, key, arg) {
  var pack = copy[normalizeLanguage(lang)] || copy.en
  var value = pack[key]
  if (typeof value === "function")
    return value(arg)
  return value !== undefined ? value : key
}

function statusSentence(sync, lang) {
  lang = lang || systemLanguage()
  if (!sync || sync.initialized !== true)
    return tr(lang, "notSetUp")
  if (sync.dirty === true && (sync.behind || 0) > 0)
    return tr(lang, "dirtyAndBehind", sync.behind)
  if (sync.dirty === true)
    return tr(lang, "dirty")
  if ((sync.behind || 0) > 0)
    return tr(lang, "behind", sync.behind)
  if ((sync.ahead || 0) > 0)
    return tr(lang, "ahead", sync.ahead)
  return tr(lang, "synced")
}

// One rule for the bar icon. Red means "you need to do something".
//   faded cloud          repo not ready or not signed in
//   normal cloud         up to date
//   red cloud-down       the remote has changes to apply
//   red cloud-up         this machine has changes to push
//   red warning          the last command failed
function iconState(sync, error) {
  var s = sync || ({})
  if (s.loggedIn !== true || s.initialized !== true)
    return { glyph: "", alert: false, dimmed: true, label: "not set up" }
  if (error)
    return { glyph: "", alert: true, dimmed: false, label: "last command failed" }
  if ((s.behind || 0) > 0)
    return { glyph: "", alert: true, dimmed: false, label: "apply needed" }
  if (s.dirty === true || (s.ahead || 0) > 0)
    return { glyph: "", alert: true, dimmed: false, label: "push needed" }
  return { glyph: "", alert: false, dimmed: false, label: "up to date" }
}

function relativeTime(iso, lang) {
  lang = lang || systemLanguage()
  if (!iso)
    return tr(lang, "never")
  var then = Date.parse(iso)
  if (isNaN(then))
    return iso
  var seconds = Math.round((Date.now() - then) / 1000)
  if (seconds < 45)
    return tr(lang, "justNow")
  if (seconds < 3600)
    return tr(lang, "minutesAgo", Math.floor(seconds / 60))
  if (seconds < 86400)
    return tr(lang, "hoursAgo", Math.floor(seconds / 3600))
  return tr(lang, "daysAgo", Math.floor(seconds / 86400))
}
