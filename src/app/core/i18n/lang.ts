export const LANGS = ['fr', 'en'] as const;
export type Lang = (typeof LANGS)[number];

/** Langue servie quand aucune n'est précisée (et cible du hreflang `x-default`). */
export const DEFAULT_LANG: Lang = 'en';

export type Localized<T = string> = Record<Lang, T>;

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (LANGS as readonly string[]).includes(value);
}
