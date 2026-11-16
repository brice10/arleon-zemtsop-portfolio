import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '@core/i18n/i18n.service';

/** Bandeau provisoire des pages dont le contenu v1 n'est pas encore repris. À retirer page par page. */
@Component({
  selector: 'app-wip-notice',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p class="card border-noble-gold/30 font-mono text-sm text-noble-gold" role="note">
      🚧 {{ i18n.t().common.wip }}
    </p>
  `,
  host: { class: 'container-page block pb-16' },
})
export class WipNotice {
  protected readonly i18n = inject(I18nService);
}
