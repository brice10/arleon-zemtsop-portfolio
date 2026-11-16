import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « engineer-evolving-phd » (FR). Le contenu se modifie dans `engineer-evolving-phd.fr.html`, son style dans `engineer-evolving-phd.css`. */
@Component({
  selector: 'app-engineer-evolving-phd-fr',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './engineer-evolving-phd.fr.html',
  styleUrl: './engineer-evolving-phd.css',
})
export class EngineerEvolvingPhdFr {}
