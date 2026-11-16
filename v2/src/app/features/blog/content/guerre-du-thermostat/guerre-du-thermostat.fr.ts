import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « guerre-du-thermostat » (FR). Le texte se modifie dans `guerre-du-thermostat.fr.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-guerre-du-thermostat-fr',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './guerre-du-thermostat.fr.html',
})
export class GuerreDuThermostatFr {}
