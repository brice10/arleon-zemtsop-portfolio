# Portfolio - ZEMTSOP NDADJI Brice Arléon

Portfolio personnel présentant mon double profil de **PhD Researcher** et **Senior Software Engineer**.

## 🎨 Design

L'identité visuelle suit une charte graphique professionnelle avec :
- **Couleurs primaires** : Bleu Profond (#0A1628), Bleu Cobalt (#1E3A5F)
- **Couleurs d'accent** : Orange (#E85D04), Cyan (#00D4FF), Vert (#4FFFB0)
- **Typographie** : Montserrat (titres), Inter (corps), Playfair Display (citations), JetBrains Mono (code)

## 📁 Structure du Projet

```
portfolio/
├── index.html              # Page d'accueil
├── vercel.json             # Configuration Vercel
├── robots.txt              # Instructions pour les robots
├── sitemap.xml             # Plan du site pour SEO
├── css/                    # Styles personnalisés
├── js/                     # Scripts JavaScript
├── images/                 # Images et médias
│   └── blog/              # Images des articles de blog
├── pages/                  # Pages secondaires
│   ├── about.html         # À propos
│   ├── research.html      # Recherche & Publications
│   ├── projects.html      # Projets d'ingénierie
│   └── contact.html       # Contact
└── blog/                   # Section blog
    ├── index.html         # Liste des articles
    └── articles/          # Articles individuels
        └── _template.html # Template pour nouveaux articles
```

## 🚀 Déploiement sur Vercel

### Option 1 : Via l'interface Vercel

1. Connectez-vous à [Vercel](https://vercel.com)
2. Cliquez sur "New Project"
3. Importez ce repository depuis GitHub
4. Vercel détectera automatiquement la configuration
5. Cliquez sur "Deploy"

### Option 2 : Via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

### Configuration du domaine personnalisé

1. Dans le dashboard Vercel, allez dans Settings > Domains
2. Ajoutez votre domaine : `arleonzemtsop.vercel.app`
3. Configurez les DNS selon les instructions de Vercel

## 📝 Ajouter un Article de Blog

1. Copiez le fichier `blog/articles/_template.html`
2. Renommez-le avec un slug descriptif (ex: `systemes-adaptatifs-intro.html`)
3. Modifiez les placeholders `[...]` :
   - `[TITRE]` : Titre de l'article
   - `[DESCRIPTION]` : Description SEO (150-160 caractères)
   - `[SLUG]` : Nom du fichier sans extension
   - `[DATE-ISO]` : Date au format ISO (ex: 2025-01-15T10:00:00Z)
   - `[CATÉGORIE]` : Recherche, Ingénierie, Tutoriel, etc.
   - `[IMAGE]` : Nom du fichier image
4. Ajoutez votre contenu dans la section `<article>`
5. Mettez à jour `sitemap.xml` avec la nouvelle URL
6. Committez et déployez

## 🔍 Optimisation SEO

Le site est optimisé pour le référencement :

- ✅ Meta tags complets (title, description, keywords)
- ✅ Open Graph pour les réseaux sociaux
- ✅ Twitter Cards
- ✅ Schema.org / JSON-LD
- ✅ Sitemap XML
- ✅ robots.txt
- ✅ URLs canoniques
- ✅ Structure HTML sémantique
- ✅ Texte alternatif sur les images
- ✅ Liens internes optimisés

## 🌙 Fonctionnalités

- **Mode sombre/clair** : Toggle dans le header
- **Navigation responsive** : Menu classique sur desktop, tabs sur mobile
- **Animations** : Transitions fluides et effets au scroll
- **Indicateur "Disponible"** : Badge avec animation
- **Photos interactives** : Effet 3D au survol
- **Blog intégré** : Section blog avec template réutilisable

## 📱 Responsive Design

Le site est entièrement responsive avec Tailwind CSS :
- Mobile : Navigation par tabs, layout adapté
- Tablet : Transition fluide
- Desktop : Navigation complète, animations avancées

## ⚡ Performance

- Fonts préconnectés (Google Fonts)
- Images lazy-loaded
- CSS optimisé avec Tailwind
- JavaScript minimal et optimisé

## 📄 Licence

© 2025 ZEMTSOP NDADJI Brice Arléon. Tous droits réservés.

---

**Contact** : brice.zemtsop@inria.fr | [LinkedIn](https://linkedin.com/in/arleonzemtsop) | [GitHub](https://github.com/arleonzemtsop)
