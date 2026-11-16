import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « halloween-ddos-sonnette » (FR). Le texte se modifie dans `halloween-ddos-sonnette.fr.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-halloween-ddos-sonnette-fr',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './halloween-ddos-sonnette.fr.html',
})
export class HalloweenDdosSonnetteFr {}
