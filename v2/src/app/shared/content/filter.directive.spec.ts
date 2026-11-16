import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FilterDirective } from './filter.directive';

@Component({
  imports: [FilterDirective],
  template: `
    <div>
      <button class="filter-btn active" data-filter="all">Tous</button>
      <button class="filter-btn" data-filter="research">Recherche</button>
    </div>
    <article data-category="research phd">A</article>
    <article data-category="tech">B</article>
  `,
})
class Host {}

describe('FilterDirective', () => {
  it('ne garde visibles que les éléments de la catégorie choisie, puis tout avec « all »', () => {
    const fixture = TestBed.createComponent(Host);
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    const [all, research] = Array.from(root.querySelectorAll<HTMLButtonElement>('.filter-btn'));
    const [a, b] = Array.from(root.querySelectorAll<HTMLElement>('article'));

    research.click();
    expect([a.hidden, b.hidden]).toEqual([false, true]);
    expect(research.classList.contains('active')).toBe(true);
    expect(all.classList.contains('active')).toBe(false);

    all.click();
    expect([a.hidden, b.hidden]).toEqual([false, false]);
  });
});
