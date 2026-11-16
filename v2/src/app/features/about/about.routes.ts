import { Routes } from '@angular/router';
import { pageSeo } from '@core/seo/seo.resolvers';
import { AboutPage } from './about.page';

export default [
  {
    path: '',
    component: AboutPage,
    resolve: { seo: pageSeo('about') },
    runGuardsAndResolvers: 'always',
  },
] satisfies Routes;
