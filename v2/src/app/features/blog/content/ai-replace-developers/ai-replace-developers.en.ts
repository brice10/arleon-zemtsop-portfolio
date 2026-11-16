import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « ai-replace-developers » (EN). Le contenu se modifie dans `ai-replace-developers.en.html`, son style dans `ai-replace-developers.css`. */
@Component({
  selector: 'app-ai-replace-developers-en',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ai-replace-developers.en.html',
  styleUrl: './ai-replace-developers.css',
})
export class AiReplaceDevelopersEn {}
