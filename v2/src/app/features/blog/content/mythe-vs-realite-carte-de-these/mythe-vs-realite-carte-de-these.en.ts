import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « mythe-vs-realite-carte-de-these » (EN). Le texte se modifie dans `mythe-vs-realite-carte-de-these.en.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-mythe-vs-realite-carte-de-these-en',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mythe-vs-realite-carte-de-these.en.html',
})
export class MytheVsRealiteCarteDeTheseEn {}
