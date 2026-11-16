import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « french-integration-hacks » (FR). Le contenu se modifie dans `french-integration-hacks.fr.html`, son style dans `french-integration-hacks.css`. */
@Component({
  selector: 'app-french-integration-hacks-fr',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './french-integration-hacks.fr.html',
  styleUrl: './french-integration-hacks.css',
})
export class FrenchIntegrationHacksFr {}
