import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « expert-validates-baby » (FR). Le contenu se modifie dans `expert-validates-baby.fr.html`, son style dans `expert-validates-baby.css`. */
@Component({
  selector: 'app-expert-validates-baby-fr',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './expert-validates-baby.fr.html',
  styleUrl: './expert-validates-baby.css',
})
export class ExpertValidatesBabyFr {}
