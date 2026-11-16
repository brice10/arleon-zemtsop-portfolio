import { PageKey } from '@core/config/site.config';

export interface PageMeta {
  title: string;
  description: string;
}

/** Contrat commun aux dictionnaires : une clé manquante dans une langue casse la compilation. */
export interface Dictionary {
  /** Locale Open Graph, ex. `fr_FR`. */
  ogLocale: string;
  a11y: {
    skipToContent: string;
    mainNav: string;
    openMenu: string;
    closeMenu: string;
    switchLanguage: string;
  };
  nav: Record<PageKey, string>;
  seo: Record<PageKey | 'notFound', PageMeta>;
  common: {
    backHome: string;
    breadcrumbHome: string;
  };
  blog: {
    title: string;
    lead: string;
    filters: { all: string; research: string; phd: string; tech: string; life: string };
  };
  notFound: { title: string; text: string };
  footer: { rights: string; madeIn: string };
}
