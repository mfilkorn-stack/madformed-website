import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABand } from "@/components/CTABand";
import { SEO } from "@/components/SEO";
import { medtechServices, medtechTargetGroups, caseStudies } from "@/content/services";
import { medtechFaqs } from "@/content/faqs";
import { ArrowRight, Stethoscope, Users, CheckCircle2 } from "lucide-react";

export default function MedtechServices() {
  return (
    <div className="bg-brand-light">
      <SEO
        title="Medizintechnik Beratung"
        description="Praxisorientierte Beratung für Medizintechnik: Go-to-Market, Prozessoptimierung, Sales Enablement, Projektmanagement. Für Hersteller und Vertriebsteams."
      />
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-brand-dark/60 mb-6">
            <Link href="/leistungen">
              <span className="hover:text-brand-green cursor-pointer">Leistungen</span>
            </Link>
            <span>/</span>
            <span className="text-brand-dark">Medizintechnik</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 rounded-full text-brand-green text-sm font-medium mb-4">
                <Stethoscope className="w-4 h-4" />
                Beratungsschwerpunkt
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-6">
                Medizintechnik
              </h1>
              <p className="text-lg text-brand-dark/70 mb-6 leading-relaxed">
                Von der Markteinführung bis zur Prozessoptimierung: Wir begleiten 
                Medizintechnik-Unternehmen mit praxisorientierter Beratung und 
                messbaren Ergebnissen.
              </p>
              <Link href="/kontakt">
                <Button
                  size="lg"
                  className="bg-brand-green hover:bg-brand-green/90 text-white"
                  data-testid="button-contact-medtech"
                >
                  Beratungsgespräch vereinbaren
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <Card className="p-6 bg-white border-brand-grey/20">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-brand-green" />
                <h3 className="font-semibold text-brand-dark">Zielgruppen</h3>
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
            title="Leistungsbausteine"
            subtitle="Praxisorientierte Beratung für Medizintechnik-Unternehmen"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {medtechServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Projektbeispiele"
            subtitle="Anonymisierte Beispiele aus unserer Beratungspraxis"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <Card
                key={study.id}
                className="p-6 bg-white border-brand-grey/20"
                data-testid={`case-study-${study.id}`}
              >
                <div className="inline-block px-2 py-1 bg-brand-green/10 rounded text-brand-green text-xs font-medium mb-3">
                  {study.category}
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">{study.title}</h3>
                <p className="text-sm text-brand-dark/70 mb-4">{study.description}</p>
                <div className="space-y-2">
                  {study.results.map((result, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
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
            title="Häufige Fragen"
            subtitle="Antworten auf typische Fragen zur Medizintechnik-Beratung"
          />
          <Card className="p-6 md:p-8 bg-brand-light border-brand-grey/20">
            <FAQAccordion items={medtechFaqs} />
          </Card>
        </div>
      </section>

      <CTABand
        title="Medizintechnik-Beratung anfragen"
        subtitle="Lassen Sie uns Ihre Herausforderungen besprechen."
      />
    </div>
  );
}
