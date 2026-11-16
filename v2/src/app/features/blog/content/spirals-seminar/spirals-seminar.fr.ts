import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « spirals-seminar » (FR). Le contenu se modifie dans `spirals-seminar.fr.html`, son style dans `spirals-seminar.css`. */
@Component({
  selector: 'app-spirals-seminar-fr',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './spirals-seminar.fr.html',
  styleUrl: './spirals-seminar.css',
})
export class SpiralsSeminarFr {}
