import { Routes } from '@angular/router';
import { pageSeo } from '@core/seo/seo.resolvers';
import { ContentHost } from '@shared/content/content-host';
import { localizedContent } from '@shared/content/localized-content';
import { publicationsJsonLd } from './publications';

export default [
  {
    path: '',
    component: ContentHost,
    resolve: {
      seo: pageSeo('research', publicationsJsonLd),
      content: localizedContent({
        fr: () => import('./content/research.fr').then((m) => m.ResearchFr),
        en: () => import('./content/research.en').then((m) => m.ResearchEn),
      }),
    },
    runGuardsAndResolvers: 'always',
  },
] satisfies Routes;
