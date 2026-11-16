import { Routes } from '@angular/router';
import { pageSeo } from '@core/seo/seo.resolvers';
import { ExperiencePage } from './experience.page';

export default [
  {
    path: '',
    component: ExperiencePage,
    resolve: { seo: pageSeo('experience') },
    runGuardsAndResolvers: 'always',
  },
] satisfies Routes;
