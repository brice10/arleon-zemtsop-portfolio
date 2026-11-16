import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « monitor-savoir-regarder » (FR). Le texte se modifie dans `monitor-savoir-regarder.fr.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-monitor-savoir-regarder-fr',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './monitor-savoir-regarder.fr.html',
})
export class MonitorSavoirRegarderFr {}
