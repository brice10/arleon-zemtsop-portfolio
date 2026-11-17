import { BlogPost } from '../blog.model';

/**
 * Registre des articles (du plus récent au plus ancien).
 *
 * Ajouter un article :
 *  1. copier un dossier de `content/` (ex. `content/day-1-phd-student/`), le renommer avec le nouveau slug
 *     et adapter les deux composants (`<slug>.fr.*`, `<slug>.en.*`) ;
 *  2. ajouter une entrée ici ;
 *  3. c'est tout : la route, le prérendu, le sitemap et le SEO en découlent.
 */
export const POSTS: BlogPost[] = [
  // ---- Série LinkedIn (depuis le 30 oct. 2026) : articles courts, gabarit `PostShell`.
  {
    slug: 'black-friday-six-etapes',
    emoji: '🛍️',
    year: 2026,
    date: '2026-11-17',
    categories: ['research'],
    readingMinutes: 3,
    tag: { fr: 'Science', en: 'Research' },
    title: {
      fr: 'Black Friday : apprendre à un microservice à encaisser le choc, en 6 étapes',
      en: 'Black Friday: teaching a microservice to take the hit, in 6 steps',
    },
    description: {
      fr: "Processeur à 85 %, photos confiées à un fournisseur externe, retour au calme sous 60 % : les six étapes d'AdaptiFlow pour rendre auto-adaptatif le service Image de TeaStore, sans le réécrire.",
      en: "CPU at 85%, photos handed over to an external provider, back to normal below 60%: the six AdaptiFlow steps that make TeaStore's Image service self-adaptive, without rewriting it.",
    },
    preview: {
      fr: {
        image: '/assets/blog/black-friday-six-etapes/cover.fr.jpg',
        width: 1080,
        height: 1351,
        slides: [
          '/assets/blog/black-friday-six-etapes/cover.fr.jpg',
          '/assets/blog/black-friday-six-etapes/slide-2.fr.webp',
          '/assets/blog/black-friday-six-etapes/slide-3.fr.webp',
          '/assets/blog/black-friday-six-etapes/slide-4.fr.webp',
          '/assets/blog/black-friday-six-etapes/slide-5.fr.webp',
          '/assets/blog/black-friday-six-etapes/slide-6.fr.webp',
          '/assets/blog/black-friday-six-etapes/slide-7.fr.webp',
          '/assets/blog/black-friday-six-etapes/slide-8.fr.webp',
        ],
      },
      en: {
        image: '/assets/blog/black-friday-six-etapes/cover.en.jpg',
        width: 1080,
        height: 1351,
        slides: [
          '/assets/blog/black-friday-six-etapes/cover.en.jpg',
          '/assets/blog/black-friday-six-etapes/slide-2.en.webp',
          '/assets/blog/black-friday-six-etapes/slide-3.en.webp',
          '/assets/blog/black-friday-six-etapes/slide-4.en.webp',
          '/assets/blog/black-friday-six-etapes/slide-5.en.webp',
          '/assets/blog/black-friday-six-etapes/slide-6.en.webp',
          '/assets/blog/black-friday-six-etapes/slide-7.en.webp',
          '/assets/blog/black-friday-six-etapes/slide-8.en.webp',
        ],
      },
    },
    content: {
      fr: () =>
        import('../content/black-friday-six-etapes/black-friday-six-etapes.fr').then(
          (m) => m.BlackFridaySixEtapesFr,
        ),
      en: () =>
        import('../content/black-friday-six-etapes/black-friday-six-etapes.en').then(
          (m) => m.BlackFridaySixEtapesEn,
        ),
    },
  },
  {
    slug: 'compliment-sur-mon-code',
    emoji: '💻',
    year: 2026,
    date: '2026-11-16',
    categories: ['phd'],
    readingMinutes: 3,
    tag: { fr: 'Vie de doctorant', en: 'PhD life' },
    title: {
      fr: 'Le plus beau compliment de ma vie de doctorant portait sur mon code',
      en: 'The best compliment of my PhD life was about my code',
    },
    description: {
      fr: "DisCoTec 2025, à Lille : après ma présentation d'AdaptiFlow, un chercheur du domaine avait ouvert le code source et la documentation. Ce que j'en retiens.",
      en: 'DisCoTec 2025, in Lille: after my AdaptiFlow talk, a researcher in the field had opened the source code and the documentation. What I take from it.',
    },
    preview: {
      fr: { image: '/assets/blog/compliment-sur-mon-code/cover.fr.jpg', width: 1080, height: 1080 },
      en: { image: '/assets/blog/compliment-sur-mon-code/cover.en.jpg', width: 1080, height: 1080 },
    },
    content: {
      fr: () =>
        import('../content/compliment-sur-mon-code/compliment-sur-mon-code.fr').then(
          (m) => m.ComplimentSurMonCodeFr,
        ),
      en: () =>
        import('../content/compliment-sur-mon-code/compliment-sur-mon-code.en').then(
          (m) => m.ComplimentSurMonCodeEn,
        ),
    },
  },
  {
    slug: 'dimanche-2036-qui-decide',
    emoji: '🔮',
    year: 2026,
    date: '2026-11-15',
    categories: ['popular'],
    readingMinutes: 2,
    tag: { fr: 'Bonus du dimanche', en: 'Sunday bonus' },
    title: {
      fr: '2036, un serveur tombe en pleine nuit : qui décide quoi faire ?',
      en: "It's 2036 and a server goes down at night: who decides what to do?",
    },
    description: {
      fr: "L'humain réveillé à 3 h, la règle écrite à l'avance ou l'agent IA qui improvise : trois candidats pour décider, et un sondage.",
      en: 'The human woken at 3 am, the rule written in advance or the AI agent improvising: three candidates to decide, and a poll.',
    },
    preview: {
      fr: {
        image: '/assets/blog/dimanche-2036-qui-decide/cover.fr.jpg',
        width: 1080,
        height: 1080,
      },
      en: {
        image: '/assets/blog/dimanche-2036-qui-decide/cover.en.jpg',
        width: 1080,
        height: 1080,
      },
    },
    content: {
      fr: () =>
        import('../content/dimanche-2036-qui-decide/dimanche-2036-qui-decide.fr').then(
          (m) => m.Dimanche2036QuiDecideFr,
        ),
      en: () =>
        import('../content/dimanche-2036-qui-decide/dimanche-2036-qui-decide.en').then(
          (m) => m.Dimanche2036QuiDecideEn,
        ),
    },
  },
  {
    slug: 'on-est-bientot-arrives',
    emoji: '🚗',
    year: 2026,
    date: '2026-11-14',
    categories: ['popular'],
    readingMinutes: 3,
    tag: { fr: 'Vulgarisation', en: 'Popular science' },
    title: {
      fr: '« On est bientôt arrivés ? » : la question qui peut faire tomber un serveur',
      en: '"Are we there yet?": the question that can bring a server down',
    },
    description: {
      fr: "Posée toutes les trente secondes, une question légitime coûte plus cher que le trajet. Mes microservices font pareil avec la base de données : le rythme de l'observation compte.",
      en: 'Asked every thirty seconds, a fair question costs more than the trip. My microservices do the same with the database: the pace of observation matters.',
    },
    preview: {
      fr: {
        image: '/assets/blog/on-est-bientot-arrives/cover.fr.jpg',
        width: 1080,
        height: 1080,
        video: '/assets/blog/on-est-bientot-arrives/video.fr.mp4',
      },
      en: {
        image: '/assets/blog/on-est-bientot-arrives/cover.en.jpg',
        width: 1080,
        height: 1080,
        video: '/assets/blog/on-est-bientot-arrives/video.en.mp4',
      },
    },
    content: {
      fr: () =>
        import('../content/on-est-bientot-arrives/on-est-bientot-arrives.fr').then(
          (m) => m.OnEstBientotArrivesFr,
        ),
      en: () =>
        import('../content/on-est-bientot-arrives/on-est-bientot-arrives.en').then(
          (m) => m.OnEstBientotArrivesEn,
        ),
    },
  },
  {
    slug: 'cameleon-agir-sans-s-arreter',
    emoji: '🦎',
    year: 2026,
    date: '2026-11-13',
    categories: ['research'],
    readingMinutes: 3,
    tag: { fr: 'Science', en: 'Research' },
    title: {
      fr: "Comme un caméléon : des microservices qui changent de comportement sans s'arrêter",
      en: 'Like a chameleon: microservices that change behavior without stopping',
    },
    description: {
      fr: "Un caméléon ne fabrique pas une nouvelle peau, il réorganise ce qu'il a déjà. L'action d'adaptation d'AdaptiFlow fait de même avec un service, sans l'interrompre.",
      en: "A chameleon does not grow a new skin, it rearranges what it already has. AdaptiFlow's adaptation action does the same with a service, without interrupting it.",
    },
    preview: {
      fr: {
        image: '/assets/blog/cameleon-agir-sans-s-arreter/cover.fr.jpg',
        width: 1080,
        height: 1351,
        slides: [
          '/assets/blog/cameleon-agir-sans-s-arreter/cover.fr.jpg',
          '/assets/blog/cameleon-agir-sans-s-arreter/slide-2.fr.webp',
          '/assets/blog/cameleon-agir-sans-s-arreter/slide-3.fr.webp',
          '/assets/blog/cameleon-agir-sans-s-arreter/slide-4.fr.webp',
          '/assets/blog/cameleon-agir-sans-s-arreter/slide-5.fr.webp',
          '/assets/blog/cameleon-agir-sans-s-arreter/slide-6.fr.webp',
          '/assets/blog/cameleon-agir-sans-s-arreter/slide-7.fr.webp',
          '/assets/blog/cameleon-agir-sans-s-arreter/slide-8.fr.webp',
        ],
      },
      en: {
        image: '/assets/blog/cameleon-agir-sans-s-arreter/cover.en.jpg',
        width: 1080,
        height: 1351,
        slides: [
          '/assets/blog/cameleon-agir-sans-s-arreter/cover.en.jpg',
          '/assets/blog/cameleon-agir-sans-s-arreter/slide-2.en.webp',
          '/assets/blog/cameleon-agir-sans-s-arreter/slide-3.en.webp',
          '/assets/blog/cameleon-agir-sans-s-arreter/slide-4.en.webp',
          '/assets/blog/cameleon-agir-sans-s-arreter/slide-5.en.webp',
          '/assets/blog/cameleon-agir-sans-s-arreter/slide-6.en.webp',
          '/assets/blog/cameleon-agir-sans-s-arreter/slide-7.en.webp',
          '/assets/blog/cameleon-agir-sans-s-arreter/slide-8.en.webp',
        ],
      },
    },
    content: {
      fr: () =>
        import('../content/cameleon-agir-sans-s-arreter/cameleon-agir-sans-s-arreter.fr').then(
          (m) => m.CameleonAgirSansSArreterFr,
        ),
      en: () =>
        import('../content/cameleon-agir-sans-s-arreter/cameleon-agir-sans-s-arreter.en').then(
          (m) => m.CameleonAgirSansSArreterEn,
        ),
    },
  },
  {
    slug: 'mythe-vs-realite-carte-de-these',
    emoji: '🗺️',
    year: 2026,
    date: '2026-11-12',
    categories: ['phd'],
    readingMinutes: 3,
    tag: { fr: 'Vie de doctorant', en: 'PhD life' },
    title: {
      fr: "Mythe vs réalité : personne ne m'a donné la carte de ma thèse",
      en: 'Myth vs reality: nobody handed me the map of my PhD',
    },
    description: {
      fr: 'Après cinq ans en entreprise, je suis arrivé en recherche avec trois certitudes. Elles sont tombées toutes les trois : la carte, on la dessine en marchant.',
      en: 'After five years in industry I arrived in research with three certainties. All three fell: you draw the map as you walk.',
    },
    preview: {
      fr: {
        image: '/assets/blog/mythe-vs-realite-carte-de-these/cover.fr.jpg',
        width: 1080,
        height: 1080,
      },
      en: {
        image: '/assets/blog/mythe-vs-realite-carte-de-these/cover.en.jpg',
        width: 1080,
        height: 1080,
      },
    },
    content: {
      fr: () =>
        import('../content/mythe-vs-realite-carte-de-these/mythe-vs-realite-carte-de-these.fr').then(
          (m) => m.MytheVsRealiteCarteDeTheseFr,
        ),
      en: () =>
        import('../content/mythe-vs-realite-carte-de-these/mythe-vs-realite-carte-de-these.en').then(
          (m) => m.MytheVsRealiteCarteDeTheseEn,
        ),
    },
  },
  {
    slug: 'guerre-du-thermostat',
    emoji: '🔥',
    year: 2026,
    date: '2026-11-11',
    categories: ['popular'],
    readingMinutes: 3,
    tag: { fr: 'Vulgarisation', en: 'Popular science' },
    title: {
      fr: 'Radiateur au maximum, fenêtre grande ouverte : la dispute que le Cloud rejoue sans le savoir',
      en: 'Heater on full blast, window wide open: the roommate fight the Cloud replays',
    },
    description: {
      fr: "Deux colocataires qui réagissent chacun parfaitement à ce qu'ils ressentent, et une facture qui grimpe : les conflits entre adaptations, illustrés sur TeaStore.",
      en: 'Two roommates each reacting perfectly to what they feel, and a bill that keeps climbing: conflicts between adaptations, illustrated on TeaStore.',
    },
    preview: {
      fr: {
        image: '/assets/blog/guerre-du-thermostat/cover.fr.jpg',
        width: 1080,
        height: 1080,
        video: '/assets/blog/guerre-du-thermostat/video.fr.mp4',
      },
      en: {
        image: '/assets/blog/guerre-du-thermostat/cover.en.jpg',
        width: 1080,
        height: 1080,
        video: '/assets/blog/guerre-du-thermostat/video.en.mp4',
      },
    },
    content: {
      fr: () =>
        import('../content/guerre-du-thermostat/guerre-du-thermostat.fr').then(
          (m) => m.GuerreDuThermostatFr,
        ),
      en: () =>
        import('../content/guerre-du-thermostat/guerre-du-thermostat.en').then(
          (m) => m.GuerreDuThermostatEn,
        ),
    },
  },
  {
    slug: 'evenement-depeche',
    emoji: '🚨',
    year: 2026,
    date: '2026-11-10',
    categories: ['research'],
    readingMinutes: 3,
    tag: { fr: 'Science', en: 'Research' },
    title: {
      fr: "Quand une boutique en ligne est victime d'une cyberattaque, comment riposte-t-elle ?",
      en: 'When an online store is the victim of a cyberattack, how does it defend itself?',
    },
    description: {
      fr: "Un seul service voit arriver la vague de requêtes, mais tous vont être touchés. Dans AdaptiFlow, c'est l'événement qui prévient tout le monde, et chaque service organise sa propre défense.",
      en: 'Only one service sees the wave of requests coming, yet all of them will be hit. In AdaptiFlow the event warns everyone, and each service organizes its own defense.',
    },
    preview: {
      fr: {
        image: '/assets/blog/evenement-depeche/cover.fr.jpg',
        width: 1080,
        height: 1351,
        slides: [
          '/assets/blog/evenement-depeche/cover.fr.jpg',
          '/assets/blog/evenement-depeche/slide-2.fr.webp',
          '/assets/blog/evenement-depeche/slide-3.fr.webp',
          '/assets/blog/evenement-depeche/slide-4.fr.webp',
          '/assets/blog/evenement-depeche/slide-5.fr.webp',
          '/assets/blog/evenement-depeche/slide-6.fr.webp',
          '/assets/blog/evenement-depeche/slide-7.fr.webp',
          '/assets/blog/evenement-depeche/slide-8.fr.webp',
        ],
      },
      en: {
        image: '/assets/blog/evenement-depeche/cover.en.jpg',
        width: 1080,
        height: 1351,
        slides: [
          '/assets/blog/evenement-depeche/cover.en.jpg',
          '/assets/blog/evenement-depeche/slide-2.en.webp',
          '/assets/blog/evenement-depeche/slide-3.en.webp',
          '/assets/blog/evenement-depeche/slide-4.en.webp',
          '/assets/blog/evenement-depeche/slide-5.en.webp',
          '/assets/blog/evenement-depeche/slide-6.en.webp',
          '/assets/blog/evenement-depeche/slide-7.en.webp',
          '/assets/blog/evenement-depeche/slide-8.en.webp',
        ],
      },
    },
    content: {
      fr: () =>
        import('../content/evenement-depeche/evenement-depeche.fr').then(
          (m) => m.EvenementDepecheFr,
        ),
      en: () =>
        import('../content/evenement-depeche/evenement-depeche.en').then(
          (m) => m.EvenementDepecheEn,
        ),
    },
  },
  {
    slug: 'sport-de-combat-judo',
    emoji: '🥋',
    year: 2026,
    date: '2026-11-09',
    categories: ['phd'],
    readingMinutes: 2,
    tag: { fr: 'Vie de doctorant', en: 'PhD life' },
    title: { fr: 'Le doctorat est un sport de combat', en: 'A PhD is a combat sport' },
    description: {
      fr: "Trois mots de judo que j'emporte au labo, et ce que le tatami m'a appris sur la thèse, à commencer par l'art de tomber.",
      en: 'Three judo words I take to the lab, and what the tatami taught me about a PhD, starting with the art of falling.',
    },
    preview: {
      fr: { image: '/assets/blog/sport-de-combat-judo/cover.fr.jpg', width: 1080, height: 1080 },
      en: { image: '/assets/blog/sport-de-combat-judo/cover.en.jpg', width: 1080, height: 1080 },
    },
    content: {
      fr: () =>
        import('../content/sport-de-combat-judo/sport-de-combat-judo.fr').then(
          (m) => m.SportDeCombatJudoFr,
        ),
      en: () =>
        import('../content/sport-de-combat-judo/sport-de-combat-judo.en').then(
          (m) => m.SportDeCombatJudoEn,
        ),
    },
  },
  {
    slug: 'dimanche-cinema-robots',
    emoji: '🍿',
    year: 2026,
    date: '2026-11-08',
    categories: ['popular'],
    readingMinutes: 2,
    tag: { fr: 'Bonus du dimanche', en: 'Sunday bonus' },
    title: {
      fr: 'Dimanche cinéma : quel robot de film pour veiller sur mes serveurs ?',
      en: 'Sunday movie night: which movie robot would you trust with your servers?',
    },
    description: {
      fr: 'R2-D2, WALL-E, Baymax ou HAL 9000 : je classe les robots de cinéma selon la seule question qui compte dans ma thèse, celle de leur laisser les clés un dimanche.',
      en: 'R2-D2, WALL-E, Baymax or HAL 9000: ranking movie robots by the only question that matters in my thesis, whether I would hand them the keys on a Sunday.',
    },
    preview: {
      fr: { image: '/assets/blog/dimanche-cinema-robots/cover.fr.jpg', width: 1080, height: 1080 },
      en: { image: '/assets/blog/dimanche-cinema-robots/cover.en.jpg', width: 1080, height: 1080 },
    },
    content: {
      fr: () =>
        import('../content/dimanche-cinema-robots/dimanche-cinema-robots.fr').then(
          (m) => m.DimancheCinemaRobotsFr,
        ),
      en: () =>
        import('../content/dimanche-cinema-robots/dimanche-cinema-robots.en').then(
          (m) => m.DimancheCinemaRobotsEn,
        ),
    },
  },
  {
    slug: 'mode-economie-telephone',
    emoji: '🔋',
    year: 2026,
    date: '2026-11-07',
    categories: ['popular'],
    readingMinutes: 2,
    tag: { fr: 'Vulgarisation', en: 'Popular science' },
    title: {
      fr: 'Et si votre smartphone en savait plus que vous sur le Cloud ?',
      en: 'What if your smartphone understood the Cloud better than you do?',
    },
    description: {
      fr: "Le mode économie d'énergie n'éteint rien d'essentiel : il choisit quoi lâcher. C'est le réflexe que je cherche à donner aux systèmes Cloud, par exemple un jour de Black Friday.",
      en: 'Low Power Mode switches off nothing essential: it chooses what to let go. That is the reflex I try to give Cloud systems, on a Black Friday for instance.',
    },
    preview: {
      fr: {
        image: '/assets/blog/mode-economie-telephone/cover.fr.jpg',
        width: 1080,
        height: 1080,
        video: '/assets/blog/mode-economie-telephone/video.fr.mp4',
      },
      en: {
        image: '/assets/blog/mode-economie-telephone/cover.en.jpg',
        width: 1080,
        height: 1080,
        video: '/assets/blog/mode-economie-telephone/video.en.mp4',
      },
    },
    content: {
      fr: () =>
        import('../content/mode-economie-telephone/mode-economie-telephone.fr').then(
          (m) => m.ModeEconomieTelephoneFr,
        ),
      en: () =>
        import('../content/mode-economie-telephone/mode-economie-telephone.en').then(
          (m) => m.ModeEconomieTelephoneEn,
        ),
    },
  },
  {
    slug: 'evaluateur-un-chiffre-un-probleme',
    emoji: '🌡️',
    year: 2026,
    date: '2026-11-06',
    categories: ['research'],
    readingMinutes: 2,
    tag: { fr: 'Science', en: 'Research' },
    title: {
      fr: "L'évaluateur de conditions : un chiffre, un problème ?",
      en: 'The condition evaluator: one number, one problem?',
    },
    description: {
      fr: "38 °C après un footing ou au réveil : le même chiffre, pas la même conclusion. Dans la boucle MAPE-K, c'est le rôle de l'analyse, et celui de l'évaluateur de conditions d'AdaptiFlow.",
      en: "38 °C after a run or first thing in the morning: same number, different conclusion. In the MAPE-K loop that is the job of analysis, and of AdaptiFlow's condition evaluator.",
    },
    preview: {
      fr: {
        image: '/assets/blog/evaluateur-un-chiffre-un-probleme/cover.fr.jpg',
        width: 1080,
        height: 1351,
        slides: [
          '/assets/blog/evaluateur-un-chiffre-un-probleme/cover.fr.jpg',
          '/assets/blog/evaluateur-un-chiffre-un-probleme/slide-2.fr.webp',
          '/assets/blog/evaluateur-un-chiffre-un-probleme/slide-3.fr.webp',
          '/assets/blog/evaluateur-un-chiffre-un-probleme/slide-4.fr.webp',
          '/assets/blog/evaluateur-un-chiffre-un-probleme/slide-5.fr.webp',
          '/assets/blog/evaluateur-un-chiffre-un-probleme/slide-6.fr.webp',
          '/assets/blog/evaluateur-un-chiffre-un-probleme/slide-7.fr.webp',
        ],
      },
      en: {
        image: '/assets/blog/evaluateur-un-chiffre-un-probleme/cover.en.jpg',
        width: 1080,
        height: 1351,
        slides: [
          '/assets/blog/evaluateur-un-chiffre-un-probleme/cover.en.jpg',
          '/assets/blog/evaluateur-un-chiffre-un-probleme/slide-2.en.webp',
          '/assets/blog/evaluateur-un-chiffre-un-probleme/slide-3.en.webp',
          '/assets/blog/evaluateur-un-chiffre-un-probleme/slide-4.en.webp',
          '/assets/blog/evaluateur-un-chiffre-un-probleme/slide-5.en.webp',
          '/assets/blog/evaluateur-un-chiffre-un-probleme/slide-6.en.webp',
          '/assets/blog/evaluateur-un-chiffre-un-probleme/slide-7.en.webp',
        ],
      },
    },
    content: {
      fr: () =>
        import('../content/evaluateur-un-chiffre-un-probleme/evaluateur-un-chiffre-un-probleme.fr').then(
          (m) => m.EvaluateurUnChiffreUnProblemeFr,
        ),
      en: () =>
        import('../content/evaluateur-un-chiffre-un-probleme/evaluateur-un-chiffre-un-probleme.en').then(
          (m) => m.EvaluateurUnChiffreUnProblemeEn,
        ),
    },
  },
  {
    slug: 'phrase-plus-vraie',
    emoji: '☕',
    year: 2026,
    date: '2026-11-05',
    categories: ['phd'],
    readingMinutes: 2,
    tag: { fr: 'Vie de doctorant', en: 'PhD life' },
    title: {
      fr: "Une phrase de mon article n'est plus vraie",
      en: 'A sentence in my own paper is no longer true',
    },
    description: {
      fr: "En rouvrant notre article sur AdaptiFlow, je retombe sur un scénario où l'administrateur doit redémarrer la base de données. Aujourd'hui, elle redémarre toute seule.",
      en: 'Reopening our AdaptiFlow paper, I found a scenario where the administrator has to restart the database. Today, it restarts on its own.',
    },
    preview: {
      fr: { image: '/assets/blog/phrase-plus-vraie/cover.fr.jpg', width: 1080, height: 1080 },
      en: { image: '/assets/blog/phrase-plus-vraie/cover.en.jpg', width: 1080, height: 1080 },
    },
    content: {
      fr: () =>
        import('../content/phrase-plus-vraie/phrase-plus-vraie.fr').then(
          (m) => m.PhrasePlusVraieFr,
        ),
      en: () =>
        import('../content/phrase-plus-vraie/phrase-plus-vraie.en').then(
          (m) => m.PhrasePlusVraieEn,
        ),
    },
  },
  {
    slug: 'chambre-froide-self-healing',
    emoji: '🍽️',
    year: 2026,
    date: '2026-11-04',
    categories: ['popular'],
    readingMinutes: 2,
    tag: { fr: 'Vulgarisation', en: 'Popular science' },
    title: {
      fr: 'La chambre froide qui lâche : le self-healing expliqué au restaurant',
      en: 'La chambre froide qui lâche : le self-healing expliqué au restaurant',
    },
    description: {
      fr: "Quand la chambre froide tombe en panne, un bon restaurant passe en carte réduite au lieu de fermer. C'est ce qu'AdaptiFlow fait faire aux services quand la base de données ne répond plus.",
      en: "Quand la chambre froide tombe en panne, un bon restaurant passe en carte réduite au lieu de fermer. C'est ce qu'AdaptiFlow fait faire aux services quand la base de données ne répond plus.",
    },
    preview: {
      fr: {
        image: '/assets/blog/chambre-froide-self-healing/cover.fr.jpg',
        width: 1080,
        height: 1080,
        video: '/assets/blog/chambre-froide-self-healing/video.fr.mp4',
      },
    },
    content: {
      fr: () =>
        import('../content/chambre-froide-self-healing/chambre-froide-self-healing.fr').then(
          (m) => m.ChambreFroideSelfHealingFr,
        ),
    },
  },
  {
    slug: 'monitor-savoir-regarder',
    emoji: '📈',
    year: 2026,
    date: '2026-11-03',
    categories: ['research'],
    readingMinutes: 2,
    tag: { fr: 'Science', en: 'Research' },
    title: {
      fr: "Monitor : qu'est-ce qu'on est censé observer ?",
      en: "Monitor : qu'est-ce qu'on est censé observer ?",
    },
    description: {
      fr: "Tout mesurer n'est pas la solution. Dans la boucle MAPE-K, savoir quoi observer oriente toutes les décisions : les deux angles retenus dans AdaptiFlow.",
      en: "Tout mesurer n'est pas la solution. Dans la boucle MAPE-K, savoir quoi observer oriente toutes les décisions : les deux angles retenus dans AdaptiFlow.",
    },
    preview: {
      fr: {
        image: '/assets/blog/monitor-savoir-regarder/cover.fr.jpg',
        width: 1080,
        height: 1351,
        slides: [
          '/assets/blog/monitor-savoir-regarder/cover.fr.jpg',
          '/assets/blog/monitor-savoir-regarder/slide-2.fr.webp',
          '/assets/blog/monitor-savoir-regarder/slide-3.fr.webp',
          '/assets/blog/monitor-savoir-regarder/slide-4.fr.webp',
          '/assets/blog/monitor-savoir-regarder/slide-5.fr.webp',
          '/assets/blog/monitor-savoir-regarder/slide-6.fr.webp',
          '/assets/blog/monitor-savoir-regarder/slide-7.fr.webp',
        ],
      },
    },
    content: {
      fr: () =>
        import('../content/monitor-savoir-regarder/monitor-savoir-regarder.fr').then(
          (m) => m.MonitorSavoirRegarderFr,
        ),
    },
  },
  {
    slug: 'six-ans-de-reponses',
    emoji: '🎓',
    year: 2026,
    date: '2026-11-02',
    categories: ['phd'],
    readingMinutes: 2,
    tag: { fr: 'Vie de doctorant', en: 'PhD life' },
    title: { fr: 'Ma thèse est une revanche', en: 'Ma thèse est une revanche' },
    description: {
      fr: "D'où je viens, de mes premiers stages de licence au poste de Team Lead, et pourquoi ma thèse est en fait une revanche.",
      en: "D'où je viens, de mes premiers stages de licence au poste de Team Lead, et pourquoi ma thèse est en fait une revanche.",
    },
    preview: {
      fr: { image: '/assets/blog/six-ans-de-reponses/cover.fr.jpg', width: 1080, height: 1080 },
    },
    content: {
      fr: () =>
        import('../content/six-ans-de-reponses/six-ans-de-reponses.fr').then(
          (m) => m.SixAnsDeReponsesFr,
        ),
    },
  },
  {
    slug: 'dimanche-sondage-controle-vs-autonomie',
    emoji: '☕',
    year: 2026,
    date: '2026-11-01',
    categories: ['popular'],
    readingMinutes: 2,
    tag: { fr: 'Bonus du dimanche', en: 'Sunday bonus' },
    title: {
      fr: "Jusqu'où laisser le système décider tout seul ?",
      en: "Jusqu'où laisser le système décider tout seul ?",
    },
    description: {
      fr: "Contrôle ou autonomie : plus un système réagit seul, plus il va vite, mais moins on sait ce qui s'est passé pendant qu'on dormait. Une question de dimanche.",
      en: "Contrôle ou autonomie : plus un système réagit seul, plus il va vite, mais moins on sait ce qui s'est passé pendant qu'on dormait. Une question de dimanche.",
    },
    preview: {
      fr: {
        image: '/assets/blog/dimanche-sondage-controle-vs-autonomie/cover.fr.jpg',
        width: 1080,
        height: 1080,
      },
    },
    content: {
      fr: () =>
        import('../content/dimanche-sondage-controle-vs-autonomie/dimanche-sondage-controle-vs-autonomie.fr').then(
          (m) => m.DimancheSondageControleVsAutonomieFr,
        ),
    },
  },
  {
    slug: 'halloween-ddos-sonnette',
    emoji: '🎃',
    year: 2026,
    date: '2026-10-31',
    categories: ['popular'],
    readingMinutes: 2,
    tag: { fr: 'Vulgarisation', en: 'Popular science' },
    title: {
      fr: "Hier soir, ma porte d'entrée s'est fait DDoS",
      en: "Hier soir, ma porte d'entrée s'est fait DDoS",
    },
    description: {
      fr: "Un soir d'Halloween, une sonnette qui ne s'arrête plus : comment distinguer un pic de visiteurs d'une attaque, et ce qu'AdaptiFlow en fait au-delà de 300 requêtes par seconde.",
      en: "Un soir d'Halloween, une sonnette qui ne s'arrête plus : comment distinguer un pic de visiteurs d'une attaque, et ce qu'AdaptiFlow en fait au-delà de 300 requêtes par seconde.",
    },
    preview: {
      fr: {
        image: '/assets/blog/halloween-ddos-sonnette/cover.fr.jpg',
        width: 1080,
        height: 1080,
        video: '/assets/blog/halloween-ddos-sonnette/video.fr.mp4',
      },
    },
    content: {
      fr: () =>
        import('../content/halloween-ddos-sonnette/halloween-ddos-sonnette.fr').then(
          (m) => m.HalloweenDdosSonnetteFr,
        ),
    },
  },
  {
    slug: 'adaptiflow-mape-k-20-ans',
    emoji: '🔁',
    year: 2026,
    date: '2026-10-30',
    categories: ['research'],
    readingMinutes: 2,
    tag: { fr: 'Science', en: 'Research' },
    title: {
      fr: "MAPE-K a plus de 20 ans, et presque personne ne l'utilise en prod",
      en: "MAPE-K a plus de 20 ans, et presque personne ne l'utilise en prod",
    },
    description: {
      fr: "La boucle MAPE-K est connue depuis vingt ans, mais chaque équipe rebricole encore capteurs et actionneurs à la main. C'est le verrou qu'attaque AdaptiFlow.",
      en: "La boucle MAPE-K est connue depuis vingt ans, mais chaque équipe rebricole encore capteurs et actionneurs à la main. C'est le verrou qu'attaque AdaptiFlow.",
    },
    content: {
      fr: () =>
        import('../content/adaptiflow-mape-k-20-ans/adaptiflow-mape-k-20-ans.fr').then(
          (m) => m.AdaptiflowMapeK20AnsFr,
        ),
    },
  },
  // ---- Articles longs.
  {
    slug: 'ai-replace-developers',
    emoji: '🚨',
    year: 2025,
    date: '2025-12',
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
    content: {
      fr: () =>
        import('../content/ai-replace-developers/ai-replace-developers.fr').then(
          (m) => m.AiReplaceDevelopersFr,
        ),
      en: () =>
        import('../content/ai-replace-developers/ai-replace-developers.en').then(
          (m) => m.AiReplaceDevelopersEn,
        ),
    },
  },
  {
    slug: '1-month-12-days-phd',
    emoji: '🎢',
    year: 2025,
    date: '2025-11',
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
    content: {
      fr: () =>
        import('../content/1-month-12-days-phd/1-month-12-days-phd.fr').then(
          (m) => m.Post1Month12DaysPhdFr,
        ),
      en: () =>
        import('../content/1-month-12-days-phd/1-month-12-days-phd.en').then(
          (m) => m.Post1Month12DaysPhdEn,
        ),
    },
  },
  {
    slug: 'day-1-phd-student',
    emoji: '🎤',
    year: 2025,
    date: '2025-10',
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
      fr: () =>
        import('../content/day-1-phd-student/day-1-phd-student.fr').then((m) => m.Day1PhdStudentFr),
      en: () =>
        import('../content/day-1-phd-student/day-1-phd-student.en').then((m) => m.Day1PhdStudentEn),
    },
  },
  {
    slug: 'engineer-evolving-phd',
    emoji: '🔥',
    year: 2025,
    date: '2025-10',
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
    content: {
      fr: () =>
        import('../content/engineer-evolving-phd/engineer-evolving-phd.fr').then(
          (m) => m.EngineerEvolvingPhdFr,
        ),
      en: () =>
        import('../content/engineer-evolving-phd/engineer-evolving-phd.en').then(
          (m) => m.EngineerEvolvingPhdEn,
        ),
    },
  },
  {
    slug: 'closing-chapter-engineer',
    emoji: '🌟',
    year: 2025,
    date: '2025-09',
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
    content: {
      fr: () =>
        import('../content/closing-chapter-engineer/closing-chapter-engineer.fr').then(
          (m) => m.ClosingChapterEngineerFr,
        ),
      en: () =>
        import('../content/closing-chapter-engineer/closing-chapter-engineer.en').then(
          (m) => m.ClosingChapterEngineerEn,
        ),
    },
  },
  {
    slug: 'discotec-2025-reflections',
    emoji: '🎓',
    year: 2025,
    date: '2025-06',
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
    content: {
      fr: () =>
        import('../content/discotec-2025-reflections/discotec-2025-reflections.fr').then(
          (m) => m.Discotec2025ReflectionsFr,
        ),
      en: () =>
        import('../content/discotec-2025-reflections/discotec-2025-reflections.en').then(
          (m) => m.Discotec2025ReflectionsEn,
        ),
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
    content: {
      fr: () =>
        import('../content/natures-adaptation-strategy/natures-adaptation-strategy.fr').then(
          (m) => m.NaturesAdaptationStrategyFr,
        ),
      en: () =>
        import('../content/natures-adaptation-strategy/natures-adaptation-strategy.en').then(
          (m) => m.NaturesAdaptationStrategyEn,
        ),
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
    content: {
      fr: () =>
        import('../content/expert-validates-baby/expert-validates-baby.fr').then(
          (m) => m.ExpertValidatesBabyFr,
        ),
      en: () =>
        import('../content/expert-validates-baby/expert-validates-baby.en').then(
          (m) => m.ExpertValidatesBabyEn,
        ),
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
    content: {
      fr: () =>
        import('../content/french-integration-hacks/french-integration-hacks.fr').then(
          (m) => m.FrenchIntegrationHacksFr,
        ),
      en: () =>
        import('../content/french-integration-hacks/french-integration-hacks.en').then(
          (m) => m.FrenchIntegrationHacksEn,
        ),
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
    content: {
      fr: () =>
        import('../content/first-paper-accepted/first-paper-accepted.fr').then(
          (m) => m.FirstPaperAcceptedFr,
        ),
      en: () =>
        import('../content/first-paper-accepted/first-paper-accepted.en').then(
          (m) => m.FirstPaperAcceptedEn,
        ),
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
    content: {
      fr: () =>
        import('../content/holidays-cameroon/holidays-cameroon.fr').then(
          (m) => m.HolidaysCameroonFr,
        ),
      en: () =>
        import('../content/holidays-cameroon/holidays-cameroon.en').then(
          (m) => m.HolidaysCameroonEn,
        ),
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
    content: {
      fr: () =>
        import('../content/spirals-seminar/spirals-seminar.fr').then((m) => m.SpiralsSeminarFr),
      en: () =>
        import('../content/spirals-seminar/spirals-seminar.en').then((m) => m.SpiralsSeminarEn),
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
    content: {
      fr: () =>
        import('../content/two-months-inria-lessons/two-months-inria-lessons.fr').then(
          (m) => m.TwoMonthsInriaLessonsFr,
        ),
      en: () =>
        import('../content/two-months-inria-lessons/two-months-inria-lessons.en').then(
          (m) => m.TwoMonthsInriaLessonsEn,
        ),
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
    content: {
      fr: () =>
        import('../content/master-thesis-presentation/master-thesis-presentation.fr').then(
          (m) => m.MasterThesisPresentationFr,
        ),
      en: () =>
        import('../content/master-thesis-presentation/master-thesis-presentation.en').then(
          (m) => m.MasterThesisPresentationEn,
        ),
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
    content: {
      fr: () =>
        import('../content/developers-vs-testers/developers-vs-testers.fr').then(
          (m) => m.DevelopersVsTestersFr,
        ),
      en: () =>
        import('../content/developers-vs-testers/developers-vs-testers.en').then(
          (m) => m.DevelopersVsTestersEn,
        ),
    },
  },
];
