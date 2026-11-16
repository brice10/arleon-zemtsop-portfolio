import { SITE } from '@core/config/site.config';
import { Lang } from '@core/i18n/lang';
import { JsonLd } from './seo.model';

/**
 * Fabriques de données structurées schema.org.
 * Les `@id` permettent de relier les nœuds entre eux (l'auteur d'un article -> la personne).
 */
export const personId = (siteUrl: string) => `${siteUrl}/#person`;
export const websiteId = (siteUrl: string) => `${siteUrl}/#website`;

export function personNode(siteUrl: string, lang: Lang): JsonLd {
  return {
    '@type': 'Person',
    '@id': personId(siteUrl),
    name: SITE.name,
    alternateName: SITE.shortName,
    givenName: 'Brice Arléon',
    familyName: 'ZEMTSOP NDADJI',
    url: siteUrl,
    image: `${siteUrl}${SITE.portrait}`,
    email: `mailto:${SITE.email}`,
    jobTitle:
      lang === 'fr'
        ? ['Doctorant', 'Senior Software Engineer']
        : ['PhD Student', 'Senior Software Engineer'],
    affiliation: [
      { '@type': 'Organization', name: 'Inria', url: 'https://www.inria.fr' },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Université de Lille',
        url: 'https://www.univ-lille.fr',
      },
    ],
    knowsAbout:
      lang === 'fr'
        ? [
            'Systèmes auto-adaptatifs',
            'Cloud Computing',
            'Microservices',
            'Java',
            'Angular',
            'Spring Boot',
          ]
        : [
            'Self-adaptive systems',
            'Cloud Computing',
            'Microservices',
            'Java',
            'Angular',
            'Spring Boot',
          ],
    sameAs: Object.values(SITE.social),
  };
}

export function websiteNode(siteUrl: string, lang: Lang): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': websiteId(siteUrl),
    url: siteUrl,
    name: SITE.name,
    inLanguage: lang,
    publisher: { '@id': personId(siteUrl) },
  };
}

export function webPageNode(
  siteUrl: string,
  url: string,
  lang: Lang,
  title: string,
  description: string,
): JsonLd {
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: lang,
    isPartOf: { '@id': websiteId(siteUrl) },
    about: { '@id': personId(siteUrl) },
  };
}

export function breadcrumbNode(items: { name: string; url: string }[]): JsonLd {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function blogPostingNode(
  siteUrl: string,
  url: string,
  lang: Lang,
  post: { title: string; description: string; datePublished: string; section: string },
): JsonLd {
  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    mainEntityOfPage: { '@id': `${url}#webpage` },
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    articleSection: post.section,
    inLanguage: lang,
    image: `${siteUrl}${SITE.ogImage}`,
    author: { '@id': personId(siteUrl) },
    publisher: { '@id': personId(siteUrl) },
  };
}
