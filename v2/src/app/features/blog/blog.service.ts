import { Injectable } from '@angular/core';
import { Lang } from '@core/i18n/lang';
import { BlogPost } from './blog.model';
import { POSTS } from './data/posts';

@Injectable({ providedIn: 'root' })
export class BlogService {
  /** Articles disponibles dans une langue, du plus récent au plus ancien. */
  in(lang: Lang): BlogPost[] {
    return POSTS.filter((post) => !!post.content[lang]);
  }

  find(slug: string): BlogPost | undefined {
    return POSTS.find((post) => post.slug === slug);
  }
}
