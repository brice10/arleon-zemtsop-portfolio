import { Lang, Localized } from '@core/i18n/lang';

export const BLOG_CATEGORIES = ['research', 'phd', 'tech', 'life'] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

/** Module Markdown importé comme texte (voir `loader` dans angular.json et src/markdown.d.ts). */
export type MarkdownLoader = () => Promise<{ default: string }>;

export interface BlogPost {
  /** Identifiant d'URL, identique dans les deux langues : /fr/blog/<slug>, /en/blog/<slug>. */
  slug: string;
  emoji: string;
  /** Année de publication. TODO(contenu) : remplacer par une date ISO complète (`date: '2024-10-01'`). */
  year: number;
  categories: BlogCategory[];
  readingMinutes?: number;
  tag: Localized;
  title: Localized;
  description: Localized;
  /** Corps de l'article en Markdown, chargé à la demande (un fichier JS par article et par langue). */
  content?: Partial<Record<Lang, MarkdownLoader>>;
}

/** Données fournies à la page article par son resolver. */
export interface BlogPostView {
  post: BlogPost;
  /** HTML produit depuis le Markdown, ou null si l'article n'est pas encore migré. */
  html: string | null;
}
