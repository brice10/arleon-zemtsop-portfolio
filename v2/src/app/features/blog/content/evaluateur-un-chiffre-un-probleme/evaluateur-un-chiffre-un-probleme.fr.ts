import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « evaluateur-un-chiffre-un-probleme » (FR). Le texte se modifie dans `evaluateur-un-chiffre-un-probleme.fr.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-evaluateur-un-chiffre-un-probleme-fr',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './evaluateur-un-chiffre-un-probleme.fr.html',
})
export class EvaluateurUnChiffreUnProblemeFr {}
