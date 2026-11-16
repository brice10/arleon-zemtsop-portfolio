import { Environment } from './environment.model';

/**
 * Profil PRODUCTION (Vercel) — utilisé par `ng build` (configuration `production`).
 * En développement, ce fichier est remplacé par `environment.development.ts`
 * (voir `fileReplacements` dans angular.json).
 */
export const environment: Environment = {
  name: 'production',
  production: true,
  siteUrl: 'https://arleonzemtsop.fr',
  indexable: true,
  analytics: {
    vercel: true,
    googleAnalyticsId: 'G-NXFPVSPT1S',
  },
  contact: {
    formspreeEndpoint: 'https://formspree.io/f/mzdzpawn',
    calendlyUrl: 'https://calendly.com/arleonzemtsop/30min',
  },
};
