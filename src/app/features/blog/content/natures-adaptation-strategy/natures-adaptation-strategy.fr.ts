import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « natures-adaptation-strategy » (FR). Le contenu se modifie dans `natures-adaptation-strategy.fr.html`, son style dans `natures-adaptation-strategy.css`. */
@Component({
  selector: 'app-natures-adaptation-strategy-fr',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './natures-adaptation-strategy.fr.html',
  styleUrl: './natures-adaptation-strategy.css',
})
export class NaturesAdaptationStrategyFr {}
