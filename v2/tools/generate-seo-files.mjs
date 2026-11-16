#!/usr/bin/env node
/**
 * Post-build : fichiers SEO dérivés du site réellement prérendu.
 *
 *  - sitemap.xml : une entrée par page HTML générée, avec ses alternatives hreflang ;
 *  - robots.txt  : la ligne `Sitemap:` pointe vers l'origine de production ;
 *  - feed.xml    : un flux RSS du blog par langue (/fr/feed.xml, /en/feed.xml) ;
 *  - 404.html    : copie de /404/index.html, le nom attendu par Vercel.
 *
 * Le sitemap est construit à partir du dossier de sortie : une page ajoutée dans
 * l'application y apparaît sans rien toucher ici.
 */
import { copyFile, readFile, readdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist/portfolio/browser');
const LANGS = ['fr', 'en'];
const DEFAULT_LANG = 'en';

if (!existsSync(dist)) {
  console.error(`✖ ${relative(root, dist)} introuvable : lancer d'abord « ng build ».`);
  process.exit(1);
}

// Source unique de l'origine du site : le profil d'environnement de production.
const environment = await readFile(join(root, 'src/environments/environment.ts'), 'utf8');
const siteUrl = (process.env.SITE_URL ?? environment.match(/siteUrl:\s*'([^']+)'/)?.[1] ?? '').replace(/\/$/, '');
if (!siteUrl) {
  console.error('✖ siteUrl introuvable dans src/environments/environment.ts');
  process.exit(1);
}

/** Chemins (relatifs à la langue) de toutes les pages prérendues, ex. '', 'about', 'blog/mon-article'. */
async function pagesOf(lang) {
  const base = join(dist, lang);
  const files = (await readdir(base, { recursive: true })).filter((entry) => entry.endsWith('index.html'));
  const indexable = [];
  for (const file of files) {
    // Les pages marquées noindex (ex. articles pas encore migrés) restent hors du sitemap.
    const html = await readFile(join(base, file), 'utf8');
    if (!/<meta name="robots" content="noindex/.test(html)) {
      const path = dirname(file).split(sep).join('/');
      indexable.push(path === '.' ? '' : path);
    }
  }
  return indexable;
}

const perLang = Object.fromEntries(await Promise.all(LANGS.map(async (lang) => [lang, await pagesOf(lang)])));
const paths = [...new Set(Object.values(perLang).flat())].sort();
const url = (lang, path) => `${siteUrl}/${lang}${path ? `/${path}` : ''}`;
const lastmod = new Date().toISOString().slice(0, 10);

const entries = paths.flatMap((path) => {
  const langs = LANGS.filter((lang) => perLang[lang].includes(path));
  const alternates = [
    ...langs.map((lang) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${url(lang, path)}"/>`),
    ...(langs.includes(DEFAULT_LANG)
      ? [`    <xhtml:link rel="alternate" hreflang="x-default" href="${url(DEFAULT_LANG, path)}"/>`]
      : []),
  ].join('\n');
  return langs.map(
    (lang) => `  <url>\n    <loc>${url(lang, path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates}\n  </url>`,
  );
});

await writeFile(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`,
);

const robotsPath = join(dist, 'robots.txt');
const robots = await readFile(robotsPath, 'utf8');
await writeFile(robotsPath, robots.replace(/^Sitemap:.*$/m, `Sitemap: ${siteUrl}/sitemap.xml`));

// ---------------------------------------------------------------- flux RSS (un par langue)
const xml = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const unescapeHtml = (text) =>
  text.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const meta = (html, pattern) => unescapeHtml(html.match(pattern)?.[1] ?? '');

for (const lang of LANGS) {
  const items = [];
  for (const path of perLang[lang].filter((p) => p.startsWith('blog/'))) {
    const html = await readFile(join(dist, lang, path, 'index.html'), 'utf8');
    // Titre, résumé et date viennent de la page prérendue : rien à maintenir en double.
    const title = meta(html, /"headline":"((?:[^"\\]|\\.)*)"/).replace(/\\"/g, '"');
    const description = meta(html, /<meta name="description" content="([^"]*)"/);
    const published = meta(html, /"datePublished":"([^"]*)"/);
    const date = /^\d{4}-\d{2}/.test(published) ? new Date(published.length === 7 ? `${published}-01` : published) : null;
    items.push({ title, description, link: url(lang, path), date, sort: published });
  }
  items.sort((a, b) => b.sort.localeCompare(a.sort));
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog — Brice Arléon ZEMTSOP NDADJI</title>
    <link>${url(lang, 'blog')}</link>
    <description>${lang === 'fr' ? 'Recherche, développement logiciel, systèmes auto-adaptatifs et parcours de doctorat.' : 'Research, software development, self-adaptive systems and the PhD journey.'}</description>
    <language>${lang}</language>
    <atom:link href="${siteUrl}/${lang}/feed.xml" rel="self" type="application/rss+xml"/>
${items
  .map(
    (item) => `    <item>
      <title>${xml(item.title)}</title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description>${xml(item.description)}</description>${item.date ? `\n      <pubDate>${item.date.toUTCString()}</pubDate>` : ''}
    </item>`,
  )
  .join('\n')}
  </channel>
</rss>
`;
  await writeFile(join(dist, lang, 'feed.xml'), feed);
}

const notFound = join(dist, '404/index.html');
if (existsSync(notFound)) {
  await copyFile(notFound, join(dist, '404.html'));
}

console.log(`✔ sitemap.xml : ${entries.length} URL (${siteUrl}) · robots.txt · 404.html · flux RSS fr/en`);
