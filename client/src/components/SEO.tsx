import { useEffect } from "react";
import { useLocation } from "wouter";

const SITE_URL = import.meta.env.MODE === 'production' 
  ? "https://madformed.de" 
  : "http://localhost:5000";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  lang?: "de" | "en";
}

const pathMappings: Record<string, string> = {
  "/": "/en",
  "/leistungen": "/en/services",
  "/leistungen/medizinisches-cannabis": "/en/services/medical-cannabis",
  "/leistungen/medizintechnik": "/en/services/medical-technology",
  "/leistungen/medizinalhandel": "/en/services/medical-trade",
  "/leistungen/ki-sales-bd": "/en/services/ai-sales-bd",
  "/ueber-uns": "/en/about",
  "/projekte": "/en/projects",
  "/insights": "/en/insights",
  "/kontakt": "/en/contact",
  "/impressum": "/en/legal-notice",
  "/datenschutz": "/en/privacy-policy",
  "/en": "/",
  "/en/services": "/leistungen",
  "/en/services/medical-cannabis": "/leistungen/medizinisches-cannabis",
  "/en/services/medical-technology": "/leistungen/medizintechnik",
  "/en/services/medical-trade": "/leistungen/medizinalhandel",
  "/en/services/ai-sales-bd": "/leistungen/ki-sales-bd",
  "/en/about": "/ueber-uns",
  "/en/projects": "/projekte",
  "/en/insights": "/insights",
  "/en/contact": "/kontakt",
  "/en/legal-notice": "/impressum",
  "/en/privacy-policy": "/datenschutz",
};

export function SEO({ 
  title, 
  description, 
  canonical,
  ogType = "website",
  ogImage,
  lang
}: SEOProps) {
  const [location] = useLocation();
  
  const currentLang = lang || (location.startsWith("/en") ? "en" : "de");
  
  useEffect(() => {
    const fullTitle = title.includes("MadforMed") 
      ? title 
      : `${title} | MadforMed GmbH`;
    
    document.title = fullTitle;
    
    document.documentElement.lang = currentLang;
    
    const setMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };
    
    setMeta("description", description);
    
    const pageUrl = canonical || `${SITE_URL}${location}`;
    
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:type", ogType, true);
    setMeta("og:site_name", "MadforMed GmbH", true);
    setMeta("og:url", pageUrl, true);
    setMeta("og:locale", currentLang === "de" ? "de_DE" : "en_US", true);
    
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = pageUrl;
    
    const removeOldHreflang = () => {
      const oldLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
      oldLinks.forEach(el => el.remove());
    };
    removeOldHreflang();
    
    const addHreflang = (hreflang: string, href: string) => {
      const hreflangLink = document.createElement("link");
      hreflangLink.rel = "alternate";
      hreflangLink.hreflang = hreflang;
      hreflangLink.href = href;
      document.head.appendChild(hreflangLink);
    };
    
    const alternatePath = pathMappings[location];
    if (alternatePath) {
      const dePath = currentLang === "de" ? location : alternatePath;
      const enPath = currentLang === "en" ? location : alternatePath;
      
      addHreflang("de", `${SITE_URL}${dePath}`);
      addHreflang("en", `${SITE_URL}${enPath}`);
      addHreflang("x-default", `${SITE_URL}${dePath}`);
    }
    
    if (ogImage) {
      setMeta("og:image", ogImage, true);
      setMeta("twitter:image", ogImage);
    }
    
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    
    return () => {
      removeOldHreflang();
    };
  }, [title, description, canonical, ogType, ogImage, location, currentLang]);
  
  return null;
}
