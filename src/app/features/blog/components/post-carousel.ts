import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { I18nService } from '@core/i18n/i18n.service';
import { Lang } from '@core/i18n/lang';

const LABELS: Record<Lang, { previous: string; next: string; slide: string }> = {
  fr: { previous: 'Diapositive précédente', next: 'Diapositive suivante', slide: 'Diapositive' },
  en: { previous: 'Previous slide', next: 'Next slide', slide: 'Slide' },
};

/**
 * Carrousel d'images d'un article (les « documents » LinkedIn).
 * Défilement horizontal natif avec aimantation : utilisable au doigt, à la molette, au clavier et
 * sans JavaScript ; les boutons ne font que faire défiler d'une diapositive.
 */
@Component({
  selector: 'app-post-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    @let label = labels[i18n.lang()];

    <div class="relative">
      <div
        #track
        class="flex snap-x snap-mandatory gap-4 overflow-x-auto rounded-2xl pb-3"
        tabindex="0"
        role="group"
        [attr.aria-label]="alt()"
        (scroll)="onScroll()"
      >
        @for (slide of slides(); track slide; let index = $index) {
          <img
            [src]="slide"
            width="1080"
            height="1350"
            [alt]="label.slide + ' ' + (index + 1) + ' / ' + slides().length + ' — ' + alt()"
            [attr.loading]="index === 0 ? 'eager' : 'lazy'"
            decoding="async"
            class="h-auto w-[85%] shrink-0 snap-center rounded-2xl border border-white/10 sm:w-[60%]"
          />
        }
      </div>
      <div class="mt-3 flex items-center justify-between font-mono text-xs text-gray-light">
        <span aria-live="polite">{{ current() }} / {{ slides().length }}</span>
        <span class="flex gap-2">
          <button
            type="button"
            class="carousel-btn"
            [attr.aria-label]="label.previous"
            (click)="move(-1)"
          >
            ←
          </button>
          <button
            type="button"
            class="carousel-btn"
            [attr.aria-label]="label.next"
            (click)="move(1)"
          >
            →
          </button>
        </span>
      </div>
    </div>
  `,
  styles: `
    .carousel-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2.25rem;
      height: 2.25rem;
      border: 1px solid color-mix(in srgb, var(--color-white) 15%, transparent);
      border-radius: 999px;
      color: var(--color-white);
      font-size: 1rem;
      transition:
        border-color 0.2s,
        color 0.2s;
    }
    .carousel-btn:hover {
      border-color: var(--color-determination);
      color: var(--color-determination);
    }
  `,
})
export class PostCarousel {
  protected readonly i18n = inject(I18nService);
  protected readonly labels = LABELS;

  /** Chemins des images, dans l'ordre. */
  readonly slides = input.required<string[]>();
  /** Description du carrousel (titre de l'article). */
  readonly alt = input('');

  private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');
  private readonly index = signal(0);
  protected readonly current = computed(() => this.index() + 1);

  protected move(step: number): void {
    const track = this.track().nativeElement;
    const target = track.children[
      Math.min(Math.max(this.index() + step, 0), this.slides().length - 1)
    ] as HTMLElement;
    track.scrollTo({
      left: target.offsetLeft - (track.clientWidth - target.clientWidth) / 2,
      behavior: 'smooth',
    });
  }

  protected onScroll(): void {
    const track = this.track().nativeElement;
    const centre = track.scrollLeft + track.clientWidth / 2;
    const closest = Array.from(track.children).reduce(
      (best, child, i) => {
        const el = child as HTMLElement;
        const distance = Math.abs(el.offsetLeft + el.clientWidth / 2 - centre);
        return distance < best.distance ? { i, distance } : best;
      },
      { i: 0, distance: Infinity },
    );
    this.index.set(closest.i);
  }
}
