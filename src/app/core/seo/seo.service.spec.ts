import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { I18nService } from '@core/i18n/i18n.service';
import { SeoService } from './seo.service';

describe('SeoService', () => {
  let seo: SeoService;
  let doc: Document;

  beforeEach(() => {
    seo = TestBed.inject(SeoService);
    doc = TestBed.inject(DOCUMENT);
    TestBed.inject(I18nService).use('fr');
  });

  it('écrit le titre, la description et la langue du document', () => {
    seo.applyPage('about');

    expect(doc.title).toContain('À propos');
    expect(doc.documentElement.lang).toBe('fr');
    expect(doc.querySelector('meta[name="description"]')?.getAttribute('content')).toBeTruthy();
  });

  it('pose une URL canonique et les alternatives hreflang de chaque langue', () => {
    seo.applyPage('about');

    const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute('href');
    const hreflangs = [...doc.querySelectorAll('link[rel="alternate"][hreflang]')].map((l) =>
      l.getAttribute('hreflang'),
    );

    expect(canonical).toMatch(/\/fr\/about$/);
    expect(hreflangs).toEqual(['fr', 'en', 'x-default']);
  });

  it('ne duplique pas les balises d’une navigation à la suivante', () => {
    seo.applyPage('about');
    seo.applyPage('research');

    expect(doc.querySelectorAll('link[rel="canonical"]').length).toBe(1);
    expect(doc.querySelectorAll('script[type="application/ld+json"]').length).toBe(1);
  });

  it('exclut de l’index une page marquée noindex, sans canonique ni JSON-LD', () => {
    seo.apply({ title: 'x', description: 'y', path: '404', noindex: true });

    expect(doc.querySelector('meta[name="robots"]')?.getAttribute('content')).toContain('noindex');
    expect(doc.querySelector('link[rel="canonical"]')).toBeNull();
  });
});
