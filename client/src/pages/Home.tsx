import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";
import { SEO } from "@/components/SEO";
import { HeroSlider } from "@/components/HeroSlider";
import { WaveDivider } from "@/components/WaveDivider";
import { useLanguage } from "@/lib/i18n";
import { benefits, workProcess } from "@/content/company";
import { companyLogos } from "@/content/references";
import { ArrowRight, Leaf, Monitor, Brain, CheckCircle2, AlertTriangle, Building2, Search, Lightbulb, Rocket, Shield, Zap, Target, Users, ShoppingCart } from "lucide-react";

export default function Home() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const labels = {
    seo: {
      title: isEnglish 
        ? "Consulting for Medical Cannabis & Medical Technology | MadforMed GmbH"
        : "Beratung für medizinisches Cannabis & Medizintechnik | MadforMed GmbH",
      description: isEnglish
        ? "MadforMed accompanies companies along regulatory, operational, and commercial questions – structured, compliance-oriented, results-focused."
        : "MadforMed begleitet Unternehmen entlang regulatorischer, operativer und kommerzieller Fragestellungen – strukturiert, compliance-orientiert, ergebnisfokussiert.",
    },
    pillars: {
      title: isEnglish ? "Four Pillars for Your Success" : "Vier Säulen für Ihren Erfolg",
      subtitle: isEnglish ? "Our consulting focus areas" : "Unsere Beratungsschwerpunkte",
    },
    cards: {
      cannabis: {
        title: isEnglish ? "Med. Cannabis" : "Med. Cannabis",
        description: isEnglish 
          ? "Consulting for manufacturers, importers, wholesalers, and pharmacy networks."
          : "Beratung für Hersteller, Importeure, Großhändler und Apothekennetzwerke.",
      },
      ki: {
        title: isEnglish ? "AI Enablement" : "KI-Enablement",
        badge: isEnglish ? "New" : "Neu",
        description: isEnglish
          ? "Copilot & ChatGPT workshops and prompt playbooks for sales teams."
          : "Copilot & ChatGPT Workshops und Prompt-Playbooks für Vertriebsteams.",
      },
      medtech: {
        title: isEnglish ? "Medical Technology" : "Medizintechnik",
        description: isEnglish
          ? "Go-to-Market, process optimization, and sales enablement for medical technology companies."
          : "Go-to-Market, Prozessoptimierung und Sales Enablement für Medizintechnik-Unternehmen.",
      },
      handel: {
        title: isEnglish ? "Medical Trade" : "Medizinalhandel",
        description: isEnglish
          ? "Sales strategy and key account management for traders and distributors."
          : "Vertriebsstrategie und Key Account Management für Händler und Distributoren.",
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
    disclaimer: {
      title: isEnglish ? "Important Notice" : "Wichtiger Hinweis",
      text: isEnglish
        ? "MadforMed does not provide legal advice, medical advice, or healing promises. For legal and medical questions, we recommend working with appropriate specialists."
        : "MadforMed bietet keine Rechtsberatung, keine medizinische Beratung und keine Heilversprechen. Für rechtliche und medizinische Fragestellungen empfehlen wir die Zusammenarbeit mit entsprechenden Fachexperten.",
    },
  };

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
  };

  return (
    <div className="bg-brand-light">
      <SEO
        title={labels.seo.title}
        description={labels.seo.description}
      />
      <HeroSlider />

      <section className="py-16 md:py-24 bg-white relative" data-testid="services-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={labels.pillars.title}
            subtitle={labels.pillars.subtitle}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href={paths.cannabis}>
              <Card
                className="group relative p-6 bg-white border-2 border-brand-green/30 transition-all cursor-pointer h-full overflow-visible hover-elevate"
                data-testid="card-cannabis"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green to-brand-green/50" />
                <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-brand-green/20 transition-colors">
                  <Leaf className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">
                  {labels.cards.cannabis.title}
                </h3>
                <p className="text-brand-dark/70 mb-5 leading-relaxed text-sm">
                  {labels.cards.cannabis.description}
                </p>
                <span className="inline-flex items-center text-brand-green font-semibold text-sm">
                  {labels.learnMore}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </span>
              </Card>
            </Link>

            <Link href={paths.ki}>
              <Card
                className="group relative p-6 bg-white border-2 border-brand-green/30 transition-all cursor-pointer h-full overflow-visible hover-elevate"
                data-testid="card-ki"
                style={{ borderImage: "linear-gradient(to right, #5FB94E, #1E9BD9) 1" }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green to-brand-cyan" />
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center px-2 py-0.5 bg-gradient-to-r from-brand-green/10 to-brand-cyan/10 text-brand-cyan text-xs font-semibold rounded-full">
                    {labels.cards.ki.badge}
                  </span>
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-brand-green/10 to-brand-cyan/10 rounded-2xl flex items-center justify-center mb-5 group-hover:from-brand-green/20 group-hover:to-brand-cyan/20 transition-colors">
                  <Brain className="w-7 h-7 text-brand-cyan" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">
                  {labels.cards.ki.title}
                </h3>
                <p className="text-brand-dark/70 mb-5 leading-relaxed text-sm">
                  {labels.cards.ki.description}
                </p>
                <span className="inline-flex items-center bg-gradient-to-r from-brand-green to-brand-cyan bg-clip-text text-transparent font-semibold text-sm">
                  {labels.learnMore}
                  <ArrowRight className="w-4 h-4 ml-2 text-brand-cyan group-hover:translate-x-2 transition-transform" />
                </span>
              </Card>
            </Link>

            <Link href={paths.medtech}>
              <Card
                className="group relative p-6 bg-white border-2 border-brand-cyan/30 transition-all cursor-pointer h-full overflow-visible hover-elevate"
                data-testid="card-medtech"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan to-brand-cyan/50" />
                <div className="w-14 h-14 bg-brand-cyan/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-brand-cyan/20 transition-colors">
                  <Monitor className="w-7 h-7 text-brand-cyan" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">
                  {labels.cards.medtech.title}
                </h3>
                <p className="text-brand-dark/70 mb-5 leading-relaxed text-sm">
                  {labels.cards.medtech.description}
                </p>
                <span className="inline-flex items-center text-brand-cyan font-semibold text-sm">
                  {labels.learnMore}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </span>
              </Card>
            </Link>

            <Link href={paths.handel}>
              <Card
                className="group relative p-6 bg-white border-2 border-brand-cyan/30 transition-all cursor-pointer h-full overflow-visible hover-elevate"
                data-testid="card-handel"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan to-brand-cyan/50" />
                <div className="w-14 h-14 bg-brand-cyan/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-brand-cyan/20 transition-colors">
                  <ShoppingCart className="w-7 h-7 text-brand-cyan" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">
                  {labels.cards.handel.title}
                </h3>
                <p className="text-brand-dark/70 mb-5 leading-relaxed text-sm">
                  {labels.cards.handel.description}
                </p>
                <span className="inline-flex items-center text-brand-cyan font-semibold text-sm">
                  {labels.learnMore}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </span>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <WaveDivider variant="green-cyan" />

      <section className="py-16 md:py-20 bg-brand-light relative overflow-hidden" data-testid="benefits-section">
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
                    <Icon className={`w-7 h-7 ${color.icon}`} />
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

      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-dark via-brand-dark to-brand-dark/95 relative overflow-hidden" data-testid="process-section">
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
            <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-brand-green via-brand-cyan to-brand-cyan opacity-30" />
            
            {workProcessLabels.map((step, index) => {
              const icons = [Search, Lightbulb, Rocket];
              const Icon = icons[index];
              return (
                <div 
                  key={step.step} 
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 to-brand-cyan/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                        <Icon className="w-8 h-8 text-white" />
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

      <section className="py-16 md:py-20 bg-gradient-to-b from-brand-light to-white" data-testid="references-section">
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
                  alt={company.name}
                  className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white" data-testid="disclaimer-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 p-6 bg-brand-light rounded-xl border border-brand-grey/10">
            <AlertTriangle className="w-6 h-6 text-brand-grey shrink-0 mt-0.5" />
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
