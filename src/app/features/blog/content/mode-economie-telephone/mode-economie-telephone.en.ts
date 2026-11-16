import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « mode-economie-telephone » (EN). Le texte se modifie dans `mode-economie-telephone.en.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-mode-economie-telephone-en',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mode-economie-telephone.en.html',
})
export class ModeEconomieTelephoneEn {}
