import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BlogPostView } from '../blog.model';

/** Page d'un article : affiche le composant de contenu chargé par `blogPostResolver`. */
@Component({
  selector: 'app-blog-post-page',
  imports: [NgComponentOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-container *ngComponentOutlet="view().content" />`,
})
export class BlogPostPage {
  /** Renseigné par le resolver de la route (clé `view`). */
  readonly view = input.required<BlogPostView>();
}
