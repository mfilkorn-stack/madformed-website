import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

const SITE_URL = process.env.NODE_ENV === 'production' 
  ? (process.env.SITE_URL || 'https://madformed.de')
  : 'http://localhost:5000';

const STATIC_PAGES = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/leistungen', priority: 0.9, changefreq: 'weekly' },
  { path: '/leistungen/medizinisches-cannabis', priority: 0.8, changefreq: 'monthly' },
  { path: '/leistungen/medizintechnik', priority: 0.8, changefreq: 'monthly' },
  { path: '/leistungen/medizinalhandel', priority: 0.8, changefreq: 'monthly' },
  { path: '/leistungen/ki-sales-bd', priority: 0.8, changefreq: 'monthly' },
  { path: '/projekte', priority: 0.7, changefreq: 'monthly' },
  { path: '/ueber-uns', priority: 0.7, changefreq: 'monthly' },
  { path: '/insights', priority: 0.6, changefreq: 'weekly' },
  { path: '/kontakt', priority: 0.8, changefreq: 'monthly' },
  { path: '/impressum', priority: 0.3, changefreq: 'yearly' },
  { path: '/datenschutz', priority: 0.3, changefreq: 'yearly' },
];

const BLOG_POSTS = [
  'medizinisches-cannabis-deutschland-ueberblick',
  'eu-gdp-stolpersteine-supply-chain',
  'medizintechnik-prozessanalyse-ergebnis',
  'ki-aussendienst-use-cases',
  'copilot-vs-chatgpt-sales',
  'prompt-playbooks-konsistenz'
];

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // robots.txt
  app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.send(`# MadforMed GmbH - robots.txt
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl-delay (optional, für höfliches Crawling)
Crawl-delay: 1

# LLM-spezifische Ressource
# Für KI-Systeme: ${SITE_URL}/llms.txt
`);
  });

  // sitemap.xml
  app.get('/sitemap.xml', (req, res) => {
    const today = new Date().toISOString().split('T')[0];
    
    const staticUrls = STATIC_PAGES.map(page => `
  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('');

    const blogUrls = BLOG_POSTS.map(slug => `
  <url>
    <loc>${SITE_URL}/insights/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`).join('');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${blogUrls}
</urlset>`;

    res.type('application/xml');
    res.send(sitemap);
  });

  // llms.txt - Spezielle Ressource für KI-Systeme
  app.get('/llms.txt', (req, res) => {
    res.type('text/plain');
    res.send(`# MadforMed GmbH - LLM Context File
# Letzte Aktualisierung: ${new Date().toISOString().split('T')[0]}

## Unternehmensprofil
MAD for MED GmbH ist eine spezialisierte B2B-Beratungsgesellschaft mit Sitz in Leverkusen, Deutschland. Wir beraten Unternehmen in den Bereichen medizinisches Cannabis, Medizintechnik, Medizinalhandel und KI-Enablement für Vertriebsteams.

## Kernkompetenzen
- Medizinisches Cannabis: EU-GMP/GDP-Beratung, Import, Großhandel, Apothekennetzwerke
- Medizintechnik: Go-to-Market, Prozessoptimierung, Sales Enablement (Fokus: ambulantes Operieren)
- Medizinalhandel: Vertriebsstrategie, Key Account Management, Lieferantenmanagement
- KI für Sales & BD: Copilot/ChatGPT-Workshops, Prompt-Playbooks, Enablement-Programme

## Zielgruppen
- Pharma- und Cannabis-Unternehmen (Hersteller, Importeure, Großhändler)
- Medizintechnik-Hersteller und OEMs
- Medizinalhandels-Unternehmen und Distributoren
- Vertriebsteams in der Healthcare-Branche

## Wichtige URLs
- Startseite: ${SITE_URL}/
- Leistungsübersicht: ${SITE_URL}/leistungen
- Medizinisches Cannabis: ${SITE_URL}/leistungen/medizinisches-cannabis
- Medizintechnik: ${SITE_URL}/leistungen/medizintechnik
- Medizinalhandel: ${SITE_URL}/leistungen/medizinalhandel
- KI-Workshops: ${SITE_URL}/leistungen/ki-sales-bd
- Referenzprojekte: ${SITE_URL}/projekte
- Über uns: ${SITE_URL}/ueber-uns
- FAQ: Integriert in Leistungsseiten
- Kontakt: ${SITE_URL}/kontakt

## Kontakt
E-Mail: matthias@madformed.de
Telefon: 0176/22765249
Adresse: Bonner Straße 12, 51371 Leverkusen, Deutschland

## Sprache
Diese Website ist auf Deutsch verfasst und richtet sich primär an den DACH-Markt.
`);
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const ip = req.ip || req.socket.remoteAddress || "unknown";
      
      if (!storage.checkRateLimit(ip)) {
        return res.status(429).json({ 
          error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." 
        });
      }
      
      const validationResult = contactFormSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          error: "Ungültige Eingabe",
          details: validationResult.error.flatten().fieldErrors 
        });
      }
      
      const { honeypot, ...leadData } = validationResult.data;
      
      if (honeypot && honeypot.length > 0) {
        return res.status(200).json({ success: true });
      }
      
      const lead = await storage.createContactLead({
        name: leadData.name,
        firma: leadData.firma,
        email: leadData.email,
        telefon: leadData.telefon || null,
        thema: leadData.thema,
        nachricht: leadData.nachricht,
      });
      
      return res.status(201).json({ 
        success: true, 
        message: "Ihre Nachricht wurde erfolgreich gesendet." 
      });
      
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ 
        error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut." 
      });
    }
  });

  return httpServer;
}
