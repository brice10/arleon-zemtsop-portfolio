import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';

/** Article « 1-month-12-days-phd » (EN). Le contenu se modifie dans `1-month-12-days-phd.en.html`, son style dans `1-month-12-days-phd.css`. */
@Component({
  selector: 'app-1-month-12-days-phd-en',
  imports: [CONTENT_IMPORTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './1-month-12-days-phd.en.html',
  styleUrl: './1-month-12-days-phd.css',
})
export class Post1Month12DaysPhdEn {}
