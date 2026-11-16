#!/usr/bin/env bash
# Commit rapide de tout le dépôt (v1 + v2).
#
#   bash commit.sh "feat(v2): socle Angular"          → commit
#   bash commit.sh "fix(docker): entrypoint" --push   → commit puis push
#   bash commit.sh                                    → demande le message
set -euo pipefail

# Se placer à la racine du dépôt, quel que soit le dossier d'appel.
cd "$(git -C "$(dirname "$0")" rev-parse --show-toplevel)"

push=false
message=""
for arg in "$@"; do
  case "$arg" in
    --push|-p) push=true ;;
    --help|-h) sed -n '2,6p' "$0" | sed 's/^# \{0,1\}//'; exit 0 ;;
    *) message="$arg" ;;
  esac
done

if [ -z "$(git status --porcelain)" ]; then
  echo "Rien à commiter : l'arbre de travail est propre."
  exit 0
fi

git add -A

# Garde-fou : ces fichiers ne doivent jamais entrer dans l'historique.
forbidden=$(git diff --cached --name-only | grep -E '(^|/)(node_modules|dist|\.angular)/|(^|/)\.env$' || true)
if [ -n "$forbidden" ]; then
  echo "✖ Fichiers à ne pas versionner (vérifier .gitignore) :"
  echo "$forbidden" | head -20
  git reset -q
  exit 1
fi

echo "Branche : $(git branch --show-current)"
git status --short
echo

if [ -z "$message" ]; then
  read -r -p "Message du commit : " message
fi
if [ -z "$message" ]; then
  echo "✖ Message vide : commit annulé."
  git reset -q
  exit 1
fi

git commit -q -m "$message"
echo "✔ $(git log -1 --format='%h %s')"

if $push; then
  git push -u origin "$(git branch --show-current)"
fi
