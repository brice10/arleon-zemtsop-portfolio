import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « evaluateur-un-chiffre-un-probleme » (EN). Le texte se modifie dans `evaluateur-un-chiffre-un-probleme.en.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-evaluateur-un-chiffre-un-probleme-en',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './evaluateur-un-chiffre-un-probleme.en.html',
})
export class EvaluateurUnChiffreUnProblemeEn {}
