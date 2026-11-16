import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Contenu de la page « Projets » (FR). Le contenu se modifie dans `projects.fr.html`, son style dans `projects.fr.css`. */
@Component({
  selector: 'app-projects-fr',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.fr.html',
  styleUrl: './projects.fr.css',
})
export class ProjectsFr {}
