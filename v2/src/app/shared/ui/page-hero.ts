import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '@core/i18n/i18n.service';

/** En-tête commun des pages intérieures : fil d'Ariane, <h1> unique et chapô. */
@Component({
  selector: 'app-page-hero',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="container-page pt-12 pb-10 lg:pt-20">
      <nav aria-label="Breadcrumb" class="mb-6 font-mono text-xs text-gray-light">
        <ol class="flex flex-wrap items-center gap-2">
          <li>
            <a [routerLink]="i18n.page('home')" class="hover:text-digital-cyan">{{
              i18n.t().common.breadcrumbHome
            }}</a>
          </li>
          @for (crumb of crumbs(); track crumb.label) {
            <li aria-hidden="true">/</li>
            <li>
              @if (crumb.link) {
                <a [routerLink]="crumb.link" class="hover:text-digital-cyan">{{ crumb.label }}</a>
              } @else {
                <span aria-current="page" class="text-white">{{ crumb.label }}</span>
              }
            </li>
          }
        </ol>
      </nav>
      @if (eyebrow()) {
        <p class="mb-3 font-mono text-sm text-determination">{{ eyebrow() }}</p>
      }
      <h1 class="text-4xl leading-tight font-extrabold lg:text-5xl">{{ title() }}</h1>
      @if (lead()) {
        <p class="mt-5 max-w-3xl text-lg text-gray-light">{{ lead() }}</p>
      }
    </header>
  `,
})
export class PageHero {
  protected readonly i18n = inject(I18nService);

  readonly title = input.required<string>();
  readonly lead = input<string>();
  readonly eyebrow = input<string>();
  readonly crumbs = input<{ label: string; link?: string }[]>([]);
}
