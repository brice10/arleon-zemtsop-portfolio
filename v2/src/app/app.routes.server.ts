import { RenderMode, ServerRoute } from '@angular/ssr';
import { PAGE_PATHS } from '@core/config/site.config';
import { LANGS } from '@core/i18n/lang';
import { POSTS } from '@features/blog/data/posts';

const langs = async () => LANGS.map((lang) => ({ lang }));

/**
 * Prérendu (SSG) : chaque URL listée ici devient un fichier HTML statique complet au build.
 * Aucun serveur Node en production — Vercel ne sert que des fichiers.
 */
export const serverRoutes: ServerRoute[] = [
  // Pages statiques, dans chaque langue : /fr, /en, /fr/about, ...
  ...Object.values(PAGE_PATHS).map((path): ServerRoute => ({
    path: path ? `:lang/${path}` : ':lang',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: langs,
  })),
  // Articles de blog : une page par article, dans chaque langue où il existe (registre POSTS).
  {
    path: ':lang/blog/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () =>
      LANGS.flatMap((lang) =>
        POSTS.filter((post) => !!post.content[lang]).map((post) => ({ lang, slug: post.slug })),
      ),
  },
  // URL inconnues sous /fr ou /en : rendues côté client (en prod, Vercel répond avec 404.html).
  { path: ':lang/**', renderMode: RenderMode.Client },
  // Le reste : redirection de `/` et page /404.
  { path: '**', renderMode: RenderMode.Prerender },
];
