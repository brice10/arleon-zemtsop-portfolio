import { Directive, ElementRef, HostListener, inject } from '@angular/core';

/**
 * Envoi asynchrone du formulaire de contact vers Formspree (attribut `action` du formulaire).
 * Le formulaire garde `action` et `method` : il fonctionne aussi sans JavaScript.
 *
 * Éléments attendus dans la page : `#submit-btn`, `#success-message`, `#error-message`, `#error-status`.
 */
@Directive({ selector: 'form[appContactForm]' })
export class ContactFormDirective {
  private readonly form = inject<ElementRef<HTMLFormElement>>(ElementRef).nativeElement;

  @HostListener('submit', ['$event'])
  protected async submit(event: SubmitEvent): Promise<void> {
    event.preventDefault();
    const doc = this.form.ownerDocument;
    const button = doc.getElementById('submit-btn') as HTMLButtonElement | null;
    const success = doc.getElementById('success-message');
    const error = doc.getElementById('error-message');
    const status = doc.getElementById('error-status');
    const fallback = 'Oops! There was a problem submitting your form';

    error?.classList.add('hidden');
    button?.setAttribute('disabled', '');
    button?.setAttribute('aria-busy', 'true');
    try {
      const response = await fetch(this.form.action, {
        method: 'POST',
        body: new FormData(this.form),
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        this.form.hidden = true;
        success?.classList.remove('hidden');
        this.form.reset();
      } else {
        const data = (await response.json().catch(() => ({}))) as {
          errors?: { message: string }[];
        };
        if (status) {
          status.textContent = data.errors?.map((e) => e.message).join(', ') || fallback;
        }
        error?.classList.remove('hidden');
      }
    } catch {
      if (status) {
        status.textContent = fallback;
      }
      error?.classList.remove('hidden');
    } finally {
      button?.removeAttribute('disabled');
      button?.removeAttribute('aria-busy');
    }
  }
}
