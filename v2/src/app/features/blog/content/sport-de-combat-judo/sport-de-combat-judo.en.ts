import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « sport-de-combat-judo » (EN). Le texte se modifie dans `sport-de-combat-judo.en.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-sport-de-combat-judo-en',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sport-de-combat-judo.en.html',
})
export class SportDeCombatJudoEn {}
