import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « black-friday-six-etapes » (EN). Le texte se modifie dans `black-friday-six-etapes.en.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-black-friday-six-etapes-en',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './black-friday-six-etapes.en.html',
})
export class BlackFridaySixEtapesEn {}
