import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContactBlock } from "@/components/ContactBlock";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";
import { SEO } from "@/components/SEO";
import { benefits, workProcess } from "@/content/company";
import { ArrowRight, Leaf, Stethoscope, CheckCircle2, AlertTriangle } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-brand-light">
      <SEO
        title="Beratung für medizinisches Cannabis & Medizintechnik | MadforMed GmbH"
        description="MadforMed begleitet Unternehmen entlang regulatorischer, operativer und kommerzieller Fragestellungen – strukturiert, compliance-orientiert, ergebnisfokussiert."
      />
      <section className="py-16 md:py-24 lg:py-32" data-testid="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-6">
                Beratung für medizinisches Cannabis & Medizintechnik
              </h1>
              <p className="text-lg md:text-xl text-brand-dark/70 mb-8 leading-relaxed">
                MadforMed begleitet Unternehmen entlang regulatorischer, operativer 
                und kommerzieller Fragestellungen – strukturiert, compliance-orientiert, 
                ergebnisfokussiert.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/leistungen">
                  <Button
                    size="lg"
                    className="bg-brand-green hover:bg-brand-green/90 text-white"
                    data-testid="button-services"
                  >
                    Leistungen ansehen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/kontakt">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-brand-green text-brand-green hover:bg-brand-green/10"
                    data-testid="button-contact-hero"
                  >
                    Kontakt aufnehmen
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <ContactBlock variant="card" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white" data-testid="services-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Unsere Beratungsschwerpunkte"
            subtitle="Zwei Branchen, ein Ansatz: strukturierte Beratung für regulierte Märkte"
          />
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Link href="/leistungen/medizinisches-cannabis">
              <Card
                className="p-8 bg-brand-light border-brand-grey/20 hover:border-brand-green transition-colors cursor-pointer group"
                data-testid="card-cannabis"
              >
                <div className="w-16 h-16 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-green/20 transition-colors">
                  <Leaf className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-3">
                  Medizinisches Cannabis
                </h3>
                <p className="text-brand-dark/70 mb-4">
                  Von der Strategie bis zur Supply Chain: Beratung für Hersteller, 
                  Importeure, Großhändler und Apothekennetzwerke.
                </p>
                <span className="inline-flex items-center text-brand-green font-medium">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Card>
            </Link>

            <Link href="/leistungen/medizintechnik">
              <Card
                className="p-8 bg-brand-light border-brand-grey/20 hover:border-brand-green transition-colors cursor-pointer group"
                data-testid="card-medtech"
              >
                <div className="w-16 h-16 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-green/20 transition-colors">
                  <Stethoscope className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-3">
                  Medizintechnik
                </h3>
                <p className="text-brand-dark/70 mb-4">
                  Go-to-Market, Prozessoptimierung und Sales Enablement für 
                  Medizintechnik-Unternehmen.
                </p>
                <span className="inline-flex items-center text-brand-green font-medium">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" data-testid="benefits-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Warum MadforMed"
            subtitle="Was uns auszeichnet"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">{benefit.title}</h3>
                <p className="text-sm text-brand-dark/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white" data-testid="process-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Unsere Arbeitsweise"
            subtitle="Strukturiert und transparent von der ersten Analyse bis zur Umsetzung"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {workProcess.map((step) => (
              <div key={step.step} className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold shrink-0">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark">{step.title}</h3>
                </div>
                <p className="text-brand-dark/70 pl-14">{step.description}</p>
                {step.step < 3 && (
                  <div className="hidden md:block absolute top-5 left-[calc(100%+1rem)] w-8 h-0.5 bg-brand-grey/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-light" data-testid="disclaimer-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-brand-grey/20">
            <AlertTriangle className="w-6 h-6 text-brand-grey shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">Wichtiger Hinweis</h3>
              <p className="text-sm text-brand-dark/70">
                MadforMed bietet keine Rechtsberatung, keine medizinische Beratung und 
                keine Heilversprechen. Für rechtliche und medizinische Fragestellungen 
                empfehlen wir die Zusammenarbeit mit entsprechenden Fachexperten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
