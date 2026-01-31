# MadforMed GmbH - Firmenwebsite

## Übersicht

Professionelle, SEO-optimierte Website für MadforMed GmbH - eine Beratungsgesellschaft für medizinisches Cannabis und Medizintechnik.

## Technologie-Stack

- **Frontend**: React mit TypeScript, Vite
- **Backend**: Express.js (Node.js)
- **Styling**: Tailwind CSS mit benutzerdefinierten Markenfarben
- **Routing**: Wouter
- **Formulare**: React Hook Form + Zod Validierung
- **State Management**: TanStack Query

## Branding

- **Primary Green**: #5FB94E (lebhaftes Grün passend zum Logo)
- **Dark**: #4A5A4A (Logo-Grau)
- **Medical Grey**: #7A8A7A (Logo-Grau)
- **Light BG**: #F8FAF8
- **Font**: Inter (Google Fonts)
- **Logo**: Cannabis-Blatt mit EKG-Linie und "MAD for MED" Schriftzug
- **Tagline**: Medical Resulting

## Seitenstruktur

- `/` - Startseite
- `/leistungen` - Leistungsübersicht
- `/leistungen/medizinisches-cannabis` - Cannabis-Beratung
- `/leistungen/medizintechnik` - Medizintechnik-Beratung
- `/ueber-uns` - Über uns
- `/projekte` - Referenzprojekte
- `/insights` - Blog/Insights
- `/insights/:slug` - Blog-Artikel Detail
- `/kontakt` - Kontaktformular
- `/impressum` - Impressum
- `/datenschutz` - Datenschutzerklärung

## Wichtige Dateien

### Content (editierbar)
- `client/src/content/services.ts` - Leistungsbeschreibungen
- `client/src/content/faqs.ts` - FAQ-Inhalte
- `client/src/content/posts.ts` - Blog-Artikel
- `client/src/content/company.ts` - Firmendaten (Adresse, Kontakt, etc.)

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
2. **Leistungen**: `client/src/content/services.ts`
3. **FAQs**: `client/src/content/faqs.ts`
4. **Blog-Artikel**: `client/src/content/posts.ts`
5. **Rechtliche Seiten**: `client/src/pages/Impressum.tsx` und `client/src/pages/Datenschutz.tsx`

## E-Mail-Versand ergänzen

Um E-Mail-Benachrichtigungen für neue Kontaktanfragen zu aktivieren:

1. Installieren Sie einen E-Mail-Provider (z.B. Resend, Nodemailer)
2. Fügen Sie die E-Mail-Logik in `server/routes.ts` nach erfolgreicher Speicherung hinzu
3. Konfigurieren Sie SMTP-Credentials als Umgebungsvariablen

## Hinweise

- **Impressum/Datenschutz**: Diese Seiten enthalten Platzhalter und müssen vor der Veröffentlichung rechtlich geprüft werden
- **Logo**: Kann unter `/public/madformed-logo.png` hinzugefügt werden
- **Kontaktdaten**: In `client/src/content/company.ts` aktualisieren
