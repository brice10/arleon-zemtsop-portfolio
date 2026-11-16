import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « first-paper-accepted » (EN). Le contenu se modifie dans `first-paper-accepted.en.html`, son style dans `first-paper-accepted.css`. */
@Component({
  selector: 'app-first-paper-accepted-en',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './first-paper-accepted.en.html',
  styleUrl: './first-paper-accepted.css',
})
export class FirstPaperAcceptedEn {}
