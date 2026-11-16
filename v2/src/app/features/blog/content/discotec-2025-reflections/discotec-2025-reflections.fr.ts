import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « discotec-2025-reflections » (FR). Le contenu se modifie dans `discotec-2025-reflections.fr.html`, son style dans `discotec-2025-reflections.css`. */
@Component({
  selector: 'app-discotec-2025-reflections-fr',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './discotec-2025-reflections.fr.html',
  styleUrl: './discotec-2025-reflections.css',
})
export class Discotec2025ReflectionsFr {}
