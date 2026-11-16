import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « cameleon-agir-sans-s-arreter » (FR). Le texte se modifie dans `cameleon-agir-sans-s-arreter.fr.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-cameleon-agir-sans-s-arreter-fr',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cameleon-agir-sans-s-arreter.fr.html',
})
export class CameleonAgirSansSArreterFr {}
