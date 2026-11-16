import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PAGE_PATHS, PageKey, SITE } from '@core/config/site.config';
import { I18nService } from '@core/i18n/i18n.service';
import { DEFAULT_LANG, LANGS, Lang } from '@core/i18n/lang';
import { environment } from '@env';
import { JsonLd, SeoConfig } from './seo.model';
import { breadcrumbNode, personNode, webPageNode, websiteNode } from './structured-data';

const MANAGED = 'data-seo';

/**
 * Point d'entrée unique du SEO : balises <title>/<meta>, Open Graph, Twitter Cards,
 * URL canonique, hreflang et JSON-LD. Appelé par les resolvers de route, donc exécuté
 * au prérendu (HTML statique complet pour les robots) puis à chaque navigation.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly doc = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly i18n = inject(I18nService);

  /** URL absolue d'un chemin relatif au préfixe de langue. */
  url(path = '', lang: Lang = this.i18n.lang()): string {
    return `${environment.siteUrl}${this.i18n.path(path, lang)}`;
  }

  /** SEO d'une page statique : textes pris dans `seo.<page>` du dictionnaire courant. */
  applyPage(page: PageKey): void {
    const t = this.i18n.t();
    const path = PAGE_PATHS[page];
    this.apply({
      ...t.seo[page],
      path,
      type: page === 'about' ? 'profile' : 'website',
      jsonLd:
        page === 'home'
          ? []
          : [
              breadcrumbNode([
                { name: t.common.breadcrumbHome, url: this.url() },
                { name: t.nav[page], url: this.url(path) },
              ]),
            ],
    });
  }

  apply(config: SeoConfig): void {
    const lang = this.i18n.lang();
    const t = this.i18n.t();
    const url = this.url(config.path);
    const image = `${environment.siteUrl}${config.image ?? SITE.ogImage}`;
    const indexable = environment.indexable && !config.noindex;

    this.doc.documentElement.lang = lang;
    this.title.setTitle(config.title);

    this.name('description', config.description);
    this.name('author', SITE.legalName);
    this.name(
      'robots',
      indexable ? 'index, follow, max-image-preview:large, max-snippet:-1' : 'noindex, nofollow',
    );

    this.property('og:type', config.type ?? 'website');
    this.property('og:site_name', SITE.name);
    this.property('og:title', config.title);
    this.property('og:description', config.description);
    this.property('og:url', url);
    this.property('og:image', image);
    this.property('og:image:width', '1200');
    this.property('og:image:height', '630');
    this.property('og:image:alt', SITE.name);
    this.property('og:locale', t.ogLocale);
    this.meta.removeTag('property="og:locale:alternate"');
    if (config.translated !== false) {
      for (const other of LANGS.filter((l) => l !== lang)) {
        this.meta.addTag({
          property: 'og:locale:alternate',
          content: this.i18n.dictionary(other).ogLocale,
        });
      }
    }

    this.name('twitter:card', 'summary_large_image');
    this.name('twitter:site', SITE.twitterHandle);
    this.name('twitter:creator', SITE.twitterHandle);
    this.name('twitter:title', config.title);
    this.name('twitter:description', config.description);
    this.name('twitter:image', image);

    this.resetManagedNodes();
    if (!config.noindex) {
      this.link({ rel: 'canonical', href: url });
      if (config.translated !== false) {
        for (const l of LANGS) {
          this.link({ rel: 'alternate', hreflang: l, href: this.url(config.path, l) });
        }
        this.link({
          rel: 'alternate',
          hreflang: 'x-default',
          href: this.url(config.path, DEFAULT_LANG),
        });
      }
      this.jsonLd([
        personNode(environment.siteUrl, lang),
        websiteNode(environment.siteUrl, lang),
        webPageNode(environment.siteUrl, url, lang, config.title, config.description),
        ...(config.jsonLd ?? []),
      ]);
    }
  }

  private name(name: string, content: string): void {
    this.meta.updateTag({ name, content });
  }

  private property(property: string, content: string): void {
    this.meta.updateTag({ property, content });
  }

  private resetManagedNodes(): void {
    this.doc.head.querySelectorAll(`[${MANAGED}]`).forEach((node) => node.remove());
  }

  private link(attributes: Record<string, string>): void {
    const link = this.doc.createElement('link');
    Object.entries(attributes).forEach(([key, value]) => link.setAttribute(key, value));
    link.setAttribute(MANAGED, '');
    this.doc.head.appendChild(link);
  }

  private jsonLd(graph: JsonLd[]): void {
    const script = this.doc.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute(MANAGED, '');
    // `<` échappé : aucun contenu ne peut fermer la balise <script>.
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graph,
    }).replace(/</g, '\\u003c');
    this.doc.head.appendChild(script);
  }
}
