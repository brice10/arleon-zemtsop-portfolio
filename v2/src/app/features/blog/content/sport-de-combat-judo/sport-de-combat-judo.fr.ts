import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « sport-de-combat-judo » (FR). Le texte se modifie dans `sport-de-combat-judo.fr.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-sport-de-combat-judo-fr',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sport-de-combat-judo.fr.html',
})
export class SportDeCombatJudoFr {}
