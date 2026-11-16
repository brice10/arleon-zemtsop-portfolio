import { Injectable } from '@angular/core';
import { BlogPost } from './blog.model';
import { POSTS } from './data/posts';

@Injectable({ providedIn: 'root' })
export class BlogService {
  readonly posts: readonly BlogPost[] = POSTS;

  find(slug: string): BlogPost | undefined {
    return POSTS.find((post) => post.slug === slug);
  }
}
