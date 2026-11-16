import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « compliment-sur-mon-code » (EN). Le texte se modifie dans `compliment-sur-mon-code.en.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-compliment-sur-mon-code-en',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './compliment-sur-mon-code.en.html',
})
export class ComplimentSurMonCodeEn {}
