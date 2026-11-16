import { BlogPost } from '../blog.model';

/**
 * Registre des articles (du plus récent au plus ancien).
 *
 * Ajouter un article :
 *  1. écrire `content/<slug>.fr.md` et `content/<slug>.en.md` ;
 *  2. ajouter une entrée ici, avec les imports dynamiques dans `content` ;
 *  3. c'est tout : la route, le prérendu, le sitemap et le SEO en découlent.
 *
 * Tant que `content` est absent, la page affiche le résumé et un bandeau « migration en cours ».
 */
export const POSTS: BlogPost[] = [
  {
    slug: 'ai-replace-developers',
    emoji: '🚨',
    year: 2025,
    categories: ['tech'],
    readingMinutes: 5,
    tag: {
      fr: 'Tech & IA',
      en: 'Tech & AI',
    },
    title: {
      fr: 'La prophétie "L\'IA va remplacer les développeurs" échoue',
      en: 'The "AI Will Replace Developers" Prophecy is Failing',
    },
    description: {
      fr: 'Analyse de la réalité sur le remplacement des développeurs par les LLM et les agents IA. La grande promesse se heurte à des obstacles concrets.',
      en: 'Reality check on LLMs and AI agents replacing developers. The grand promise hit some very real walls.',
    },
  },
  {
    slug: 'natures-adaptation-strategy',
    emoji: '🐸',
    year: 2025,
    categories: ['research'],
    readingMinutes: 4,
    tag: {
      fr: 'Recherche',
      en: 'Research',
    },
    title: {
      fr: "La stratégie d'adaptation parfaite de la nature",
      en: "Nature's Perfect Adaptation Strategy",
    },
    description: {
      fr: 'Comment la grenouille de verre inspire les systèmes auto-adaptatifs. Lancement de la série #AdaptiFlow_Series !',
      en: 'How the glass frog inspires self-adaptive systems. Launching the #AdaptiFlow_Series!',
    },
  },
  {
    slug: 'expert-validates-baby',
    emoji: '🥹',
    year: 2025,
    categories: ['research', 'phd'],
    readingMinutes: 5,
    tag: {
      fr: 'DisCoTec 2025',
      en: 'DisCoTec 2025',
    },
    title: {
      fr: 'Quand un expert valide votre « bébé »',
      en: 'When an Expert Validates Your "Baby"',
    },
    description: {
      fr: 'Ce moment magique à DisCoTec 2025 où un expert renommé a loué mon code et ma documentation. La version académique de la fierté parentale !',
      en: 'That magical moment at DisCoTec 2025 when a renowned expert praised my code and documentation. The academic version of parental pride!',
    },
  },
  {
    slug: 'discotec-2025-reflections',
    emoji: '🎓',
    year: 2025,
    categories: ['research'],
    tag: {
      fr: 'Conférence',
      en: 'Conference',
    },
    title: {
      fr: 'Réflexions sur DisCoTec 2025',
      en: 'Reflections on DisCoTec 2025',
    },
    description: {
      fr: "Mon expérience à DisCoTec 2025 à Lille – bénévolat, présentation d'AdaptiFlow et échanges avec des chercheurs du monde entier.",
      en: 'My experience at DisCoTec 2025 in Lille - volunteering, presenting AdaptiFlow, and connecting with researchers from around the world.',
    },
  },
  {
    slug: 'french-integration-hacks',
    emoji: '🥋',
    year: 2025,
    categories: ['life'],
    readingMinutes: 6,
    tag: {
      fr: 'Vie Perso',
      en: 'Personal Life',
    },
    title: {
      fr: "Comment j'ai hacké mon intégration en France",
      en: 'How I Hacked My French Integration',
    },
    description: {
      fr: "Du Cameroun à Lille - comment le judo, la musique et les sports de plein air m'ont aidé à décoder l'intégration en France.",
      en: 'From Cameroon to Lille - how judo, music, and outdoor sports helped me crack the code of integration in France.',
    },
  },
  {
    slug: 'first-paper-accepted',
    emoji: '🎉',
    year: 2025,
    categories: ['research'],
    readingMinutes: 5,
    tag: {
      fr: 'Publication',
      en: 'Publication',
    },
    title: {
      fr: 'Mon premier article de recherche a survécu à la relecture !',
      en: 'My First Research Paper Survived Peer Review!',
    },
    description: {
      fr: "Célébration de ma première publication évaluée par les pairs : AdaptiFlow - Un framework extensible pour l'autonomie événementielle dans les microservices cloud.",
      en: 'Celebrating my first peer-reviewed publication: AdaptiFlow - An Extensible Framework for Event-Driven Autonomy in Cloud Microservices.',
    },
  },
  {
    slug: 'holidays-cameroon',
    emoji: '🌴',
    year: 2025,
    categories: ['life'],
    readingMinutes: 5,
    tag: {
      fr: 'Vie Perso',
      en: 'Personal Life',
    },
    title: {
      fr: 'HOLY(DAYS) AU CAMEROUN',
      en: 'HOLY(DAYS) IN CAMEROUN',
    },
    description: {
      fr: "Après 5 mois de code intensif, j'ai troqué les compilateurs Java pour les câlins familiaux au Cameroun. Voici ma mise à jour logicielle émotionnelle !",
      en: "After 5 months of intense coding, I traded Java compilers for family hugs in Cameroon. Here's my emotional software update!",
    },
  },
  {
    slug: 'day-1-phd-student',
    emoji: '🎤',
    year: 2024,
    categories: ['phd'],
    readingMinutes: 4,
    tag: {
      fr: 'PhD Journey',
      en: 'PhD Journey',
    },
    title: {
      fr: 'Jour 1 en tant que doctorant',
      en: 'Day 1 as a PhD Student',
    },
    description: {
      fr: 'Mon premier jour en tant que doctorant à Inria – plongé directement dans le grand bain en présentant au RIC Day !',
      en: 'My first day as a PhD student at Inria - thrown straight into the deep end presenting at RIC Day!',
    },
    content: {
      fr: () => import('../content/day-1-phd-student.fr.md'),
      en: () => import('../content/day-1-phd-student.en.md'),
    },
  },
  {
    slug: '1-month-12-days-phd',
    emoji: '🎢',
    year: 2024,
    categories: ['phd'],
    readingMinutes: 6,
    tag: {
      fr: 'PhD Journey',
      en: 'PhD Journey',
    },
    title: {
      fr: '1 mois et 12 jours en tant que doctorant',
      en: '1 Month, 12 Days as a PhD Student',
    },
    description: {
      fr: 'Un rapport de survie après 42 jours de doctorat. Attentes vs réalité, avalanche de papiers et trouver sa voie.',
      en: 'A survival report from 42 days into the PhD journey. Expectations vs reality, paper avalanches, and finding your way.',
    },
  },
  {
    slug: 'engineer-evolving-phd',
    emoji: '🔥',
    year: 2024,
    categories: ['phd'],
    tag: {
      fr: 'Annonce',
      en: 'Announcement',
    },
    title: {
      fr: "SURPRISE ! L'Ingénieur Évolue !",
      en: 'SURPRISE! The Engineer is Evolving!',
    },
    description: {
      fr: "Annonce coup de théâtre : D'Ingénieur de Recherche à Doctorant à Inria Lille et l'Université de Lille !",
      en: 'Plot twist announcement: From Research Engineer to PhD Student at Inria Lille and University of Lille!',
    },
  },
  {
    slug: 'closing-chapter-engineer',
    emoji: '🌟',
    year: 2024,
    categories: ['life'],
    tag: {
      fr: 'Gratitude',
      en: 'Gratitude',
    },
    title: {
      fr: 'Fermer un chapitre : Ma gratitude',
      en: 'Closing a Chapter: My Gratitude',
    },
    description: {
      fr: "Réflexions sur mon parcours en tant qu'ingénieur de recherche à Inria Lille - gratitude, leçons apprises et le prochain chapitre.",
      en: 'Reflections on my journey as a Research Engineer at Inria Lille - gratitude, lessons learned, and the next chapter.',
    },
  },
  {
    slug: 'spirals-seminar',
    emoji: '✨',
    year: 2024,
    categories: ['research'],
    readingMinutes: 5,
    tag: {
      fr: 'SPIRALS',
      en: 'SPIRALS',
    },
    title: {
      fr: "Bilan de fin d'année avec le séminaire de l'équipe SPIRALS",
      en: 'Wrapping Up the Year with the SPIRALS Team Seminar',
    },
    description: {
      fr: "Présentation de mes 2 premiers mois de travail au séminaire annuel de l'équipe SPIRALS - une bibliothèque Java pour microservices auto-adaptatifs !",
      en: 'Presenting my first 2 months of work at the SPIRALS team annual seminar - a Java library for self-adaptive microservices!',
    },
  },
  {
    slug: 'two-months-inria-lessons',
    emoji: '😊',
    year: 2024,
    categories: ['life'],
    readingMinutes: 6,
    tag: {
      fr: 'Réflexion',
      en: 'Reflection',
    },
    title: {
      fr: 'Après deux mois à INRIA : les leçons clés apprises',
      en: 'After Two Months at INRIA: Key Lessons Learned',
    },
    description: {
      fr: "Réflexion sur mes deux premiers mois à INRIA avec l'équipe SPIRALS - trois leçons inestimables qui ont façonné mon parcours.",
      en: 'Reflecting on my first two months at INRIA with the SPIRALS team - three invaluable lessons that shaped my journey.',
    },
  },
  {
    slug: 'master-thesis-presentation',
    emoji: '🎓',
    year: 2024,
    categories: ['research'],
    readingMinutes: 6,
    tag: {
      fr: 'Milestone',
      en: 'Milestone',
    },
    title: {
      fr: 'Étape marquante : Soutenance de Master',
      en: "Exciting Milestone: Master's Thesis Presentation",
    },
    description: {
      fr: "Présentation de mon mémoire de master sur l'ingénierie dirigée par les modèles pour la gestion des workflows à l'équipe SPIRALS de l'INRIA Lille.",
      en: "Presenting my master's thesis on Model-Driven Engineering for Workflow Management to the SPIRALS team at INRIA Lille.",
    },
  },
  {
    slug: 'developers-vs-testers',
    emoji: '😂',
    year: 2024,
    categories: ['tech'],
    readingMinutes: 4,
    tag: {
      fr: 'Humour',
      en: 'Humour',
    },
    title: {
      fr: '6 raisons pour lesquelles les développeurs « détestent » les testeurs',
      en: '6 Reasons Why Developers "Hate" Testers',
    },
    description: {
      fr: 'Un regard humoristique sur la relation amour-haine entre développeurs et testeurs. Spoiler : on les aime en réalité !',
      en: 'A humorous look at the love-hate relationship between developers and testers. Spoiler: we actually love them!',
    },
  },
];
