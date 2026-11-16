import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { I18nService } from './i18n.service';
import { isLang } from './lang';

/**
 * N'accepte la route `:lang` que pour une langue connue et la rend active
 * avant la création des composants (important pour le prérendu).
 */
export const langMatch: CanMatchFn = (_route, segments) => {
  const lang = segments[0]?.path;
  if (!isLang(lang)) {
    return false;
  }
  inject(I18nService).use(lang);
  return true;
};
