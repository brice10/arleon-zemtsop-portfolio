import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';
import { CaseStudyList } from '../case-study-list';
import { PublicationList } from '../publication-list';

/** Contenu de la page « Recherche » (FR). Le contenu se modifie dans `research.fr.html`, son style dans `research.fr.css`. */
@Component({
  selector: 'app-research-fr',
  imports: [CONTENT_IMPORTS, PublicationList, CaseStudyList],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './research.fr.html',
  styleUrl: './research.fr.css',
})
export class ResearchFr {}
