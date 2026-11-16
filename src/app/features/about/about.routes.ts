import { Routes } from '@angular/router';
import { pageSeo } from '@core/seo/seo.resolvers';
import { ContentHost } from '@shared/content/content-host';
import { localizedContent } from '@shared/content/localized-content';

export default [
  {
    path: '',
    component: ContentHost,
    resolve: {
      seo: pageSeo('about'),
      content: localizedContent({
        fr: () => import('./content/about.fr').then((m) => m.AboutFr),
        en: () => import('./content/about.en').then((m) => m.AboutEn),
      }),
    },
    runGuardsAndResolvers: 'always',
  },
] satisfies Routes;
