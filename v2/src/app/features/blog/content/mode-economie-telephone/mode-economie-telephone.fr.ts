import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « mode-economie-telephone » (FR). Le texte se modifie dans `mode-economie-telephone.fr.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-mode-economie-telephone-fr',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mode-economie-telephone.fr.html',
})
export class ModeEconomieTelephoneFr {}
