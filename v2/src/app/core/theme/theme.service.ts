import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

/**
 * Thème clair / sombre.
 *
 * Par défaut, le thème est celui du système : clair si le système est clair, sombre s'il est sombre
 * ou s'il n'exprime aucune préférence. Cette détection est faite en CSS (`prefers-color-scheme`,
 * voir styles.css) : elle ne dépend d'aucun script et s'applique dès le HTML prérendu.
 *
 * Ce service ne gère que le choix du visiteur (bouton de l'en-tête) : il pose `data-theme` sur
 * <html> et le mémorise dans le navigateur ; le script en ligne de index.html le réapplique avant
 * le premier affichage des visites suivantes.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  /** Thème actuellement affiché : le choix du visiteur s'il existe, sinon celui du système. */
  current(): Theme {
    const chosen = this.doc.documentElement.getAttribute('data-theme');
    if (chosen === 'light' || chosen === 'dark') {
      return chosen;
    }
    const view = this.doc.defaultView;
    const systemIsLight =
      this.isBrowser &&
      typeof view?.matchMedia === 'function' &&
      view.matchMedia('(prefers-color-scheme: light)').matches;
    return systemIsLight ? 'light' : 'dark';
  }

  /** Bascule entre clair et sombre, et mémorise le choix. */
  toggle(): void {
    this.set(this.current() === 'light' ? 'dark' : 'light');
  }

  set(theme: Theme): void {
    if (!this.isBrowser) {
      return;
    }
    this.doc.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Stockage indisponible (navigation privée stricte) : le choix vaut pour la page en cours.
    }
  }
}
