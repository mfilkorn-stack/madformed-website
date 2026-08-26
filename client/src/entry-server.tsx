import { renderToString } from "react-dom/server";
import { Router as WouterRouter } from "wouter";
import App from "./App";

/**
 * SSG-Entry. Wird ausschliesslich zur Build-Zeit von script/prerender.mjs
 * geladen und nie an den Browser ausgeliefert.
 *
 * wouter liest den aktuellen Pfad im Server-Kontext aus `ssrPath`, statt aus
 * window.location. Der Komponentenbaum bleibt dadurch unveraendert - App
 * rendert wie im Browser, nur ohne Router-Provider aus dem DOM.
 */
export function render(url: string): string {
  return renderToString(
    <WouterRouter ssrPath={url}>
      <App />
    </WouterRouter>,
  );
}

export { PRERENDER_ROUTES } from "./seo/routes";
