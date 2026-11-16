import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let root: HTMLElement;
  let view: Window;

  function systemPrefers(scheme: 'light' | 'dark' | 'none') {
    view.matchMedia = ((query: string) => ({
      matches: scheme !== 'none' && query.includes(scheme),
    })) as typeof window.matchMedia;
  }

  beforeEach(() => {
    const doc = TestBed.inject(DOCUMENT);
    root = doc.documentElement;
    view = doc.defaultView as Window;
    root.removeAttribute('data-theme');
    localStorage.clear();
  });

  it('prend le thème clair quand le système est clair', () => {
    systemPrefers('light');
    expect(TestBed.inject(ThemeService).current()).toBe('light');
  });

  it('prend le thème sombre quand le système est sombre', () => {
    systemPrefers('dark');
    expect(TestBed.inject(ThemeService).current()).toBe('dark');
  });

  it('reste sombre quand le système n’exprime aucune préférence', () => {
    systemPrefers('none');
    expect(TestBed.inject(ThemeService).current()).toBe('dark');
  });

  it('bascule vers le thème opposé, le mémorise, et ce choix prime ensuite sur le système', () => {
    systemPrefers('light');
    const theme = TestBed.inject(ThemeService);

    theme.toggle();
    expect(root.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(theme.current()).toBe('dark');

    theme.toggle();
    expect(root.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
