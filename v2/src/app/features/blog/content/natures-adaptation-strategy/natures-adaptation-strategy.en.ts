import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « natures-adaptation-strategy » (EN). Le contenu se modifie dans `natures-adaptation-strategy.en.html`, son style dans `natures-adaptation-strategy.css`. */
@Component({
  selector: 'app-natures-adaptation-strategy-en',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './natures-adaptation-strategy.en.html',
  styleUrl: './natures-adaptation-strategy.css',
})
export class NaturesAdaptationStrategyEn {}
