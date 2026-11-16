import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « closing-chapter-engineer » (EN). Le contenu se modifie dans `closing-chapter-engineer.en.html`, son style dans `closing-chapter-engineer.css`. */
@Component({
  selector: 'app-closing-chapter-engineer-en',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './closing-chapter-engineer.en.html',
  styleUrl: './closing-chapter-engineer.css',
})
export class ClosingChapterEngineerEn {}
