import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';
import { DualProfile } from '../dual-profile/dual-profile';

/** Contenu de la page d'accueil (FR). Le contenu se modifie dans `home.fr.html`, son style dans `home.css`. */
@Component({
  selector: 'app-home-fr',
  imports: [CONTENT_IMPORTS, DualProfile],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.fr.html',
  styleUrl: './home.css',
})
export class HomeFr {}
