import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « developers-vs-testers » (EN). Le contenu se modifie dans `developers-vs-testers.en.html`, son style dans `developers-vs-testers.css`. */
@Component({
  selector: 'app-developers-vs-testers-en',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './developers-vs-testers.en.html',
  styleUrl: './developers-vs-testers.css',
})
export class DevelopersVsTestersEn {}
