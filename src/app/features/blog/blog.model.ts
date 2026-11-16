import { Type } from '@angular/core';
import { Lang, Localized } from '@core/i18n/lang';
import { ContentLoader } from '@shared/content/localized-content';

export const BLOG_CATEGORIES = ['research', 'popular', 'phd', 'tech', 'life'] as const;
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
  /**
   * Aperçu affiché sur la carte de l'article et dans les partages (Open Graph), par langue :
   * une image (bannière, première diapositive, couverture de vidéo) et, s'il y en a une, la vidéo
   * jouée au survol de la carte. Sans aperçu, la carte montre le pictogramme de la catégorie.
   */
  preview?: Partial<Localized<PostPreview>>;
  /**
   * Composant de l'article, chargé à la demande. Une langue absente signifie que l'article
   * n'existe pas dans cette langue : il n'y est ni listé, ni prérendu.
   */
  content: Partial<Localized<ContentLoader>>;
}

export interface PostPreview {
  /** Chemin de l'image depuis la racine du site. */
  image: string;
  width: number;
  height: number;
  /** Courte vidéo muette, jouée au survol de la carte et lisible dans l'article. */
  video?: string;
  /** Diapositives d'un carrousel, dans l'ordre (la première est `image`). */
  slides?: string[];
}

/** Langues dans lesquelles un article existe. */
export function postLangs(post: BlogPost): Lang[] {
  return (Object.keys(post.content) as Lang[]).filter((lang) => !!post.content[lang]);
}

/** Données fournies à la page article par son resolver. */
export interface BlogPostView {
  post: BlogPost;
  content: Type<unknown>;
}
