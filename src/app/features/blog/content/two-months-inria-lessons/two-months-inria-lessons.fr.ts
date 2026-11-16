import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « two-months-inria-lessons » (FR). Le contenu se modifie dans `two-months-inria-lessons.fr.html`, son style dans `two-months-inria-lessons.css`. */
@Component({
  selector: 'app-two-months-inria-lessons-fr',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './two-months-inria-lessons.fr.html',
  styleUrl: './two-months-inria-lessons.css',
})
export class TwoMonthsInriaLessonsFr {}
