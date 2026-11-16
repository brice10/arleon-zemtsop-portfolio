import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, afterNextRender, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnalyticsService } from '@core/analytics/analytics.service';
import { I18nService } from '@core/i18n/i18n.service';
import { Footer } from '@core/layout/footer';
import { Header } from '@core/layout/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      href="#main"
      (click)="skipToContent($event, main)"
      class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-determination focus:px-4 focus:py-2 focus:text-deep-night"
      >{{ i18n.t().a11y.skipToContent }}</a
    >
    <app-header />
    <main #main id="main" tabindex="-1" class="min-h-[70vh] outline-none">
      <router-outlet />
    </main>
    <app-footer />
  `,
})
export class App {
  protected readonly i18n = inject(I18nService);

  /** Avec <base href="/">, une ancre nue renverrait à l'accueil : on déplace le focus à la main. */
  protected skipToContent(event: Event, main: HTMLElement): void {
    event.preventDefault();
    main.focus();
    main.scrollIntoView();
  }

  constructor() {
    const analytics = inject(AnalyticsService);

    // Ancres (#section) : la cible s'arrête sous l'en-tête collant du site et sous
    // l'éventuel sommaire collant de la page (attribut `data-sticky`).
    const scroller = inject(ViewportScroller);
    scroller.setOffset(() => {
      const bars = Array.from(document.querySelectorAll<HTMLElement>('[data-sticky]'));
      return [0, 80 + bars.reduce((height, bar) => height + bar.offsetHeight, 0)];
    });
    afterNextRender(() => analytics.start());
  }
}
