import puppeteer from 'puppeteer';
import { writeFile, mkdir, readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist', 'public');

const ROUTES = [
  '/',
  '/leistungen',
  '/leistungen/medizinisches-cannabis',
  '/leistungen/medizintechnik',
  '/leistungen/medizinalhandel',
  '/leistungen/ki-sales-bd',
  '/projekte',
  '/ueber-uns',
  '/insights',
  '/kontakt',
  '/impressum',
  '/datenschutz',
  '/insights/medizinisches-cannabis-deutschland-ueberblick',
  '/insights/eu-gdp-stolpersteine-supply-chain',
  '/insights/medizintechnik-prozessanalyse-ergebnis',
  '/insights/ki-aussendienst-use-cases',
  '/insights/copilot-vs-chatgpt-sales',
  '/insights/prompt-playbooks-konsistenz'
];

async function prerender() {
  console.log('Starting prerender...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  for (const route of ROUTES) {
    try {
      const url = `http://localhost:5000${route}`;
      console.log(`Prerendering: ${route}`);
      
      await page.goto(url, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });
      
      await page.waitForSelector('[data-testid]', { timeout: 10000 }).catch(() => {});
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const html = await page.content();
      
      const outputPath = route === '/' 
        ? join(DIST_DIR, 'index.html')
        : join(DIST_DIR, route, 'index.html');
      
      await mkdir(dirname(outputPath), { recursive: true });
      await writeFile(outputPath, html, 'utf-8');
      
      console.log(`  ✓ Saved: ${outputPath}`);
    } catch (error) {
      console.error(`  ✗ Failed to prerender ${route}:`, error);
    }
  }

  await browser.close();
  console.log('Prerender complete!');
}

prerender().catch(console.error);
