#!/usr/bin/env bash
# Raccourcis Docker du projet — « bash run.sh » sans argument affiche l'aide.
set -euo pipefail
cd "$(dirname "$0")"

compose() { docker compose "$@"; }
cli() { compose run --rm cli "$@"; }

case "${1:-help}" in
  dev)     compose --profile dev up --build ;;            # profil dev  → http://localhost:4200
  preview) compose --profile prod up --build ;;           # profil prod → http://localhost:8080
  build)   cli npm run build ;;                           # build de production dans dist/
  test)    cli npx ng test --watch=false ;;
  format)  cli npm run format ;;
  ng)      shift; cli npx ng "$@" ;;                      # ex. : bash run.sh ng generate component features/about/components/timeline
  npm)     shift; cli npm "$@" ;;                         # ex. : bash run.sh npm install <paquet>
  shell)   cli sh ;;
  down)    compose --profile dev --profile prod --profile tools down --remove-orphans ;;
  clean)   compose --profile dev --profile prod --profile tools down --remove-orphans
           rm -rf node_modules dist .angular ;;
  *)
    cat <<'HELP'
Usage : bash run.sh <commande>

  dev            Profil dev : serveur Angular avec rechargement à chaud (http://localhost:4200)
  preview        Profil prod : build de production servi par nginx (http://localhost:8080)
  build          Build de production dans dist/ (identique à celui de Vercel)
  test           Tests unitaires (une passe)
  format         Formate le code avec Prettier
  ng <args>      Angular CLI
  npm <args>     npm
  shell          Shell dans le conteneur Node
  down           Arrête et supprime les conteneurs
  clean          down + supprime node_modules, dist et le cache Angular
HELP
    ;;
esac
