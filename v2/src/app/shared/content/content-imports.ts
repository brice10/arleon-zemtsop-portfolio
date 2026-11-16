import { RouterLink } from '@angular/router';
import { FilterDirective } from './filter.directive';
import { RevealDirective } from './reveal.directive';

export { FilterDirective, RevealDirective };

/** Imports communs à tous les composants de contenu (pages et articles). */
export const CONTENT_IMPORTS = [RouterLink, RevealDirective, FilterDirective] as const;
