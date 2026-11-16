import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '@core/i18n/i18n.service';
import { BlogCategory, BlogPost } from '../blog.model';

/** Pictogramme (tracé SVG 24×24) et couleur de la vignette, selon la catégorie principale de l'article. */
const COVERS: Record<BlogCategory, { icon: string; tone: string }> = {
  // fiole : recherche
  research: {
    icon: 'M9 3h6M10 3v6.2L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9.2V3M7.5 14h9',
    tone: 'from-digital-cyan/30 to-noble-blue/20 text-digital-cyan',
  },
  // ampoule : vulgarisation
  popular: {
    icon: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.3 1 2.1h5c0-.8.4-1.6 1-2.1A6 6 0 0 0 12 3z',
    tone: 'from-warm-energy/30 to-noble-blue/20 text-warm-energy',
  },
  // toque : parcours de doctorat
  phd: {
    icon: 'M2 9l10-5 10 5-10 5-10-5zM6 11.5V16c0 1.2 2.7 2.5 6 2.5s6-1.3 6-2.5v-4.5M22 9v5',
    tone: 'from-determination/30 to-noble-blue/20 text-determination',
  },
  // chevrons : tech
  tech: {
    icon: 'M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 5l-3 14',
    tone: 'from-code-green/30 to-noble-blue/20 text-code-green',
  },
  // boussole : vie et intégration
  life: {
    icon: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM15.5 8.5l-2 5-5 2 2-5 5-2z',
    tone: 'from-noble-gold/30 to-noble-blue/20 text-noble-gold',
  },
};

/**
 * Carte d'article, commune à la liste du blog et aux « derniers articles » de l'accueil.
 * Son aperçu est, dans l'ordre : la vidéo de l'article (jouée au survol, son image de couverture
 * au repos), son image, ou à défaut le pictogramme de sa catégorie.
 */
@Component({
  selector: 'app-post-card',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block h-full' },
  template: `
    @let lang = i18n.lang();
    @let item = post();
    @let cover = covers[item.categories[0]];
    @let media = preview();

    <article
      class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-linear-to-br from-noble-blue/30 to-night-sky/50 transition-transform duration-300 hover:-translate-y-1"
      (pointerenter)="play($event)"
      (pointerleave)="stop()"
    >
      @if (media) {
        <div class="relative aspect-square overflow-hidden bg-[#0b1f3a]">
          <img
            [src]="media.image"
            [width]="media.width"
            [height]="media.height"
            alt=""
            loading="lazy"
            decoding="async"
            class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          @if (media.video) {
            <video
              #video
              [src]="media.video"
              muted
              loop
              playsinline
              preload="none"
              aria-hidden="true"
              tabindex="-1"
              class="absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            ></video>
            <span
              class="absolute right-3 bottom-3 flex size-9 items-center justify-center rounded-full bg-determination text-[#fff] shadow-lg transition-opacity group-hover:opacity-0"
              aria-hidden="true"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          }
        </div>
      } @else {
        <div
          class="flex aspect-[4/3] items-center justify-center bg-linear-to-br {{ cover.tone }}"
          aria-hidden="true"
        >
          <svg
            width="56"
            height="56"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path [attr.d]="cover.icon" />
          </svg>
        </div>
      }
      <div class="flex flex-1 flex-col p-6">
        <p class="flex items-center gap-2 font-mono text-xs">
          <span class="tag">{{ item.tag[lang] }}</span>
          <time [attr.datetime]="item.date ?? item.year" class="text-gray-light">{{ date() }}</time>
        </p>
        <!-- Le lien couvre toute la carte (after:inset-0) tout en gardant un intitulé explicite. -->
        <h3 class="mt-3 font-display text-lg font-bold text-white">
          <a
            [routerLink]="i18n.path('blog/' + item.slug)"
            class="after:absolute after:inset-0 group-hover:text-determination"
            >{{ item.title[lang] }}</a
          >
        </h3>
        <p class="mt-2 text-sm text-gray-light">{{ item.description[lang] }}</p>
      </div>
    </article>
  `,
})
export class PostCard {
  protected readonly i18n = inject(I18nService);
  protected readonly covers = COVERS;

  readonly post = input.required<BlogPost>();

  private readonly video = viewChild<ElementRef<HTMLVideoElement>>('video');
  protected readonly preview = computed(() => this.post().preview?.[this.i18n.lang()]);

  /** Date lisible : jour complet si connu, sinon mois, sinon année. */
  protected readonly date = computed(() => {
    const { date, year } = this.post();
    if (!date) {
      return String(year);
    }
    const options: Intl.DateTimeFormatOptions =
      date.length > 7
        ? { day: 'numeric', month: 'short', year: 'numeric' }
        : { month: 'long', year: 'numeric' };
    return new Intl.DateTimeFormat(this.i18n.lang(), { ...options, timeZone: 'UTC' }).format(
      new Date(date),
    );
  });

  /** Lecture de l'aperçu vidéo au survol de la souris (pas au toucher, pour ne pas consommer de données). */
  protected play(event: PointerEvent): void {
    if (event.pointerType === 'mouse') {
      void this.video()
        ?.nativeElement.play()
        .catch(() => undefined);
    }
  }

  protected stop(): void {
    const video = this.video()?.nativeElement;
    if (video && !video.paused) {
      video.pause();
      video.currentTime = 0;
    }
  }
}
