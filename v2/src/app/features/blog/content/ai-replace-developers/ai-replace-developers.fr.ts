import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « ai-replace-developers » (FR). Le contenu se modifie dans `ai-replace-developers.fr.html`, son style dans `ai-replace-developers.css`. */
@Component({
  selector: 'app-ai-replace-developers-fr',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ai-replace-developers.fr.html',
  styleUrl: './ai-replace-developers.css',
})
export class AiReplaceDevelopersFr {}
