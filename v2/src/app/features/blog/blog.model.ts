import { Type } from '@angular/core';
import { Localized } from '@core/i18n/lang';
import { ContentLoader } from '@shared/content/localized-content';

export const BLOG_CATEGORIES = ['research', 'phd', 'tech', 'life'] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export interface BlogPost {
  /** Identifiant d'URL, identique dans les deux langues : /fr/blog/<slug>, /en/blog/<slug>. */
  slug: string;
  emoji: string;
  /** Année de publication (sert au tri et à l'affichage). */
  year: number;
  /** Date ISO plus précise quand elle est connue : `2025-06` ou `2025-06-20`. Prime sur `year` pour le SEO et le flux RSS. */
  date?: string;
  categories: BlogCategory[];
  readingMinutes?: number;
  tag: Localized;
  title: Localized;
  description: Localized;
  /** Composant de l'article dans chaque langue, chargé à la demande. */
  content: Localized<ContentLoader>;
}

/** Données fournies à la page article par son resolver. */
export interface BlogPostView {
  post: BlogPost;
  content: Type<unknown>;
}
