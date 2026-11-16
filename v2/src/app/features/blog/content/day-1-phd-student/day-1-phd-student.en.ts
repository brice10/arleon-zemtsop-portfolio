import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « day-1-phd-student » (EN). Le contenu se modifie dans `day-1-phd-student.en.html`, son style dans `day-1-phd-student.css`. */
@Component({
  selector: 'app-day-1-phd-student-en',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './day-1-phd-student.en.html',
  styleUrl: './day-1-phd-student.css',
})
export class Day1PhdStudentEn {}
