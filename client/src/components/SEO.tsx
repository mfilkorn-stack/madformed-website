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
}

export function SEO({ 
  title, 
  description, 
  canonical,
  ogType = "website",
  ogImage
}: SEOProps) {
  const [location] = useLocation();
  
  useEffect(() => {
    const fullTitle = title.includes("MadforMed") 
      ? title 
      : `${title} | MadforMed GmbH`;
    
    document.title = fullTitle;
    
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
    
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = pageUrl;
    
    if (ogImage) {
      setMeta("og:image", ogImage, true);
      setMeta("twitter:image", ogImage);
    }
    
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    
    return () => {};
  }, [title, description, canonical, ogType, ogImage, location]);
  
  return null;
}
