import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « master-thesis-presentation » (EN). Le contenu se modifie dans `master-thesis-presentation.en.html`, son style dans `master-thesis-presentation.css`. */
@Component({
  selector: 'app-master-thesis-presentation-en',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './master-thesis-presentation.en.html',
  styleUrl: './master-thesis-presentation.css',
})
export class MasterThesisPresentationEn {}
