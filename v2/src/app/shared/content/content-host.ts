import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Type, input } from '@angular/core';

/**
 * Page générique : affiche le composant de contenu choisi par le resolver
 * `localizedContent` (une version par langue, chargée à la demande).
 */
@Component({
  selector: 'app-content-host',
  imports: [NgComponentOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-container *ngComponentOutlet="content()" />`,
})
export class ContentHost {
  /** Renseigné par le resolver de la route (clé `content`). */
  readonly content = input.required<Type<unknown>>();
}
