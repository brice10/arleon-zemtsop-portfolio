import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « evenement-depeche » (FR). Le texte se modifie dans `evenement-depeche.fr.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-evenement-depeche-fr',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './evenement-depeche.fr.html',
})
export class EvenementDepecheFr {}
