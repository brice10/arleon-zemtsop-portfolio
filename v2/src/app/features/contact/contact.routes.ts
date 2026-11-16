import { Routes } from '@angular/router';
import { pageSeo } from '@core/seo/seo.resolvers';
import { ContentHost } from '@shared/content/content-host';
import { localizedContent } from '@shared/content/localized-content';

export default [
  {
    path: '',
    component: ContentHost,
    resolve: {
      seo: pageSeo('contact'),
      content: localizedContent({
        fr: () => import('./content/contact.fr').then((m) => m.ContactFr),
        en: () => import('./content/contact.en').then((m) => m.ContactEn),
      }),
    },
    runGuardsAndResolvers: 'always',
  },
] satisfies Routes;
