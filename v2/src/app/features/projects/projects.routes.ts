import { Routes } from '@angular/router';
import { pageSeo } from '@core/seo/seo.resolvers';
import { ProjectsPage } from './projects.page';

export default [
  {
    path: '',
    component: ProjectsPage,
    resolve: { seo: pageSeo('projects') },
    runGuardsAndResolvers: 'always',
  },
] satisfies Routes;
