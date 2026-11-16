import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « mythe-vs-realite-carte-de-these » (FR). Le texte se modifie dans `mythe-vs-realite-carte-de-these.fr.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-mythe-vs-realite-carte-de-these-fr',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mythe-vs-realite-carte-de-these.fr.html',
})
export class MytheVsRealiteCarteDeTheseFr {}
