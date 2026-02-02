import { useEffect } from "react";
import { companyInfo } from "@/content/company";

interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  description: string;
  url: string;
  logo?: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    "@type": "ContactPoint";
    telephone: string;
    email: string;
    contactType: string;
    availableLanguage: string;
  };
  sameAs?: string[];
}

interface WebSiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  inLanguage: string;
  publisher: {
    "@type": "Organization";
    name: string;
  };
}

interface ServiceSchema {
  "@context": "https://schema.org";
  "@type": "Service";
  name: string;
  description: string;
  provider: {
    "@type": "Organization";
    name: string;
  };
  areaServed: {
    "@type": "GeoCircle";
    geoMidpoint: {
      "@type": "GeoCoordinates";
      latitude: number;
      longitude: number;
    };
    geoRadius: string;
  };
  serviceType?: string;
}

interface FAQSchema {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
}

interface BreadcrumbSchema {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

const SITE_URL = import.meta.env.MODE === 'production' 
  ? "https://madformed.de" 
  : "http://localhost:5000";

export function OrganizationData() {
  const schema: OrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    description: "Spezialisierte B2B-Beratung für medizinisches Cannabis, Medizintechnik, Medizinalhandel und KI-Enablement für Vertriebsteams im DACH-Raum.",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      postalCode: companyInfo.address.zip,
      addressCountry: "DE"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyInfo.contact.phone,
      email: companyInfo.contact.email,
      contactType: "sales",
      availableLanguage: "German"
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "org-schema";
    script.text = JSON.stringify(schema);
    
    const existing = document.getElementById("org-schema");
    if (existing) existing.remove();
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("org-schema");
      if (el) el.remove();
    };
  }, []);

  return null;
}

export function WebSiteData() {
  const schema: WebSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: companyInfo.name,
    url: SITE_URL,
    description: "Beratung für medizinisches Cannabis, Medizintechnik, Medizinalhandel und KI-Enablement für Vertriebsteams.",
    inLanguage: "de-DE",
    publisher: {
      "@type": "Organization",
      name: companyInfo.name
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "website-schema";
    script.text = JSON.stringify(schema);
    
    const existing = document.getElementById("website-schema");
    if (existing) existing.remove();
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("website-schema");
      if (el) el.remove();
    };
  }, []);

  return null;
}

interface ServiceDataProps {
  name: string;
  description: string;
  serviceType?: string;
}

export function ServiceData({ name, description, serviceType }: ServiceDataProps) {
  const schema: ServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: companyInfo.name
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 51.0459,
        longitude: 7.0192
      },
      geoRadius: "500km"
    },
    ...(serviceType && { serviceType })
  };

  useEffect(() => {
    const schemaId = `service-schema-${name.replace(/\s/g, "-").toLowerCase()}`;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = schemaId;
    script.text = JSON.stringify(schema);
    
    const existing = document.getElementById(schemaId);
    if (existing) existing.remove();
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, [name, description]);

  return null;
}

interface FAQDataProps {
  items: Array<{ question: string; answer: string }>;
}

export function FAQData({ items }: FAQDataProps) {
  const schema: FAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(item => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.text = JSON.stringify(schema);
    
    const existing = document.getElementById("faq-schema");
    if (existing) existing.remove();
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("faq-schema");
      if (el) el.remove();
    };
  }, [items]);

  return null;
}

interface BreadcrumbDataProps {
  items: Array<{ name: string; url: string }>;
}

export function BreadcrumbData({ items }: BreadcrumbDataProps) {
  const schema: BreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`
    }))
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "breadcrumb-schema";
    script.text = JSON.stringify(schema);
    
    const existing = document.getElementById("breadcrumb-schema");
    if (existing) existing.remove();
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("breadcrumb-schema");
      if (el) el.remove();
    };
  }, [items]);

  return null;
}
