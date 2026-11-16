import { Routes } from '@angular/router';
import { pageSeo } from '@core/seo/seo.resolvers';
import { ResearchPage } from './research.page';

export default [
  {
    path: '',
    component: ResearchPage,
    resolve: { seo: pageSeo('research') },
    runGuardsAndResolvers: 'always',
  },
] satisfies Routes;
