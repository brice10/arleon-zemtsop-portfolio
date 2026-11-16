/** Clés des pages statiques du site (une par feature). */
export type PageKey =
  'home' | 'about' | 'research' | 'projects' | 'experience' | 'blog' | 'contact';

/** Chemin de chaque page, relatif au préfixe de langue (`/fr`, `/en`). */
export const PAGE_PATHS: Record<PageKey, string> = {
  home: '',
  about: 'about',
  research: 'research',
  projects: 'projects',
  experience: 'experience',
  blog: 'blog',
  contact: 'contact',
};

/** Menu principal. L'accueil est porté par le logo ; Expérience se rejoint depuis À propos et le pied de page. */
export const NAV_PAGES: PageKey[] = ['about', 'research', 'projects', 'blog', 'contact'];

/** Liens du pied de page : toutes les pages. */
export const FOOTER_PAGES: PageKey[] = [
  'about',
  'experience',
  'research',
  'projects',
  'blog',
  'contact',
];

export const SITE = {
  name: 'Brice Arléon ZEMTSOP NDADJI',
  legalName: 'ZEMTSOP NDADJI Brice Arléon',
  shortName: 'Arléon Zemtsop',
  email: 'arleonzemtsop@gmail.com',
  twitterHandle: '@ZemtsopArleon',
  ogImage: '/assets/images/og-image.jpg',
  portrait: '/assets/images/portrait.webp',
  cv: '/assets/docs/cv-brice-arleon-zemtsop.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/brice-arl%C3%A9on-zemtsop-ndadji-b258321a4/',
    github: 'https://github.com/brice10',
    x: 'https://x.com/ZemtsopArleon',
  },
} as const;
