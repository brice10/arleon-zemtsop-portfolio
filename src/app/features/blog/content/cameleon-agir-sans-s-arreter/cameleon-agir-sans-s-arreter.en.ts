import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « cameleon-agir-sans-s-arreter » (EN). Le texte se modifie dans `cameleon-agir-sans-s-arreter.en.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-cameleon-agir-sans-s-arreter-en',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cameleon-agir-sans-s-arreter.en.html',
})
export class CameleonAgirSansSArreterEn {}
