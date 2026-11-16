import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « six-ans-de-reponses » (FR). Le texte se modifie dans `six-ans-de-reponses.fr.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-six-ans-de-reponses-fr',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './six-ans-de-reponses.fr.html',
})
export class SixAnsDeReponsesFr {}
