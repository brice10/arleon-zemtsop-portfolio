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
    // Google Analytics désactivé : il imposerait un bandeau de consentement. Vercel Analytics,
    // sans cookie, suffit. Pour le réactiver : renseigner l'identifiant (ex. 'G-NXFPVSPT1S').
    googleAnalyticsId: null,
  },
  contact: {
    formspreeEndpoint: 'https://formspree.io/f/mzdzpawn',
    calendlyUrl: 'https://calendly.com/arleonzemtsop/30min',
  },
};
