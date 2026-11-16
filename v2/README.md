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
├── shared/
│   ├── content/          Hôte de contenu, chargement par langue, directives (apparition, filtres)
│   └── ui/               Composants d'interface réutilisables
├── features/             Un dossier = un module fonctionnel chargé à la demande
│   ├── home/  about/  research/  projects/  experience/  contact/  not-found/
│   │   ├── <feature>.routes.ts      Route, SEO et choix du contenu selon la langue
│   │   └── content/                 <feature>.fr.{ts,html} · <feature>.en.{ts,html} · styles
│   └── blog/
│       ├── data/posts.ts            Registre des articles (métadonnées + contenu)
│       ├── content/<slug>/          Un dossier par article, une version par langue
│       └── pages/                   Liste des articles et page article
├── app.routes.ts         Table des routes : /:lang/<feature>
└── app.routes.server.ts  Liste des pages à prérendre
```

Règles de dépendance : `features → shared → core`. Une feature n'importe jamais une autre feature.
Alias d'import : `@core/*`, `@shared/*`, `@features/*`, `@env`.

**Contenu.** Chaque page et chaque article existe en deux composants, un par langue
(`about.fr.ts` + `about.fr.html`, `about.en.ts` + `about.en.html`). Le texte se modifie directement
dans le `.html`. Seule la version de la langue affichée est téléchargée ; le changement de langue
se fait sans rechargement de page. Le style propre à une page vit dans le `.css` voisin : il est
isolé du reste du site par Angular et placé dans la couche CSS `components`, donc les classes
utilitaires Tailwind gardent la priorité.

**Section des deux profils (accueil).** Composant `features/home/dual-profile/` : un seul portrait
(`public/assets/images/portrait.webp`) partagé par un éclair, animation entièrement en CSS. Les
libellés FR/EN sont dans `dual-profile.ts`.

**Thèmes clair et sombre.** Par défaut, le thème est celui du système : clair si le système est
clair, sombre s'il est sombre ou sans préférence (`prefers-color-scheme`, sans script). Le bouton
de l'en-tête bascule entre clair et sombre ; ce choix est mémorisé dans le navigateur et prime
ensuite sur le système (`ThemeService`, `core/theme/`). Tout repose sur les tokens de couleur de `src/styles.css` : le thème clair leur
donne simplement d'autres valeurs. En thème clair, `white` désigne donc la couleur du texte et
`deep-night` celle du fond. Pour qu'un nouveau contenu suive le thème, utiliser les classes de
tokens (`text-white`, `bg-noble-blue/30`, `text-digital-cyan`…) ou `var(--color-…)` en CSS,
jamais une couleur écrite en dur.

**Comportements.** Ils sont portés par des directives reconnues à la classe ou à l'attribut :
`.reveal` (apparition au défilement), `.filter-btn` + `data-category` (filtres), `appFaqToggle`,
`appContactForm`. Aucun script en ligne.

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

**Modifier un texte** : ouvrir le `.html` de la page ou de l'article, dans chaque langue.

**Ajouter une page statique**

1. Ajouter sa clé dans `PageKey`, `PAGE_PATHS` et `NAV_PAGES` (`core/config/site.config.ts`).
2. Compléter `nav` et `seo` dans `fr.ts` et `en.ts` — le compilateur signale tout oubli.
3. Copier un dossier de feature simple (ex. `features/about/`), le renommer et adapter ses composants.
4. Déclarer la route dans `app.routes.ts`. Le prérendu et le sitemap suivent automatiquement.

**Ajouter un article de blog**

1. Copier un dossier de `features/blog/content/` (ex. `day-1-phd-student/`), le renommer avec le
   nouveau slug, puis renommer et adapter les deux composants (`<slug>.fr.*`, `<slug>.en.*`).
2. Ajouter l'entrée correspondante dans `features/blog/data/posts.ts`.

La route, le prérendu, le sitemap, les balises SEO et la carte dans la liste du blog en découlent.

Dans un `.html` de contenu, trois caractères s'écrivent sous forme d'entité, car Angular les
interprète : `{` → `&#123;`, `}` → `&#125;`, `@` → `&#64;`.

## Déploiement sur Vercel

1. Dans le projet Vercel : **Settings → General → Root Directory** = `v2`.
2. Rien d'autre à configurer : `vercel.json` fixe la commande de build (`npm run build`), le dossier
   de sortie (`dist/portfolio/browser`), les redirections et les en-têtes ; `package.json` fixe Node 24.
3. Chaque `git push` déclenche un déploiement ; les déploiements de prévisualisation ne sont pas
   indexés (en-tête `X-Robots-Tag: noindex` ajouté par Vercel).

Le site déployé est 100 % statique : aucune fonction serveur.

## État de la migration depuis la v1

- [x] Socle, design system, i18n, SEO, profils dev / prod
- [x] Contenu des 6 pages (accueil, à propos, recherche, projets, expérience, contact), FR + EN
- [x] Contenu des 15 articles, FR + EN
- [ ] Dates de publication complètes des articles (`year` → date ISO dans `posts.ts`)
- [ ] Logo Inria de l'accueil encore chargé depuis Wikimedia : à héberger dans `public/assets/images/`
