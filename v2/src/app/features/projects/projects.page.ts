import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '@core/i18n/i18n.service';
import { PageHero } from '@shared/ui/page-hero';
import { WipNotice } from '@shared/ui/wip-notice';

@Component({
  selector: 'app-projects-page',
  imports: [PageHero, WipNotice],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-hero
      [title]="i18n.t().pages.projects.title"
      [lead]="i18n.t().pages.projects.lead"
      [crumbs]="[{ label: i18n.t().nav.projects }]"
    />
    <!-- TODO(contenu) : sections de la page, à découper en composants dans features/projects/components/ -->
    <app-wip-notice />
  `,
})
export class ProjectsPage {
  protected readonly i18n = inject(I18nService);
}
