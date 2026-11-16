import { Routes } from '@angular/router';
import { pageSeo } from '@core/seo/seo.resolvers';
import { ContentHost } from '@shared/content/content-host';
import { localizedContent } from '@shared/content/localized-content';

export default [
  {
    path: '',
    component: ContentHost,
    resolve: {
      seo: pageSeo('projects'),
      content: localizedContent({
        fr: () => import('./content/projects.fr').then((m) => m.ProjectsFr),
        en: () => import('./content/projects.en').then((m) => m.ProjectsEn),
      }),
    },
    runGuardsAndResolvers: 'always',
  },
] satisfies Routes;
