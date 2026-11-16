import { Routes } from '@angular/router';
import { pageSeo } from '@core/seo/seo.resolvers';
import { ContactPage } from './contact.page';

export default [
  {
    path: '',
    component: ContactPage,
    resolve: { seo: pageSeo('contact') },
    runGuardsAndResolvers: 'always',
  },
] satisfies Routes;
