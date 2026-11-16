import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '@core/i18n/i18n.service';
import { BlogService } from '../blog.service';
import { PostCard } from './post-card';

/** Les articles les plus récents, avec un lien vers le blog. Utilisé sur la page d'accueil. */
@Component({
  selector: 'app-latest-posts',
  imports: [RouterLink, PostCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t().blog;

    <section class="relative z-10 py-24" aria-labelledby="latest-posts-title">
      <div class="container-page">
        <div class="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p
              class="mb-4 flex items-center gap-4 font-mono text-sm tracking-wider text-determination uppercase"
            >
              <span class="h-0.5 w-12 bg-determination"></span>Blog
            </p>
            <h2 id="latest-posts-title" class="text-3xl font-bold lg:text-4xl">{{ t.latest }}</h2>
          </div>
          <a [routerLink]="i18n.page('blog')" class="btn btn-ghost"
            >{{ t.all }} <span aria-hidden="true">→</span></a
          >
        </div>
        <ul class="grid gap-6 md:grid-cols-3">
          @for (post of posts(); track post.slug) {
            <li><app-post-card [post]="post" /></li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class LatestPosts {
  protected readonly i18n = inject(I18nService);
  private readonly blog = inject(BlogService);

  /** Nombre d'articles affichés. */
  readonly count = input(3);
  protected readonly posts = computed(() => this.blog.in(this.i18n.lang()).slice(0, this.count()));
}
