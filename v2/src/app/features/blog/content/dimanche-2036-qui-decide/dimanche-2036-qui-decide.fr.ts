import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « dimanche-2036-qui-decide » (FR). Le texte se modifie dans `dimanche-2036-qui-decide.fr.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-dimanche-2036-qui-decide-fr',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dimanche-2036-qui-decide.fr.html',
})
export class Dimanche2036QuiDecideFr {}
