import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Contenu de la page « Recherche » (EN). Le contenu se modifie dans `research.en.html`, son style dans `research.en.css`. */
@Component({
  selector: 'app-research-en',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './research.en.html',
  styleUrl: './research.en.css',
})
export class ResearchEn {}
