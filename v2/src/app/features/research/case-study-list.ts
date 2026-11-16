import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '@core/i18n/i18n.service';
import { Lang } from '@core/i18n/lang';
import { CASE_STUDIES } from './case-studies';

const LABELS: Record<Lang, { role: string; code: string; paper: string }> = {
  fr: { role: 'Mon rôle', code: 'Code sur GitLab', paper: "Lire l'article" },
  en: { role: 'My role', code: 'Code on GitLab', paper: 'Read the paper' },
};

/** Études de cas des projets de recherche : problème, approche, validation, limites, rôle. */
@Component({
  selector: 'app-case-study-list',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block space-y-8' },
  template: `
    @let lang = i18n.lang();
    @let label = labels[lang];

    @for (study of studies; track study.id) {
      <article
        [id]="study.id"
        class="overflow-hidden rounded-2xl border border-white/5 bg-linear-to-br from-noble-blue/30 to-night-sky/50"
      >
        <div class="h-1 bg-linear-to-r {{ study.accent.bar }}"></div>
        <div class="p-6 lg:p-10">
          <p class="mb-4 flex flex-wrap gap-2 font-mono text-xs">
            @for (badge of study.badges[lang]; track badge) {
              <span class="rounded-full border px-3 py-1 {{ study.accent.chip }}">{{ badge }}</span>
            }
          </p>
          <h3 class="font-display text-2xl font-bold text-white lg:text-3xl">{{ study.title }}</h3>
          <p class="mt-4 max-w-3xl leading-relaxed text-gray-light">{{ study.summary[lang] }}</p>

          <div class="mt-8 grid gap-8 md:grid-cols-2">
            @for (section of study.sections; track section.heading.en) {
              <section>
                <h4 class="font-mono text-xs tracking-wider uppercase {{ study.accent.text }}">
                  {{ section.heading[lang] }}
                </h4>
                <ul class="mt-3 space-y-2 text-sm leading-relaxed text-gray-light">
                  @for (point of section.points[lang]; track point) {
                    <li class="flex gap-3">
                      <span
                        class="mt-2 size-1.5 shrink-0 rounded-full bg-current {{
                          study.accent.text
                        }}"
                      ></span>
                      <span>{{ point }}</span>
                    </li>
                  }
                </ul>
              </section>
            }
          </div>

          <div
            class="mt-8 flex flex-col gap-5 border-t border-white/5 pt-6 lg:flex-row lg:items-center lg:justify-between"
          >
            <div class="max-w-2xl">
              <p class="text-sm text-gray-light">
                <strong class="text-white">{{ label.role }} :</strong> {{ study.role[lang] }}
              </p>
              <ul class="mt-3 flex flex-wrap gap-2 font-mono text-xs text-gray-light">
                @for (tech of study.stack; track tech) {
                  <li class="rounded-lg border border-white/10 bg-deep-night/50 px-3 py-1.5">
                    {{ tech }}
                  </li>
                }
              </ul>
            </div>
            <div class="flex flex-wrap gap-3">
              <a [routerLink]="[]" fragment="publications" class="btn btn-ghost">{{
                label.paper
              }}</a>
              <a [href]="study.repository" target="_blank" rel="noopener" class="btn btn-ghost">{{
                label.code
              }}</a>
            </div>
          </div>
        </div>
      </article>
    }
  `,
})
export class CaseStudyList {
  protected readonly i18n = inject(I18nService);
  protected readonly studies = CASE_STUDIES;
  protected readonly labels = LABELS;
}
