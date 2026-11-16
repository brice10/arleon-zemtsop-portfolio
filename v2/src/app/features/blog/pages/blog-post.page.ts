import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '@core/i18n/i18n.service';
import { PageHero } from '@shared/ui/page-hero';
import { BlogPostView } from '../blog.model';

@Component({
  selector: 'app-blog-post-page',
  imports: [RouterLink, PageHero],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t();
    @let lang = i18n.lang();
    @let post = view().post;

    <article>
      <app-page-hero
        [title]="post.emoji + ' ' + post.title[lang]"
        [lead]="post.description[lang]"
        [eyebrow]="eyebrow()"
        [crumbs]="[{ label: t.nav.blog, link: i18n.page('blog') }, { label: post.title[lang] }]"
      />

      <div class="container-page pb-20">
        <div class="max-w-3xl">
          @if (view().html; as html) {
            <!-- HTML issu de nos propres fichiers Markdown, assaini par Angular -->
            <div class="prose-custom" [innerHTML]="html"></div>
          } @else {
            <p class="card border-noble-gold/30 font-mono text-sm text-noble-gold" role="note">
              🚧 {{ t.blog.migrating }}
            </p>
          }
          <a [routerLink]="i18n.page('blog')" class="btn btn-ghost mt-12"
            >← {{ t.blog.backToBlog }}</a
          >
        </div>
      </div>
    </article>
  `,
})
export class BlogPostPage {
  protected readonly i18n = inject(I18nService);

  /** Renseigné par `blogPostResolver` (liaison des données de route aux inputs). */
  readonly view = input.required<BlogPostView>();

  protected eyebrow(): string {
    const { post } = this.view();
    const parts = [post.tag[this.i18n.lang()], String(post.year)];
    if (post.readingMinutes) {
      parts.push(`${post.readingMinutes} ${this.i18n.t().blog.minutes}`);
    }
    return parts.join(' · ');
  }
}
