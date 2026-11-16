export type JsonLd = Record<string, unknown>;

export interface SeoConfig {
  title: string;
  description: string;
  /** Chemin relatif au préfixe de langue (`''` pour l'accueil, `blog/mon-article`, ...). */
  path: string;
  type?: 'website' | 'article' | 'profile';
  /** Image de partage, chemin absolu depuis la racine du site. */
  image?: string;
  /** Largeur et hauteur de `image`, en pixels (sinon, celles de l'image par défaut). */
  imageSize?: readonly [number, number];
  /** Exclut la page de l'indexation (404, pages techniques). */
  noindex?: boolean;
  /** false pour une page sans équivalent dans les autres langues (pas de hreflang). */
  translated?: boolean;
  /** Nœuds schema.org propres à la page, ajoutés au graphe commun (Person, WebSite). */
  jsonLd?: JsonLd[];
}
