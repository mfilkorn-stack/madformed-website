# MadforMed GmbH - Firmenwebsite

## Übersicht

Professionelle, SEO-optimierte Website für MadforMed GmbH - eine Beratungsgesellschaft für medizinisches Cannabis, Medizintechnik und KI-Enablement für Vertriebsteams.

## Technologie-Stack

- **Frontend**: React mit TypeScript, Vite
- **Backend (nur lokal/Replit)**: Express.js (Node.js) — nicht Teil des Produktions-Deployments
- **Styling**: Tailwind CSS mit benutzerdefinierten Markenfarben
- **Routing**: Wouter
- **Formulare**: React Hook Form + Zod Validierung, Versand via Formspree
- **State Management**: TanStack Query

## Architektur & Deployment

Das Repo enthält zwei getrennte npm-Packages mit je eigener `package-lock.json`:

| | Root (`package.json`) | `client/package.json` |
|---|---|---|
| Zweck | Express-Dev-Server, Replit-Umgebung | Deploy-Artefakt |
| Build | `npm run build` → `dist/index.cjs` + `dist/public` | `npm run build` → `client/dist` |
| Produktion | wird **nicht** deployt | wird deployt |

**Produktion ist eine statische Site.** `.github/workflows/madformed-website-orchestration.yaml`
ruft `madformed-website-build.yaml` auf, das ausschließlich `client/` baut
(`npm ci --prefix client`, `npm run typecheck --prefix client`, `npm run build --prefix client`)
und `client/dist` als `DEPLOYMENT_FOLDER` an IONOS Deploy Now übergibt. Ausgeliefert wird
über Apache; `client/public/.htaccess` liefert SPA-Rewrite, Security-Header und CSP.

Konsequenz: Alles in `server/` (Express-Routen, SSR-lite Meta-Injection, `/api/contact`)
läuft nur in der lokalen Dev-Umgebung, nie in Produktion. Was in Produktion wirken soll,
muss als statische Datei in `client/public/` liegen oder im Client-Bundle stecken.

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
- `/agb` - Allgemeine Geschäftsbedingungen
- `/case-report` - SEO-/KI-Sichtbarkeits-Case-Report
- `/mockup` - interne Animations-Vorschau (nicht in Navigation und Sitemap)

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
- `/en/terms` - Terms and Conditions (AGB)

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
| `/agb` | `/en/terms` |

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

### Formularversand

Das Kontaktformular (`client/src/pages/Kontakt.tsx`) postet direkt an einen
**Formspree-Endpoint** — clientseitig, ohne eigenes Backend. Validierung via Zod,
Honeypot-Feld `_gotcha` gegen Spam.

Die Express-Route `POST /api/contact` (`server/routes.ts`) mit Rate-Limiting und
Ablage in `data/leads.json` existiert weiterhin, greift aber nur im lokalen
Dev-Server — im statischen Produktions-Deploy gibt es sie nicht.

## Starten

Lokaler Dev-Server (Express + Vite-Middleware, Port 5000):

```bash
npm run dev
```

Reiner Client-Build wie in CI:

```bash
npm ci --prefix client
npm run typecheck --prefix client
npm run build --prefix client   # -> client/dist
```

## Build für Produktion

Produktionsrelevant ist ausschließlich der Client-Build:

```bash
npm run build --prefix client
```

`npm run build` im Root baut die Replit-Variante (`dist/index.cjs` + `dist/public`)
und wird vom Deployment nicht verwendet.

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
| Tech-Stack | React + Vite | CSR, statisch ausgeliefert |
| Routing | Wouter | Pfad-basiert, kein Hash-Routing |
| Meta-Tags | ✓ | Client-side + Fallbacks in `client/index.html` |
| Canonical | ✓ | Client-side gesetzt (`SEO.tsx`) |
| robots.txt | ✓ | Statisch: `client/public/robots.txt` |
| sitemap.xml | ✓ | Statisch: `client/public/sitemap.xml` (manuell pflegen) |
| llms.txt | ⚠ | Nur als Express-Route, fehlt in `client/public/` — siehe Hinweise |
| JSON-LD | ✓ | Organization, WebSite, Service, FAQ, Breadcrumb |
| OG-Tags | ✓ | Vollständig implementiert |
| Twitter Cards | ✓ | summary_large_image |
| H1-Struktur | ✓ | Genau 1 H1 pro Seite |
| Interne Links | ✓ | Hub/Spoke-Struktur |

### Implementierte Features

1. **robots.txt** — `client/public/robots.txt` (statisch, wird 1:1 nach `client/dist` kopiert)
   - Erlaubt alle Crawler, explizite Allow-Einträge für GPTBot, ClaudeBot, PerplexityBot u. a.
   - Verweist auf Sitemap, enthält Crawl-delay
   - Domain hart auf `https://madformed.de` — bei Domainwechsel hier mitziehen

2. **sitemap.xml** — `client/public/sitemap.xml` (statisch)
   - Alle DE-/EN-Seiten mit hreflang-Annotationen, changefreq, priority
   - **Manuell pflegen**: neue Seiten und Blog-Artikel hier nachtragen

3. **llms.txt / llms-en.txt**
   - Als Express-Routen in `server/routes.ts` implementiert
   - In `client/public/` nicht vorhanden → im statischen Deploy 404, obwohl
     `robots.txt` und `client/index.html` darauf verweisen

   Die Express-Varianten von robots/sitemap/llms erzeugen ihre Domain via `SITE_URL`;
   das betrifft nur den Dev-Server.

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

7. **SSR-lite Meta-Tag Injection** (`server/static.ts`) — nur Dev-Server
   - `PAGE_META` / `BLOG_POST_META`: Meta-Daten Maps für Seiten und Blog-Artikel
   - `injectMetaTags()`: ersetzt Title, Description, OG-Tags, Canonical pro Request
   - Greift im statischen IONOS-Deploy **nicht**. Crawler sehen dort die Fallbacks
     aus `client/index.html`, korrekte Per-Route-Tags setzt der Client zur Laufzeit.

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
# Dev-Server (Express-Routen)
curl http://localhost:5000/robots.txt
curl http://localhost:5000/sitemap.xml
curl http://localhost:5000/llms.txt
curl -s http://localhost:5000/ | grep -E "(og:|twitter:|canonical|description)"

# Produktion (statische Dateien) — das ist der Stand, den Crawler sehen
curl https://madformed.de/robots.txt
curl https://madformed.de/sitemap.xml
curl -s https://madformed.de/ | grep -E "(og:|twitter:|canonical|description)"

# Statischen Build lokal gegenprüfen
npm run build --prefix client && ls client/dist

# Strukturierte Daten im Browser prüfen
# 1. Seite öffnen
# 2. View Source (Strg+U)
# 3. Nach "application/ld+json" suchen
```

### Performance-Optimierungen

- **Font-Loading**: `display=swap` + Preconnect zu Google Fonts
- **Lazy Loading**: Bilder mit nativer lazy-loading
- **Theme-Color**: Definiert für Mobile-Browser

### Prerendering (nicht aktiv)

`script/prerender.ts` existiert, importiert aber `puppeteer`, das in keiner der beiden
`package.json` steht, und wird von keinem npm-Script aufgerufen. Der Prerender-Pfad ist
damit nicht lauffähig. Wer ihn reaktivieren will, muss `puppeteer` als Dev-Dependency
ergänzen, die Routenliste um EN-Seiten und `/agb` erweitern und den Schritt in
`madformed-website-build.yaml` nach dem Client-Build einhängen.

### Typische SPA/PWA SEO-Fehler (vermieden)

1. ✓ Hash-Routing → Pfad-basiertes Routing verwendet
2. ✓ Fehlende Meta-Tags → Fallbacks in index.html
3. ✓ Duplicate Title → Eindeutige Titles pro Seite
4. ✓ Fehlende Canonicals → Client-side gesetzt
5. ✓ Keine strukturierten Daten → JSON-LD implementiert
6. ✓ Keine Sitemap → statische `client/public/sitemap.xml`
7. ✓ Keine internen Links → Hub/Spoke-Struktur

## Hinweise

- **Impressum/Datenschutz/AGB**: rechtlich prüfen lassen; AGB und KI-Offenlegung sind ergänzt
- **Kontaktdaten**: In `client/src/content/company.ts` aktualisieren
- **CSP**: Neue Third-Party-Skripte (Analytics, Widgets, Fonts) müssen in die
  Content-Security-Policy in `client/public/.htaccess` eingetragen werden, sonst
  blockiert der Browser sie in Produktion stillschweigend
- **Tracking**: Google Ads/GTM-Tag `AW-17944281882` liegt in `client/index.html`
- **llms.txt**: fehlt im statischen Deploy, obwohl robots.txt und index.html darauf
  verweisen — offener Punkt, siehe `docs/DECISIONS.md`
- **Nicht referenzierter Code**: `server/github.ts`, `scripts/push-to-github.ts`,
  `scripts/upload-to-github.ts` werden von keinem Einstiegspunkt aufgerufen
  (Replit→GitHub-Bridge); `@octokit/rest` hängt allein daran
