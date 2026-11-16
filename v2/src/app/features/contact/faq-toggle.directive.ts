import { Directive, ElementRef, HostListener, inject } from '@angular/core';

/** Question de FAQ : ouvre sa réponse (classe `active` sur `.faq-item`) et referme les autres. */
@Directive({
  selector: '[appFaqToggle]',
  host: { role: 'button', tabindex: '0', '[attr.aria-expanded]': 'expanded' },
})
export class FaqToggleDirective {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  protected expanded = false;

  @HostListener('click')
  @HostListener('keydown.enter')
  @HostListener('keydown.space', ['$event'])
  protected toggle(event?: Event): void {
    event?.preventDefault();
    const item = this.el.closest('.faq-item');
    if (!item) {
      return;
    }
    item.parentElement?.querySelectorAll('.faq-item.active').forEach((other) => {
      if (other !== item) {
        other.classList.remove('active');
        other.querySelector('[appFaqToggle]')?.setAttribute('aria-expanded', 'false');
      }
    });
    this.expanded = item.classList.toggle('active');
  }
}
