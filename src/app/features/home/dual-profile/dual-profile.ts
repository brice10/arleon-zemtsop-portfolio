import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '@core/config/site.config';
import { I18nService } from '@core/i18n/i18n.service';
import { Lang } from '@core/i18n/lang';

type Profile = 'engineer' | 'researcher';

interface ProfileText {
  eyebrow: string;
  title: string;
  chips: string[];
  cta: string;
  focus: string;
}

const TEXT: Record<Lang, Record<Profile, ProfileText>> = {
  fr: {
    engineer: {
      eyebrow: 'Senior Software Engineer',
      title: '6+ ans · Team Lead',
      chips: ['Java', 'Spring Boot', 'Angular', 'DevOps'],
      cta: 'Voir mon expérience',
      focus: 'Mettre en avant le profil ingénieur',
    },
    researcher: {
      eyebrow: 'PhD Student',
      title: 'Univ. Lille · Inria',
      chips: ['Systèmes auto-adaptatifs', 'Cloud', 'MAPE-K'],
      cta: 'Voir mes recherches',
      focus: 'Mettre en avant le profil chercheur',
    },
  },
  en: {
    engineer: {
      eyebrow: 'Senior Software Engineer',
      title: '6+ yrs · Team Lead',
      chips: ['Java', 'Spring Boot', 'Angular', 'DevOps'],
      cta: 'See my experience',
      focus: 'Highlight the engineer profile',
    },
    researcher: {
      eyebrow: 'PhD Student',
      title: 'Univ. Lille · Inria',
      chips: ['Self-adaptive systems', 'Cloud', 'MAPE-K'],
      cta: 'See my research',
      focus: 'Highlight the researcher profile',
    },
  },
};

/**
 * Portrait unique partagé en deux profils par un éclair : ingénieur à gauche, chercheur à droite.
 * Au survol (ou au focus clavier, ou au toucher) d'une moitié, l'éclair se déplace pour lui laisser
 * la place, elle retrouve ses couleurs et sa carte se déploie ; l'autre moitié s'efface.
 *
 * Toute l'animation est en CSS : la classe `is-engineer` / `is-researcher` change la variable
 * `--shift`, qui translate d'un même mouvement les deux moitiés et l'éclair.
 */
@Component({
  selector: 'app-dual-profile',
  imports: [NgOptimizedImage, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dual-profile.html',
  styleUrl: './dual-profile.css',
})
export class DualProfile {
  protected readonly i18n = inject(I18nService);
  protected readonly site = SITE;

  protected readonly active = signal<Profile | null>(null);
  protected readonly text = computed(() => TEXT[this.i18n.lang()]);

  /** Décor en surimpression (texte purement décoratif, masqué aux lecteurs d'écran). */
  protected readonly code =
    '@Test void adapts() {\n  given(load).spikes();\n  then(system).scales();\n}';
  protected readonly formula = 'M → A → P → E\n∀ s ∈ S : adapt(s)\nΔt < SLA';

  /** Focus clavier (et perte de focus avec `null`). */
  protected highlight(profile: Profile | null): void {
    this.active.set(profile);
  }

  /** Survol à la souris uniquement : au doigt, c'est `tap` qui décide. */
  protected hover(event: PointerEvent, profile: Profile | null): void {
    if (event.pointerType === 'mouse') {
      this.active.set(profile);
    }
  }

  /** Clic ou appui (écrans tactiles) : met la moitié en avant ; elle se relâche en touchant ailleurs. */
  protected tap(profile: Profile): void {
    this.active.set(profile);
  }
}
