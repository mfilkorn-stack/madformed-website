import express, { type Express, Request, Response } from "express";
import fs from "fs";
import path from "path";

const SITE_URL = process.env.SITE_URL || "https://madformed.de";

// SEO Meta-Daten für alle Seiten
const PAGE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Beratung für medizinisches Cannabis & Medizintechnik | MadforMed GmbH',
    description: 'MadforMed begleitet Unternehmen entlang regulatorischer, operativer und kommerzieller Fragestellungen – strukturiert, compliance-orientiert, ergebnisfokussiert.'
  },
  '/leistungen': {
    title: 'Unsere Leistungen | MadforMed GmbH',
    description: 'Strukturierte Beratung für medizinisches Cannabis und Medizintechnik – maßgeschneidert für Ihre Herausforderungen in regulierten Wachstumsmärkten.'
  },
  '/leistungen/medizinisches-cannabis': {
    title: 'Medizinisches Cannabis Beratung | MadforMed GmbH',
    description: 'Beratung für medizinisches Cannabis: Markteintritt, EU-GMP/GDP, Supply Chain, QM-Konzeption. Für Hersteller, Importeure, Großhändler und Apotheken.'
  },
  '/leistungen/medizintechnik': {
    title: 'Medizintechnik Beratung | MadforMed GmbH',
    description: 'Praxisorientierte Beratung für Medizintechnik: Go-to-Market, Prozessoptimierung, Sales Enablement, Projektmanagement. Für Hersteller und Vertriebsteams.'
  },
  '/leistungen/medizinalhandel': {
    title: 'Medizinalhandel Beratung | MadforMed GmbH',
    description: 'Beratung für den Medizinalhandel: Vertriebsstrategie, Lieferantenmanagement, Logistik, Key Account Management. Für Händler und Distributoren.'
  },
  '/leistungen/ki-sales-bd': {
    title: 'KI für Sales & Business Development | MadforMed GmbH',
    description: 'KI-Workshops für Vertriebsteams: Copilot, ChatGPT, Prompt-Engineering. Enablement-Programme und maßgeschneiderte Prompt-Playbooks.'
  },
  '/ueber-uns': {
    title: 'Über uns | MadforMed GmbH',
    description: 'Lernen Sie MadforMed kennen – Ihr Partner für strukturierte Beratung in medizinischem Cannabis, Medizintechnik und KI-Enablement im DACH-Raum.'
  },
  '/projekte': {
    title: 'Referenzprojekte | MadforMed GmbH',
    description: 'Erfolgreiche Projekte in medizinischem Cannabis, Medizintechnik und KI-Enablement. Erfahren Sie mehr über unsere Referenzen und Expertise.'
  },
  '/insights': {
    title: 'Insights & Blog | MadforMed GmbH',
    description: 'Aktuelle Einblicke, Fachartikel und Trends zu medizinischem Cannabis, Medizintechnik und KI im Vertrieb.'
  },
  '/kontakt': {
    title: 'Kontakt | MadforMed GmbH',
    description: 'Kontaktieren Sie MadforMed für ein unverbindliches Beratungsgespräch zu medizinischem Cannabis oder Medizintechnik. Rückmeldung innerhalb von 48h.'
  },
  '/impressum': {
    title: 'Impressum | MadforMed GmbH',
    description: 'Impressum der MadforMed GmbH - Angaben gemäß § 5 TMG, Kontaktdaten und rechtliche Hinweise.'
  },
  '/datenschutz': {
    title: 'Datenschutzerklärung | MadforMed GmbH',
    description: 'Datenschutzerklärung der MadforMed GmbH - Informationen zur Datenverarbeitung, Ihren Rechten und unseren Datenschutzpraktiken.'
  }
};

// Blog-Post Meta-Daten
const BLOG_POST_META: Record<string, { title: string; description: string }> = {
  'medizinisches-cannabis-deutschland-ueberblick': {
    title: 'Medizinisches Cannabis in Deutschland: Marktüberblick 2025 | MadforMed',
    description: 'Aktueller Überblick über den deutschen Markt für medizinisches Cannabis: Regulierung, Akteure, Trends und Prognosen.'
  },
  'eu-gdp-stolpersteine-supply-chain': {
    title: 'EU-GDP Stolpersteine in der Cannabis Supply Chain | MadforMed',
    description: 'Die häufigsten Compliance-Fehler bei EU-GDP in der Cannabis-Lieferkette und wie Sie diese vermeiden.'
  },
  'medizintechnik-prozessanalyse-ergebnis': {
    title: 'Prozessanalyse in der Medizintechnik | MadforMed',
    description: 'Wie systematische Prozessanalyse in der Medizintechnik zu messbaren Ergebnissen führt.'
  },
  'ki-aussendienst-use-cases': {
    title: 'KI im Außendienst: Praktische Use Cases | MadforMed',
    description: 'Konkrete Anwendungsfälle für KI-Tools wie Copilot und ChatGPT im pharmazeutischen Außendienst.'
  },
  'copilot-vs-chatgpt-sales': {
    title: 'Copilot vs. ChatGPT für Sales Teams | MadforMed',
    description: 'Vergleich von Microsoft Copilot und ChatGPT für den Einsatz in Vertriebsteams: Stärken, Schwächen, Empfehlungen.'
  },
  'prompt-playbooks-konsistenz': {
    title: 'Prompt-Playbooks für konsistente KI-Nutzung | MadforMed',
    description: 'Wie Prompt-Playbooks die konsistente und effektive Nutzung von KI-Tools im Vertrieb sicherstellen.'
  }
};

function getMetaForPath(urlPath: string): { title: string; description: string; canonical: string } {
  const cleanPath = urlPath.split('?')[0].replace(/\/$/, '') || '/';
  
  // Check static pages
  if (PAGE_META[cleanPath]) {
    return {
      ...PAGE_META[cleanPath],
      canonical: `${SITE_URL}${cleanPath === '/' ? '' : cleanPath}`
    };
  }
  
  // Check blog posts
  const blogMatch = cleanPath.match(/^\/insights\/(.+)$/);
  if (blogMatch && BLOG_POST_META[blogMatch[1]]) {
    return {
      ...BLOG_POST_META[blogMatch[1]],
      canonical: `${SITE_URL}${cleanPath}`
    };
  }
  
  // Default fallback
  return {
    title: 'MadforMed GmbH - Beratung für medizinisches Cannabis & Medizintechnik',
    description: 'MadforMed begleitet Unternehmen entlang regulatorischer, operativer und kommerzieller Fragestellungen – strukturiert, compliance-orientiert, ergebnisfokussiert.',
    canonical: `${SITE_URL}${cleanPath === '/' ? '' : cleanPath}`
  };
}

function injectMetaTags(html: string, meta: { title: string; description: string; canonical: string }): string {
  // Replace title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${meta.title}</title>`
  );
  
  // Replace meta title
  html = html.replace(
    /<meta name="title" content="[^"]*"/,
    `<meta name="title" content="${meta.title}"`
  );
  
  // Replace description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${meta.description}"`
  );
  
  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${meta.title}"`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${meta.description}"`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${meta.canonical}"`
  );
  
  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${meta.title}"`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${meta.description}"`
  );
  html = html.replace(
    /<meta name="twitter:url" content="[^"]*"/,
    `<meta name="twitter:url" content="${meta.canonical}"`
  );
  
  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${meta.canonical}"`
  );
  
  return html;
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // SSR-lite: Inject correct meta tags based on route
  app.use("/{*path}", (req: Request, res: Response) => {
    const indexPath = path.resolve(distPath, "index.html");
    
    fs.readFile(indexPath, 'utf8', (err, html) => {
      if (err) {
        console.error('Error reading index.html:', err);
        return res.status(500).send('Internal Server Error');
      }
      
      const meta = getMetaForPath(req.path);
      const modifiedHtml = injectMetaTags(html, meta);
      
      res.set('Content-Type', 'text/html');
      res.send(modifiedHtml);
    });
  });
}
