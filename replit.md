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

## Seitenstruktur

- `/` - Startseite (mit 3 Service-Kacheln)
- `/leistungen` - Leistungsübersicht
- `/leistungen/medizinisches-cannabis` - Cannabis-Beratung
- `/leistungen/medizintechnik` - Medizintechnik-Beratung
- `/leistungen/ki-sales-bd` - KI für Sales & Business Development (Querschnittsleistung)
- `/ueber-uns` - Über uns
- `/projekte` - Referenzprojekte
- `/insights` - Blog/Insights (Kategorien: cannabis, medtech, ki, allgemein)
- `/insights/:slug` - Blog-Artikel Detail
- `/kontakt` - Kontaktformular (mit KI-Workshop Option)
- `/impressum` - Impressum
- `/datenschutz` - Datenschutzerklärung

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

### Implementierte Features

1. **robots.txt** - `/robots.txt`
   - Erlaubt alle Crawler
   - Verweist auf Sitemap
   - Enthält Crawl-delay für höfliches Crawling

2. **sitemap.xml** - `/sitemap.xml`
   - Dynamisch generiert mit allen Seiten
   - Enthält lastmod, changefreq, priority
   - Automatische Aktualisierung bei Deployment

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

### Komponenten

- `client/src/components/StructuredData.tsx` - Alle Schema.org Komponenten
- `client/src/components/SEO.tsx` - Meta-Tags (title, description, OG, Twitter)

### Testen

```bash
# robots.txt prüfen
curl http://localhost:5000/robots.txt

# sitemap.xml prüfen
curl http://localhost:5000/sitemap.xml

# llms.txt prüfen
curl http://localhost:5000/llms.txt

# Strukturierte Daten im Browser prüfen
# 1. Seite öffnen
# 2. View Source (Strg+U)
# 3. Nach "application/ld+json" suchen
```

### Noch ausstehend (P1/P2)

- **SSR/Prerendering**: Für echte Crawler-Lesbarkeit empfohlen (react-snap oder SSG-Migration)
- **Canonical URLs**: Bei Produktion Domain ersetzen (SITE_URL in server/routes.ts)

## Hinweise

- **Impressum/Datenschutz**: Diese Seiten enthalten Platzhalter und müssen vor der Veröffentlichung rechtlich geprüft werden
- **Logo**: Kann unter `/public/madformed-logo.png` hinzugefügt werden
- **Kontaktdaten**: In `client/src/content/company.ts` aktualisieren
