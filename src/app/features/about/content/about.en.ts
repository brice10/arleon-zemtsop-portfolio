import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Contenu de la page « À propos » (EN). Le contenu se modifie dans `about.en.html`, son style dans `about.en.css`. */
@Component({
  selector: 'app-about-en',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.en.html',
  styleUrl: './about.en.css',
})
export class AboutEn {}
