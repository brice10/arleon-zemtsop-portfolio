import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '@core/i18n/i18n.service';
import { PageHero } from '@shared/ui/page-hero';
import { WipNotice } from '@shared/ui/wip-notice';

@Component({
  selector: 'app-experience-page',
  imports: [PageHero, WipNotice],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-hero
      [title]="i18n.t().pages.experience.title"
      [lead]="i18n.t().pages.experience.lead"
      [crumbs]="[{ label: i18n.t().nav.experience }]"
    />
    <!-- TODO(contenu) : sections de la page, à découper en composants dans features/experience/components/ -->
    <app-wip-notice />
  `,
})
export class ExperiencePage {
  protected readonly i18n = inject(I18nService);
}
