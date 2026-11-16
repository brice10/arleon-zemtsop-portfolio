import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « closing-chapter-engineer » (FR). Le contenu se modifie dans `closing-chapter-engineer.fr.html`, son style dans `closing-chapter-engineer.css`. */
@Component({
  selector: 'app-closing-chapter-engineer-fr',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './closing-chapter-engineer.fr.html',
  styleUrl: './closing-chapter-engineer.css',
})
export class ClosingChapterEngineerFr {}
