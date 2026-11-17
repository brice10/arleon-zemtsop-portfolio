import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « black-friday-six-etapes » (FR). Le texte se modifie dans `black-friday-six-etapes.fr.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-black-friday-six-etapes-fr',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './black-friday-six-etapes.fr.html',
})
export class BlackFridaySixEtapesFr {}
