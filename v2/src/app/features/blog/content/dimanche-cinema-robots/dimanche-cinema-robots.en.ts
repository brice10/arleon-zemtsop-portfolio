import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « dimanche-cinema-robots » (EN). Le texte se modifie dans `dimanche-cinema-robots.en.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-dimanche-cinema-robots-en',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dimanche-cinema-robots.en.html',
})
export class DimancheCinemaRobotsEn {}
