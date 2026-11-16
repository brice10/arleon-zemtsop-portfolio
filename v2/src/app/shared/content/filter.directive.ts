import { Directive, ElementRef, HostListener, inject } from '@angular/core';

/**
 * Bouton de filtre (classe `filter-btn`, attribut `data-filter`).
 * Affiche les éléments voisins dont `data-category` contient la valeur du filtre ;
 * `data-filter="all"` affiche tout.
 */
@Directive({ selector: '.filter-btn' })
export class FilterDirective {
  private readonly button = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  @HostListener('click')
  protected apply(): void {
    const filter = this.button.dataset['filter'] ?? 'all';

    // Plus proche ancêtre contenant à la fois les boutons et les éléments filtrables.
    let scope: HTMLElement | null = this.button.parentElement;
    while (scope && !scope.querySelector('[data-category]')) {
      scope = scope.parentElement;
    }
    if (!scope) {
      return;
    }

    scope.querySelectorAll<HTMLElement>('.filter-btn').forEach((other) => {
      const active = other === this.button;
      other.classList.toggle('active', active);
      other.setAttribute('aria-pressed', String(active));
    });
    scope.querySelectorAll<HTMLElement>('[data-category]').forEach((item) => {
      const categories = (item.dataset['category'] ?? '').split(' ');
      item.hidden = filter !== 'all' && !categories.includes(filter);
    });
  }
}
