import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « dimanche-sondage-controle-vs-autonomie » (FR). Le texte se modifie dans `dimanche-sondage-controle-vs-autonomie.fr.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-dimanche-sondage-controle-vs-autonomie-fr',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dimanche-sondage-controle-vs-autonomie.fr.html',
})
export class DimancheSondageControleVsAutonomieFr {}
