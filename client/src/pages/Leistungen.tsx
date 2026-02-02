import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/lib/i18n";
import { ArrowRight, Leaf, Stethoscope, ShoppingCart, Bot } from "lucide-react";

export default function Leistungen() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const labels = {
    title: isEnglish ? "Our Services" : "Unsere Leistungen",
    subtitle: isEnglish 
      ? "Structured consulting for two regulated growth markets – tailored to your challenges."
      : "Strukturierte Beratung für zwei regulierte Wachstumsmärkte – maßgeschneidert für Ihre Herausforderungen.",
    seoDescription: isEnglish
      ? "Structured consulting for medical cannabis and medical technology – tailored to your challenges in regulated growth markets."
      : "Strukturierte Beratung für medizinisches Cannabis und Medizintechnik – maßgeschneidert für Ihre Herausforderungen in regulierten Wachstumsmärkten.",
    cannabis: {
      title: isEnglish ? "Medical Cannabis" : "Medizinisches Cannabis",
      description: isEnglish 
        ? "Navigation through regulatory requirements and development of sustainable business models in the growing cannabis market."
        : "Navigation durch regulatorische Anforderungen und Entwicklung tragfähiger Geschäftsmodelle im wachsenden Cannabis-Markt.",
      features: isEnglish 
        ? ["Market Entry & Strategy", "EU-GMP / EU-GDP Consulting", "Supply Chain & Logistics"]
        : ["Markteintritt & Strategie", "EU-GMP / EU-GDP Beratung", "Supply Chain & Logistik"],
    },
    medtech: {
      title: isEnglish ? "Medical Technology" : "Medizintechnik",
      description: isEnglish 
        ? "Practice-oriented consulting for medical technology manufacturers from market launch to sales training."
        : "Praxisorientierte Beratung für produzierende Medizintechnik-Unternehmen von Markteinführung bis Vertriebsschulung.",
      features: isEnglish 
        ? ["Go-to-Market & BD", "Process Optimization", "Sales Enablement"]
        : ["Go-to-Market & BD", "Prozessoptimierung", "Sales Enablement"],
    },
    handel: {
      title: isEnglish ? "Medical Trade" : "Medizinalhandel",
      description: isEnglish 
        ? "Specialized consulting for traders and distributors of medical products – from sales to customer care."
        : "Spezialisierte Beratung für Händler und Distributoren von Medizinprodukten – vom Vertrieb bis zur Kundenbetreuung.",
      features: isEnglish 
        ? ["Sales Strategy", "Supplier Management", "Key Account Management"]
        : ["Vertriebsstrategie", "Lieferantenmanagement", "Key Account Management"],
    },
    ki: {
      badge: isEnglish ? "Cross-Service" : "Querschnittsleistung",
      title: isEnglish ? "AI for Sales & Business Development" : "KI für Sales & Business Development",
      description: isEnglish 
        ? "Practical introduction to Copilot & ChatGPT for sales teams. Workshops, use cases, and enablement – practical, measurable, compliance-conscious."
        : "Praktische Einführung in Copilot & ChatGPT für Vertriebsteams. Workshops, Use-Cases und Enablement – praxisnah, messbar, compliance-bewusst.",
      note: isEnglish 
        ? "This service can be booked independently of the specialist area and combined with our cannabis, medical technology, and trade consulting."
        : "Diese Leistung ist unabhängig vom Fachbereich buchbar und kombinierbar mit unseren Cannabis-, Medizintechnik- und Handels-Beratungen.",
      cta: isEnglish ? "View all details" : "Alle Details ansehen",
      stats: [
        { value: "2h", label: isEnglish ? "Kickstart Workshop" : "Kickstart Workshop" },
        { value: "½ " + (isEnglish ? "Day" : "Tag"), label: isEnglish ? "Team Workshop" : "Team-Workshop" },
        { value: isEnglish ? "4 Wks" : "4 Wo.", label: "Enablement" },
        { value: "20+", label: isEnglish ? "Prompt Templates" : "Prompt-Vorlagen" },
      ],
    },
    moreInfo: {
      title: isEnglish ? "Further Information" : "Weiterführende Informationen",
      subtitle: isEnglish 
        ? "Learn more about our projects and current topics"
        : "Erfahren Sie mehr über unsere Projekte und aktuelle Themen",
      projects: {
        title: isEnglish ? "Reference Projects" : "Referenzprojekte",
        description: isEnglish 
          ? "Anonymized examples from our consulting practice"
          : "Anonymisierte Beispiele aus unserer Beratungspraxis",
        cta: isEnglish ? "View Projects" : "Zu den Projekten",
      },
      contact: {
        title: isEnglish ? "Consultation" : "Beratungsgespräch",
        description: isEnglish 
          ? "Schedule a non-binding initial consultation"
          : "Vereinbaren Sie ein unverbindliches Erstgespräch",
        cta: isEnglish ? "Get in Touch" : "Kontakt aufnehmen",
      },
    },
  };

  const paths = {
    cannabis: isEnglish ? "/en/services/medical-cannabis" : "/leistungen/medizinisches-cannabis",
    medtech: isEnglish ? "/en/services/medical-technology" : "/leistungen/medizintechnik",
    handel: isEnglish ? "/en/services/medical-trade" : "/leistungen/medizinalhandel",
    ki: isEnglish ? "/en/services/ai-sales-bd" : "/leistungen/ki-sales-bd",
    projects: isEnglish ? "/en/projects" : "/projekte",
    contact: isEnglish ? "/en/contact" : "/kontakt",
  };

  return (
    <div className="bg-brand-light">
      <SEO
        title={labels.title}
        description={labels.seoDescription}
      />
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
              {labels.title}
            </h1>
            <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
              {labels.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card
              className="p-6 lg:p-8 bg-white border-brand-grey/20 hover:border-brand-green transition-colors"
              data-testid="card-cannabis-overview"
            >
              <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-5">
                <Leaf className="w-7 h-7 text-brand-green" />
              </div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">
                {labels.cannabis.title}
              </h2>
              <p className="text-brand-dark/70 mb-5 leading-relaxed text-sm">
                {labels.cannabis.description}
              </p>
              <ul className="space-y-2 mb-6 text-sm text-brand-dark/70">
                {labels.cannabis.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={paths.cannabis}>
                <Button
                  className="bg-brand-green hover:bg-brand-green/90 text-white w-full"
                  data-testid="button-cannabis-details"
                >
                  Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>

            <Card
              className="p-6 lg:p-8 bg-white border-brand-grey/20 hover:border-brand-cyan transition-colors"
              data-testid="card-medtech-overview"
            >
              <div className="w-14 h-14 bg-brand-cyan/10 rounded-xl flex items-center justify-center mb-5">
                <Stethoscope className="w-7 h-7 text-brand-cyan" />
              </div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">
                {labels.medtech.title}
              </h2>
              <p className="text-brand-dark/70 mb-5 leading-relaxed text-sm">
                {labels.medtech.description}
              </p>
              <ul className="space-y-2 mb-6 text-sm text-brand-dark/70">
                {labels.medtech.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={paths.medtech}>
                <Button
                  className="bg-brand-cyan hover:bg-brand-cyan/90 text-white w-full"
                  data-testid="button-medtech-details"
                >
                  Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>

            <Card
              className="p-6 lg:p-8 bg-white border-brand-grey/20 hover:border-brand-cyan transition-colors"
              data-testid="card-handel-overview"
            >
              <div className="w-14 h-14 bg-brand-cyan/10 rounded-xl flex items-center justify-center mb-5">
                <ShoppingCart className="w-7 h-7 text-brand-cyan" />
              </div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">
                {labels.handel.title}
              </h2>
              <p className="text-brand-dark/70 mb-5 leading-relaxed text-sm">
                {labels.handel.description}
              </p>
              <ul className="space-y-2 mb-6 text-sm text-brand-dark/70">
                {labels.handel.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={paths.handel}>
                <Button
                  className="bg-brand-cyan hover:bg-brand-cyan/90 text-white w-full"
                  data-testid="button-handel-details"
                >
                  Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>
          </div>

          <Card
            className="p-8 lg:p-10 mt-8 bg-gradient-to-r from-brand-dark to-brand-dark/95 border-transparent"
            style={{ borderImage: "linear-gradient(to right, #5FB94E, #1E9BD9) 1", borderWidth: "2px", borderStyle: "solid" }}
            data-testid="card-ki-overview"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-brand-green/20 to-brand-cyan/20 text-brand-cyan text-sm font-medium rounded-full mb-4">
                  <Bot className="w-4 h-4" />
                  {labels.ki.badge}
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {labels.ki.title}
                </h2>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {labels.ki.description}
                </p>
                <p className="text-sm text-brand-green mb-6">
                  {labels.ki.note}
                </p>
                <Link href={paths.ki}>
                  <Button
                    className="bg-brand-green hover:bg-brand-green/90 text-white"
                    data-testid="button-ki-details"
                  >
                    {labels.ki.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {labels.ki.stats.map((stat, i) => (
                  <div key={i} className="p-4 bg-white/10 rounded-lg text-center">
                    <div className="text-2xl font-bold text-brand-green mb-1">{stat.value}</div>
                    <div className="text-xs text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={labels.moreInfo.title}
            subtitle={labels.moreInfo.subtitle}
          />
          <div className="grid sm:grid-cols-2 gap-6">
            <Link href={paths.projects}>
              <Card className="p-6 bg-brand-light border-brand-grey/20 hover:border-brand-green transition-colors cursor-pointer group">
                <h3 className="font-semibold text-brand-dark mb-2">{labels.moreInfo.projects.title}</h3>
                <p className="text-sm text-brand-dark/70 mb-4">
                  {labels.moreInfo.projects.description}
                </p>
                <span className="inline-flex items-center text-brand-green text-sm font-medium">
                  {labels.moreInfo.projects.cta}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Card>
            </Link>
            <Link href={paths.contact}>
              <Card className="p-6 bg-brand-light border-brand-grey/20 hover:border-brand-green transition-colors cursor-pointer group">
                <h3 className="font-semibold text-brand-dark mb-2">{labels.moreInfo.contact.title}</h3>
                <p className="text-sm text-brand-dark/70 mb-4">
                  {labels.moreInfo.contact.description}
                </p>
                <span className="inline-flex items-center text-brand-green text-sm font-medium">
                  {labels.moreInfo.contact.cta}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
