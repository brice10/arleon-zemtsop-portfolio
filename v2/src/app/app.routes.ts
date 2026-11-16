import { Routes } from '@angular/router';
import { PAGE_PATHS } from '@core/config/site.config';
import { DEFAULT_LANG } from '@core/i18n/lang';
import { langMatch } from '@core/i18n/lang.guard';

const notFound = () => import('@features/not-found/not-found.routes');

/**
 * Chaque feature est un module autonome, chargé à la demande (un fichier JS par feature)
 * et exposé par son propre fichier `<feature>.routes.ts`.
 *
 * Toutes les pages vivent sous un préfixe de langue : /fr/... et /en/...
 */
export const routes: Routes = [
  // En production, Vercel redirige `/` selon Accept-Language (vercel.json) ; ceci couvre le dev local.
  { path: '', pathMatch: 'full', redirectTo: DEFAULT_LANG },
  // Prérendue en /404.html, servie par Vercel pour toute URL inconnue.
  { path: '404', loadChildren: notFound },
  {
    path: ':lang',
    canMatch: [langMatch],
    children: [
      {
        path: PAGE_PATHS.home,
        pathMatch: 'full',
        loadChildren: () => import('@features/home/home.routes'),
      },
      { path: PAGE_PATHS.about, loadChildren: () => import('@features/about/about.routes') },
      {
        path: PAGE_PATHS.research,
        loadChildren: () => import('@features/research/research.routes'),
      },
      {
        path: PAGE_PATHS.projects,
        loadChildren: () => import('@features/projects/projects.routes'),
      },
      {
        path: PAGE_PATHS.experience,
        loadChildren: () => import('@features/experience/experience.routes'),
      },
      { path: PAGE_PATHS.blog, loadChildren: () => import('@features/blog/blog.routes') },
      { path: PAGE_PATHS.contact, loadChildren: () => import('@features/contact/contact.routes') },
      { path: '**', loadChildren: notFound },
    ],
  },
  { path: '**', loadChildren: notFound },
];
