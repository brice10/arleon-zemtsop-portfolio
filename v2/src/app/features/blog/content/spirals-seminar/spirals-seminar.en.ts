import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « spirals-seminar » (EN). Le contenu se modifie dans `spirals-seminar.en.html`, son style dans `spirals-seminar.css`. */
@Component({
  selector: 'app-spirals-seminar-en',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './spirals-seminar.en.html',
  styleUrl: './spirals-seminar.css',
})
export class SpiralsSeminarEn {}
