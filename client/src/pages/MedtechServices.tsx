import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABand } from "@/components/CTABand";
import { SEO } from "@/components/SEO";
import { ServiceData, FAQData, BreadcrumbData } from "@/components/StructuredData";
import { RelatedArticles, RelatedServices } from "@/components/RelatedContent";
import { useServicesContent, useFaqsContent, usePageContent } from "@/hooks/useContent";
import { ArrowRight, Stethoscope, Users, CheckCircle2 } from "lucide-react";

export default function MedtechServices() {
  const { medtechServices, medtechTargetGroups, caseStudies } = useServicesContent();
  const { medtechFaqs } = useFaqsContent();
  const { isEnglish, paths, labels } = usePageContent();
  const faqItems = medtechFaqs.map(faq => ({ question: faq.question, answer: faq.answer }));

  return (
    <div className="bg-brand-light">
      <SEO
        title={isEnglish ? "Medical Technology Consulting" : "Medizintechnik Beratung"}
        description={isEnglish
          ? "Practice-oriented consulting for medical technology: Go-to-Market, process optimization, sales enablement, project management. For manufacturers and sales teams."
          : "Praxisorientierte Beratung für Medizintechnik: Go-to-Market, Prozessoptimierung, Sales Enablement, Projektmanagement. Für Hersteller und Vertriebsteams."}
      />
      <ServiceData
        name={isEnglish ? "Medical Technology Consulting" : "Beratung Medizintechnik"}
        description={isEnglish
          ? "Practice-oriented consulting for medical technology companies: Go-to-Market strategies, process optimization, and sales enablement with a focus on outpatient surgery."
          : "Praxisorientierte Beratung für Medizintechnik-Unternehmen: Go-to-Market-Strategien, Prozessoptimierung und Sales Enablement mit Fokus auf ambulantes Operieren."}
        serviceType="Consulting"
      />
      <FAQData items={faqItems} />
      <BreadcrumbData items={[
        { name: isEnglish ? "Home" : "Start", url: isEnglish ? "/en" : "/" },
        { name: isEnglish ? "Services" : "Leistungen", url: paths.services },
        { name: isEnglish ? "Medical Technology" : "Medizintechnik", url: paths.medtech }
      ]} />
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-brand-dark/60 mb-6">
            <Link href={paths.services}>
              <span className="hover:text-brand-cyan cursor-pointer">{isEnglish ? "Services" : "Leistungen"}</span>
            </Link>
            <span>/</span>
            <span className="text-brand-dark">{isEnglish ? "Medical Technology" : "Medizintechnik"}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-cyan/10 rounded-full text-brand-cyan text-sm font-medium mb-4">
                <Stethoscope className="w-4 h-4" />
                {isEnglish ? "Consulting Focus" : "Beratungsschwerpunkt"}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-6">
                {isEnglish ? "Medical Technology" : "Medizintechnik"}
              </h1>
              <p className="text-lg text-brand-dark/70 mb-6 leading-relaxed">
                {isEnglish
                  ? "From market launch to process optimization: We accompany medical technology companies with practice-oriented consulting and measurable results."
                  : "Von der Markteinführung bis zur Prozessoptimierung: Wir begleiten Medizintechnik-Unternehmen mit praxisorientierter Beratung und messbaren Ergebnissen."}
              </p>
              <Link href={paths.contact}>
                <Button
                  size="lg"
                  className="bg-brand-cyan hover:bg-brand-cyan/90 text-white"
                  data-testid="button-contact-medtech"
                >
                  {isEnglish ? "Schedule a consultation" : "Beratungsgespräch vereinbaren"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <Card className="p-6 bg-white border-brand-grey/20">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-brand-cyan" />
                <h3 className="font-semibold text-brand-dark">{isEnglish ? "Target Groups" : "Zielgruppen"}</h3>
              </div>
              <div className="space-y-4">
                {medtechTargetGroups.map((group, index) => (
                  <div key={index} className="border-b border-brand-grey/10 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-medium text-brand-dark text-sm mb-1">{group.title}</h4>
                    <p className="text-sm text-brand-dark/60">{group.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={isEnglish ? "Service Modules" : "Leistungsbausteine"}
            subtitle={isEnglish ? "Practice-oriented consulting for medical technology companies" : "Praxisorientierte Beratung für Medizintechnik-Unternehmen"}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {medtechServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                accentColor="cyan"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={isEnglish ? "Project Examples" : "Projektbeispiele"}
            subtitle={isEnglish ? "Anonymized examples from our consulting practice" : "Anonymisierte Beispiele aus unserer Beratungspraxis"}
          />
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <Card
                key={study.id}
                className="p-6 bg-white border-brand-grey/20"
                data-testid={`case-study-${study.id}`}
              >
                <div className="inline-block px-2 py-1 bg-brand-cyan/10 rounded text-brand-cyan text-xs font-medium mb-3">
                  {study.category}
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">{study.title}</h3>
                <p className="text-sm text-brand-dark/70 mb-4">{study.description}</p>
                <div className="space-y-2">
                  {study.results.map((result, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                      <span className="text-brand-dark/80">{result}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={isEnglish ? "FAQ" : "Häufige Fragen"}
            subtitle={isEnglish ? "Answers to common questions about medical technology consulting" : "Antworten auf typische Fragen zur Medizintechnik-Beratung"}
          />
          <Card className="p-6 md:p-8 bg-brand-light border-brand-grey/20">
            <FAQAccordion items={medtechFaqs} />
          </Card>
        </div>
      </section>

      <RelatedArticles category="medtech" title={isEnglish ? "Insights on Medical Technology" : "Insights zur Medizintechnik"} />

      <RelatedServices
        services={[
          {
            title: isEnglish ? "Medical Cannabis" : "Medizinisches Cannabis",
            description: isEnglish ? "EU-GMP/GDP consulting for cannabis companies." : "EU-GMP/GDP-Beratung für Cannabis-Unternehmen.",
            href: paths.cannabis,
            icon: "cannabis",
            color: "green"
          },
          {
            title: isEnglish ? "Medical Trade" : "Medizinalhandel",
            description: isEnglish ? "Sales strategy and key account management for distributors." : "Vertriebsstrategie und Key Account Management für Händler.",
            href: paths.medizinalhandel,
            icon: "handel",
            color: "cyan"
          }
        ]}
        title={isEnglish ? "Related Consulting Areas" : "Verwandte Beratungsbereiche"}
      />

      <section className="py-16 md:py-20 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-brand-green/20 to-brand-cyan/20 text-brand-cyan text-sm font-medium rounded-full mb-4">
            {isEnglish ? "Related" : "Passend dazu"}
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            {isEnglish ? "AI Enablement for Your Sales Team" : "KI-Enablement für Ihr Vertriebsteam"}
          </h2>
          <p className="text-white/70 mb-8">
            {isEnglish
              ? "Boost your medical technology sales team's productivity with our AI workshops. Copilot & ChatGPT for emails, proposals, and account preparation – practical and measurable."
              : "Steigern Sie die Produktivität Ihres Medizintechnik-Vertriebs mit unseren KI-Workshops. Copilot & ChatGPT für E-Mails, Angebote und Account-Vorbereitung – praxisnah und messbar."}
          </p>
          <Link href={paths.kiServices}>
            <Button className="bg-gradient-to-r from-brand-green to-brand-cyan hover:from-brand-green/90 hover:to-brand-cyan/90 text-white">
              {isEnglish ? "Discover AI Workshops" : "KI-Workshops entdecken"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <CTABand
        title={isEnglish ? "Request Medical Technology Consulting" : "Medizintechnik-Beratung anfragen"}
        subtitle={isEnglish ? "Let's discuss your challenges." : "Lassen Sie uns Ihre Herausforderungen besprechen."}
      />
    </div>
  );
}
