import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { DualProfile } from './dual-profile';

describe('DualProfile', () => {
  function setup() {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(DualProfile);
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    return {
      fixture,
      figure: root.querySelector('.dual') as HTMLElement,
      engineer: root.querySelector('.zone--engineer') as HTMLButtonElement,
      researcher: root.querySelector('.zone--researcher') as HTMLButtonElement,
    };
  }

  it('n’avantage aucun profil au repos', () => {
    const { figure } = setup();
    expect(figure.className).not.toContain('is-');
  });

  it('met en avant le profil dont la moitié reçoit le focus, un seul à la fois', () => {
    const { fixture, figure, engineer, researcher } = setup();

    engineer.dispatchEvent(new Event('focus'));
    fixture.detectChanges();
    expect(figure.classList.contains('is-engineer')).toBe(true);
    expect(engineer.getAttribute('aria-pressed')).toBe('true');

    researcher.dispatchEvent(new Event('focus'));
    fixture.detectChanges();
    expect(figure.classList.contains('is-researcher')).toBe(true);
    expect(figure.classList.contains('is-engineer')).toBe(false);
  });
});
