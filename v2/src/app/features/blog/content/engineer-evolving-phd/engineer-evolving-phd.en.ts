import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « engineer-evolving-phd » (EN). Le contenu se modifie dans `engineer-evolving-phd.en.html`, son style dans `engineer-evolving-phd.css`. */
@Component({
  selector: 'app-engineer-evolving-phd-en',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './engineer-evolving-phd.en.html',
  styleUrl: './engineer-evolving-phd.css',
})
export class EngineerEvolvingPhdEn {}
