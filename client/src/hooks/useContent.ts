import { useLanguage } from "@/lib/i18n";

import { cannabisServices, cannabisTargetGroups, medtechServices, medtechTargetGroups, medizinalhandelServices, medizinalhandelTargetGroups, caseStudies } from "@/content/services";
import { cannabisServicesEN, cannabisTargetGroupsEN, medtechServicesEN, medtechTargetGroupsEN, medizinalhandelServicesEN, medizinalhandelTargetGroupsEN, caseStudiesEN } from "@/content/services.en";

import { cannabisFaqs, medtechFaqs, medizinalhandelFaqs } from "@/content/faqs";
import { cannabisFaqsEN, medtechFaqsEN, medizinalhandelFaqsEN } from "@/content/faqs.en";

import { kiServiceInfo, kiTargetGroups, kiOutcomes, kiWorkshopPackages, kiUseCases, kiToolComparison, kiDeliverables, kiFaqs } from "@/content/ki-services";
import { kiServiceInfoEN, kiTargetGroupsEN, kiOutcomesEN, kiWorkshopPackagesEN, kiUseCasesEN, kiToolComparisonEN, kiDeliverablesEN, kiFaqsEN } from "@/content/ki-services.en";

import { blogPosts } from "@/content/posts";
import { blogPostsEN } from "@/content/posts.en";

export function useServicesContent() {
  const { language } = useLanguage();
  
  if (language === "en") {
    return {
      cannabisServices: cannabisServicesEN,
      cannabisTargetGroups: cannabisTargetGroupsEN,
      medtechServices: medtechServicesEN,
      medtechTargetGroups: medtechTargetGroupsEN,
      medizinalhandelServices: medizinalhandelServicesEN,
      medizinalhandelTargetGroups: medizinalhandelTargetGroupsEN,
      caseStudies: caseStudiesEN
    };
  }
  
  return {
    cannabisServices,
    cannabisTargetGroups,
    medtechServices,
    medtechTargetGroups,
    medizinalhandelServices,
    medizinalhandelTargetGroups,
    caseStudies
  };
}

export function useFaqsContent() {
  const { language } = useLanguage();
  
  if (language === "en") {
    return {
      cannabisFaqs: cannabisFaqsEN,
      medtechFaqs: medtechFaqsEN,
      medizinalhandelFaqs: medizinalhandelFaqsEN
    };
  }
  
  return {
    cannabisFaqs,
    medtechFaqs,
    medizinalhandelFaqs
  };
}

export function useKiContent() {
  const { language } = useLanguage();
  
  if (language === "en") {
    return {
      kiServiceInfo: kiServiceInfoEN,
      kiTargetGroups: kiTargetGroupsEN,
      kiOutcomes: kiOutcomesEN,
      kiWorkshopPackages: kiWorkshopPackagesEN,
      kiUseCases: kiUseCasesEN,
      kiToolComparison: kiToolComparisonEN,
      kiDeliverables: kiDeliverablesEN,
      kiFaqs: kiFaqsEN
    };
  }
  
  return {
    kiServiceInfo,
    kiTargetGroups,
    kiOutcomes,
    kiWorkshopPackages,
    kiUseCases,
    kiToolComparison,
    kiDeliverables,
    kiFaqs
  };
}

export function useBlogContent() {
  const { language } = useLanguage();
  
  if (language === "en") {
    return { blogPosts: blogPostsEN };
  }
  
  return { blogPosts };
}

export function usePageContent() {
  const { language, t } = useLanguage();
  const isEnglish = language === "en";
  
  return {
    isEnglish,
    paths: {
      services: isEnglish ? "/en/services" : "/leistungen",
      cannabis: isEnglish ? "/en/services/medical-cannabis" : "/leistungen/medizinisches-cannabis",
      medtech: isEnglish ? "/en/services/medical-technology" : "/leistungen/medizintechnik",
      medizinalhandel: isEnglish ? "/en/services/medical-trade" : "/leistungen/medizinalhandel",
      kiServices: isEnglish ? "/en/services/ai-sales-bd" : "/leistungen/ki-sales-bd",
      about: isEnglish ? "/en/about" : "/ueber-uns",
      projects: isEnglish ? "/en/projects" : "/projekte",
      insights: isEnglish ? "/en/insights" : "/insights",
      contact: isEnglish ? "/en/contact" : "/kontakt",
    },
    labels: {
      learnMore: t("common.learnMore"),
      contact: t("common.contact"),
      faq: t("common.faq"),
      back: t("common.back"),
    },
    home: {
      title: isEnglish 
        ? "Consulting for Medical Cannabis & Medical Technology | MadforMed GmbH"
        : "Beratung für medizinisches Cannabis & Medizintechnik | MadforMed GmbH",
      description: isEnglish
        ? "MadforMed accompanies companies along regulatory, operational, and commercial questions – structured, compliance-oriented, results-focused."
        : "MadforMed begleitet Unternehmen entlang regulatorischer, operativer und kommerzieller Fragestellungen – strukturiert, compliance-orientiert, ergebnisfokussiert.",
      pillarsTitle: isEnglish ? "Four Pillars for Your Success" : "Vier Säulen für Ihren Erfolg",
      pillarsSubtitle: isEnglish ? "Our consulting focus areas" : "Unsere Beratungsschwerpunkte",
      cards: {
        cannabis: {
          title: isEnglish ? "Med. Cannabis" : "Med. Cannabis",
          description: isEnglish 
            ? "Consulting for manufacturers, importers, wholesalers, and pharmacy networks."
            : "Beratung für Hersteller, Importeure, Großhändler und Apothekennetzwerke.",
        },
        ki: {
          title: isEnglish ? "AI Enablement" : "KI-Enablement",
          description: isEnglish
            ? "Copilot & ChatGPT workshops and prompt playbooks for sales teams."
            : "Copilot & ChatGPT Workshops und Prompt-Playbooks für Vertriebsteams.",
          badge: isEnglish ? "New" : "Neu",
        },
        medtech: {
          title: isEnglish ? "Medical Technology" : "Medizintechnik",
          description: isEnglish
            ? "Go-to-Market, process optimization, and sales enablement for medical technology companies."
            : "Go-to-Market, Prozessoptimierung und Sales Enablement für Medizintechnik-Unternehmen.",
        },
        medizinalhandel: {
          title: isEnglish ? "Medical Trade" : "Medizinalhandel",
          description: isEnglish
            ? "Sales consulting for medical products trade and distribution."
            : "Vertriebsberatung für Medizinprodukte-Handel und Distribution.",
        },
      },
    },
  };
}
