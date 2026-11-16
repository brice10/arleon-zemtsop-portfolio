import { Routes } from '@angular/router';
import { pageSeo } from '@core/seo/seo.resolvers';
import { ContentHost } from '@shared/content/content-host';
import { localizedContent } from '@shared/content/localized-content';

export default [
  {
    path: '',
    component: ContentHost,
    resolve: {
      seo: pageSeo('experience'),
      content: localizedContent({
        fr: () => import('./content/experience.fr').then((m) => m.ExperienceFr),
        en: () => import('./content/experience.en').then((m) => m.ExperienceEn),
      }),
    },
    runGuardsAndResolvers: 'always',
  },
] satisfies Routes;
