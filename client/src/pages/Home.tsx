import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";
import { SEO } from "@/components/SEO";
import { HeroSlider } from "@/components/HeroSlider";
import { WaveDivider } from "@/components/WaveDivider";
import { FAQAccordion } from "@/components/FAQAccordion";
import { useLanguage } from "@/lib/i18n";
import { benefits, workProcess } from "@/content/company";
import { companyLogos } from "@/content/references";
import { ArrowRight, Leaf, Monitor, Brain, AlertTriangle, Search, Lightbulb, Rocket, Shield, Zap, Target, Users, ShoppingCart } from "lucide-react";

export default function Home() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const labels = {
    seo: {
      title: isEnglish 
        ? "MadforMed – Cannabis, Medtech & AI Consulting"
        : "MadforMed – Cannabis, Medtech & KI-Beratung",
      description: isEnglish
        ? "MadforMed GmbH: Specialized B2B consulting for medical cannabis, medical technology, medical trade, and AI enablement in the DACH region. Compliance-oriented and results-focused."
        : "MadforMed GmbH: Spezialisierte B2B-Beratung für medizinisches Cannabis, Medizintechnik, Medizinalhandel und KI-Enablement im DACH-Raum. Compliance-orientiert und ergebnisfokussiert.",
    },
    intro: {
      title: isEnglish
        ? "Your Partner for Medical Markets & AI"
        : "Ihr Partner für medizinische Märkte & KI",
      text: isEnglish
        ? "MadforMed GmbH is a specialized B2B consulting firm based in Leverkusen, Germany. We support companies in the medical cannabis, medical technology, and medical trade sectors with regulatory strategy, market access, and commercial optimization. Additionally, we enable sales teams to leverage AI tools like Microsoft Copilot and ChatGPT through hands-on workshops, prompt playbooks, and enablement programs. Our consulting is structured, compliance-oriented, and focused on measurable results."
        : "MadforMed GmbH ist eine spezialisierte B2B-Beratungsgesellschaft mit Sitz in Leverkusen. Wir begleiten Unternehmen in den Bereichen medizinisches Cannabis, Medizintechnik und Medizinalhandel bei regulatorischer Strategie, Marktzugang und kommerzieller Optimierung. Darüber hinaus befähigen wir Vertriebsteams, KI-Tools wie Microsoft Copilot und ChatGPT effektiv einzusetzen – durch praxisnahe Workshops, Prompt-Playbooks und Enablement-Programme. Unsere Beratung ist strukturiert, compliance-orientiert und auf messbare Ergebnisse ausgerichtet.",
    },
    pillars: {
      title: isEnglish ? "Four Pillars for Your Success" : "Vier Säulen für Ihren Erfolg",
      subtitle: isEnglish ? "Our consulting focus areas" : "Unsere Beratungsschwerpunkte",
    },
    cards: {
      cannabis: {
        title: isEnglish ? "Medical Cannabis" : "Medizinisches Cannabis",
        description: isEnglish 
          ? "Strategic and operational consulting for manufacturers, importers, wholesalers, and pharmacy networks in the cannabis-pharma industry. We support market entry, EU-GMP/GDP compliance, and sustainable growth."
          : "Strategische und operative Beratung für Hersteller, Importeure, Großhändler und Apothekennetzwerke in der Cannabis-Pharma-Branche. Wir unterstützen beim Markteintritt, EU-GMP/GDP-Compliance und nachhaltigem Wachstum.",
      },
      ki: {
        title: isEnglish ? "AI Enablement" : "KI-Enablement",
        badge: isEnglish ? "New" : "Neu",
        description: isEnglish
          ? "Hands-on Copilot & ChatGPT workshops and prompt playbooks for sales teams. From 2-hour kickstart sessions to comprehensive 4-week enablement programs."
          : "Praxisnahe Copilot & ChatGPT Workshops und Prompt-Playbooks für Vertriebsteams. Vom 2-Stunden-Kickstart bis zum umfassenden 4-Wochen-Enablement-Programm.",
      },
      medtech: {
        title: isEnglish ? "Medical Technology" : "Medizintechnik",
        description: isEnglish
          ? "Go-to-Market strategy, process optimization, and sales enablement for medical technology companies. Specializing in orthopedics, arthroscopy, and outpatient surgery."
          : "Go-to-Market-Strategie, Prozessoptimierung und Sales Enablement für Medizintechnik-Unternehmen. Spezialisiert auf Orthopädie, Arthroskopie und ambulantes Operieren.",
      },
      handel: {
        title: isEnglish ? "Medical Trade" : "Medizinalhandel",
        description: isEnglish
          ? "Sales strategy, key account management, and manufacturer negotiations for distributors and specialist dealers of medical products."
          : "Vertriebsstrategie, Key Account Management und Herstellerverhandlungen für Distributoren und Fachhändler von Medizinprodukten.",
      },
    },
    learnMore: isEnglish ? "Learn more" : "Mehr erfahren",
    whyMadformed: {
      title: isEnglish ? "Why MadforMed" : "Warum MadforMed",
      subtitle: isEnglish ? "What sets us apart" : "Was uns auszeichnet",
    },
    process: {
      title: isEnglish ? "Our Approach" : "Unsere Arbeitsweise",
      subtitle: isEnglish 
        ? "Structured and transparent from initial analysis to implementation"
        : "Strukturiert und transparent von der ersten Analyse bis zur Umsetzung",
      step: isEnglish ? "Step" : "Schritt",
    },
    references: {
      title: isEnglish ? "Experience from Leading Companies" : "Erfahrung aus führenden Unternehmen",
      subtitle: isEnglish 
        ? "Industry expertise from renowned medical technology and pharmaceutical companies"
        : "Branchenexpertise aus namhaften Unternehmen der Medizintechnik und Pharmabranche",
    },
    faq: {
      title: isEnglish ? "Frequently Asked Questions" : "Häufig gestellte Fragen",
      subtitle: isEnglish
        ? "Answers to common questions about our consulting services"
        : "Antworten auf häufige Fragen zu unseren Beratungsleistungen",
    },
    disclaimer: {
      title: isEnglish ? "Important Notice" : "Wichtiger Hinweis",
      text: isEnglish
        ? "MadforMed does not provide legal advice, medical advice, or healing promises. For legal and medical questions, we recommend working with appropriate specialists."
        : "MadforMed bietet keine Rechtsberatung, keine medizinische Beratung und keine Heilversprechen. Für rechtliche und medizinische Fragestellungen empfehlen wir die Zusammenarbeit mit entsprechenden Fachexperten.",
    },
    entityLinks: {
      about: isEnglish ? "About us" : "Über uns",
      contact: isEnglish ? "Contact us" : "Kontakt aufnehmen",
      services: isEnglish ? "All services" : "Alle Leistungen",
    },
  };

  const homeFaqs = isEnglish ? [
    {
      question: "What industries does MadforMed specialize in?",
      answer: "MadforMed specializes in B2B consulting for medical cannabis (EU-GMP/GDP compliance, market entry), medical technology (orthopedics, arthroscopy, outpatient surgery), medical trade (distribution, key account management), and AI enablement for sales teams (Copilot & ChatGPT workshops)."
    },
    {
      question: "Where is MadforMed located and which markets do you serve?",
      answer: "MadforMed GmbH is headquartered in Leverkusen, Germany. We primarily serve the DACH region (Germany, Austria, Switzerland) and support international companies seeking access to the German and European market."
    },
    {
      question: "What does the AI Enablement consulting include?",
      answer: "Our AI Enablement service helps sales and business development teams adopt tools like Microsoft Copilot and ChatGPT. We offer 2-hour kickstart sessions, half-day team workshops, and comprehensive 4-week enablement programs including custom prompt playbooks with 20+ templates."
    },
    {
      question: "Does MadforMed provide legal or medical advice?",
      answer: "No. MadforMed provides strategic and operational consulting but does not offer legal or medical advice. For legal matters (e.g., narcotics law, pharmaceutical regulations) we recommend working with specialized law firms."
    },
    {
      question: "How can I contact MadforMed for a consultation?",
      answer: "You can reach us via our contact form, by email at matthias@madformed.de, or by phone at 0176/22765249. We typically respond within 48 hours."
    },
  ] : [
    {
      question: "Auf welche Branchen ist MadforMed spezialisiert?",
      answer: "MadforMed ist spezialisiert auf B2B-Beratung in den Bereichen medizinisches Cannabis (EU-GMP/GDP-Compliance, Markteintritt), Medizintechnik (Orthopädie, Arthroskopie, ambulantes Operieren), Medizinalhandel (Distribution, Key Account Management) und KI-Enablement für Vertriebsteams (Copilot & ChatGPT Workshops)."
    },
    {
      question: "Wo befindet sich MadforMed und welche Märkte bedienen Sie?",
      answer: "MadforMed GmbH hat ihren Sitz in Leverkusen, Deutschland. Wir bedienen primär den DACH-Raum (Deutschland, Österreich, Schweiz) und unterstützen internationale Unternehmen beim Zugang zum deutschen und europäischen Markt."
    },
    {
      question: "Was umfasst die KI-Enablement-Beratung?",
      answer: "Unser KI-Enablement unterstützt Vertriebs- und Business-Development-Teams beim Einsatz von Microsoft Copilot und ChatGPT. Wir bieten 2-Stunden-Kickstart-Sessions, halbtägige Team-Workshops und umfassende 4-Wochen-Enablement-Programme inklusive Prompt-Playbooks mit über 20 Vorlagen."
    },
    {
      question: "Bietet MadforMed Rechts- oder medizinische Beratung an?",
      answer: "Nein. MadforMed bietet strategische und operative Beratung, jedoch keine Rechts- oder medizinische Beratung. Für rechtliche Fragen (z. B. Betäubungsmittelrecht, Arzneimittelrecht) empfehlen wir die Zusammenarbeit mit spezialisierten Kanzleien."
    },
    {
      question: "Wie kann ich MadforMed für eine Beratung kontaktieren?",
      answer: "Sie erreichen uns über unser Kontaktformular, per E-Mail an matthias@madformed.de oder telefonisch unter 0176/22765249. Wir melden uns in der Regel innerhalb von 48 Stunden."
    },
  ];

  const benefitsLabels = isEnglish ? [
    { title: "Compliance-First", description: "We work according to the highest regulatory standards and ensure all processes comply with GMP/GDP requirements." },
    { title: "Result-Oriented", description: "Clear milestones, measurable results, and transparent communication throughout the entire project." },
    { title: "Industry Expertise", description: "Deep understanding of cannabis and medical technology markets from years of practical experience." },
    { title: "Network", description: "Access to relevant contacts in the industry, regulatory authorities, and specialized partners." },
  ] : benefits;

  const workProcessLabels = isEnglish ? [
    { step: 1, title: "Analysis", description: "Comprehensive assessment of your situation, challenges, and goals." },
    { step: 2, title: "Strategy", description: "Development of tailored solutions and a concrete action plan." },
    { step: 3, title: "Implementation", description: "Hands-on support in executing the strategy and achieving your goals." },
  ] : workProcess;

  const paths = {
    cannabis: isEnglish ? "/en/services/medical-cannabis" : "/leistungen/medizinisches-cannabis",
    ki: isEnglish ? "/en/services/ai-sales-bd" : "/leistungen/ki-sales-bd",
    medtech: isEnglish ? "/en/services/medical-technology" : "/leistungen/medizintechnik",
    handel: isEnglish ? "/en/services/medical-trade" : "/leistungen/medizinalhandel",
    about: isEnglish ? "/en/about" : "/ueber-uns",
    contact: isEnglish ? "/en/contact" : "/kontakt",
    services: isEnglish ? "/en/services" : "/leistungen",
  };

  return (
    <div className="bg-brand-light">
      <SEO
        title={labels.seo.title}
        description={labels.seo.description}
      />

      <HeroSlider />

      <article aria-label={isEnglish ? "Company introduction" : "Unternehmensvorstellung"}>
        <section className="py-12 md:py-16 bg-white" data-testid="intro-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
              {labels.intro.title}
            </h2>
            <p className="text-base md:text-lg text-brand-dark/70 leading-relaxed">
              {labels.intro.text}
            </p>
            <nav className="flex flex-wrap justify-center gap-4 mt-8" aria-label={isEnglish ? "Quick links" : "Schnellzugriff"}>
              <Link href={paths.services}>
                <span className="inline-flex items-center text-brand-green font-semibold hover:underline" data-testid="link-services">
                  {labels.entityLinks.services}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
              <Link href={paths.about}>
                <span className="inline-flex items-center text-brand-cyan font-semibold hover:underline" data-testid="link-about">
                  {labels.entityLinks.about}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
              <Link href={paths.contact}>
                <span className="inline-flex items-center text-brand-dark/70 font-semibold hover:underline" data-testid="link-contact">
                  {labels.entityLinks.contact}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            </nav>
          </div>
        </section>
      </article>

      <section className="py-16 md:py-24 bg-white relative" aria-labelledby="pillars-heading" data-testid="services-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={labels.pillars.title}
            subtitle={labels.pillars.subtitle}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label={isEnglish ? "Consulting services" : "Beratungsleistungen"}>
            <Link href={paths.cannabis}>
              <Card
                className="group relative p-6 bg-white border-2 border-brand-green/30 transition-all cursor-pointer h-full overflow-visible hover-elevate"
                data-testid="card-cannabis"
                role="listitem"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green to-brand-green/50" />
                <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-brand-green/20 transition-colors">
                  <Leaf className="w-7 h-7 text-brand-green" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">
                  {labels.cards.cannabis.title}
                </h3>
                <p className="text-brand-dark/70 mb-5 leading-relaxed text-sm">
                  {labels.cards.cannabis.description}
                </p>
                <span className="inline-flex items-center text-brand-green font-semibold text-sm" aria-label={`${labels.learnMore}: ${labels.cards.cannabis.title}`}>
                  {labels.learnMore}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                </span>
              </Card>
            </Link>

            <Link href={paths.ki}>
              <Card
                className="group relative p-6 bg-white border-2 border-brand-green/30 transition-all cursor-pointer h-full overflow-visible hover-elevate"
                data-testid="card-ki"
                role="listitem"
                style={{ borderImage: "linear-gradient(to right, #5FB94E, #1E9BD9) 1" }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green to-brand-cyan" />
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center px-2 py-0.5 bg-gradient-to-r from-brand-green/10 to-brand-cyan/10 text-brand-cyan text-xs font-semibold rounded-full">
                    {labels.cards.ki.badge}
                  </span>
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-brand-green/10 to-brand-cyan/10 rounded-2xl flex items-center justify-center mb-5 group-hover:from-brand-green/20 group-hover:to-brand-cyan/20 transition-colors">
                  <Brain className="w-7 h-7 text-brand-cyan" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">
                  {labels.cards.ki.title}
                </h3>
                <p className="text-brand-dark/70 mb-5 leading-relaxed text-sm">
                  {labels.cards.ki.description}
                </p>
                <span className="inline-flex items-center bg-gradient-to-r from-brand-green to-brand-cyan bg-clip-text text-transparent font-semibold text-sm" aria-label={`${labels.learnMore}: ${labels.cards.ki.title}`}>
                  {labels.learnMore}
                  <ArrowRight className="w-4 h-4 ml-2 text-brand-cyan group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                </span>
              </Card>
            </Link>

            <Link href={paths.medtech}>
              <Card
                className="group relative p-6 bg-white border-2 border-brand-cyan/30 transition-all cursor-pointer h-full overflow-visible hover-elevate"
                data-testid="card-medtech"
                role="listitem"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan to-brand-cyan/50" />
                <div className="w-14 h-14 bg-brand-cyan/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-brand-cyan/20 transition-colors">
                  <Monitor className="w-7 h-7 text-brand-cyan" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">
                  {labels.cards.medtech.title}
                </h3>
                <p className="text-brand-dark/70 mb-5 leading-relaxed text-sm">
                  {labels.cards.medtech.description}
                </p>
                <span className="inline-flex items-center text-brand-cyan font-semibold text-sm" aria-label={`${labels.learnMore}: ${labels.cards.medtech.title}`}>
                  {labels.learnMore}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                </span>
              </Card>
            </Link>

            <Link href={paths.handel}>
              <Card
                className="group relative p-6 bg-white border-2 border-brand-cyan/30 transition-all cursor-pointer h-full overflow-visible hover-elevate"
                data-testid="card-handel"
                role="listitem"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan to-brand-cyan/50" />
                <div className="w-14 h-14 bg-brand-cyan/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-brand-cyan/20 transition-colors">
                  <ShoppingCart className="w-7 h-7 text-brand-cyan" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">
                  {labels.cards.handel.title}
                </h3>
                <p className="text-brand-dark/70 mb-5 leading-relaxed text-sm">
                  {labels.cards.handel.description}
                </p>
                <span className="inline-flex items-center text-brand-cyan font-semibold text-sm" aria-label={`${labels.learnMore}: ${labels.cards.handel.title}`}>
                  {labels.learnMore}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                </span>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <WaveDivider variant="green-cyan" />

      <section className="py-16 md:py-20 bg-brand-light relative overflow-hidden" aria-labelledby="benefits-heading" data-testid="benefits-section">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-brand-green to-brand-cyan rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title={labels.whyMadformed.title}
            subtitle={labels.whyMadformed.subtitle}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitsLabels.map((benefit, index) => {
              const icons = [Shield, Zap, Target, Users];
              const Icon = icons[index];
              const colors = [
                { bg: "from-brand-green to-brand-green/80", icon: "text-white", border: "border-brand-green/20 hover:border-brand-green/40" },
                { bg: "from-brand-cyan to-brand-cyan/80", icon: "text-white", border: "border-brand-cyan/20 hover:border-brand-cyan/40" },
                { bg: "from-brand-green to-brand-cyan", icon: "text-white", border: "border-brand-green/20 hover:border-brand-cyan/40" },
                { bg: "from-brand-cyan to-brand-green", icon: "text-white", border: "border-brand-cyan/20 hover:border-brand-green/40" }
              ];
              const color = colors[index];
              return (
                <div 
                  key={index} 
                  className={`group relative bg-white p-8 rounded-2xl border-2 ${color.border} transition-all duration-300 hover:shadow-xl`}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-green/5 to-brand-cyan/5 rounded-bl-[100px] -z-0" />
                  <div className={`w-14 h-14 bg-gradient-to-br ${color.bg} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${color.icon}`} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-brand-dark mb-3 text-lg">{benefit.title}</h3>
                  <p className="text-sm text-brand-dark/70 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <WaveDivider variant="cyan-green" flip />

      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-dark via-brand-dark to-brand-dark/95 relative overflow-hidden" aria-labelledby="process-heading" data-testid="process-section">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-cyan rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title={labels.process.title}
            subtitle={labels.process.subtitle}
            light
          />
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
            <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-brand-green via-brand-cyan to-brand-cyan opacity-30" aria-hidden="true" />
            
            {workProcessLabels.map((step, index) => {
              const icons = [Search, Lightbulb, Rocket];
              const Icon = icons[index];
              return (
                <div 
                  key={step.step} 
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 to-brand-cyan/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                  <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                    <div className="flex flex-col items-center text-center mb-6">
                      <div 
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg ${
                          index === 0 
                            ? "bg-gradient-to-br from-brand-green to-brand-green/80" 
                            : index === 1 
                              ? "bg-gradient-to-br from-brand-green to-brand-cyan" 
                              : "bg-gradient-to-br from-brand-cyan to-brand-cyan/80"
                        }`}
                      >
                        <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                      </div>
                      <span className={`text-xs font-semibold tracking-wider uppercase mb-2 ${
                        index === 0 ? "text-brand-green" : index === 1 ? "text-brand-cyan" : "text-brand-cyan"
                      }`}>
                        {labels.process.step} {step.step}
                      </span>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-white/70 leading-relaxed text-center">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-brand-light to-white" aria-labelledby="references-heading" data-testid="references-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={labels.references.title}
            subtitle={labels.references.subtitle}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-6 bg-white rounded-xl border border-brand-grey/10 hover:border-brand-cyan/30 hover:shadow-lg transition-all duration-300"
                data-testid={`home-company-${index}`}
              >
                <img 
                  src={company.logo} 
                  alt={`${company.name} Logo`}
                  loading="lazy"
                  className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white" aria-labelledby="faq-heading" data-testid="faq-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={labels.faq.title}
            subtitle={labels.faq.subtitle}
          />
          <FAQAccordion items={homeFaqs} />
        </div>
      </section>

      <section className="py-12 bg-brand-light" aria-label={isEnglish ? "Legal disclaimer" : "Rechtlicher Hinweis"} data-testid="disclaimer-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-brand-grey/10" role="note">
            <AlertTriangle className="w-6 h-6 text-brand-grey shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">{labels.disclaimer.title}</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                {labels.disclaimer.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
