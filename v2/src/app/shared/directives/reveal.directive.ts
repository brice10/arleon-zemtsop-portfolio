import { Directive, ElementRef, afterNextRender, inject } from '@angular/core';

/**
 * Fait apparaître l'élément quand il entre dans la fenêtre.
 * Ne s'exécute que dans le navigateur : le HTML prérendu reste entièrement visible.
 */
@Directive({ selector: '[appReveal]' })
export class RevealDirective {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  constructor() {
    afterNextRender(() => {
      if (
        !('IntersectionObserver' in window) ||
        this.el.getBoundingClientRect().top < window.innerHeight
      ) {
        return;
      }
      this.el.classList.add('reveal-pending');
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.el.classList.replace('reveal-pending', 'reveal-in');
            observer.disconnect();
          }
        },
        { rootMargin: '0px 0px -10% 0px' },
      );
      observer.observe(this.el);
    });
  }
}
