import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « evenement-depeche » (EN). Le texte se modifie dans `evenement-depeche.en.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-evenement-depeche-en',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './evenement-depeche.en.html',
})
export class EvenementDepecheEn {}
