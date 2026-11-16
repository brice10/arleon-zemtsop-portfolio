import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « master-thesis-presentation » (FR). Le contenu se modifie dans `master-thesis-presentation.fr.html`, son style dans `master-thesis-presentation.css`. */
@Component({
  selector: 'app-master-thesis-presentation-fr',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './master-thesis-presentation.fr.html',
  styleUrl: './master-thesis-presentation.css',
})
export class MasterThesisPresentationFr {}
