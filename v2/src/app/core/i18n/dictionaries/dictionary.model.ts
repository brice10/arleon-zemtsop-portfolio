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
    available: string;
    wip: string;
    backHome: string;
    downloadCv: string;
    breadcrumbHome: string;
  };
  home: {
    eyebrow: string;
    tagline: string;
    intro: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
    servicesTitle: string;
    services: { title: string; text: string; tags: string[] }[];
    ctaTitle: string;
    ctaText: string;
  };
  pages: Record<Exclude<PageKey, 'home' | 'blog' | 'contact'>, { title: string; lead: string }>;
  blog: {
    title: string;
    lead: string;
    filters: { all: string; research: string; phd: string; tech: string; life: string };
    readArticle: string;
    backToBlog: string;
    minutes: string;
    migrating: string;
  };
  contact: {
    title: string;
    lead: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    bookCall: string;
  };
  notFound: { title: string; text: string };
  footer: { rights: string; madeIn: string };
}
