import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
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

/** Carte d'article, commune à la liste du blog et aux « derniers articles » de l'accueil. */
@Component({
  selector: 'app-post-card',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block h-full' },
  template: `
    @let lang = i18n.lang();
    @let item = post();
    @let cover = covers[item.categories[0]];

    <article
      class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-linear-to-br from-noble-blue/30 to-night-sky/50 transition-transform duration-300 hover:-translate-y-1"
    >
      <div
        class="flex h-28 items-center justify-center bg-linear-to-br {{ cover.tone }}"
        aria-hidden="true"
      >
        <svg
          width="44"
          height="44"
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
      <div class="flex flex-1 flex-col p-6">
        <p class="flex items-center gap-2 font-mono text-xs">
          <span class="tag">{{ item.tag[lang] }}</span>
          <time [attr.datetime]="item.date ?? item.year" class="text-gray-light">{{
            item.year
          }}</time>
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
}
