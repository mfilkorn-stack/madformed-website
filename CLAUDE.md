# CLAUDE.md — madformed-website

Firmenwebsite der MadforMed GmbH (Beratung: medizinisches Cannabis, Medizintechnik,
Medizinalhandel, KI-Enablement für Vertrieb). Bilingual DE/EN, statisch ausgeliefert.

Ausführliche Projektdoku: `replit.md` (Branding, Seitenstruktur, i18n, SEO-Details).

## Stack

React 18 + TypeScript, Vite 7, Tailwind 3, Wouter (Routing), TanStack Query,
React Hook Form + Zod, framer-motion, shadcn/ui auf Radix (`client/src/components/ui/`).
Node 22 (`.nvmrc`).

## Architektur — zwei Packages, ein Deploy

| | Root `package.json` | `client/package.json` |
|---|---|---|
| Zweck | Express-Dev-Server, Replit | **Deploy-Artefakt** |
| Build | `dist/index.cjs` + `dist/public` | `client/dist` |
| Produktion | nein | ja |

Produktion ist eine **statische Apache-Site bei IONOS Deploy Now**.
`.github/workflows/madformed-website-build.yaml` baut ausschließlich `client/`
und deployt `client/dist`. Alles unter `server/` (Express-Routen, SSR-lite
Meta-Injection in `static.ts`, `POST /api/contact`) läuft nur lokal, nie live.

## Harte Regeln

1. **Produktionswirksam ist nur, was in `client/` liegt.** Änderungen an `server/`
   ändern die Live-Site nicht. Statische Artefakte gehören nach `client/public/`.
2. **DE und EN immer paarweise pflegen.** Jede Inhaltsdatei existiert als
   `x.ts` (Deutsch) und `x.en.ts` (Englisch); jede Route hat ein Gegenstück in
   `HREFLANG_PAIRS` (`server/routes.ts`) und in `client/public/sitemap.xml`.
   Eine neue Seite nur DE anzulegen bricht den Language-Switch.
3. **CSP mitziehen.** Neue Third-Party-Skripte, Fonts oder Endpoints müssen in die
   Content-Security-Policy in `client/public/.htaccess` eingetragen werden — sonst
   blockiert der Browser sie in Produktion stillschweigend, lokal aber nicht.
4. **`sitemap.xml` ist statisch und wird manuell gepflegt.** Neue Seiten und
   Blog-Artikel dort nachtragen, inkl. hreflang-Paar.
5. **Keine Secrets im Repo.** `.env` und `.env.local` bleiben ignoriert, Vorlage ist
   `.env.example`. Der Formspree-Endpoint und der Google-Ads-Tag stehen bewusst im
   Client-Code (öffentlich sichtbar).
6. **Rechtliche Seiten nicht nebenbei ändern.** Impressum, Datenschutz und AGB
   (DE + EN, `client/src/pages/`) nur auf ausdrückliche Ansage — inklusive der
   KI-Offenlegung darin.
7. **`npm audit --audit-level=high` bricht den Build.** Neue Dependencies vorher
   gegenprüfen, sonst schlägt das Deployment fehl.

## Konventionen

Funktionale Komponenten mit Hooks, benannte Exporte für Content, Default-Export
für Seiten. Kommentare auf Deutsch oder Englisch gemischt — der Datei folgen, nicht
umschreiben. Styling ausschließlich über Tailwind-Klassen; keine Template-Literals
in `className` (im Bestand aktuell null Vorkommen) — Bedingungen über `cn()` aus
`client/src/lib/utils.ts`. Pfad-Aliase: `@/` → `client/src`, `@shared` → `shared`,
`@assets` → `attached_assets`. Sprachumschaltung über `useLanguage()` /
Content-Hooks in `client/src/hooks/useContent.ts`, nie über eigene Locale-Logik.
localStorage nur für die Sprachpräferenz (`client/src/lib/i18n.tsx`).
Commits englisch, Imperativ, einzeilig; Prefixe wie `chore:` optional.

## Befehle

```bash
npm run dev                       # Express + Vite, Port 5000 (Root)
npm run check                     # tsc (Root)

npm ci --prefix client            # Deploy-Kette, exakt wie CI
npm run typecheck --prefix client
npm run build --prefix client     # -> client/dist
```

`npm run build` im Root baut die Replit-Variante und ist nicht deploy-relevant.

## Struktur

```
client/src/
  pages/         Seiten je Route, DE und EN getrennt (Datenschutz.tsx / DatenschutzEN.tsx)
  components/    eigene Komponenten; ui/ = shadcn, nicht handoptimieren
  content/       Inhalte, DE = x.ts, EN = x.en.ts
  hooks/         useContent.ts wählt sprachabhängig die Content-Quelle
  lib/i18n.tsx   LanguageProvider, Pfaderkennung, DE/EN-Routenmapping
client/public/   statisch ausgeliefert: .htaccess, robots.txt, sitemap.xml, images/
server/          Express — nur lokale Dev-Umgebung
shared/schema.ts Zod-Schemas (Kontaktformular), von Client und Server genutzt
script/          build.ts (Replit-Build), prerender.ts (inaktiv, kein puppeteer)
```

## Offene Punkte

Siehe `docs/DECISIONS.md` — u. a. fehlende `llms.txt` im statischen Deploy,
nicht referenzierte GitHub-Bridge-Skripte, getracktes `data/leads.json`.
