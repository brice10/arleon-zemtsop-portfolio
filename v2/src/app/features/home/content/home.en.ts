import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';
import { PhotoTiltDirective } from '../photo-tilt.directive';

/** Contenu de la page d'accueil (EN). Le contenu se modifie dans `home.en.html`, son style dans `home.css`. */
@Component({
  selector: 'app-home-en',
  imports: [CONTENT_IMPORTS, PhotoTiltDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.en.html',
  styleUrl: './home.css',
})
export class HomeEn {}
