import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Contenu de la page « Expérience professionnelle » (FR). Le contenu se modifie dans `experience.fr.html`, son style dans `experience.css`. */
@Component({
  selector: 'app-experience-fr',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.fr.html',
  styleUrl: './experience.css',
})
export class ExperienceFr {}
