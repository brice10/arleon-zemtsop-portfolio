import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « developers-vs-testers » (FR). Le contenu se modifie dans `developers-vs-testers.fr.html`, son style dans `developers-vs-testers.css`. */
@Component({
  selector: 'app-developers-vs-testers-fr',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './developers-vs-testers.fr.html',
  styleUrl: './developers-vs-testers.css',
})
export class DevelopersVsTestersFr {}
