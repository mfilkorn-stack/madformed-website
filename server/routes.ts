import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

const SITE_URL = process.env.SITE_URL || 'https://madformed.de';

const STATIC_PAGES_DE = [
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

const STATIC_PAGES_EN = [
  { path: '/en', priority: 1.0, changefreq: 'weekly' },
  { path: '/en/services', priority: 0.9, changefreq: 'weekly' },
  { path: '/en/services/medical-cannabis', priority: 0.8, changefreq: 'monthly' },
  { path: '/en/services/medical-technology', priority: 0.8, changefreq: 'monthly' },
  { path: '/en/services/medical-trade', priority: 0.8, changefreq: 'monthly' },
  { path: '/en/services/ai-sales-bd', priority: 0.8, changefreq: 'monthly' },
  { path: '/en/projects', priority: 0.7, changefreq: 'monthly' },
  { path: '/en/about', priority: 0.7, changefreq: 'monthly' },
  { path: '/en/insights', priority: 0.6, changefreq: 'weekly' },
  { path: '/en/contact', priority: 0.8, changefreq: 'monthly' },
  { path: '/en/legal-notice', priority: 0.3, changefreq: 'yearly' },
  { path: '/en/privacy-policy', priority: 0.3, changefreq: 'yearly' },
];

const HREFLANG_PAIRS = [
  { de: '/', en: '/en' },
  { de: '/leistungen', en: '/en/services' },
  { de: '/leistungen/medizinisches-cannabis', en: '/en/services/medical-cannabis' },
  { de: '/leistungen/medizintechnik', en: '/en/services/medical-technology' },
  { de: '/leistungen/medizinalhandel', en: '/en/services/medical-trade' },
  { de: '/leistungen/ki-sales-bd', en: '/en/services/ai-sales-bd' },
  { de: '/projekte', en: '/en/projects' },
  { de: '/ueber-uns', en: '/en/about' },
  { de: '/insights', en: '/en/insights' },
  { de: '/kontakt', en: '/en/contact' },
  { de: '/impressum', en: '/en/legal-notice' },
  { de: '/datenschutz', en: '/en/privacy-policy' },
];

const BLOG_POSTS_DE = [
  'medizinisches-cannabis-deutschland-ueberblick',
  'eu-gdp-stolpersteine-supply-chain',
  'medizintechnik-prozessanalyse-ergebnis',
  'ki-aussendienst-use-cases',
  'copilot-vs-chatgpt-sales',
  'prompt-playbooks-konsistenz'
];

const BLOG_POSTS_EN = [
  'ki-vertrieb-medizintechnik-einstieg',
  'prompt-engineering-sales-teams',
  'copilot-vs-chatgpt-vertrieb',
  'cannabis-markt-deutschland-2025',
  'medizintechnik-ambulantes-operieren',
  'sales-enablement-medizintechnik'
];

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.send(`# MadforMed GmbH - robots.txt
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl-delay (optional)
Crawl-delay: 1

# LLM resources
# German: ${SITE_URL}/llms.txt
# English: ${SITE_URL}/llms-en.txt
`);
  });

  app.get('/sitemap.xml', (req, res) => {
    const today = new Date().toISOString().split('T')[0];
    
    const generateUrlWithHreflang = (dePath: string, enPath: string, priority: number, changefreq: string) => {
      return `
  <url>
    <loc>${SITE_URL}${dePath}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="de" href="${SITE_URL}${dePath}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${enPath}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${dePath}"/>
  </url>
  <url>
    <loc>${SITE_URL}${enPath}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="de" href="${SITE_URL}${dePath}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${enPath}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${dePath}"/>
  </url>`;
    };

    const staticUrls = HREFLANG_PAIRS.map(pair => {
      const dePage = STATIC_PAGES_DE.find(p => p.path === pair.de);
      return generateUrlWithHreflang(
        pair.de, 
        pair.en, 
        dePage?.priority || 0.5, 
        dePage?.changefreq || 'monthly'
      );
    }).join('');

    const blogUrlsDE = BLOG_POSTS_DE.map(slug => `
  <url>
    <loc>${SITE_URL}/insights/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`).join('');

    const blogUrlsEN = BLOG_POSTS_EN.map(slug => `
  <url>
    <loc>${SITE_URL}/en/insights/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`).join('');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${staticUrls}
${blogUrlsDE}
${blogUrlsEN}
</urlset>`;

    res.type('application/xml');
    res.send(sitemap);
  });

  app.get('/llms.txt', (req, res) => {
    res.type('text/plain');
    res.send(`# MadforMed GmbH - LLM Context File (German)
# Last update: ${new Date().toISOString().split('T')[0]}

## Company Profile
MadforMed GmbH is a specialized B2B consulting company based in Leverkusen, Germany. We advise companies in the areas of medical cannabis, medical technology, medical trade, and AI enablement for sales teams.

## Core Competencies
- Medical Cannabis: EU-GMP/GDP consulting, import, wholesale, pharmacy networks
- Medical Technology: Go-to-Market, process optimization, sales enablement (focus: outpatient surgery)
- Medical Trade: Sales strategy, key account management, supplier management
- AI for Sales & BD: Copilot/ChatGPT workshops, prompt playbooks, enablement programs

## Target Groups
- Pharma and cannabis companies (manufacturers, importers, wholesalers)
- Medical technology manufacturers and OEMs
- Medical trade companies and distributors
- Sales teams in the healthcare industry

## Important URLs (German)
- Homepage: ${SITE_URL}/
- Services: ${SITE_URL}/leistungen
- Medical Cannabis: ${SITE_URL}/leistungen/medizinisches-cannabis
- Medical Technology: ${SITE_URL}/leistungen/medizintechnik
- Medical Trade: ${SITE_URL}/leistungen/medizinalhandel
- AI Workshops: ${SITE_URL}/leistungen/ki-sales-bd
- Projects: ${SITE_URL}/projekte
- About Us: ${SITE_URL}/ueber-uns
- Contact: ${SITE_URL}/kontakt

## Important URLs (English)
- Homepage: ${SITE_URL}/en
- Services: ${SITE_URL}/en/services
- Medical Cannabis: ${SITE_URL}/en/services/medical-cannabis
- Medical Technology: ${SITE_URL}/en/services/medical-technology
- Medical Trade: ${SITE_URL}/en/services/medical-trade
- AI Workshops: ${SITE_URL}/en/services/ai-sales-bd
- Projects: ${SITE_URL}/en/projects
- About Us: ${SITE_URL}/en/about
- Contact: ${SITE_URL}/en/contact

## Contact
Email: matthias@madformed.de
Phone: +49 176 22765249
Address: Bonnerstraße 12, 51371 Leverkusen, Germany

## Languages
This website is available in German (primary) and English, targeting the DACH market and international clients.
`);
  });

  app.get('/llms-en.txt', (req, res) => {
    res.type('text/plain');
    res.send(`# MadforMed GmbH - LLM Context File (English)
# Last update: ${new Date().toISOString().split('T')[0]}

## Company Profile
MadforMed GmbH is a specialized B2B consulting company based in Leverkusen, Germany. We advise companies in the areas of medical cannabis, medical technology, medical trade, and AI enablement for sales teams.

## Core Competencies
- Medical Cannabis: EU-GMP/GDP consulting, import, wholesale, pharmacy networks
- Medical Technology: Go-to-Market, process optimization, sales enablement (focus: outpatient surgery)
- Medical Trade: Sales strategy, key account management, supplier management
- AI for Sales & BD: Copilot/ChatGPT workshops, prompt playbooks, enablement programs

## Target Groups
- Pharma and cannabis companies (manufacturers, importers, wholesalers)
- Medical technology manufacturers and OEMs
- Medical trade companies and distributors
- Sales teams in the healthcare industry

## Important URLs (English)
- Homepage: ${SITE_URL}/en
- Services: ${SITE_URL}/en/services
- Medical Cannabis: ${SITE_URL}/en/services/medical-cannabis
- Medical Technology: ${SITE_URL}/en/services/medical-technology
- Medical Trade: ${SITE_URL}/en/services/medical-trade
- AI Workshops: ${SITE_URL}/en/services/ai-sales-bd
- Projects: ${SITE_URL}/en/projects
- About Us: ${SITE_URL}/en/about
- Contact: ${SITE_URL}/en/contact

## Important URLs (German)
- Homepage: ${SITE_URL}/
- Services: ${SITE_URL}/leistungen
- Medical Cannabis: ${SITE_URL}/leistungen/medizinisches-cannabis
- Medical Technology: ${SITE_URL}/leistungen/medizintechnik
- Medical Trade: ${SITE_URL}/leistungen/medizinalhandel
- AI Workshops: ${SITE_URL}/leistungen/ki-sales-bd
- Projects: ${SITE_URL}/projekte
- About Us: ${SITE_URL}/ueber-uns
- Contact: ${SITE_URL}/kontakt

## Contact
Email: matthias@madformed.de
Phone: +49 176 22765249
Address: Bonnerstraße 12, 51371 Leverkusen, Germany

## Languages
This website is available in German and English (this version), targeting the DACH market and international clients.
`);
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const ip = req.ip || req.socket.remoteAddress || "unknown";
      
      if (!storage.checkRateLimit(ip)) {
        return res.status(429).json({ 
          error: "Too many requests. Please try again later." 
        });
      }
      
      const validationResult = contactFormSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          error: "Invalid input",
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
        message: "Your message has been sent successfully." 
      });
      
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ 
        error: "An error occurred. Please try again later." 
      });
    }
  });

  return httpServer;
}
