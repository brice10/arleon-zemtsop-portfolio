import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « expert-validates-baby » (EN). Le contenu se modifie dans `expert-validates-baby.en.html`, son style dans `expert-validates-baby.css`. */
@Component({
  selector: 'app-expert-validates-baby-en',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './expert-validates-baby.en.html',
  styleUrl: './expert-validates-baby.css',
})
export class ExpertValidatesBabyEn {}
