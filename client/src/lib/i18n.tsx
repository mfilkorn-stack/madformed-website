import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useLocation } from "wouter";

export type Language = "de" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getLocalizedPath: (path: string) => string;
  switchLanguagePath: (targetLang: Language) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const STORAGE_KEY = "madformed_language";

const PATH_MAPPINGS: Record<string, string> = {
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
  "/": "/en",
};

const REVERSE_PATH_MAPPINGS: Record<string, string> = Object.entries(PATH_MAPPINGS).reduce(
  (acc, [de, en]) => ({ ...acc, [en]: de }),
  {}
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useLocation();
  
  const getLanguageFromPath = (): Language => {
    if (location.startsWith("/en")) return "en";
    return "de";
  };

  const [language, setLanguageState] = useState<Language>(getLanguageFromPath);

  useEffect(() => {
    const pathLang = getLanguageFromPath();
    if (pathLang !== language) {
      setLanguageState(pathLang);
    }
    localStorage.setItem(STORAGE_KEY, pathLang);
  }, [location]);

  useEffect(() => {
    const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (savedLang && (savedLang === "de" || savedLang === "en")) {
      const pathLang = getLanguageFromPath();
      if (location === "/" && savedLang !== "de") {
        setLocation(`/${savedLang}`);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    const newPath = switchLanguagePath(lang);
    setLocation(newPath);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const getLocalizedPath = (path: string): string => {
    if (path.startsWith("/en") || path.startsWith("/de")) {
      return path;
    }
    if (language === "en") {
      return `/en${path === "/" ? "" : path}`;
    }
    return path;
  };

  const switchLanguagePath = (targetLang: Language): string => {
    let cleanPath = location;
    
    if (targetLang === "en") {
      if (cleanPath.startsWith("/en")) {
        return cleanPath;
      }
      
      for (const dePath of Object.keys(PATH_MAPPINGS).sort((a, b) => b.length - a.length)) {
        if (cleanPath === dePath) {
          return PATH_MAPPINGS[dePath];
        }
        if (cleanPath.startsWith(dePath + "/")) {
          const remainder = cleanPath.slice(dePath.length);
          return PATH_MAPPINGS[dePath] + remainder;
        }
      }
      
      return `/en${cleanPath === "/" ? "" : cleanPath}`;
    } else {
      if (!cleanPath.startsWith("/en")) {
        return cleanPath;
      }
      
      for (const enPath of Object.keys(REVERSE_PATH_MAPPINGS).sort((a, b) => b.length - a.length)) {
        if (cleanPath === enPath) {
          return REVERSE_PATH_MAPPINGS[enPath];
        }
        if (cleanPath.startsWith(enPath + "/")) {
          const remainder = cleanPath.slice(enPath.length);
          return REVERSE_PATH_MAPPINGS[enPath] + remainder;
        }
      }
      
      return cleanPath.slice(3) || "/";
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getLocalizedPath, switchLanguagePath }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export const translations: Record<Language, Record<string, any>> = {
  de: {
    nav: {
      services: "Leistungen",
      servicesOverview: "Übersicht",
      cannabis: "Medizinisches Cannabis",
      medtech: "Medizintechnik",
      medizinalhandel: "Medizinalhandel",
      kiSales: "KI für Sales & BD",
      about: "Über uns",
      projects: "Referenzen & Projekte",
      insights: "Insights",
      contact: "Kontakt aufnehmen",
      legalNotice: "Impressum",
      privacy: "Datenschutz"
    },
    hero: {
      cannabis: {
        title: "Medizinisches Cannabis",
        subtitle: "Beratung für Markteintritt, Compliance und Wachstum in der Cannabis-Pharma-Branche.",
        tagline: "Strategie & Compliance"
      },
      ki: {
        title: "KI-Enablement für den Vertrieb",
        subtitle: "Copilot & ChatGPT praxisnah einführen: Workshops, Prompt-Playbooks und Enablement-Programme für Sales-Teams.",
        tagline: "Workshops & Training"
      },
      medtech: {
        title: "Medizintechnik",
        subtitle: "Medizintechnik mit Schwerpunkt auf das ambulante Operieren: Go-to-Market, Prozessoptimierung und Sales Enablement.",
        tagline: "Strategie & Umsetzung"
      },
      medizinalhandel: {
        title: "Medizinalhandel",
        subtitle: "Vertriebsberatung für den Medizinprodukte-Handel: Strategie, Herstellermanagement und Kundenbeziehungen.",
        tagline: "Handel & Vertrieb"
      }
    },
    home: {
      servicesTitle: "Unsere Leistungsbereiche",
      servicesSubtitle: "Spezialisierte Beratung an der Schnittstelle von Healthcare und Business",
      learnMore: "Mehr erfahren",
      ctaTitle: "Bereit für den nächsten Schritt?",
      ctaSubtitle: "Vereinbaren Sie ein unverbindliches Erstgespräch.",
      ctaButton: "Jetzt Kontakt aufnehmen"
    },
    services: {
      title: "Unsere Leistungen",
      subtitle: "Spezialisierte Beratung für Ihren Erfolg",
      cannabis: {
        title: "Medizinisches Cannabis",
        description: "Strategische Beratung für Unternehmen im Cannabis-Pharma-Bereich",
        tagGroups: "Zielgruppen"
      },
      medtech: {
        title: "Medizintechnik",
        description: "Go-to-Market und Sales Enablement für Medizintechnik-Unternehmen",
        tagGroups: "Zielgruppen"
      },
      medizinalhandel: {
        title: "Medizinalhandel",
        description: "Vertriebsberatung für den Medizinprodukte-Handel",
        tagGroups: "Zielgruppen"
      },
      ki: {
        title: "KI für Sales & Business Development",
        description: "Workshops und Enablement für den Einsatz von KI im Vertrieb",
        tagGroups: "Zielgruppen"
      }
    },
    about: {
      title: "Über uns",
      subtitle: "Erfahrung, die zählt"
    },
    projects: {
      title: "Referenzen & Projekte",
      subtitle: "Einblicke in unsere Arbeit"
    },
    insights: {
      title: "Insights",
      subtitle: "Aktuelle Artikel und Analysen",
      readMore: "Weiterlesen",
      allCategories: "Alle",
      categories: {
        cannabis: "Cannabis",
        medtech: "Medizintechnik",
        ki: "KI",
        allgemein: "Allgemein"
      }
    },
    contact: {
      title: "Kontakt",
      subtitle: "Sprechen Sie mit uns",
      form: {
        name: "Ihr Name",
        email: "E-Mail-Adresse",
        phone: "Telefon (optional)",
        company: "Unternehmen (optional)",
        subject: "Betreff",
        subjectPlaceholder: "Wählen Sie einen Betreff",
        subjectOptions: {
          general: "Allgemeine Anfrage",
          cannabis: "Medizinisches Cannabis",
          medtech: "Medizintechnik",
          medizinalhandel: "Medizinalhandel",
          kiWorkshop: "KI Workshop",
          other: "Sonstiges"
        },
        message: "Ihre Nachricht",
        submit: "Nachricht senden",
        sending: "Wird gesendet...",
        success: "Vielen Dank! Wir melden uns in Kürze.",
        error: "Fehler beim Senden. Bitte versuchen Sie es erneut."
      }
    },
    legal: {
      impressum: "Impressum",
      privacy: "Datenschutzerklärung"
    },
    footer: {
      tagline: "Medical Resulting",
      services: "Leistungen",
      company: "Unternehmen",
      legal: "Rechtliches",
      copyright: "Alle Rechte vorbehalten."
    },
    common: {
      learnMore: "Mehr erfahren",
      contact: "Kontakt",
      back: "Zurück",
      faq: "Häufige Fragen"
    }
  },
  en: {
    nav: {
      services: "Services",
      servicesOverview: "Overview",
      cannabis: "Medical Cannabis",
      medtech: "Medical Technology",
      medizinalhandel: "Medical Trade",
      kiSales: "AI for Sales & BD",
      about: "About Us",
      projects: "References & Projects",
      insights: "Insights",
      contact: "Get in Touch",
      legalNotice: "Legal Notice",
      privacy: "Privacy Policy"
    },
    hero: {
      cannabis: {
        title: "Medical Cannabis",
        subtitle: "Consulting for market entry, compliance, and growth in the cannabis pharma industry.",
        tagline: "Strategy & Compliance"
      },
      ki: {
        title: "AI Enablement for Sales",
        subtitle: "Practical implementation of Copilot & ChatGPT: Workshops, prompt playbooks, and enablement programs for sales teams.",
        tagline: "Workshops & Training"
      },
      medtech: {
        title: "Medical Technology",
        subtitle: "Medical technology with a focus on outpatient surgery: Go-to-Market, process optimization, and sales enablement.",
        tagline: "Strategy & Implementation"
      },
      medizinalhandel: {
        title: "Medical Trade",
        subtitle: "Sales consulting for medical products trade: Strategy, manufacturer management, and customer relationships.",
        tagline: "Trade & Sales"
      }
    },
    home: {
      servicesTitle: "Our Service Areas",
      servicesSubtitle: "Specialized consulting at the intersection of healthcare and business",
      learnMore: "Learn more",
      ctaTitle: "Ready for the Next Step?",
      ctaSubtitle: "Schedule a non-binding initial consultation.",
      ctaButton: "Contact Us Now"
    },
    services: {
      title: "Our Services",
      subtitle: "Specialized consulting for your success",
      cannabis: {
        title: "Medical Cannabis",
        description: "Strategic consulting for companies in the cannabis pharma sector",
        tagGroups: "Target Groups"
      },
      medtech: {
        title: "Medical Technology",
        description: "Go-to-Market and sales enablement for medical technology companies",
        tagGroups: "Target Groups"
      },
      medizinalhandel: {
        title: "Medical Trade",
        description: "Sales consulting for medical products trade",
        tagGroups: "Target Groups"
      },
      ki: {
        title: "AI for Sales & Business Development",
        description: "Workshops and enablement for the use of AI in sales",
        tagGroups: "Target Groups"
      }
    },
    about: {
      title: "About Us",
      subtitle: "Experience that matters"
    },
    projects: {
      title: "References & Projects",
      subtitle: "Insights into our work"
    },
    insights: {
      title: "Insights",
      subtitle: "Current articles and analyses",
      readMore: "Read more",
      allCategories: "All",
      categories: {
        cannabis: "Cannabis",
        medtech: "Medical Technology",
        ki: "AI",
        allgemein: "General"
      }
    },
    contact: {
      title: "Contact",
      subtitle: "Talk to us",
      form: {
        name: "Your Name",
        email: "Email Address",
        phone: "Phone (optional)",
        company: "Company (optional)",
        subject: "Subject",
        subjectPlaceholder: "Select a subject",
        subjectOptions: {
          general: "General Inquiry",
          cannabis: "Medical Cannabis",
          medtech: "Medical Technology",
          medizinalhandel: "Medical Trade",
          kiWorkshop: "AI Workshop",
          other: "Other"
        },
        message: "Your Message",
        submit: "Send Message",
        sending: "Sending...",
        success: "Thank you! We will get back to you shortly.",
        error: "Error sending message. Please try again."
      }
    },
    legal: {
      impressum: "Legal Notice",
      privacy: "Privacy Policy"
    },
    footer: {
      tagline: "Medical Resulting",
      services: "Services",
      company: "Company",
      legal: "Legal",
      copyright: "All rights reserved."
    },
    common: {
      learnMore: "Learn more",
      contact: "Contact",
      back: "Back",
      faq: "FAQ"
    }
  }
};
