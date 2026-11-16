import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostShell } from '../../components/post-shell';

/** Article « guerre-du-thermostat » (EN). Le texte se modifie dans `guerre-du-thermostat.en.html` ; titre, date et média dans `data/posts.ts`. */
@Component({
  selector: 'app-guerre-du-thermostat-en',
  imports: [PostShell],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './guerre-du-thermostat.en.html',
})
export class GuerreDuThermostatEn {}
