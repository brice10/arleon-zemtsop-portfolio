import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { environment } from '@env';

/**
 * Charge les scripts de mesure uniquement dans le navigateur et uniquement si le
 * profil d'environnement les active (production). Rien n'est injecté au prérendu
 * ni en développement.
 */
@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly doc = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private started = false;

  start(): void {
    if (!this.isBrowser || this.started) {
      return;
    }
    this.started = true;
    const { vercel, googleAnalyticsId } = environment.analytics;

    // Les scripts /_vercel/* n'existent que sur l'infrastructure Vercel (pas dans l'aperçu Docker).
    const onVercel = !['localhost', '127.0.0.1'].includes(this.doc.location.hostname);
    if (vercel && onVercel) {
      this.script('/_vercel/insights/script.js');
      this.script('/_vercel/speed-insights/script.js');
    }
    if (googleAnalyticsId && onVercel) {
      const w = this.doc.defaultView as (Window & { dataLayer?: unknown[] }) | null;
      if (w) {
        w.dataLayer = w.dataLayer ?? [];
        const gtag = function (..._args: unknown[]) {
          // gtag.js attend l'objet `arguments`, pas un tableau.
          // eslint-disable-next-line prefer-rest-params
          w.dataLayer!.push(arguments);
        };
        gtag('js', new Date());
        gtag('config', googleAnalyticsId);
        this.script(`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`);
      }
    }
  }

  private script(src: string): void {
    const script = this.doc.createElement('script');
    script.src = src;
    script.defer = true;
    this.doc.head.appendChild(script);
  }
}
