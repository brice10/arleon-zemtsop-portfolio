# Brice Arléon ZEMTSOP NDADJI — Personal Portfolio

> Personal portfolio of a **PhD Student at Inria & Université de Lille** and **Senior Software Engineer**, published online in **2025**.

Live at → **[arleonzemtsop.fr](https://arleonzemtsop.fr)**

---

## 👤 About

This portfolio showcases my dual profile as a researcher and engineer. I am currently pursuing a doctorate on **self-adaptive distributed systems** within the SPIRALS team at Inria Lille, while maintaining an active background in full-stack engineering and software architecture consulting.

---

## 🌐 Languages

The site is fully bilingual — every page is available in both **French** and **English**, routed under dedicated prefixes:

| Language | Root path |
|----------|-----------|
| 🇫🇷 Français | `/fr/` |
| 🇬🇧 English | `/en/` |

Language switching is handled by two custom components: a dropdown in the desktop navbar and a bottom sheet on mobile, both built with vanilla CSS and JavaScript — no framework dependency.

---

## 📁 Project Structure

```
portfolio/
├── fr/                         # French version
│   ├── index.html              # Homepage
│   ├── pages/
│   │   ├── about.html          # About me
│   │   ├── research.html       # Research & publications
│   │   ├── projects.html       # Engineering projects
│   │   └── contact.html        # Contact
│   └── blog/
│       ├── index.html          # Blog index
│       └── articles/           # Individual blog posts
│           └── _template.html
│
├── en/                         # English version (mirrors fr/)
│   ├── index.html
│   ├── pages/
│   │   ├── about.html
│   │   ├── research.html
│   │   ├── projects.html
│   │   └── contact.html
│   └── blog/
│       ├── index.html
│       └── articles/
│
├── robots.txt
├── sitemap.xml
└── vercel.json
```

---

## 📄 Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section, skills overview, featured projects, quick contact |
| **About** | Background, timeline, values, certifications, personality |
| **Research** | PhD focus on self-adaptive systems, AdaptiFlow framework, publications, affiliations (Inria / Université de Lille) |
| **Projects** | 20+ delivered projects — enterprise apps, research tools, open source contributions |
| **Blog** | Articles on research, the PhD journey, software engineering and personal life |
| **Contact** | Message form (Formspree), Calendly booking, FAQ |

---

## 🎨 Design System

The visual identity follows a custom design language built around a dark, technical aesthetic.

**Color palette**

| Token | Hex | Role |
|-------|-----|------|
| `deep-night` | `#0A1628` | Page background |
| `noble-blue` | `#1E3A5F` | Card backgrounds |
| `determination` | `#E85D04` | Primary accent |
| `warm-energy` | `#F48C06` | Gradient partner |
| `digital-cyan` | `#00D4FF` | Info / tech accent |
| `code-green` | `#4FFFB0` | Success / availability |
| `noble-gold` | `#D4A012` | Highlights |

**Typography**

| Font | Usage |
|------|-------|
| Montserrat | Display headings, nav, buttons |
| Inter | Body text |
| Playfair Display | Pull quotes, accent text |
| JetBrains Mono | Code snippets, labels, tags |

---

## 🛠️ Tech Stack

The site is intentionally framework-free — pure HTML, CSS and JavaScript, enhanced with:

- **[Tailwind CSS](https://tailwindcss.com)** (CDN) — utility-first styling
- **[Google Fonts](https://fonts.google.com)** — Montserrat, Inter, Playfair Display, JetBrains Mono
- **[Formspree](https://formspree.io)** — contact form backend
- **[Calendly](https://calendly.com)** — meeting booking widget
- **[Vercel](https://vercel.com)** — hosting and edge delivery
- **Vercel Web Analytics & Speed Insights** — performance monitoring

---

## ✨ Features

- **Bilingual FR / EN** with custom language switcher (dropdown + mobile bottom sheet)
- **Scroll-reveal animations** — elements animate in as the user scrolls
- **Project filtering** — filter by category (Enterprise, Research, Open Source, Personal)
- **Blog filtering** — filter posts by topic
- **FAQ accordion** — animated expand/collapse
- **Async contact form** — Formspree submission with success/error feedback, no page reload
- **Available badge** — pulsing indicator signalling open availability
- **Mobile-first responsive layout** — bottom tab navigation on small screens, full navbar on desktop
- **Custom scrollbar** — styled to match the color palette

---

## 🔍 SEO

- Full meta tags (title, description, keywords, author)
- Open Graph tags per page and locale
- Canonical URLs
- `robots.txt` and `sitemap.xml`
- Semantic HTML structure
- Schema.org / JSON-LD on research page

---

## 📝 Adding a Blog Post

1. Copy `blog/articles/_template.html` (in either `fr/` or `en/`)
2. Rename it with a descriptive slug (e.g. `adaptive-systems-intro.html`)
3. Fill in the placeholders: title, description, date, category, content
4. Update `sitemap.xml` with the new URL
5. Add a card to the corresponding `blog/index.html`

---

## 📄 License

© 2025 ZEMTSOP NDADJI Brice Arléon. All rights reserved.

---

**Contact** · [arleonzemtsop@gmail.com](mailto:arleonzemtsop@gmail.com) · [LinkedIn](https://www.linkedin.com/in/brice-arléon-zemtsop-ndadji-b258321a4/) · [GitHub](https://github.com/brice10)