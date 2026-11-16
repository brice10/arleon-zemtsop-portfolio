import { Injectable } from '@angular/core';
import { Lang } from '@core/i18n/lang';
import { BlogPost } from './blog.model';
import { POSTS } from './data/posts';

@Injectable({ providedIn: 'root' })
export class BlogService {
  readonly posts: readonly BlogPost[] = POSTS;

  find(slug: string): BlogPost | undefined {
    return POSTS.find((post) => post.slug === slug);
  }

  /** Corps de l'article converti en HTML, ou null s'il n'a pas de contenu dans cette langue. */
  async render(post: BlogPost, lang: Lang): Promise<string | null> {
    const load = post.content?.[lang];
    if (!load) {
      return null;
    }
    const [{ default: markdown }, { marked }] = await Promise.all([load(), import('marked')]);
    return marked.parse(markdown, { async: false });
  }
}
