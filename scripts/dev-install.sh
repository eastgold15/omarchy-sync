#!/usr/bin/env bash
# Copy this checkout into the Omarchy plugin directory and reload the shell.
# The plugin folder cannot contain symlinks, so this is a real copy.

set -euo pipefail

ROOT=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
ID="io.github.lukebest.omarsync"
DEST="$HOME/.config/omarchy/plugins/$ID"

# 先构建 CLI 产物(打包成单个 dist/index.js)
if command -v bun >/dev/null 2>&1; then
  (cd "$ROOT/cli" && bun run build)
fi

mkdir -p "$DEST"
rsync -a --delete \
  --exclude .git \
  --exclude preview.png \
  --exclude cli/node_modules \
  "$ROOT/" "$DEST/"
chmod +x "$DEST/bin/omarsync" "$DEST/scripts/"*.sh

if command -v omarchy-shell >/dev/null 2>&1; then
  omarchy-shell shell rescanPlugins || true
fi

# rescanPlugins only rediscovers the plugin list; already-loaded QML stays
# cached in the running shell. Restart so Panel/BarWidget changes show up.
if command -v omarchy-restart-shell >/dev/null 2>&1; then
  omarchy-restart-shell || true
fi

printf 'installed %s\n' "$DEST"
