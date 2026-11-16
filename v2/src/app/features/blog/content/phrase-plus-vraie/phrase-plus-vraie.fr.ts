import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « phrase-plus-vraie » (FR). Le texte se modifie dans `phrase-plus-vraie.fr.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-phrase-plus-vraie-fr',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './phrase-plus-vraie.fr.html',
})
export class PhrasePlusVraieFr {}
