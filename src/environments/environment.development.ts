import { Environment } from './environment.model';

/** Profil DÉVELOPPEMENT (Docker en local) — `ng serve` / configuration `development`. */
export const environment: Environment = {
  name: 'development',
  production: false,
  siteUrl: 'http://localhost:4200',
  indexable: false,
  analytics: {
    vercel: false,
    googleAnalyticsId: null,
  },
  contact: {
    formspreeEndpoint: 'https://formspree.io/f/mzdzpawn',
    calendlyUrl: 'https://calendly.com/arleonzemtsop/30min',
  },
};
