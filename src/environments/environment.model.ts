export interface Environment {
  /** Nom du profil, utile pour le debug. */
  name: 'development' | 'production';
  production: boolean;
  /** Origine publique du site, sans slash final : sert aux URL canoniques, hreflang, Open Graph, JSON-LD. */
  siteUrl: string;
  /** false => <meta name="robots" content="noindex, nofollow"> sur toutes les pages. */
  indexable: boolean;
  analytics: {
    /** Vercel Web Analytics + Speed Insights (scripts servis par Vercel uniquement). */
    vercel: boolean;
    /** Identifiant Google Analytics 4, ou null pour désactiver. */
    googleAnalyticsId: string | null;
  };
  contact: {
    formspreeEndpoint: string;
    calendlyUrl: string;
  };
}
