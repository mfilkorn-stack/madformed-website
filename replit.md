# MadforMed GmbH - Firmenwebsite

## Übersicht

Professionelle, SEO-optimierte Website für MadforMed GmbH - eine Beratungsgesellschaft für medizinisches Cannabis, Medizintechnik und KI-Enablement für Vertriebsteams.

## Technologie-Stack

- **Frontend**: React mit TypeScript, Vite
- **Backend**: Express.js (Node.js)
- **Styling**: Tailwind CSS mit benutzerdefinierten Markenfarben
- **Routing**: Wouter
- **Formulare**: React Hook Form + Zod Validierung
- **State Management**: TanStack Query

## Branding

- **Primary Green**: #5FB94E (lebhaftes Grün - Cannabis/Pharma)
- **Brand Cyan**: #1E9BD9 (Cyan/Blau - Medizintechnik, Medizinalhandel)
- **Dark**: #4A5A4A (Logo-Grau)
- **Medical Grey**: #7A8A7A (Logo-Grau)
- **Light BG**: #F8FAF8
- **Font**: Inter (Google Fonts)
- **Logo**: Vier Säulen - Cannabis-Blatt (grün), KI-Kopf mit Schaltkreisen (gradient), Medizin-Monitor (cyan), Handel/Distribution (cyan)
- **Tagline**: Medical Resulting

### Farbschema nach Bereich
- **Medizinisches Cannabis / Pharma**: Grün (#5FB94E)
- **Medizintechnik**: Cyan (#1E9BD9)
- **Medizinalhandel**: Cyan (#1E9BD9)
- **KI für Sales & BD**: Gradient (Grün → Cyan)

## Design-Elemente (Februar 2026)

- **LogoHero**: Großes Logo zentriert mit Wellendesign-Hintergrund
- **WaveDivider**: SVG-Wellenlinien als Sektions-Trenner (grün-cyan Gradient)
- **Service-Karten**: 3 Säulen mit farbcodierten Akzenten (Cannabis=grün, KI=cyan, Medtech=cyan-grün)

## Seitenstruktur (Bilingual DE/EN)

### German (Default)
- `/` - Startseite (mit 4 Service-Kacheln)
- `/leistungen` - Leistungsübersicht
- `/leistungen/medizinisches-cannabis` - Cannabis-Beratung
- `/leistungen/medizintechnik` - Medizintechnik-Beratung
- `/leistungen/medizinalhandel` - Medizinalhandel-Beratung
- `/leistungen/ki-sales-bd` - KI für Sales & Business Development
- `/ueber-uns` - Über uns
- `/projekte` - Referenzprojekte
- `/insights` - Blog/Insights (Kategorien: cannabis, medtech, ki, allgemein)
- `/insights/:slug` - Blog-Artikel Detail
- `/kontakt` - Kontaktformular (mit KI-Workshop Option)
- `/impressum` - Impressum
- `/datenschutz` - Datenschutzerklärung

### English
- `/en` - Homepage
- `/en/services` - Services Overview
- `/en/services/medical-cannabis` - Cannabis Consulting
- `/en/services/medical-technology` - Medical Technology Consulting
- `/en/services/medical-trade` - Medical Trade Consulting
- `/en/services/ai-sales-bd` - AI for Sales & Business Development
- `/en/about` - About Us
- `/en/projects` - Reference Projects
- `/en/insights` - Blog/Insights
- `/en/insights/:slug` - Blog Article Detail
- `/en/contact` - Contact Form
- `/en/legal-notice` - Legal Notice (Impressum)
- `/en/privacy-policy` - Privacy Policy

## i18n (Internationalization)

The website supports German (default) and English languages.

### Architecture
- **LanguageProvider**: React context in `client/src/lib/i18n.tsx`
- **Language detection**: From URL path (`/en/*` = English, else German)
- **Language toggle**: DE/EN switch in header via `LanguageSwitcher` component
- **Preference storage**: localStorage for returning visitors

### Content Files
- German: `client/src/content/*.ts`
- English: `client/src/content/*.en.ts`

### Content Hooks (`client/src/hooks/useContent.ts`)
- `useServicesContent()` - Services, target groups, case studies
- `useFaqsContent()` - FAQs per service area
- `useKiContent()` - AI workshops content
- `useBlogContent()` - Blog posts
- `usePageContent()` - Page metadata and common labels

### URL Mapping (Path Equivalents)
| German | English |
|--------|---------|
| `/` | `/en` |
| `/leistungen` | `/en/services` |
| `/leistungen/medizinisches-cannabis` | `/en/services/medical-cannabis` |
| `/leistungen/medizintechnik` | `/en/services/medical-technology` |
| `/leistungen/medizinalhandel` | `/en/services/medical-trade` |
| `/leistungen/ki-sales-bd` | `/en/services/ai-sales-bd` |
| `/ueber-uns` | `/en/about` |
| `/projekte` | `/en/projects` |
| `/insights` | `/en/insights` |
| `/kontakt` | `/en/contact` |
| `/impressum` | `/en/legal-notice` |
| `/datenschutz` | `/en/privacy-policy` |

### SEO for Bilingual
- hreflang tags on all pages (de, en, x-default)
- Separate sitemap entries with hreflang annotations
- Canonical URLs per language
- llms.txt and llms-en.txt for AI crawlers

## Wichtige Dateien

### Content (editierbar)
- `client/src/content/services.ts` - Leistungsbeschreibungen (Cannabis, Medtech)
- `client/src/content/ki-services.ts` - KI-Workshops Inhalte (Workshop-Formate, Use Cases, Tool-Vergleich, FAQs)
- `client/src/content/faqs.ts` - FAQ-Inhalte
- `client/src/content/posts.ts` - Blog-Artikel (Kategorien: cannabis, medtech, ki, allgemein)
- `client/src/content/company.ts` - Firmendaten (Adresse, Kontakt, etc.)
- `client/src/content/references.ts` - Projektreferenzen, Firmenlogos, Erfahrungskennzahlen

### Komponenten
- `client/src/components/layout/` - Header, Footer, Layout
- `client/src/components/ContactBlock.tsx` - Kontakt-Infoblock
- `client/src/components/FAQAccordion.tsx` - FAQ-Komponente
- `client/src/components/ServiceCard.tsx` - Service-Karten
- `client/src/components/CTABand.tsx` - Call-to-Action Banner

### API
- `POST /api/contact` - Kontaktformular-Einreichung
  - Validiert mit Zod
  - Honeypot-Schutz gegen Spam
  - Rate Limiting (1 Anfrage pro Minute pro IP)
  - Speichert Leads in `/data/leads.json`

## Starten

```bash
npm run dev
```

## Build für Produktion

```bash
npm run build
```

## Wo Inhalte gepflegt werden

1. **Firmendaten**: `client/src/content/company.ts`
2. **Leistungen Cannabis/Medtech**: `client/src/content/services.ts`
3. **Leistungen KI-Workshops**: `client/src/content/ki-services.ts`
4. **FAQs**: `client/src/content/faqs.ts`
5. **Blog-Artikel**: `client/src/content/posts.ts`
6. **Rechtliche Seiten**: `client/src/pages/Impressum.tsx` und `client/src/pages/Datenschutz.tsx`

## KI-Service Feature (Januar 2025)

- Neue Landingpage `/leistungen/ki-sales-bd` für KI-Workshops
- 3 Workshop-Formate: Kickstart (2h), Team-Workshop (½ Tag), Enablement-Programm (4 Wochen)
- Tool-Vergleich: Copilot vs. ChatGPT
- Liefergegenstand: Prompt-Playbook mit 20+ Vorlagen
- Cross-Links von Cannabis- und Medtech-Seiten
- Kontaktformular mit "KI Workshop" Option
- 3 Blog-Artikel zum Thema KI im Vertrieb

## E-Mail-Versand ergänzen

Um E-Mail-Benachrichtigungen für neue Kontaktanfragen zu aktivieren:

1. Installieren Sie einen E-Mail-Provider (z.B. Resend, Nodemailer)
2. Fügen Sie die E-Mail-Logik in `server/routes.ts` nach erfolgreicher Speicherung hinzu
3. Konfigurieren Sie SMTP-Credentials als Umgebungsvariablen

## SEO & LLM-Optimierung (Februar 2026)

### Technische Analyse

| Element | Status | Details |
|---------|--------|---------|
| Tech-Stack | React + Vite | CSR mit serverseitigen Fallbacks |
| Routing | Wouter | Pfad-basiert, kein Hash-Routing |
| Meta-Tags | ✓ | Client-side + HTML-Fallbacks |
| Canonical | ✓ | Dynamisch gesetzt |
| robots.txt | ✓ | Dynamisch generiert |
| sitemap.xml | ✓ | Dynamisch generiert |
| llms.txt | ✓ | Für KI-Systeme |
| JSON-LD | ✓ | Organization, WebSite, Service, FAQ, Breadcrumb |
| OG-Tags | ✓ | Vollständig implementiert |
| Twitter Cards | ✓ | summary_large_image |
| H1-Struktur | ✓ | Genau 1 H1 pro Seite |
| Interne Links | ✓ | Hub/Spoke-Struktur |

### Implementierte Features

1. **robots.txt** - `/robots.txt`
   - Erlaubt alle Crawler
   - Verweist auf Sitemap
   - Enthält Crawl-delay für höfliches Crawling
   - Domain automatisch via `SITE_URL` (production/development)

2. **sitemap.xml** - `/sitemap.xml`
   - Dynamisch generiert mit allen Seiten
   - Enthält lastmod, changefreq, priority
   - Blog-Artikel automatisch inkludiert
   - Domain automatisch via `SITE_URL`

3. **llms.txt** - `/llms.txt`
   - Spezielles Format für KI-Systeme
   - Unternehmensprofil, Kernkompetenzen, wichtige URLs
   - Kontaktinformationen

4. **Strukturierte Daten (JSON-LD)**
   - `OrganizationData`: Globale Unternehmensdaten
   - `WebSiteData`: Website-Metadaten
   - `ServiceData`: Pro Leistungsseite
   - `FAQData`: FAQPage Schema für alle FAQs
   - `BreadcrumbData`: Navigationspfade

5. **Interne Verlinkung (Hub/Spoke-Struktur)**
   - Leistungen-Seite als Hub zu allen Service-Seiten
   - Service-Seiten verlinken zu verwandten Services und passenden Blog-Artikeln
   - Blog-Artikel verlinken zu passenden Service-Seiten basierend auf Kategorie
   - Komponenten: `RelatedArticles`, `RelatedServices`

6. **index.html SEO-Optimierungen**
   - Vollständige Primary Meta Tags
   - Open Graph Tags (og:title, og:description, og:url, og:type, og:site_name, og:locale)
   - Twitter Cards (summary_large_image)
   - Canonical URL
   - Keywords, Author, Language, Geo-Tags
   - Theme-Color für Mobile
   - Font-Preconnect für Performance

7. **SSR-lite Meta-Tag Injection** (server/static.ts)
   - `PAGE_META`: Meta-Daten Map für alle statischen Seiten
   - `BLOG_POST_META`: Meta-Daten Map für alle Blog-Artikel
   - In Produktion: HTML wird mit korrekten Meta-Tags pro Route ausgeliefert
   - `injectMetaTags()`: Ersetzt Title, Description, OG-Tags, Canonical pro Request

### Komponenten

- `client/src/components/StructuredData.tsx` - Alle Schema.org Komponenten
- `client/src/components/SEO.tsx` - Meta-Tags (title, description, OG, Twitter, Canonical)
- `client/src/components/RelatedContent.tsx` - Interne Verlinkung

### SEO-Checkliste

#### Pre-Launch
- [ ] Domain in `server/routes.ts` SITE_URL anpassen (https://madformed.de)
- [ ] `NODE_ENV=production` beim Deployment setzen
- [ ] robots.txt auf Production-Domain testen
- [ ] sitemap.xml in Google Search Console einreichen
- [ ] Strukturierte Daten mit Google Rich Results Test validieren
- [ ] OG-Tags mit Facebook Sharing Debugger testen
- [ ] Impressum und Datenschutz rechtlich prüfen lassen

#### Post-Launch
- [ ] Google Search Console einrichten
- [ ] Bing Webmaster Tools einrichten
- [ ] Core Web Vitals mit PageSpeed Insights prüfen
- [ ] Mobile-Friendliness testen
- [ ] Indexierung überwachen (site:madformed.de)

### Testen

```bash
# robots.txt prüfen
curl http://localhost:5000/robots.txt

# sitemap.xml prüfen
curl http://localhost:5000/sitemap.xml

# llms.txt prüfen
curl http://localhost:5000/llms.txt

# Meta-Tags prüfen
curl -s http://localhost:5000/ | grep -E "(og:|twitter:|canonical|description)"

# Strukturierte Daten im Browser prüfen
# 1. Seite öffnen
# 2. View Source (Strg+U)
# 3. Nach "application/ld+json" suchen
```

### Performance-Optimierungen

- **Font-Loading**: `display=swap` + Preconnect zu Google Fonts
- **Lazy Loading**: Bilder mit nativer lazy-loading
- **Theme-Color**: Definiert für Mobile-Browser

### Prerendering (optional für SSG)

Für statisches HTML bei Build-Zeit (empfohlen für maximale SEO):

```json
"reactSnap": {
  "source": "dist/public",
  "destination": "dist/public",
  "include": ["/", "/leistungen", "/leistungen/medizinisches-cannabis", ...],
  "puppeteerArgs": ["--no-sandbox", "--disable-setuid-sandbox"]
}
```

### Typische SPA/PWA SEO-Fehler (vermieden)

1. ✓ Hash-Routing → Pfad-basiertes Routing verwendet
2. ✓ Fehlende Meta-Tags → Fallbacks in index.html
3. ✓ Duplicate Title → Eindeutige Titles pro Seite
4. ✓ Fehlende Canonicals → Dynamisch gesetzt
5. ✓ Keine strukturierten Daten → JSON-LD implementiert
6. ✓ Keine Sitemap → Dynamisch generiert
7. ✓ Keine internen Links → Hub/Spoke-Struktur

## Hinweise

- **Impressum/Datenschutz**: Diese Seiten enthalten Platzhalter und müssen vor der Veröffentlichung rechtlich geprüft werden
- **Logo**: Kann unter `/public/madformed-logo.png` hinzugefügt werden
- **Kontaktdaten**: In `client/src/content/company.ts` aktualisieren
