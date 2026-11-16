import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « two-months-inria-lessons » (EN). Le contenu se modifie dans `two-months-inria-lessons.en.html`, son style dans `two-months-inria-lessons.css`. */
@Component({
  selector: 'app-two-months-inria-lessons-en',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './two-months-inria-lessons.en.html',
  styleUrl: './two-months-inria-lessons.css',
})
export class TwoMonthsInriaLessonsEn {}
