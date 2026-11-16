import { Dictionary } from './dictionary.model';

export const EN: Dictionary = {
  ogLocale: 'en_GB',
  a11y: {
    skipToContent: 'Skip to main content',
    mainNav: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchLanguage: 'Switch language',
  },
  nav: {
    home: 'Home',
    about: 'About',
    research: 'Research',
    projects: 'Projects',
    experience: 'Experience',
    blog: 'Blog',
    contact: 'Contact',
  },
  seo: {
    home: {
      title: 'Brice Arléon ZEMTSOP NDADJI | PhD Student & Senior Software Engineer',
      description:
        'PhD Student at Université de Lille/Inria and Senior Software Engineer with 6+ years of experience. Specializing in self-adaptive systems, cloud architecture, microservices and full-stack development (Java, Angular, Spring Boot).',
    },
    about: {
      title: 'About | Brice Arléon ZEMTSOP NDADJI',
      description:
        'Discover the journey of Brice Arléon ZEMTSOP NDADJI: Inria PhD student, Senior Software Engineer with 6+ years of experience, founder of the Soft Development Community. Values, education and vision.',
    },
    research: {
      title: 'Research: Self-Adaptive Systems & Cloud | Brice Arléon ZEMTSOP NDADJI',
      description:
        'Discover my research on self-adaptive systems, cloud architecture and microservices. AdaptiFlow, Adaptable TeaStore, scientific publications.',
    },
    projects: {
      title: 'Projects | Brice Arléon ZEMTSOP NDADJI',
      description:
        'Discover my projects: 20+ applications delivered, microservices architectures, cloud solutions, Angular/Spring Boot applications. DIMSOFT, NOVALITIX and open source projects.',
    },
    experience: {
      title: 'Professional Experience | Brice Arléon ZEMTSOP NDADJI',
      description:
        'Career path of Brice Arléon ZEMTSOP NDADJI: 6+ years as a Software Engineer and Team Lead, then research engineer and PhD student at Inria.',
    },
    blog: {
      title: 'Blog | Brice Arléon ZEMTSOP NDADJI',
      description:
        'Articles on research, software development, self-adaptive systems and the PhD journey.',
    },
    contact: {
      title: 'Contact & Book a Meeting | Brice Arléon ZEMTSOP NDADJI',
      description:
        'Contact Brice Arléon ZEMTSOP NDADJI for your development projects, research or consulting needs. Book a free discovery call.',
    },
    notFound: {
      title: 'Page not found | Brice Arléon ZEMTSOP NDADJI',
      description: 'The requested page does not exist or has been moved.',
    },
  },
  common: {
    available: 'Available',
    wip: 'Content is being migrated from version 1 of the portfolio.',
    backHome: 'Back to home',
    downloadCv: 'Download my CV',
    breadcrumbHome: 'Home',
  },
  home: {
    eyebrow: 'PhD Student & Senior Software Engineer',
    tagline:
      'Excellence at the intersection of science and industry — researcher, engineer, visionary.',
    intro:
      'PhD student at Université de Lille affiliated with the Inria research lab, I study self-adaptive systems for the cloud. With 6+ years of experience as a Software Engineer & Team Lead, I excel in TDD, DevOps and microservices architectures.',
    ctaPrimary: 'Explore my work',
    ctaSecondary: 'Get in touch',
    stats: [
      { value: '6+', label: 'Years of exp.' },
      { value: '20+', label: 'Projects delivered' },
      { value: '2', label: 'Publications' },
    ],
    servicesTitle: 'How can I help you?',
    services: [
      {
        title: 'Research & Innovation',
        text: 'My research focuses on the self-adaptation of distributed systems in the cloud. I developed AdaptiFlow, a lightweight Java framework for microservice self-adaptation, demonstrated through Adaptable TeaStore.',
        tags: ['Self-Adaptive Systems', 'Cloud Computing'],
      },
      {
        title: 'Full-Stack Development',
        text: 'With strong expertise in Angular and Spring Boot, I practice Test-Driven Development (TDD) to build stable, functional backends. 20+ projects delivered.',
        tags: ['Angular', 'Spring Boot', 'TDD/BDD'],
      },
      {
        title: 'DevOps & Cloud',
        text: 'I am also experienced in deploying and monitoring production applications with Docker, Kubernetes and Jenkins, as well as observability via Prometheus and Grafana.',
        tags: ['Docker', 'Kubernetes', 'CI/CD'],
      },
      {
        title: 'Leadership & Mentoring',
        text: 'As Team Lead at DIMSOFT, I guided teams through complex projects using agile methodologies. I also founded the Soft Development Community to promote TDD, BDD and software engineering best practices.',
        tags: ['Agile/Scrum', 'Code Review', 'Mentoring'],
      },
    ],
    ctaTitle: 'Got a project in mind?',
    ctaText: "Let's build together!",
  },
  pages: {
    about: { title: 'About', lead: 'Background, values, education and vision.' },
    research: {
      title: 'Research',
      lead: 'Self-adaptive systems, AdaptiFlow, Adaptable TeaStore and scientific publications.',
    },
    projects: {
      title: 'Projects',
      lead: '20+ delivered projects: enterprise applications, research tools and open source contributions.',
    },
    experience: {
      title: 'Professional experience',
      lead: 'From Software Engineer & Team Lead to research engineer and PhD student at Inria.',
    },
  },
  blog: {
    title: 'Thoughts & insights',
    lead: 'My thoughts on research, software development, the PhD journey and self-adaptive systems.',
    filters: {
      all: 'All',
      research: 'Research',
      phd: 'PhD Journey',
      tech: 'Tech & Dev',
      life: 'Life & Integration',
    },
    readArticle: 'Read article',
    backToBlog: 'Back to blog',
    minutes: 'min read',
    migrating: 'The full content of this article is being migrated to the new version of the site.',
  },
  contact: {
    title: 'Contact',
    lead: 'A development, research or consulting project? Write to me or book a free discovery call.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    sending: 'Sending…',
    success: 'Thank you! Your message has been sent.',
    error: 'Sending failed. Please try again or email me directly.',
    bookCall: 'Book a call (30 min)',
  },
  notFound: {
    title: 'Page not found',
    text: 'The page you are looking for does not exist or has been moved.',
  },
  footer: { rights: 'All rights reserved.', madeIn: 'Made with ♥ in Lille, France' },
};
