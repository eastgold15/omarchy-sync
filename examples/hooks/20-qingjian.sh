#!/usr/bin/bash
# Bring Qingjian (Fcitx5 input method) up after its config was applied.
# Omarsync syncs the settings, not the program: install Qingjian first.
set -euo pipefail

if [[ ! -e $HOME/.local/lib/fcitx5/qingjian.so || ! -x $HOME/.local/bin/qingjian-linux-server ]]; then
  echo "Qingjian is not installed on this machine, so only its settings were applied."
  echo "Install it, then run this apply again to start the service."
  exit 0
fi

if command -v systemctl >/dev/null 2>&1; then
  systemctl --user daemon-reload || true
  systemctl --user enable --now qingjian.service || true
fi

if command -v fcitx5-remote >/dev/null 2>&1; then
  fcitx5-remote -r || true
fi
