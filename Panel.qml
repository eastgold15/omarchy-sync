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
  // 新架构无签名门:远程是私有仓库的普通 git 分支,upstream 有新提交即可 apply
  readonly property bool canApply: ready && trustedCommit !== ""
  readonly property bool working: hostWidget ? hostWidget.busy === true : false
  readonly property color dim: Qt.darker(root.barForeground, 1.35)
  readonly property string fontFamily: root.bar ? root.bar.fontFamily : Style.font.family
  readonly property string pluginVersion: hostWidget && hostWidget.version ? String(hostWidget.version) : ""
  readonly property string language: {
    var saved = ""
    var settings = root.hostWidget ? root.hostWidget.settings : null
    if (settings && settings.language)
      saved = String(settings.language)
    if (saved === "zh" || saved === "en")
      return saved
    return Model.systemLanguage()
  }

  function tr(key, arg) {
    return Model.tr(root.language, key, arg)
  }

  function toggleLanguage() {
    var next = root.language === "zh" ? "en" : "zh"
    if (root.hostWidget && root.hostWidget.persistSettings)
      root.hostWidget.persistSettings({ language: next })
  }

  function scanOptions() {
    return [
      { "value": "0", "label": root.tr("intervalOff") },
      { "value": "900", "label": root.tr("interval15") },
      { "value": "1800", "label": root.tr("interval30") },
      { "value": "3600", "label": root.tr("intervalHour") },
      { "value": "21600", "label": root.tr("interval6") },
      { "value": "86400", "label": root.tr("interval24") }
    ]
  }

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
      return root.tr("noPush")
    return root.tr("lastPush", {
      when: Model.relativeTime(lastPushTime(), root.language),
      host: lastPushHost() || root.tr("unknownHost")
    })
  }

  function pushTooltip() {
    var tip = "omarsync push\n" + (root.language === "zh"
      ? "终端里展示这次要发布的 diff，按 y 才上传"
      : "A terminal shows the diff. Press y to upload")
    if (lastPushTime() !== "")
      tip += "\n" + root.tr("pushOk", {
        when: lastPushTime().replace("T", " ").substring(0, 16),
        host: lastPushHost() || root.tr("unknownHost")
      })
    else
      tip += "\n" + root.tr("pushNever")
    return tip
  }

  function applyTooltip() {
    return "omarsync apply\n" + root.tr("applyTip")
  }

  function autoPushDescription() {
    var minutes = root.hostWidget ? root.hostWidget.settingInt("autoPushIntervalMin", 0) : 0
    if (minutes > 0)
      return root.tr("autoPushOn", minutes)
    return root.tr("autoPushOff")
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
    var shown = names.join(root.language === "zh" ? "、" : ", ")
    return root.tr("changes", {
      names: shown,
      extra: files.length > limit ? files.length : 0
    })
  }

  function changesTooltip() {
    var files = root.changedFiles()
    var tip = (root.language === "zh" ? "code <改动的文件>" : "code <changed files>") + "\n"
    var limit = Math.min(files.length, 10)
    for (var i = 0; i < limit; i++)
      tip += (i === 0 ? "" : "\n") + files[i]
    if (files.length > limit)
      tip += "\n" + root.tr("changesMore", files.length)
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
      return root.tr("checking")
    if (root.working)
      return root.tr("running")
    return Model.statusSentence(root.sync, root.language)
  }

  function commitText() {
    var sha = root.trustedCommit
    if (sha === "")
      return ""
    return root.tr("remoteCommit", sha.substring(0, 7))
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
          meta: root.sync.loggedIn === true ? (root.sync.user || "GitHub") : root.tr("notLoggedIn")
          detail: root.sync.repo || root.tr("noRepo")
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
            + (root.pluginVersion !== "" ? root.tr("version", root.pluginVersion) : "")
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
          text: root.tr("legend")
          textFormat: Text.PlainText
          color: root.dim
          font.family: root.fontFamily
          font.pixelSize: Style.font.caption
          wrapMode: Text.WordWrap
        }

        PanelSeparator { width: parent.width; foreground: root.barForeground }

        Toggle {
          width: parent.width
          label: Model.tr(root.language === "zh" ? "en" : "zh", "language")
          description: Model.tr(root.language === "zh" ? "en" : "zh", "languageDesc")
          checked: root.language === "en"
          foreground: root.barForeground
          fontFamily: root.fontFamily
          onClicked: root.toggleLanguage()
        }

        ActionRow {
          name: root.tr("viewChanges")
          desc: root.tr("viewChangesDesc")
          tooltip: root.changesTooltip()
          rowVisible: root.changedFiles().length > 0
          onTriggered: root.callHost("openChanges")
        }

        ActionRow {
          name: root.tr("doctor")
          desc: root.tr("doctorDesc")
          tooltip: "omarsync doctor"
          rowVisible: root.hostWidget && root.hostWidget.statusReady === true
          onTriggered: root.callHost("doctor")
        }

        ActionRow {
          name: root.working ? root.tr("pushRunning") : "push"
          desc: root.tr("pushDesc")
          tooltip: root.pushTooltip()
          rowVisible: root.ready && (root.sync.dirty === true || (root.sync.ahead || 0) > 0)
          rowEnabled: !root.working
          recommended: true
          onTriggered: root.callHost("pushNow")
        }

        ActionRow {
          name: root.working ? root.tr("applyRunning") : "apply"
          desc: root.tr("applyDesc")
          tooltip: root.applyTooltip()
          rowVisible: root.canApply && (root.sync.behind || 0) > 0
          rowEnabled: !root.working
          recommended: true
          onTriggered: root.callHost("pullAndApply")
        }

        ActionRow {
          name: root.working ? root.tr("scanRunning") : root.tr("scan")
          desc: root.tr("scanDesc")
          tooltip: "omarsync status\n" + root.tr("scanTip")
          rowEnabled: !root.working
          onTriggered: root.callHost("refreshStatus")
        }

        PanelSeparator { width: parent.width; foreground: root.barForeground }

        ActionRow {
          name: root.tr("openConfig")
          desc: root.tr("openConfigDesc")
          tooltip: root.sync.repo ? ("github.com/" + root.sync.repo) : ""
          rowEnabled: root.sync.repo !== "" && root.sync.repo !== undefined
          onTriggered: root.callHost("openRepo")
        }

        ActionRow {
          name: root.tr("viewLog")
          tooltip: "~/.local/state/omarsync/last.log"
          onTriggered: root.callHost("viewLog")
        }

        ActionRow {
          name: root.settingsOpen ? root.tr("settingsHide") : root.tr("settings")
          onTriggered: root.settingsOpen = !root.settingsOpen
        }

        Dropdown {
          id: scanInterval
          width: parent.width
          visible: root.settingsOpen
          label: root.tr("scanInterval")
          foreground: root.barForeground
          fontFamily: root.fontFamily
          value: String(root.hostWidget ? root.hostWidget.settingInt("refreshIntervalSec", 3600) : 3600)
          options: root.scanOptions()
          onChanged: function(value) {
            if (root.hostWidget && root.hostWidget.setScanInterval)
              root.hostWidget.setScanInterval(parseInt(value, 10))
          }
        }

        Toggle {
          width: parent.width
          visible: root.settingsOpen
          label: root.tr("autoPush")
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
          label: root.tr("notify")
          description: root.tr("notifyDesc")
          checked: root.hostWidget ? root.hostWidget.settingBool("notify", true) : true
          foreground: root.barForeground
          fontFamily: root.fontFamily
          onClicked: root.callHost("toggleNotify")
        }

        ActionRow {
          name: root.helpOpen ? root.tr("helpHide") : root.tr("help")
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
          text: root.tr("helpBody")
        }
      }
    }
  }
}
