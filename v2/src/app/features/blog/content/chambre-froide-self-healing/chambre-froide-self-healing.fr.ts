import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « chambre-froide-self-healing » (FR). Le texte se modifie dans `chambre-froide-self-healing.fr.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-chambre-froide-self-healing-fr',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chambre-froide-self-healing.fr.html',
})
export class ChambreFroideSelfHealingFr {}
