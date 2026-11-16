#!/bin/sh
# Installe les dépendances au premier lancement, puis à chaque changement de package-lock.json.
set -e

STAMP=node_modules/.package-lock.sha256
CURRENT=$(sha256sum package-lock.json | cut -d' ' -f1)

if [ ! -f "$STAMP" ] || [ "$(cat "$STAMP")" != "$CURRENT" ]; then
  echo "▶ Installation des dépendances (npm ci)…"
  npm ci
  echo "$CURRENT" > "$STAMP"
fi

exec "$@"
