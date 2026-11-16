import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '@core/i18n/i18n.service';
import { PageHero } from '@shared/ui/page-hero';
import { WipNotice } from '@shared/ui/wip-notice';

@Component({
  selector: 'app-research-page',
  imports: [PageHero, WipNotice],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-hero
      [title]="i18n.t().pages.research.title"
      [lead]="i18n.t().pages.research.lead"
      [crumbs]="[{ label: i18n.t().nav.research }]"
    />
    <!-- TODO(contenu) : sections de la page, à découper en composants dans features/research/components/ -->
    <app-wip-notice />
  `,
})
export class ResearchPage {
  protected readonly i18n = inject(I18nService);
}
