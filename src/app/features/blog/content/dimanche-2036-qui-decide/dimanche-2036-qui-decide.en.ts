import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « dimanche-2036-qui-decide » (EN). Le texte se modifie dans `dimanche-2036-qui-decide.en.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-dimanche-2036-qui-decide-en',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dimanche-2036-qui-decide.en.html',
})
export class Dimanche2036QuiDecideEn {}
