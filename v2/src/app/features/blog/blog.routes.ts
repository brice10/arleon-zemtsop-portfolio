import { Routes } from '@angular/router';
import { pageSeo } from '@core/seo/seo.resolvers';
import { blogPostResolver } from './blog.resolvers';
import { BlogListPage } from './pages/blog-list.page';
import { BlogPostPage } from './pages/blog-post.page';

export default [
  {
    path: '',
    component: BlogListPage,
    resolve: { seo: pageSeo('blog') },
    runGuardsAndResolvers: 'always',
  },
  {
    path: ':slug',
    component: BlogPostPage,
    resolve: { view: blogPostResolver },
    runGuardsAndResolvers: 'always',
  },
] satisfies Routes;
