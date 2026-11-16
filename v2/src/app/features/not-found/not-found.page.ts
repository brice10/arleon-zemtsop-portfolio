import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '@core/i18n/i18n.service';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="container-page py-24 text-center">
      <p class="font-mono text-determination">404</p>
      <h1 class="mt-3 text-4xl font-extrabold">{{ i18n.t().notFound.title }}</h1>
      <p class="mt-4 text-gray-light">{{ i18n.t().notFound.text }}</p>
      <a [routerLink]="i18n.page('home')" class="btn btn-primary mt-8">{{
        i18n.t().common.backHome
      }}</a>
    </section>
  `,
})
export class NotFoundPage {
  protected readonly i18n = inject(I18nService);
}
