import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « dimanche-cinema-robots » (FR). Le texte se modifie dans `dimanche-cinema-robots.fr.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-dimanche-cinema-robots-fr',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dimanche-cinema-robots.fr.html',
})
export class DimancheCinemaRobotsFr {}
