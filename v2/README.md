# Portfolio v2 — Brice Arléon ZEMTSOP NDADJI

Version 2 du portfolio [arleonzemtsop.fr](https://arleonzemtsop.fr) : application **Angular 22** modulaire,
bilingue (FR/EN), **prérendue en HTML statique** (SSG) pour le SEO, développée dans **Docker** et déployée sur **Vercel**.

## Démarrage rapide

Seul Docker est nécessaire — ni Node ni Angular CLI à installer.

```bash
bash run.sh dev        # http://localhost:4200  (premier lancement : installation des dépendances)
```

| Commande | Effet |
| --- | --- |
| `bash run.sh dev` | **Profil dev** : serveur Angular avec rechargement à chaud |
| `bash run.sh preview` | **Profil prod** : build de production servi par nginx sur http://localhost:8080 |
| `bash run.sh build` | Build de production dans `dist/` (le même que sur Vercel) |
| `bash run.sh test` | Tests unitaires (Vitest) |
| `bash run.sh ng generate component features/about/components/timeline` | Angular CLI |
| `bash run.sh npm install <paquet>` | npm |
| `bash run.sh shell` / `down` / `clean` | Shell dans le conteneur / arrêt / nettoyage complet |

`run.sh` n'est qu'un raccourci vers Docker Compose : `docker compose --profile dev up --build`,
`docker compose --profile prod up --build`, `docker compose run --rm cli npx ng <commande>`.

> Les conteneurs tournent avec l'utilisateur `1000:1000`. Si `id -u` renvoie autre chose, copier
> `.env.example` en `.env` et ajuster `UID`/`GID` (les ports se changent au même endroit).

## Les deux profils

| | Développement (local, Docker) | Production (Vercel) |
| --- | --- | --- |
| Lancement | `bash run.sh dev` | `git push` (ou `bash run.sh preview` pour vérifier en local) |
| Configuration Angular | `development` | `production` |
| Environnement | `src/environments/environment.development.ts` | `src/environments/environment.ts` |
| URL du site (canonical, hreflang, Open Graph) | `http://localhost:4200` | `https://arleonzemtsop.fr` |
| Indexation | `noindex, nofollow` | `index, follow` |
| Mesure d'audience (Vercel, GA4) | désactivée | activée |
| Build | non optimisé, source maps | optimisé, fichiers hachés, CSS critique en ligne |
| Fichiers concernés | `compose.yaml`, `docker/Dockerfile.dev` | `vercel.json`, `tools/generate-seo-files.mjs` |

Le remplacement du fichier d'environnement est déclaré dans `angular.json` (`fileReplacements`).
Tout paramètre qui diffère entre les deux profils se déclare dans `environment.model.ts`.

## Architecture

```
src/app/
├── core/                 Socle transverse, chargé une fois
│   ├── config/           Identité du site, pages et chemins (site.config.ts)
│   ├── i18n/             Langues, garde de route, dictionnaires typés fr.ts / en.ts
│   ├── seo/              SeoService, resolvers de route, données structurées schema.org
│   ├── analytics/        Chargement conditionnel des scripts de mesure
│   └── layout/           En-tête (menu, sélecteur de langue) et pied de page
├── shared/               Briques réutilisables sans logique métier (ui/, directives/)
├── features/             Un dossier = un module fonctionnel chargé à la demande
│   ├── home/  about/  research/  projects/  experience/  contact/  not-found/
│   └── blog/             Registre des articles, contenu Markdown, pages liste et article
├── app.routes.ts         Table des routes : /:lang/<feature>
└── app.routes.server.ts  Liste des pages à prérendre
```

Règles de dépendance : `features → shared → core`. Une feature n'importe jamais une autre feature.
Alias d'import : `@core/*`, `@shared/*`, `@features/*`, `@env`.

Chaque feature expose un fichier `<feature>.routes.ts` chargé en différé (`loadChildren`) : son code
n'est téléchargé que lorsque la page est visitée.

## SEO

| Sujet | Mise en œuvre |
| --- | --- |
| HTML complet pour les robots | Prérendu de toutes les pages au build (`outputMode: static`), puis hydratation |
| Balises par page et par langue | `SeoService` : `<title>`, description, robots, Open Graph, Twitter Cards |
| Contenu dupliqué | URL canonique sur chaque page |
| Bilingue | `<html lang>`, `hreflang` fr / en / x-default dans le HTML **et** dans le sitemap |
| Données structurées | JSON-LD en graphe : `Person`, `WebSite`, `WebPage`, `BreadcrumbList`, `BlogPosting` |
| Sitemap | Généré au build à partir des pages réellement produites |
| Anciennes URL de la v1 | Redirections 301 dans `vercel.json` (`/fr/pages/about.html` → `/fr/about`, …) |
| Erreurs | Vraie réponse HTTP 404 (`404.html`), page en `noindex` |
| Performance | Polices auto-hébergées, Tailwind compilé (plus de CDN), CSS critique en ligne, image du héros prioritaire, cache d'un an sur les fichiers hachés |
| Environnements hors prod | `noindex` automatique en développement |

Les textes SEO des pages statiques se trouvent dans les dictionnaires, clé `seo.<page>`.

## Recettes

**Ajouter une page statique**

1. Ajouter sa clé dans `PageKey`, `PAGE_PATHS` et `NAV_PAGES` (`core/config/site.config.ts`).
2. Compléter `nav`, `seo` et `pages` dans `fr.ts` et `en.ts` — le compilateur signale tout oubli.
3. Créer `features/<page>/` avec `<page>.page.ts` et `<page>.routes.ts` (copier `about/`).
4. Déclarer la route dans `app.routes.ts`. Le prérendu et le sitemap suivent automatiquement.

**Ajouter ou migrer un article de blog**

1. Écrire `features/blog/content/<slug>.fr.md` et `<slug>.en.md`.
2. Ajouter (ou compléter) l'entrée dans `features/blog/data/posts.ts` avec le champ `content`
   — voir l'article `day-1-phd-student`, déjà migré.

Tant qu'un article n'a pas de `content`, sa page affiche un bandeau « migration en cours », reste en
`noindex` et n'apparaît pas dans le sitemap.

## Déploiement sur Vercel

1. Dans le projet Vercel : **Settings → General → Root Directory** = `v2`.
2. Rien d'autre à configurer : `vercel.json` fixe la commande de build (`npm run build`), le dossier
   de sortie (`dist/portfolio/browser`), les redirections et les en-têtes ; `package.json` fixe Node 24.
3. Chaque `git push` déclenche un déploiement ; les déploiements de prévisualisation ne sont pas
   indexés (en-tête `X-Robots-Tag: noindex` ajouté par Vercel).

Le site déployé est 100 % statique : aucune fonction serveur.

## État de la migration depuis la v1

- [x] Socle, design system, i18n, SEO, profils dev / prod
- [x] Accueil, contact, liste du blog (métadonnées des 15 articles reprises)
- [x] Article d'exemple migré : `day-1-phd-student` (FR + EN)
- [ ] Contenu des pages À propos, Recherche, Projets, Expérience
- [ ] Contenu des 14 autres articles
- [ ] Dates de publication complètes des articles (`year` → date ISO)
