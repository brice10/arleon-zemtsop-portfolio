import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « alerte-neige-abonnes » (FR). Le texte se modifie dans `alerte-neige-abonnes.fr.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-alerte-neige-abonnes-fr',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './alerte-neige-abonnes.fr.html',
})
export class AlerteNeigeAbonnesFr {}
