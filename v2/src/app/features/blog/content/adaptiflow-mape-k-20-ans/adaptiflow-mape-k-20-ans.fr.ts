import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « adaptiflow-mape-k-20-ans » (FR). Le texte se modifie dans `adaptiflow-mape-k-20-ans.fr.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-adaptiflow-mape-k-20-ans-fr',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './adaptiflow-mape-k-20-ans.fr.html',
})
export class AdaptiflowMapeK20AnsFr {}
