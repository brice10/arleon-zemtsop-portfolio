import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « first-paper-accepted » (FR). Le contenu se modifie dans `first-paper-accepted.fr.html`, son style dans `first-paper-accepted.css`. */
@Component({
  selector: 'app-first-paper-accepted-fr',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './first-paper-accepted.fr.html',
  styleUrl: './first-paper-accepted.css',
})
export class FirstPaperAcceptedFr {}
