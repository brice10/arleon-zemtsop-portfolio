import { Localized } from '@core/i18n/lang';
import { JsonLd } from '@core/seo/seo.model';

export interface Publication {
  /** Clé BibTeX. */
  key: string;
  title: string;
  /** Auteurs dans l'ordre de la publication. */
  authors: string[];
  kind: Localized;
  /** Actes dans lesquels l'article est paru. */
  venue: string;
  event: string;
  year: number;
  pages?: string;
  doi: string;
  arxiv: string;
  hal: string;
  summary: Localized;
  bibtex: string;
}

/** Nom tel qu'il apparaît dans la liste des auteurs : sert à le mettre en évidence. */
export const SELF = 'Brice Arléon Zemtsop Ndadji';

const PROCEEDINGS =
  'Proceedings of the First Workshop on Adaptable Cloud Architectures (WACA 2025), Electronic Proceedings in Theoretical Computer Science, vol. 438';
const EVENT = 'WACA 2025 @ DisCoTec 2025, Lille, France, 20 June 2025';

/**
 * Publications, de la plus récente à la plus ancienne.
 * Source unique : la liste affichée sur la page Recherche, les entrées BibTeX et les données
 * structurées (schema.org ScholarlyArticle) en découlent.
 */
export const PUBLICATIONS: Publication[] = [
  {
    key: 'zemtsop2025adaptiflow',
    title: 'AdaptiFlow: An Extensible Framework for Event-Driven Autonomy in Cloud Microservices',
    authors: [SELF, 'Simon Bliudze', 'Clément Quinton'],
    kind: { fr: 'Article de workshop', en: 'Workshop paper' },
    venue: PROCEEDINGS,
    event: EVENT,
    year: 2025,
    pages: '123–147',
    doi: '10.4204/EPTCS.438.7',
    arxiv: '2512.23499',
    hal: 'https://hal.science/hal-05074243v1',
    summary: {
      fr: "Présentation d'AdaptiFlow, un framework léger permettant l'intégration de capacités d'auto-adaptation dans les architectures microservices existantes, avec une évaluation sur le benchmark TeaStore.",
      en: 'Introduces AdaptiFlow, a lightweight framework for integrating self-adaptation capabilities into existing microservice architectures, evaluated on the TeaStore benchmark.',
    },
    bibtex: `@inproceedings{zemtsop2025adaptiflow,
  author    = {Zemtsop Ndadji, Brice Arl{\\'e}on and Bliudze, Simon and Quinton, Cl{\\'e}ment},
  title     = {AdaptiFlow: An Extensible Framework for Event-Driven Autonomy in Cloud Microservices},
  booktitle = {Proceedings of the First Workshop on Adaptable Cloud Architectures (WACA 2025)},
  series    = {Electronic Proceedings in Theoretical Computer Science},
  volume    = {438},
  pages     = {123--147},
  year      = {2025},
  doi       = {10.4204/EPTCS.438.7}
}`,
  },
  {
    key: 'bliudze2025adaptable',
    title: 'Adaptable TeaStore',
    authors: [
      'Simon Bliudze',
      'Giuseppe De Palma',
      'Saverio Giallorenzo',
      'Ivan Lanese',
      'Gianluigi Zavattaro',
      SELF,
    ],
    kind: { fr: 'Article de workshop', en: 'Workshop paper' },
    venue: PROCEEDINGS,
    event: EVENT,
    year: 2025,
    pages: '1–14',
    doi: '10.4204/EPTCS.438.1',
    arxiv: '2412.16060',
    hal: 'https://inria.hal.science/hal-05446548',
    summary: {
      fr: "Extension de l'architecture de référence TeaStore qui fait de l'adaptabilité une préoccupation de conception à part entière, accompagnée d'un catalogue de scénarios d'adaptation de référence.",
      en: 'An extension of the TeaStore reference architecture that makes adaptability a first-class design concern, together with a catalogue of reference adaptation scenarios.',
    },
    bibtex: `@inproceedings{bliudze2025adaptable,
  author    = {Bliudze, Simon and De Palma, Giuseppe and Giallorenzo, Saverio and Lanese, Ivan and Zavattaro, Gianluigi and Zemtsop Ndadji, Brice Arl{\\'e}on},
  title     = {Adaptable TeaStore},
  booktitle = {Proceedings of the First Workshop on Adaptable Cloud Architectures (WACA 2025)},
  series    = {Electronic Proceedings in Theoretical Computer Science},
  volume    = {438},
  pages     = {1--14},
  year      = {2025},
  doi       = {10.4204/EPTCS.438.1}
}`,
  },
];

/** Données structurées de la page Recherche : une entrée ScholarlyArticle par publication. */
export function publicationsJsonLd(personId: string): JsonLd[] {
  return PUBLICATIONS.map((pub) => ({
    '@type': 'ScholarlyArticle',
    '@id': `https://doi.org/${pub.doi}`,
    headline: pub.title,
    name: pub.title,
    author: pub.authors.map((name) =>
      name === SELF ? { '@id': personId } : { '@type': 'Person', name },
    ),
    datePublished: String(pub.year),
    isPartOf: { '@type': 'PublicationVolume', name: pub.venue, volumeNumber: '438' },
    ...(pub.pages ? { pagination: pub.pages } : {}),
    sameAs: [`https://doi.org/${pub.doi}`, `https://arxiv.org/abs/${pub.arxiv}`, pub.hal],
    inLanguage: 'en',
  }));
}
