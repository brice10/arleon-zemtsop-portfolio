import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Contenu de la page « À propos » (FR). Le contenu se modifie dans `about.fr.html`, son style dans `about.fr.css`. */
@Component({
  selector: 'app-about-fr',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.fr.html',
  styleUrl: './about.fr.css',
})
export class AboutFr {}
