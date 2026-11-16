import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FOOTER_PAGES, SITE } from '@core/config/site.config';
import { I18nService } from '@core/i18n/i18n.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="relative z-10 border-t border-white/5 bg-deep-night py-10">
      <div
        class="container-page flex flex-col gap-6 text-sm text-gray-light md:flex-row md:items-center md:justify-between"
      >
        <p>© {{ year }} {{ site.legalName }}. {{ i18n.t().footer.rights }}</p>
        <ul class="flex flex-wrap gap-x-5 gap-y-2">
          @for (page of pages; track page) {
            <li>
              <a [routerLink]="i18n.page(page)" class="hover:text-white">{{
                i18n.t().nav[page]
              }}</a>
            </li>
          }
        </ul>
        <ul class="flex gap-5">
          <li>
            <a
              [href]="site.social.linkedin"
              rel="me noopener"
              target="_blank"
              class="hover:text-white"
              >LinkedIn</a
            >
          </li>
          <li>
            <a
              [href]="site.social.github"
              rel="me noopener"
              target="_blank"
              class="hover:text-white"
              >GitHub</a
            >
          </li>
          <li>
            <a [href]="site.social.x" rel="me noopener" target="_blank" class="hover:text-white"
              >X</a
            >
          </li>
        </ul>
      </div>
      <p class="container-page mt-6 font-mono text-xs text-gray-medium">
        {{ i18n.t().footer.madeIn }}
      </p>
    </footer>
  `,
})
export class Footer {
  protected readonly i18n = inject(I18nService);
  protected readonly site = SITE;
  protected readonly pages = FOOTER_PAGES;
  protected readonly year = new Date().getFullYear();
}
