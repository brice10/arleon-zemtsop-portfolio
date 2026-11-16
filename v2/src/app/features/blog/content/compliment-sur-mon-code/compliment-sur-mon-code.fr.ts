import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « compliment-sur-mon-code » (FR). Le texte se modifie dans `compliment-sur-mon-code.fr.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-compliment-sur-mon-code-fr',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './compliment-sur-mon-code.fr.html',
})
export class ComplimentSurMonCodeFr {}
