import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '@core/config/site.config';
import { I18nService } from '@core/i18n/i18n.service';
import { RevealDirective } from '@shared/directives/reveal.directive';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, NgOptimizedImage, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.page.html',
})
export class HomePage {
  protected readonly i18n = inject(I18nService);
  protected readonly site = SITE;
}
