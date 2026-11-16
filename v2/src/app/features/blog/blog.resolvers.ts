import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { I18nService } from '@core/i18n/i18n.service';
import { SeoService } from '@core/seo/seo.service';
import { blogPostingNode, breadcrumbNode } from '@core/seo/structured-data';
import { environment } from '@env';
import { BlogPostView } from './blog.model';
import { BlogService } from './blog.service';

/** Charge l'article demandé, applique son SEO (type `article`, BlogPosting, fil d'Ariane) ou renvoie la 404. */
export const blogPostResolver: ResolveFn<BlogPostView> = async (route) => {
  const blog = inject(BlogService);
  const i18n = inject(I18nService);
  const seo = inject(SeoService);
  const router = inject(Router);

  const post = blog.find(route.paramMap.get('slug') ?? '');
  if (!post) {
    return new RedirectCommand(router.parseUrl('/404'), { skipLocationChange: true });
  }

  const lang = i18n.lang();
  const t = i18n.t();
  const path = `blog/${post.slug}`;
  const content = await post.content[lang]();

  seo.apply({
    title: `${post.title[lang]} | Blog — Arléon Zemtsop`,
    description: post.description[lang],
    path,
    type: 'article',
    jsonLd: [
      blogPostingNode(environment.siteUrl, seo.url(path), lang, {
        title: post.title[lang],
        description: post.description[lang],
        datePublished: post.date ?? String(post.year),
        section: post.tag[lang],
      }),
      breadcrumbNode([
        { name: t.common.breadcrumbHome, url: seo.url() },
        { name: t.nav.blog, url: seo.url('blog') },
        { name: post.title[lang], url: seo.url(path) },
      ]),
    ],
  });

  return { post, content };
};
