import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Contenu de la page « Expérience professionnelle » (EN). Le contenu se modifie dans `experience.en.html`, son style dans `experience.css`. */
@Component({
  selector: 'app-experience-en',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.en.html',
  styleUrl: './experience.css',
})
export class ExperienceEn {}
