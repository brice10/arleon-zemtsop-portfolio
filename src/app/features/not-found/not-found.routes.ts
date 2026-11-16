import { Routes } from '@angular/router';
import { notFoundSeo } from '@core/seo/seo.resolvers';
import { NotFoundPage } from './not-found.page';

export default [
  {
    path: '',
    component: NotFoundPage,
    resolve: { seo: notFoundSeo },
    runGuardsAndResolvers: 'always',
  },
] satisfies Routes;
