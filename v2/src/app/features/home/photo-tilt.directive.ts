import { Directive, ElementRef, HostListener, inject } from '@angular/core';

/** Légère inclinaison 3D des portraits au survol (écrans larges uniquement). */
@Directive({ selector: '.photo-container' })
export class PhotoTiltDirective {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  @HostListener('mousemove', ['$event'])
  protected tilt(event: MouseEvent): void {
    if (window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const rect = this.el.getBoundingClientRect();
    const x = (rect.width / 2 - (event.clientX - rect.left)) / 15;
    const y = (event.clientY - rect.top - rect.height / 2) / 15;
    this.el.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) scale(1.02)`;
  }

  @HostListener('mouseleave')
  protected reset(): void {
    this.el.style.transform = '';
  }
}
