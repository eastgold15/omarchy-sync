import QtQuick
import qs.Commons
import qs.Ui
import "Model.js" as Model

Panel {
  id: root
  moduleName: "io.github.lukebest.omarsync"
  manageIpc: false

  property var anchorItem: null
  property var hostWidget: null

  readonly property var sync: hostWidget && hostWidget.status ? hostWidget.status : ({})
  readonly property bool ready: sync.initialized === true && sync.loggedIn === true
  readonly property string trustedCommit: {
    var sha = String(sync.remoteCommit || "")
    return /^[0-9a-f]{40}$/.test(sha) ? sha : ""
  }
  readonly property bool firstApply: sync.firstApply === true
  readonly property bool firstTrust: sync.remoteSignature === "untrusted" && sync.hasTrustedKeys !== true
  readonly property bool canApply: ready && trustedCommit !== "" && (sync.remoteSigned === true || firstTrust || firstApply)
  readonly property bool working: hostWidget ? hostWidget.busy === true : false
  readonly property color dim: Qt.darker(root.barForeground, 1.35)
  readonly property string fontFamily: root.bar ? root.bar.fontFamily : Style.font.family
  readonly property string pluginVersion: hostWidget && hostWidget.version ? String(hostWidget.version) : ""

  function open() {
    root.controller.show()
  }

  function close() {
    root.controller.hide()
  }

  function switchPanel(direction) {
    if (root.bar && typeof root.bar.switchPanelFrom === "function")
      return root.bar.switchPanelFrom(root.hostWidget || root, direction)
    return false
  }

  function callHost(name) {
    if (root.hostWidget && typeof root.hostWidget[name] === "function")
      root.hostWidget[name]()
  }

  function primaryLabel() {
    if (!root.hostWidget || root.hostWidget.statusReady !== true)
      return ""
    if (root.sync.ghInstalled !== true || root.sync.loggedIn !== true || root.sync.initialized !== true)
      return "setup"
    return ""
  }

  function runPrimary() {
    root.callHost("setup")
  }

  function lastPushTime() {
    var push = sync.lastPush || ({})
    return push.time ? String(push.time) : ""
  }

  function lastPushHost() {
    var push = sync.lastPush || ({})
    return push.host ? String(push.host) : ""
  }

  function lastPushText() {
    if (lastPushTime() === "")
      return "还没有 push 过"
    return "上次 push：" + Model.relativeTime(lastPushTime()) + "，来自 " + (lastPushHost() || "未知机器")
  }

  function pushTooltip() {
    var tip = "omarsync push"
    if (lastPushTime() !== "")
      tip += "\n上次结果：成功，" + lastPushTime().replace("T", " ").substring(0, 16) + " 来自 " + (lastPushHost() || "未知机器")
    else
      tip += "\n还没有推送过"
    return tip
  }

  function applyTooltip() {
    var tip = "omarsync apply --commit " + root.trustedCommit.substring(0, 7)
    if (root.sync.remoteSigned === true)
      tip += "\n签名可信"
    else if (root.sync.remoteSignature === "untrusted")
      tip += "\n签名密钥未登记，会询问是否信任"
    else
      tip += "\n未签名：只写配置，不装插件、不跑钩子"
    return tip
  }

  function autoPushDescription() {
    var minutes = root.hostWidget ? root.hostWidget.settingInt("autoPushIntervalMin", 0) : 0
    if (minutes > 0)
      return "每 " + minutes + " 分钟自动上传本机改动"
    return "已关闭，开启后默认每 30 分钟上传"
  }

  function changedFiles() {
    var files = root.sync.changedFiles
    return files && files.length ? files : []
  }

  function changedSummary() {
    var files = root.changedFiles()
    if (files.length === 0)
      return ""
    var names = []
    var limit = Math.min(files.length, 3)
    for (var i = 0; i < limit; i++)
      names.push(String(files[i]).split("/").pop())
    var text = "改动：" + names.join("、")
    if (files.length > limit)
      text += " 等 " + files.length + " 个文件"
    return text
  }

  function changesTooltip() {
    var files = root.changedFiles()
    var tip = "code <改动的文件>\n"
    var limit = Math.min(files.length, 10)
    for (var i = 0; i < limit; i++)
      tip += (i === 0 ? "" : "\n") + files[i]
    if (files.length > limit)
      tip += "\n… 共 " + files.length + " 个"
    return tip
  }

  function problemText() {
    if (root.hostWidget && root.hostWidget.statusError)
      return String(root.hostWidget.statusError)
    if (root.sync && root.sync.error)
      return String(root.sync.error)
    return ""
  }

  function changeText() {
    if (!root.hostWidget || root.hostWidget.statusReady !== true)
      return "正在检查状态…"
    if (root.working)
      return "执行中…"
    return Model.statusSentence(root.sync)
  }

  function commitText() {
    var sha = root.trustedCommit
    if (sha === "")
      return ""
    var shortSha = sha.substring(0, 7)
    var fp = root.sync.signerFingerprint ? (" " + root.sync.signerFingerprint) : ""
    if (root.sync.remoteSigned === true)
      return "已签名 " + shortSha + fp
    if (root.sync.firstApply === true && root.sync.remoteSignature === "untrusted")
      return "已签名 " + shortSha + fp
    if (root.sync.firstApply === true)
      return "首次应用 " + shortSha
    if (root.sync.remoteSignature === "untrusted" && root.sync.hasTrustedKeys === true)
      return "另一把密钥 " + shortSha + fp
    if (root.sync.remoteSignature === "untrusted")
      return "已签名 " + shortSha + fp
    return "未签名 " + shortSha
  }

  property bool settingsOpen: false
  property bool helpOpen: false

  // 一个动作 = 按钮(命令名) + 下方一行中文描述;hover 按钮显示真实命令与上次结果
  component ActionRow: Column {
    property string name: ""
    property string desc: ""
    property string tooltip: ""
    property bool rowVisible: true
    property bool rowEnabled: true
    property bool recommended: false
    signal triggered()

    width: parent ? parent.width : 0
    spacing: Style.space(1)
    visible: rowVisible

    Button {
      width: parent.width
      text: name
      enabled: rowEnabled
      opacity: enabled ? 1 : 0.45
      selected: recommended
      leftAlign: true
      tooltipText: tooltip
      foreground: root.barForeground
      fontFamily: root.fontFamily
      onClicked: triggered()
    }
    Text {
      width: parent.width
      visible: desc !== ""
      text: desc
      textFormat: Text.PlainText
      color: root.dim
      font.family: root.fontFamily
      font.pixelSize: Style.font.caption
      wrapMode: Text.WordWrap
      leftPadding: Style.spacing.controlPaddingX
    }
  }

  KeyboardPanel {
    id: panel
    anchorItem: root.anchorItem
    owner: root.hostWidget || root
    bar: root.bar
    open: root.opened
    focusTarget: keyCatcher
    contentWidth: panel.fittedContentWidth(Style.space(320))
    contentHeight: panel.fittedContentHeight(content.implicitHeight)

    PanelKeyCatcher {
      id: keyCatcher
      anchors.fill: parent
      blocked: scanInterval.popupOpen
      onCloseRequested: root.close()
      onTabRequested: function(direction) { root.switchPanel(direction) }

      Column {
        id: content
        width: parent.width
        spacing: Style.space(8)

        PanelHero {
          width: parent.width
          title: "Omarsync"
          meta: root.sync.loggedIn === true ? (root.sync.user || "GitHub") : "未登录 GitHub"
          detail: root.sync.repo || "尚未设置仓库"
          foreground: root.barForeground
          fontFamily: root.fontFamily
        }

        // 状态主角:一句普通话结论
        Text {
          width: parent.width
          text: root.changeText()
          textFormat: Text.PlainText
          color: root.barForeground
          font.family: root.fontFamily
          font.pixelSize: Style.font.body
          wrapMode: Text.WordWrap
        }

        Text {
          width: parent.width
          visible: root.trustedCommit !== ""
          text: root.commitText()
          textFormat: Text.PlainText
          color: root.dim
          font.family: root.fontFamily
          font.pixelSize: Style.font.caption
          wrapMode: Text.WrapAnywhere
        }

        Text {
          width: parent.width
          text: root.lastPushText()
            + (root.pluginVersion !== "" ? " · 版本 " + root.pluginVersion : "")
          textFormat: Text.PlainText
          color: root.dim
          font.family: root.fontFamily
          font.pixelSize: Style.font.caption
          wrapMode: Text.WordWrap
        }

        Text {
          width: parent.width
          visible: root.problemText() !== ""
          text: root.problemText()
          textFormat: Text.PlainText
          color: root.barForeground
          font.family: root.fontFamily
          font.pixelSize: Style.font.caption
          wrapMode: Text.WordWrap
        }

        Text {
          width: parent.width
          visible: root.changedSummary() !== ""
          text: root.changedSummary()
          textFormat: Text.PlainText
          color: root.dim
          font.family: root.fontFamily
          font.pixelSize: Style.font.caption
          wrapMode: Text.WordWrap
        }

        Text {
          width: parent.width
          text: "暗云：还没设置。云：已同步。红上箭头：需要 push。红下箭头：需要 apply。红叹号：上次失败。"
          textFormat: Text.PlainText
          color: root.dim
          font.family: root.fontFamily
          font.pixelSize: Style.font.caption
          wrapMode: Text.WordWrap
        }

        PanelSeparator { width: parent.width; foreground: root.barForeground }

        ActionRow {
          name: "查看改动"
          desc: "用 VS Code 打开这些文件，确认无误再 push"
          tooltip: root.changesTooltip()
          rowVisible: root.changedFiles().length > 0
          onTriggered: root.callHost("openChanges")
        }

        ActionRow {
          name: "setup"
          desc: "首次使用：装依赖、登录 GitHub、创建私有仓库"
          tooltip: "omarsync setup"
          rowVisible: root.primaryLabel() !== ""
          recommended: true
          onTriggered: root.runPrimary()
        }

        ActionRow {
          name: root.working ? "push（执行中…）" : "push"
          desc: "上传本机最新配置，自动签名"
          tooltip: root.pushTooltip()
          rowVisible: root.ready && (root.sync.dirty === true || (root.sync.ahead || 0) > 0)
          rowEnabled: !root.working
          recommended: true
          onTriggered: root.callHost("pushNow")
        }

        ActionRow {
          name: root.working ? "apply（执行中…）" : ((root.firstApply && root.sync.remoteSigned !== true) ? "apply this commit" : "apply")
          desc: "把远程快照恢复到这台电脑，先预览再确认"
          tooltip: root.applyTooltip()
          rowVisible: root.canApply && ((root.sync.behind || 0) > 0 || root.firstApply || root.sync.remoteSigned !== true)
          rowEnabled: !root.working
          recommended: true
          onTriggered: root.callHost("pullAndApply")
        }

        ActionRow {
          name: root.working ? "检查中…" : "检查更新"
          desc: "只检查差异，不同步文件"
          tooltip: "omarsync status\n本地有改动 → 显示 push；远程有新快照 → 显示 apply"
          rowEnabled: !root.working
          onTriggered: root.callHost("refreshStatus")
        }

        PanelSeparator { width: parent.width; foreground: root.barForeground }

        ActionRow {
          name: "打开仓库"
          tooltip: root.sync.repo ? ("github.com/" + root.sync.repo) : ""
          rowEnabled: root.sync.repo !== "" && root.sync.repo !== undefined
          onTriggered: root.callHost("openRepo")
        }

        ActionRow {
          name: "编辑同步范围"
          desc: "决定哪些目录会被同步"
          tooltip: "~/.config/omarsync/scope"
          rowEnabled: root.sync.initialized === true
          onTriggered: root.callHost("editScope")
        }

        ActionRow {
          name: "查看日志"
          tooltip: "~/.local/state/omarsync/last.log"
          onTriggered: root.callHost("viewLog")
        }

        ActionRow {
          name: root.settingsOpen ? "收起设置" : "设置"
          onTriggered: root.settingsOpen = !root.settingsOpen
        }

        Dropdown {
          id: scanInterval
          width: parent.width
          visible: root.settingsOpen
          label: "自动检查间隔"
          foreground: root.barForeground
          fontFamily: root.fontFamily
          value: String(root.hostWidget ? root.hostWidget.settingInt("refreshIntervalSec", 3600) : 3600)
          options: [
            { "value": "0", "label": "关闭，手动检查" },
            { "value": "900", "label": "每 15 分钟" },
            { "value": "1800", "label": "每 30 分钟" },
            { "value": "3600", "label": "每小时" },
            { "value": "21600", "label": "每 6 小时" },
            { "value": "86400", "label": "每 24 小时" }
          ]
          onChanged: function(value) {
            if (root.hostWidget && root.hostWidget.setScanInterval)
              root.hostWidget.setScanInterval(parseInt(value, 10))
          }
        }

        Toggle {
          width: parent.width
          visible: root.settingsOpen
          label: "自动 push"
          description: root.autoPushDescription()
          checked: root.hostWidget ? root.hostWidget.settingInt("autoPushIntervalMin", 0) > 0 : false
          enabled: root.ready
          foreground: root.barForeground
          fontFamily: root.fontFamily
          onClicked: root.callHost("toggleAutoPush")
        }

        Toggle {
          width: parent.width
          visible: root.settingsOpen
          label: "桌面通知"
          description: "push 完成后弹出通知"
          checked: root.hostWidget ? root.hostWidget.settingBool("notify", true) : true
          foreground: root.barForeground
          fontFamily: root.fontFamily
          onClicked: root.callHost("toggleNotify")
        }

        ActionRow {
          name: root.helpOpen ? "收起指南" : "使用指南"
          onTriggered: root.helpOpen = !root.helpOpen
        }

        Text {
          width: parent.width
          visible: root.helpOpen
          color: root.dim
          font.family: root.fontFamily
          font.pixelSize: Style.font.caption
          wrapMode: Text.WordWrap
          lineHeight: 1.25
          textFormat: Text.PlainText
          text: "这台电脑（日常）:\n" +
                "改完配置点 push，自动签名上传。中键图标 = push。\n\n" +
                "新电脑（恢复）:\n" +
                "1. omarchy plugin add 装本插件\n" +
                "2. 点 setup（装依赖、登录 GitHub、建仓库）\n" +
                "3. 点 apply，终端里看预览后确认\n" +
                "4. 首次会问是否信任签名密钥，选是即可\n\n" +
                "检查更新 = 只看差异，不同步文件。\n" +
                "设置里可改自动检查间隔，自动 push 可自动上传。\n\n" +
                "apply 前会自动备份到 ~/.local/state/omarsync/backup/。\n" +
                "文件没同步过来？终端跑:\n" +
                "mise dot pull --take-remote-all\n\n" +
                "完整文档：仓库里的 docs/NEW_MACHINE.md"
        }
      }
    }
  }
}
