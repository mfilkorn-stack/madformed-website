# Entscheidungen & offene Punkte

Chronologisches Protokoll. Neueste Einträge oben.

## 2026-09-10 · sync

Erster `/project-sync`-Lauf. Bis dahin gab es keine `CLAUDE.md` und kein `.claude/`;
`replit.md` war die faktische Projektdoku und an zentralen Stellen veraltet.

Gepatcht:

- `CLAUDE.md` neu angelegt — Zwei-Package-Architektur, statischer IONOS-Deploy,
  harte Regeln (Client-Only-Wirksamkeit, DE/EN-Paarpflege, CSP, manuelle Sitemap,
  Secrets, rechtliche Seiten, npm-audit-Gate), Konventionen, Befehle, Struktur.
- `replit.md` abschnittsweise korrigiert: neuer Abschnitt „Architektur & Deployment";
  `/api/contact` durch die tatsächliche Formspree-Anbindung ersetzt; robots.txt,
  sitemap.xml und llms.txt von „dynamisch generiert" auf statisch bzw. fehlend
  richtiggestellt; SSR-lite Meta-Injection als Dev-only markiert; Start-/Build-Befehle
  um die CI-Kette (`--prefix client`) ergänzt; `/agb`, `/en/terms`, `/case-report`
  und `/mockup` in Seitenstruktur und URL-Mapping nachgetragen; toten
  `reactSnap`-Prerendering-Block durch den realen Zustand von `script/prerender.ts`
  ersetzt; Hinweise um CSP, Tracking-Tag und nicht referenzierten Code erweitert.
  Branding, Design-Elemente und i18n-Abschnitt unverändert.
- `.claude/settings.json` neu — Permissions auf die real existierenden npm-Scripts
  beider Packages; Deny auf `.env*` und `data/leads.json`.

Bewusst nicht geändert: Anwendungscode, Inhalte, `data/`, Workflows.

### Offene Punkte (Entscheidung ausstehend)

1. **Express-Server: behalten oder abräumen?**
   `server/`, `shared/`, Drizzle und `POST /api/contact` laufen nur lokal. Solange
   der Dev-Server genutzt wird, ist das sinnvoll; wird er nicht mehr genutzt,
   entfielen `server/`, `drizzle.config.ts`, `script/build.ts`, das Root-`package.json`
   könnte auf ein reines Tooling-Manifest schrumpfen. Bis zur Entscheidung bleibt
   alles bestehen und ist als Dev-only dokumentiert.

2. **`llms.txt` und `llms-en.txt` fehlen im statischen Deploy.**
   `client/public/robots.txt` und `client/index.html` verweisen darauf, die Dateien
   existieren aber nur als Express-Routen (`server/routes.ts`) — live also 404.
   Fix wäre, den Inhalt beider Routen als statische Dateien nach `client/public/`
   zu schreiben. Nicht ausgeführt, da Inhaltsentscheidung.

3. **`data/leads.json` ist getrackt, obwohl `.gitignore` `data/` listet.**
   Aktuell nur Testdaten. Die Datei ist die Ablage der Dev-Kontaktroute; solange sie
   im Index steht, greift der Ignore nicht und echte Einsendungen könnten
   versehentlich committet werden. Vorschlag: `git rm --cached data/leads.json`.
   Nicht ausgeführt, da Daten- und Historieneingriff.

4. **Nicht referenzierter Code.** `server/github.ts`, `scripts/push-to-github.ts` und
   `scripts/upload-to-github.ts` werden von keinem Einstiegspunkt aufgerufen
   (Replit→GitHub-Bridge, überholt seit direkter Git-Arbeit). `@octokit/rest` hängt
   allein daran. `script/prerender.ts` importiert `puppeteer`, das in keiner
   `package.json` steht — nicht lauffähig.
