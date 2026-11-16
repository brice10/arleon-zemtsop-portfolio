import { Injectable, computed, signal } from '@angular/core';
import { PAGE_PATHS, PageKey } from '@core/config/site.config';
import { Dictionary } from './dictionaries/dictionary.model';
import { EN } from './dictionaries/en';
import { FR } from './dictionaries/fr';
import { DEFAULT_LANG, Lang } from './lang';

const DICTIONARIES: Record<Lang, Dictionary> = { fr: FR, en: EN };

/**
 * État de langue de l'application. La langue vient de l'URL (`/fr/...`, `/en/...`) :
 * c'est le garde `langMatch` qui appelle `use()`, jamais les composants.
 */
@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly current = signal<Lang>(DEFAULT_LANG);

  readonly lang = this.current.asReadonly();
  /** Dictionnaire typé de la langue courante : `t().nav.home`. */
  readonly t = computed(() => DICTIONARIES[this.current()]);

  use(lang: Lang): void {
    this.current.set(lang);
  }

  dictionary(lang: Lang): Dictionary {
    return DICTIONARIES[lang];
  }

  /** Lien interne vers une page statique, dans la langue courante. */
  page(key: PageKey): string {
    return this.path(PAGE_PATHS[key]);
  }

  /** Lien interne vers un chemin relatif au préfixe de langue, ex. `blog/mon-article`. */
  path(relative = '', lang: Lang = this.current()): string {
    return relative ? `/${lang}/${relative}` : `/${lang}`;
  }
}
