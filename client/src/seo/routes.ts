/**
 * Routen, die zur Build-Zeit als eigene HTML-Datei prerendert werden.
 *
 * Quelle der Wahrheit fuer das Prerender-Skript (script/prerender.mjs) und
 * spaeter fuer die Sitemap-Generierung. Reihenfolge entspricht sitemap.xml:
 * erst die DE-Routen, dann die EN-Entsprechungen.
 *
 * Nicht enthalten und damit bewusst nur ueber den SPA-Fallback erreichbar:
 * /case-report, /en/case-report und /mockup. Diese Pfade tragen einen
 * X-Robots-Tag: noindex aus der .htaccess.
 */

/** Die 24 verbindlichen Routen aus sitemap.xml. */
export const SITEMAP_ROUTES = [
  "/",
  "/leistungen",
  "/leistungen/medizinisches-cannabis",
  "/leistungen/medizintechnik",
  "/leistungen/medizinalhandel",
  "/leistungen/ki-sales-bd",
  "/ueber-uns",
  "/projekte",
  "/insights",
  "/kontakt",
  "/impressum",
  "/datenschutz",
  "/en",
  "/en/services",
  "/en/services/medical-cannabis",
  "/en/services/medical-technology",
  "/en/services/medical-trade",
  "/en/services/ai-sales-bd",
  "/en/about",
  "/en/projects",
  "/en/insights",
  "/en/contact",
  "/en/legal-notice",
  "/en/privacy-policy",
] as const;

/** AGB-Routen: prerendert, aber nicht in der Sitemap gefuehrt. */
export const TERMS_ROUTES = ["/agb", "/en/terms"] as const;

/**
 * Slugs der Insight-Beitraege, aus client/src/content/posts.ts bzw. posts.en.ts.
 *
 * Achtung: DE und EN sind KEINE Uebersetzungspaare, sondern inhaltlich
 * eigenstaendige Beitraege mit eigenen Slugs. Fuer Insight-Detailseiten
 * existiert daher kein hreflang-Paar.
 */
export const INSIGHT_SLUGS_DE = [
  "medizinisches-cannabis-deutschland-ueberblick",
  "eu-gdp-stolpersteine-supply-chain",
  "medizintechnik-prozessanalyse-ergebnis",
  "ki-aussendienst-use-cases",
  "copilot-vs-chatgpt-sales",
  "prompt-playbooks-konsistenz",
] as const;

export const INSIGHT_SLUGS_EN = [
  "ki-vertrieb-medizintechnik-einstieg",
  "prompt-engineering-sales-teams",
  "copilot-vs-chatgpt-vertrieb",
  "cannabis-markt-deutschland-2025",
  "medizintechnik-ambulantes-operieren",
  "sales-enablement-medizintechnik",
] as const;

export const INSIGHT_ROUTES = [
  ...INSIGHT_SLUGS_DE.map((slug) => `/insights/${slug}`),
  ...INSIGHT_SLUGS_EN.map((slug) => `/en/insights/${slug}`),
];

/** Alle zu prerendernden Routen. */
export const PRERENDER_ROUTES: string[] = [
  ...SITEMAP_ROUTES,
  ...TERMS_ROUTES,
  ...INSIGHT_ROUTES,
];
