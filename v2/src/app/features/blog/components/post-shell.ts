import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '@core/config/site.config';
import { I18nService } from '@core/i18n/i18n.service';
import { Lang } from '@core/i18n/lang';
import { BlogService } from '../blog.service';
import { PostCarousel } from './post-carousel';

const LABELS: Record<Lang, { back: string; minutes: string; origin: string; follow: string }> = {
  fr: {
    back: 'Retour au blog',
    minutes: 'min de lecture',
    origin: 'Publié initialement sur LinkedIn.',
    follow: 'Me suivre sur LinkedIn',
  },
  en: {
    back: 'Back to blog',
    minutes: 'min read',
    origin: 'Originally published on LinkedIn.',
    follow: 'Follow me on LinkedIn',
  },
};

/**
 * Gabarit commun des articles courts (série LinkedIn) : en-tête, média de l'article (carrousel,
 * vidéo ou image) puis texte projeté. Titre, date et média viennent du registre `POSTS`, d'après
 * le slug : le composant de contenu ne porte que le texte.
 */
@Component({
  selector: 'app-post-shell',
  imports: [RouterLink, PostCarousel],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    @let lang = i18n.lang();
    @let label = labels[lang];
    @let item = post();

    @if (item) {
      @let media = item.preview?.[lang];
      <article class="mx-auto max-w-3xl px-4 pt-10 pb-24 sm:px-6 lg:px-8 lg:pt-14">
        <a
          [routerLink]="i18n.page('blog')"
          class="mb-8 inline-flex items-center gap-2 text-gray-light transition-colors hover:text-determination"
        >
          <span aria-hidden="true">←</span> {{ label.back }}
        </a>

        <header class="mb-10">
          <p class="mb-6 flex flex-wrap items-center gap-3 font-mono text-xs text-gray-light">
            <span class="tag">{{ item.tag[lang] }}</span>
            <time [attr.datetime]="item.date">{{ date() }}</time>
            @if (item.readingMinutes) {
              <span>· {{ item.readingMinutes }} {{ label.minutes }}</span>
            }
          </p>
          <h1 class="font-display text-3xl leading-tight font-extrabold text-white lg:text-4xl">
            {{ item.title[lang] }}
          </h1>
        </header>

        @if (media) {
          <figure class="mb-10">
            @if (media.slides) {
              <app-post-carousel [slides]="media.slides" [alt]="item.title[lang]" />
            } @else if (media.video) {
              <video
                [src]="media.video"
                [poster]="media.image"
                [attr.width]="media.width"
                [attr.height]="media.height"
                controls
                muted
                playsinline
                preload="none"
                class="mx-auto h-auto w-full max-w-xl rounded-2xl border border-white/10"
              ></video>
            } @else {
              <img
                [src]="media.image"
                [width]="media.width"
                [height]="media.height"
                [alt]="item.title[lang]"
                decoding="async"
                class="mx-auto h-auto w-full max-w-xl rounded-2xl border border-white/10"
              />
            }
          </figure>
        }

        <div class="prose-custom"><ng-content /></div>

        <footer
          class="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-light"
        >
          <span>{{ label.origin }}</span>
          <a [href]="linkedin" target="_blank" rel="noopener" class="btn btn-ghost">{{
            label.follow
          }}</a>
        </footer>
      </article>
    }
  `,
})
export class PostShell {
  protected readonly i18n = inject(I18nService);
  private readonly blog = inject(BlogService);
  protected readonly labels = LABELS;
  protected readonly linkedin = SITE.social.linkedin;

  /** Slug de l'article dans le registre `POSTS`. */
  readonly slug = input.required<string>();

  protected readonly post = computed(() => this.blog.find(this.slug()));
  protected readonly date = computed(() => {
    const date = this.post()?.date;
    return date
      ? new Intl.DateTimeFormat(this.i18n.lang(), { dateStyle: 'long', timeZone: 'UTC' }).format(
          new Date(date),
        )
      : '';
  });
}
