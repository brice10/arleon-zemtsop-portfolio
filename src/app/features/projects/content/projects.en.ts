import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Contenu de la page « Projets » (EN). Le contenu se modifie dans `projects.en.html`, son style dans `projects.en.css`. */
@Component({
  selector: 'app-projects-en',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.en.html',
  styleUrl: './projects.en.css',
})
export class ProjectsEn {}
