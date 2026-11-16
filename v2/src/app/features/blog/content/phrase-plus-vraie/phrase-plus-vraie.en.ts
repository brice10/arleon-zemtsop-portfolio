import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « phrase-plus-vraie » (EN). Le texte se modifie dans `phrase-plus-vraie.en.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-phrase-plus-vraie-en',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './phrase-plus-vraie.en.html',
})
export class PhrasePlusVraieEn {}
