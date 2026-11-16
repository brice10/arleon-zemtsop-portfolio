import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { I18nService } from '@core/i18n/i18n.service';
import { Lang } from '@core/i18n/lang';
import { PUBLICATIONS, Publication, SELF } from './publications';

const LABELS: Record<Lang, { copy: string; copied: string; pages: string }> = {
  fr: { copy: 'Copier le BibTeX', copied: 'Copié !', pages: 'p.' },
  en: { copy: 'Copy BibTeX', copied: 'Copied!', pages: 'pp.' },
};

/** Liste des publications : référence complète, liens DOI / arXiv / HAL et entrée BibTeX à copier. */
@Component({
  selector: 'app-publication-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    @let lang = i18n.lang();
    @let label = labels[lang];

    <ol class="space-y-4">
      @for (pub of publications; track pub.key; let index = $index) {
        <li
          class="rounded-xl border border-white/5 bg-linear-to-br from-noble-blue/20 to-night-sky/30 p-6 lg:p-8"
        >
          <p class="mb-3 flex flex-wrap items-center gap-3 font-mono text-xs">
            <span
              class="rounded-full border border-determination/30 bg-determination/20 px-3 py-1 text-determination"
              >{{ pub.kind[lang] }}</span
            >
            <span class="text-gray-light">{{ pub.year }}</span>
          </p>
          <h3 class="font-display text-lg font-bold text-white lg:text-xl">{{ pub.title }}</h3>
          <p class="mt-2 text-sm text-gray-light">
            @for (author of pub.authors; track author; let last = $last) {
              <span [class]="author === self ? 'font-semibold text-digital-cyan' : ''">{{
                author
              }}</span>{{ last ? '.' : ', ' }}
            }
          </p>
          <p class="mt-2 text-sm text-gray-light italic">
            {{ pub.venue }}
            @if (pub.pages) {
              , {{ label.pages }} {{ pub.pages }}
            }
            . {{ pub.event }}.
          </p>
          <p class="mt-4 text-sm leading-relaxed text-gray-light">{{ pub.summary[lang] }}</p>

          <div class="mt-5 flex flex-wrap items-center gap-3 font-mono text-xs">
            <a [href]="'https://doi.org/' + pub.doi" target="_blank" rel="noopener" class="pub-link"
              >DOI</a
            >
            <a
              [href]="'https://arxiv.org/abs/' + pub.arxiv"
              target="_blank"
              rel="noopener"
              class="pub-link"
              >arXiv</a
            >
            <a [href]="pub.hal" target="_blank" rel="noopener" class="pub-link">HAL</a>
            <details class="basis-full">
              <summary class="pub-link inline-flex cursor-pointer list-none">BibTeX</summary>
              <div class="mt-3 rounded-lg border border-white/10 bg-deep-night/60 p-4">
                <pre class="overflow-x-auto text-xs leading-relaxed text-gray-soft">{{
                  pub.bibtex
                }}</pre>
                <button type="button" class="pub-link mt-3" (click)="copy(pub)">
                  {{ copied() === pub.key ? label.copied : label.copy }}
                </button>
              </div>
            </details>
          </div>
        </li>
      }
    </ol>
  `,
  styles: `
    .pub-link {
      border: 1px solid color-mix(in srgb, var(--color-white) 12%, transparent);
      border-radius: 0.5rem;
      background: color-mix(in srgb, var(--color-white) 5%, transparent);
      padding: 0.5rem 1rem;
      color: var(--color-gray-light);
      transition:
        color 0.2s,
        border-color 0.2s;
    }
    .pub-link:hover {
      border-color: var(--color-digital-cyan);
      color: var(--color-digital-cyan);
    }
    summary::-webkit-details-marker {
      display: none;
    }
  `,
})
export class PublicationList {
  protected readonly i18n = inject(I18nService);
  protected readonly publications = PUBLICATIONS;
  protected readonly labels = LABELS;
  protected readonly self = SELF;
  protected readonly copied = signal<string | null>(null);

  protected async copy(pub: Publication): Promise<void> {
    try {
      await navigator.clipboard.writeText(pub.bibtex);
      this.copied.set(pub.key);
      setTimeout(() => this.copied.set(null), 2000);
    } catch {
      // Presse-papiers indisponible : le texte reste sélectionnable dans le bloc.
    }
  }
}
