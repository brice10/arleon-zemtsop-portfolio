import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « alerte-neige-abonnes » (EN). Le texte se modifie dans `alerte-neige-abonnes.en.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-alerte-neige-abonnes-en',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './alerte-neige-abonnes.en.html',
})
export class AlerteNeigeAbonnesEn {}
