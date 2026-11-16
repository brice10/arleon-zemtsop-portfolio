import { Type, inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { I18nService } from '@core/i18n/i18n.service';
import { Localized } from '@core/i18n/lang';

/** Import dynamique d'un composant de contenu : son code n'est téléchargé que s'il est affiché. */
export type ContentLoader = () => Promise<Type<unknown>>;

/**
 * Resolver qui charge le composant de contenu de la langue courante.
 *
 *   resolve: { content: localizedContent({ fr: () => import('./content/about.fr').then((m) => m.AboutFr), en: … }) }
 */
export function localizedContent(loaders: Localized<ContentLoader>): ResolveFn<Type<unknown>> {
  return () => loaders[inject(I18nService).lang()]();
}
