import { useEffect } from "react";

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
    
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:type", ogType, true);
    setMeta("og:site_name", "MadforMed GmbH", true);
    
    if (canonical) {
      setMeta("og:url", canonical, true);
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }
    
    if (ogImage) {
      setMeta("og:image", ogImage, true);
    }
    
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    
    return () => {};
  }, [title, description, canonical, ogType, ogImage]);
  
  return null;
}
