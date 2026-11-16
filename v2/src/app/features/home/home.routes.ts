import { Routes } from '@angular/router';
import { pageSeo } from '@core/seo/seo.resolvers';
import { HomePage } from './home.page';

export default [
  {
    path: '',
    component: HomePage,
    resolve: { seo: pageSeo('home') },
    runGuardsAndResolvers: 'always',
  },
] satisfies Routes;
