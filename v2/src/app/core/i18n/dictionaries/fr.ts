import { Dictionary } from './dictionary.model';

export const FR: Dictionary = {
  ogLocale: 'fr_FR',
  a11y: {
    skipToContent: 'Aller au contenu principal',
    mainNav: 'Navigation principale',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    switchLanguage: 'Changer de langue',
  },
  nav: {
    home: 'Accueil',
    about: 'À propos',
    research: 'Recherche',
    projects: 'Projets',
    experience: 'Expérience',
    blog: 'Blog',
    contact: 'Contact',
  },
  seo: {
    home: {
      title: 'Brice Arléon ZEMTSOP NDADJI | Doctorant & Senior Software Engineer',
      description:
        "Doctorant Université de Lille/Inria et Senior Software Engineer avec 6+ ans d'expérience. Expert en systèmes auto-adaptatifs, architecture cloud, microservices et développement full-stack (Java, Angular, Spring Boot).",
    },
    about: {
      title: 'À propos | Brice Arléon ZEMTSOP NDADJI',
      description:
        "Découvrez le parcours de Brice Arléon ZEMTSOP NDADJI : doctorant Inria, Senior Software Engineer avec 6+ ans d'expérience, fondateur de la Soft Development Community. Valeurs, formation et vision.",
    },
    research: {
      title: 'Recherche : systèmes auto-adaptatifs & cloud | Brice Arléon ZEMTSOP NDADJI',
      description:
        "Découvrez mes travaux de recherche sur les systèmes auto-adaptatifs, l'architecture cloud et les microservices. AdaptiFlow, Adaptable TeaStore, publications scientifiques.",
    },
    projects: {
      title: 'Projets & réalisations | Brice Arléon ZEMTSOP NDADJI',
      description:
        'Découvrez mes projets : plus de 20 applications livrées, architectures microservices, solutions cloud, applications Angular/Spring Boot. DIMSOFT, NOVALITIX et projets open source.',
    },
    experience: {
      title: 'Expérience professionnelle | Brice Arléon ZEMTSOP NDADJI',
      description:
        'Parcours professionnel de Brice Arléon ZEMTSOP NDADJI : 6+ années en tant que Software Engineer et Team Lead, puis ingénieur de recherche et doctorant chez Inria.',
    },
    blog: {
      title: 'Blog | Brice Arléon ZEMTSOP NDADJI',
      description:
        'Articles sur la recherche, le développement logiciel, les systèmes auto-adaptatifs et le parcours PhD.',
    },
    contact: {
      title: 'Contact & prise de rendez-vous | Brice Arléon ZEMTSOP NDADJI',
      description:
        'Contactez Brice Arléon ZEMTSOP NDADJI pour vos projets de développement, recherche ou conseil. Réservez un créneau pour un appel découverte gratuit.',
    },
    notFound: {
      title: 'Page introuvable | Brice Arléon ZEMTSOP NDADJI',
      description: "La page demandée n'existe pas ou a été déplacée.",
    },
  },
  common: {
    available: 'Disponible',
    wip: 'Contenu en cours de migration depuis la version 1 du portfolio.',
    backHome: "Retour à l'accueil",
    downloadCv: 'Télécharger mon CV',
    breadcrumbHome: 'Accueil',
  },
  home: {
    eyebrow: 'Doctorant & Ingénieur Logiciel',
    tagline:
      "L'excellence à l'intersection de la science et de l'industrie — chercheur, ingénieur, visionnaire.",
    intro:
      "Doctorant à l'Université de Lille et attaché au laboratoire Inria, j'étudie les systèmes auto-adaptatifs pour le cloud. Fort de 6+ années d'expérience en tant que Software Engineer & Team Lead, j'excelle en TDD, DevOps et architectures microservices.",
    ctaPrimary: 'Découvrir mes travaux',
    ctaSecondary: 'Me contacter',
    stats: [
      { value: '6+', label: "Années d'exp." },
      { value: '20+', label: 'Projets réalisés' },
      { value: '2', label: 'Publications' },
    ],
    servicesTitle: 'Comment puis-je vous aider ?',
    services: [
      {
        title: 'Recherche & Innovation',
        text: "Mes recherches portent sur l'auto-adaptation des systèmes distribués dans le cloud. J'ai développé AdaptiFlow, un framework Java léger pour l'auto-adaptation des microservices, démontré via Adaptable TeaStore.",
        tags: ['Systèmes auto-adaptatifs', 'Cloud Computing'],
      },
      {
        title: 'Développement Full-Stack',
        text: 'Avec une forte expérience des technologies Angular et Spring Boot, je pratique le Test-Driven Development (TDD) pour bâtir des backends stables et fonctionnels. Plus de 20 projets réalisés.',
        tags: ['Angular', 'Spring Boot', 'TDD/BDD'],
      },
      {
        title: 'DevOps & Cloud',
        text: "Je m'intéresse également au déploiement et au monitoring d'applications en production avec Docker, Kubernetes et Jenkins, ainsi qu'à la supervision via Prometheus et Grafana.",
        tags: ['Docker', 'Kubernetes', 'CI/CD'],
      },
      {
        title: 'Leadership & Mentorat',
        text: "Team Lead chez DIMSOFT, j'ai guidé des équipes sur des projets complexes avec des méthodologies agiles. J'ai fondé la Soft Development Community pour promouvoir TDD, BDD et bonnes pratiques d'ingénierie logicielle.",
        tags: ['Agile/Scrum', 'Code Review', 'Mentoring'],
      },
    ],
    ctaTitle: 'Vous avez un projet en tête ?',
    ctaText: 'Construisons ensemble !',
  },
  pages: {
    about: { title: 'À propos', lead: 'Parcours, valeurs, formation et vision.' },
    research: {
      title: 'Recherche',
      lead: 'Systèmes auto-adaptatifs, AdaptiFlow, Adaptable TeaStore et publications scientifiques.',
    },
    projects: {
      title: 'Projets',
      lead: 'Plus de 20 projets livrés : applications d’entreprise, outils de recherche et contributions open source.',
    },
    experience: {
      title: 'Expérience professionnelle',
      lead: 'De Software Engineer & Team Lead à ingénieur de recherche puis doctorant chez Inria.',
    },
  },
  blog: {
    title: 'Réflexions & partages',
    lead: 'Mes pensées sur la recherche, le développement logiciel, le parcours PhD et les systèmes auto-adaptatifs.',
    filters: {
      all: 'Tous',
      research: 'Recherche',
      phd: 'PhD Journey',
      tech: 'Tech & Dev',
      life: 'Vie & Intégration',
    },
    readArticle: "Lire l'article",
    backToBlog: 'Retour au blog',
    minutes: 'min de lecture',
    migrating:
      'Le contenu complet de cet article est en cours de migration vers la nouvelle version du site.',
  },
  contact: {
    title: 'Contact',
    lead: 'Un projet de développement, de recherche ou de conseil ? Écrivez-moi ou réservez un appel découverte gratuit.',
    name: 'Nom',
    email: 'E-mail',
    message: 'Message',
    send: 'Envoyer',
    sending: 'Envoi…',
    success: 'Merci ! Votre message a bien été envoyé.',
    error: "L'envoi a échoué. Réessayez ou écrivez-moi directement par e-mail.",
    bookCall: 'Réserver un appel (30 min)',
  },
  notFound: {
    title: 'Page introuvable',
    text: "La page que vous cherchez n'existe pas ou a été déplacée.",
  },
  footer: { rights: 'Tous droits réservés.', madeIn: 'Fait avec ♥ à Lille, France' },
};
