import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SITE } from '@core/config/site.config';
import { I18nService } from '@core/i18n/i18n.service';
import { environment } from '@env';
import { PageHero } from '@shared/ui/page-hero';

type Status = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact-page',
  imports: [PageHero],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.page.html',
})
export class ContactPage {
  protected readonly i18n = inject(I18nService);
  protected readonly site = SITE;
  protected readonly contact = environment.contact;
  protected readonly status = signal<Status>('idle');

  /**
   * Envoi asynchrone vers Formspree. Le formulaire garde `action`/`method` :
   * il reste fonctionnel même si JavaScript n'est pas chargé.
   */
  protected async submit(event: SubmitEvent): Promise<void> {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    this.status.set('sending');
    try {
      const response = await fetch(this.contact.formspreeEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      this.status.set(response.ok ? 'success' : 'error');
      if (response.ok) {
        form.reset();
      }
    } catch {
      this.status.set('error');
    }
  }
}
