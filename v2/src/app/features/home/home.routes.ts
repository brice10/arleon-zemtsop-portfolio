import { Routes } from '@angular/router';
import { pageSeo } from '@core/seo/seo.resolvers';
import { ContentHost } from '@shared/content/content-host';
import { localizedContent } from '@shared/content/localized-content';

export default [
  {
    path: '',
    component: ContentHost,
    resolve: {
      seo: pageSeo('home'),
      content: localizedContent({
        fr: () => import('./content/home.fr').then((m) => m.HomeFr),
        en: () => import('./content/home.en').then((m) => m.HomeEn),
      }),
    },
    runGuardsAndResolvers: 'always',
  },
] satisfies Routes;
