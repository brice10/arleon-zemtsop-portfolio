import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '@core/i18n/i18n.service';
import { PageHero } from '@shared/ui/page-hero';
import { BLOG_CATEGORIES, BlogCategory } from '../blog.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list-page',
  imports: [RouterLink, PageHero],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t();
    @let lang = i18n.lang();

    <app-page-hero [title]="t.blog.title" [lead]="t.blog.lead" [crumbs]="[{ label: t.nav.blog }]" />

    <section class="container-page pb-20">
      <div class="mb-8 flex flex-wrap gap-2" role="group" [attr.aria-label]="t.nav.blog">
        @for (filter of filters; track filter) {
          <button
            type="button"
            class="rounded-full border px-4 py-2 font-mono text-xs transition-colors"
            [class]="
              filter === active()
                ? 'border-determination bg-determination/20 text-white'
                : 'border-white/10 text-gray-light hover:text-white'
            "
            [attr.aria-pressed]="filter === active()"
            (click)="active.set(filter)"
          >
            {{ t.blog.filters[filter] }}
          </button>
        }
      </div>

      <ul class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        @for (post of visible(); track post.slug) {
          <li>
            <article class="card flex h-full flex-col">
              <p class="text-4xl" aria-hidden="true">{{ post.emoji }}</p>
              <p class="mt-4 flex items-center gap-2 font-mono text-xs">
                <span class="tag">{{ post.tag[lang] }}</span>
                <time [attr.datetime]="post.year" class="text-gray-light">{{ post.year }}</time>
              </p>
              <h2 class="mt-3 text-lg font-bold">
                <a [routerLink]="i18n.path('blog/' + post.slug)" class="hover:text-determination">{{
                  post.title[lang]
                }}</a>
              </h2>
              <p class="mt-2 text-sm text-gray-light">{{ post.description[lang] }}</p>
            </article>
          </li>
        }
      </ul>
    </section>
  `,
})
export class BlogListPage {
  protected readonly i18n = inject(I18nService);
  private readonly blog = inject(BlogService);

  protected readonly filters: ('all' | BlogCategory)[] = ['all', ...BLOG_CATEGORIES];
  protected readonly active = signal<'all' | BlogCategory>('all');
  protected readonly visible = computed(() => {
    const active = this.active();
    return this.blog.posts.filter((post) => active === 'all' || post.categories.includes(active));
  });
}
