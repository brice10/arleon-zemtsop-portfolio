import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « french-integration-hacks » (EN). Le contenu se modifie dans `french-integration-hacks.en.html`, son style dans `french-integration-hacks.css`. */
@Component({
  selector: 'app-french-integration-hacks-en',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './french-integration-hacks.en.html',
  styleUrl: './french-integration-hacks.css',
})
export class FrenchIntegrationHacksEn {}
