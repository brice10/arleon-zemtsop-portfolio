import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « on-est-bientot-arrives » (FR). Le texte se modifie dans `on-est-bientot-arrives.fr.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-on-est-bientot-arrives-fr',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './on-est-bientot-arrives.fr.html',
})
export class OnEstBientotArrivesFr {}
