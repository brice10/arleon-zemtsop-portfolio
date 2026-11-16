import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PageKey } from '@core/config/site.config';
import { environment } from '@env';
import { JsonLd } from './seo.model';
import { personId } from './structured-data';
import { I18nService } from '@core/i18n/i18n.service';
import { SeoService } from './seo.service';

/**
 * Resolver à poser sur chaque route de page statique : `resolve: { seo: pageSeo('about') }`.
 * `jsonLd` ajoute des données structurées propres à la page ; il reçoit l'identifiant du nœud Person.
 */
export function pageSeo(page: PageKey, jsonLd?: (personId: string) => JsonLd[]): ResolveFn<true> {
  return () => {
    inject(SeoService).applyPage(page, jsonLd?.(personId(environment.siteUrl)));
    return true;
  };
}

export const notFoundSeo: ResolveFn<true> = () => {
  const meta = inject(I18nService).t().seo.notFound;
  inject(SeoService).apply({ ...meta, path: '404', noindex: true });
  return true;
};
