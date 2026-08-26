/**
 * Build-Zeit-Prerendering.
 *
 * Ablauf:
 *   1. Client-Build (vite build)      -> dist/, inkl. index.html als Template
 *   2. SSR-Build   (vite build --ssr) -> .ssr/entry-server.js
 *   3. Pro Route renderToString und als dist/<route>/index.html schreiben
 *
 * Erzeugt statisches HTML ohne Node-Runtime auf dem Zielserver. Asset-URLs
 * stimmen zwischen beiden Builds ueberein, weil Vite Asset-Hashes aus dem
 * Dateiinhalt ableitet.
 */
import { build } from "vite";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const SSR_DIST = join(ROOT, ".ssr");
const OUTLET = "<!--ssr-outlet-->";

async function main() {
  console.log("[prerender] 1/3 client build");
  await build({ root: ROOT, logLevel: "warn" });

  console.log("[prerender] 2/3 ssr build");
  await build({
    root: ROOT,
    logLevel: "warn",
    build: {
      ssr: "src/entry-server.tsx",
      outDir: ".ssr",
      emptyOutDir: true,
      // Assets kommen aus dem Client-Build; hier nur die URLs aufloesen.
      ssrEmitAssets: false,
      copyPublicDir: false,
    },
  });

  const template = await readFile(join(DIST, "index.html"), "utf-8");
  if (!template.includes(OUTLET)) {
    throw new Error(`index.html enthaelt keinen ${OUTLET} Platzhalter`);
  }

  const { render, PRERENDER_ROUTES } = await import(
    join(SSR_DIST, "entry-server.js")
  );

  console.log(`[prerender] 3/3 rendering ${PRERENDER_ROUTES.length} routes`);
  const failures = [];

  for (const route of PRERENDER_ROUTES) {
    try {
      const appHtml = render(route);
      if (!appHtml.trim()) {
        throw new Error("leeres Render-Ergebnis");
      }
      const html = template.replace(OUTLET, appHtml);
      const outFile =
        route === "/"
          ? join(DIST, "index.html")
          : join(DIST, route, "index.html");
      await mkdir(dirname(outFile), { recursive: true });
      await writeFile(outFile, html, "utf-8");
      console.log(`  ok  ${route}`);
    } catch (err) {
      failures.push({ route, err });
      console.error(`  FAIL ${route}: ${err.message}`);
    }
  }

  await rm(SSR_DIST, { recursive: true, force: true });

  if (failures.length > 0) {
    throw new Error(`${failures.length} Route(n) konnten nicht gerendert werden`);
  }
  console.log(`[prerender] done: ${PRERENDER_ROUTES.length} HTML-Dateien`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
