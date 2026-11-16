import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « holidays-cameroon » (EN). Le contenu se modifie dans `holidays-cameroon.en.html`, son style dans `holidays-cameroon.css`. */
@Component({
  selector: 'app-holidays-cameroon-en',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './holidays-cameroon.en.html',
  styleUrl: './holidays-cameroon.css',
})
export class HolidaysCameroonEn {}
