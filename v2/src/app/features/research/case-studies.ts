import { Localized } from '@core/i18n/lang';

export interface CaseStudy {
  id: string;
  title: string;
  /** Couleur d'accent de la carte (classes Tailwind complètes, pour qu'elles soient générées). */
  accent: { text: string; chip: string; bar: string };
  badges: Localized<string[]>;
  summary: Localized;
  /** Blocs « problème / approche / validation / limites », dans cet ordre. */
  sections: { heading: Localized; points: Localized<string[]> }[];
  role: Localized;
  stack: string[];
  repository: string;
  /** Clé de la publication associée (voir publications.ts). */
  publication: string;
}

const HEADINGS = {
  problem: { fr: 'Le problème', en: 'The problem' },
  approach: { fr: "L'approche", en: 'The approach' },
  validation: { fr: 'La validation', en: 'Validation' },
  next: { fr: 'Limites et suite', en: 'Limitations and next steps' },
};

/**
 * Études de cas des projets de recherche.
 * Leur contenu résume les articles publiés (voir publications.ts) : ne rien y affirmer
 * qui n'y figure pas, en particulier aucune mesure chiffrée.
 */
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'adaptiflow',
    title: 'AdaptiFlow',
    accent: {
      text: 'text-determination',
      chip: 'border-determination/30 bg-determination/20 text-determination',
      bar: 'from-determination to-warm-energy',
    },
    badges: { fr: ['Framework', 'Bibliothèque Java'], en: ['Framework', 'Java library'] },
    summary: {
      fr: "Une bibliothèque Java qui permet à chaque microservice de s'observer et de s'adapter lui-même, sans contrôleur central et sans mêler la logique d'adaptation au code métier.",
      en: 'A Java library that lets each microservice observe and adapt itself, with no central controller and without mixing adaptation logic into business code.',
    },
    sections: [
      {
        heading: HEADINGS.problem,
        points: {
          fr: [
            "Les systèmes auto-adaptatifs s'appuient classiquement sur une boucle MAPE-K centralisée et séquentielle.",
            'Ce modèle convient mal aux microservices, décentralisés par nature.',
            'Rendre un service adaptable ne devrait pas imposer de réécrire son code fonctionnel.',
          ],
          en: [
            'Self-adaptive systems traditionally rely on a centralised, sequential MAPE-K loop.',
            'That model fits poorly with microservices, which are decentralised by nature.',
            'Making a service adaptable should not require rewriting its functional code.',
          ],
        },
      },
      {
        heading: HEADINGS.approach,
        points: {
          fr: [
            'Des couches d’abstraction pour les phases Monitor et Execute : collecteurs de métriques (infrastructure et métier) et actions d’adaptation déclaratives.',
            'À la place de phases Analyze et Plan dédiées, un mécanisme léger à base d’événements et de règles : évaluateurs de conditions, abonnements, observation périodique ou à la demande.',
            'Une démarche en six étapes pour instrumenter un service existant.',
          ],
          en: [
            'Abstraction layers for the Monitor and Execute phases: metrics collectors (infrastructure and business) and declarative adaptation actions.',
            'Instead of dedicated Analyze and Plan phases, a lightweight event-driven, rule-based mechanism: conditional evaluators, subscriptions, periodic or on-demand observation.',
            'A six-step workflow for instrumenting an existing service.',
          ],
        },
      },
      {
        heading: HEADINGS.validation,
        points: {
          fr: [
            'Mise en œuvre sur Adaptable TeaStore (cinq services, conteneurs Docker, génération de charge).',
            'Auto-réparation : base de données indisponible, les autres services passent en mode dégradé.',
            'Auto-protection : trafic de type DDoS détecté, les services ouvrent leurs disjoncteurs.',
            'Auto-optimisation : pic de trafic légitime, recommandations coupées, cache activé, images externalisées.',
            'Validation fonctionnelle : dans chaque scénario, le déclencheur est détecté et les actions sont exécutées lors d’essais répétés.',
          ],
          en: [
            'Implemented on Adaptable TeaStore (five services, Docker containers, generated load).',
            'Self-healing: database unavailable, the other services switch to degraded mode.',
            'Self-protection: DDoS-like traffic detected, services open their circuit breakers.',
            'Self-optimisation: benign traffic surge, recommendations disabled, cache enabled, images outsourced.',
            'Functional validation: in each scenario the trigger is detected and the actions are executed across repeated trials.',
          ],
        },
      },
      {
        heading: HEADINGS.next,
        points: {
          fr: [
            'Propagation des événements par REST ; validation limitée à Docker ; adaptations concurrentes pouvant entrer en conflit.',
            'Pistes : moteur de coordination formel (JavaBIP), langage dédié aux politiques d’adaptation, stratégies pilotées par IA.',
          ],
          en: [
            'REST-based event propagation; Docker-only validation; concurrent adaptations may conflict.',
            'Next: a formal coordination engine (JavaBIP), a domain-specific language for adaptation policies, AI-driven strategies.',
          ],
        },
      },
    ],
    role: {
      fr: 'Premier auteur : conception et développement du framework, mise en œuvre des trois scénarios.',
      en: 'First author: design and development of the framework, implementation of the three scenarios.',
    },
    stack: ['Java', 'Docker', 'MAPE-K', 'REST'],
    repository:
      'https://gitlab.inria.fr/adaptable-teastore/experimentation-platform/-/blob/main/Sources/utilities/tools.spirals.cerberus237.adaptiflow/README.md',
    publication: 'zemtsop2025adaptiflow',
  },
  {
    id: 'adaptable-teastore',
    title: 'Adaptable TeaStore',
    accent: {
      text: 'text-digital-cyan',
      chip: 'border-digital-cyan/30 bg-digital-cyan/20 text-digital-cyan',
      bar: 'from-digital-cyan to-code-green',
    },
    badges: {
      fr: ['Architecture de référence', 'Cas d’étude'],
      en: ['Reference architecture', 'Case study'],
    },
    summary: {
      fr: "Une extension de TeaStore, application microservices de référence, qui fait de l'adaptabilité une préoccupation de conception à part entière et sert de terrain commun pour comparer les approches d'adaptation.",
      en: 'An extension of TeaStore, a reference microservice application, that makes adaptability a first-class design concern and offers common ground for comparing adaptation approaches.',
    },
    sections: [
      {
        heading: HEADINGS.problem,
        points: {
          fr: [
            'TeaStore est très utilisé pour évaluer les techniques de gestion de ressources, mais son architecture est statique.',
            'Elle ne prévoit pas de changement de structure en cas de panne, d’évolution de l’environnement ou de nouvelles exigences.',
          ],
          en: [
            'TeaStore is widely used to evaluate resource-management techniques, but its architecture is static.',
            'It does not provide for structural change after failures, environmental changes or new requirements.',
          ],
        },
      },
      {
        heading: HEADINGS.approach,
        points: {
          fr: [
            'Distinction entre services obligatoires (WebUI, images, persistance) et optionnels (recommandation, authentification).',
            'Services externalisables auprès d’un fournisseur, avec des versions locales de repli et un mode cache.',
            'Variantes de service, par exemple un moteur de recommandation complet, économe ou désactivé.',
            'Trois niveaux de configuration, du strict minimum à la configuration complète.',
          ],
          en: [
            'A distinction between mandatory services (WebUI, images, persistence) and optional ones (recommender, authentication).',
            'Services that can be outsourced to a provider, with local fallback versions and a cache mode.',
            'Service flavours, for example a full, low-power or disabled recommender.',
            'Three configuration levels, from barebone to full.',
          ],
        },
      },
      {
        heading: { fr: 'Les scénarios de référence', en: 'Reference scenarios' },
        points: {
          fr: [
            'Base de données indisponible ; cyberattaque sur un service externe ; panne du fournisseur cloud.',
            'Hausse de trafic légitime, malveillante (DDoS) ou de cause inconnue.',
            'Évolution des exigences DevOps.',
          ],
          en: [
            'Database unavailable; cyberattack on an external service; cloud provider outage.',
            'Traffic increase that is benign, malicious (DDoS) or of unknown cause.',
            'Changing DevOps requirements.',
          ],
        },
      },
      {
        heading: { fr: 'Usage', en: 'Use' },
        points: {
          fr: [
            'Cas d’étude de référence du workshop WACA 2025, pour comparer des approches d’adaptation sur une base commune.',
            'Banc d’essai utilisé pour valider AdaptiFlow.',
          ],
          en: [
            'Reference case study of the WACA 2025 workshop, to compare adaptation approaches on common ground.',
            'Testbed used to validate AdaptiFlow.',
          ],
        },
      },
    ],
    role: {
      fr: 'Co-auteur de la spécification, avec des chercheurs de l’Université de Lille, de l’Université de Bologne et d’Inria.',
      en: 'Co-author of the specification, with researchers from Université de Lille, Università di Bologna and Inria.',
    },
    stack: ['Microservices', 'Docker', 'TeaStore'],
    repository: 'https://gitlab.inria.fr/adaptable-teastore/experimentation-platform',
    publication: 'bliudze2025adaptable',
  },
];
