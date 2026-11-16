import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « holidays-cameroon » (FR). Le contenu se modifie dans `holidays-cameroon.fr.html`, son style dans `holidays-cameroon.css`. */
@Component({
  selector: 'app-holidays-cameroon-fr',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './holidays-cameroon.fr.html',
  styleUrl: './holidays-cameroon.css',
})
export class HolidaysCameroonFr {}
