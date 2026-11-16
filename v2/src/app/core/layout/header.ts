import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map } from 'rxjs';
import { NAV_PAGES } from '@core/config/site.config';
import { I18nService } from '@core/i18n/i18n.service';
import { LANGS, Lang } from '@core/i18n/lang';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
})
export class Header {
  protected readonly i18n = inject(I18nService);
  private readonly router = inject(Router);

  protected readonly pages = NAV_PAGES;
  protected readonly langs = LANGS;
  protected readonly menuOpen = signal(false);

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  /** Même page dans chaque langue : le sélecteur est fait de vrais liens, suivis par les robots. */
  protected readonly alternates = computed(() => {
    const [path] = this.url().split(/[?#]/);
    const rest = path.split('/').slice(2).join('/');
    return LANGS.map((lang) => ({ lang, link: this.i18n.path(rest, lang) }));
  });

  protected label(lang: Lang): string {
    return lang.toUpperCase();
  }

  protected close(): void {
    this.menuOpen.set(false);
  }
}
