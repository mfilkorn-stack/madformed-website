import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";
import { SEO } from "@/components/SEO";
import { HeroSlider } from "@/components/HeroSlider";
import { WaveDivider } from "@/components/WaveDivider";
import { benefits, workProcess } from "@/content/company";
import { companyLogos } from "@/content/references";
import { ArrowRight, Leaf, Monitor, Brain, CheckCircle2, AlertTriangle, Building2 } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-brand-light">
      <SEO
        title="Beratung für medizinisches Cannabis & Medizintechnik | MadforMed GmbH"
        description="MadforMed begleitet Unternehmen entlang regulatorischer, operativer und kommerzieller Fragestellungen – strukturiert, compliance-orientiert, ergebnisfokussiert."
      />
      <HeroSlider />

      <section className="py-16 md:py-24 bg-white relative" data-testid="services-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Drei Säulen für Ihren Erfolg"
            subtitle="Unsere Beratungsschwerpunkte"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/leistungen/medizinisches-cannabis">
              <Card
                className="group relative p-8 bg-white border-2 border-brand-green/30 transition-all cursor-pointer h-full overflow-visible hover-elevate"
                data-testid="card-cannabis"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green to-brand-green/50" />
                <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-green/20 transition-colors">
                  <Leaf className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">
                  Medizinisches Cannabis
                </h3>
                <p className="text-brand-dark/70 mb-6 leading-relaxed">
                  Von der Strategie bis zur Supply Chain: Beratung für Hersteller, 
                  Importeure, Großhändler und Apothekennetzwerke.
                </p>
                <span className="inline-flex items-center text-brand-green font-semibold">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </span>
              </Card>
            </Link>

            <Link href="/leistungen/ki-sales-bd">
              <Card
                className="group relative p-8 bg-white border-2 border-brand-cyan/30 transition-all cursor-pointer h-full overflow-visible hover-elevate"
                data-testid="card-ki"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan to-brand-cyan/50" />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-2.5 py-1 bg-brand-cyan/10 text-brand-cyan text-xs font-semibold rounded-full">
                    Neu
                  </span>
                </div>
                <div className="w-16 h-16 bg-brand-cyan/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-cyan/20 transition-colors">
                  <Brain className="w-8 h-8 text-brand-cyan" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">
                  KI-Enablement
                </h3>
                <p className="text-brand-dark/70 mb-6 leading-relaxed">
                  Copilot & ChatGPT praxisnah einführen: Workshops, Prompt-Playbooks 
                  und Enablement für Vertriebsteams.
                </p>
                <span className="inline-flex items-center text-brand-cyan font-semibold">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </span>
              </Card>
            </Link>

            <Link href="/leistungen/medizintechnik">
              <Card
                className="group relative p-8 bg-white border-2 border-brand-cyan/30 transition-all cursor-pointer h-full overflow-visible hover-elevate"
                data-testid="card-medtech"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan to-brand-green" />
                <div className="w-16 h-16 bg-brand-cyan/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-cyan/20 transition-colors">
                  <Monitor className="w-8 h-8 text-brand-cyan" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">
                  Medizintechnik
                </h3>
                <p className="text-brand-dark/70 mb-6 leading-relaxed">
                  Go-to-Market, Prozessoptimierung und Sales Enablement für 
                  Medizintechnik-Unternehmen.
                </p>
                <span className="inline-flex items-center text-brand-cyan font-semibold">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </span>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <WaveDivider variant="green-cyan" />

      <section className="py-16 md:py-20 bg-brand-light" data-testid="benefits-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Warum MadforMed"
            subtitle="Was uns auszeichnet"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl border border-brand-grey/10">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-green/20 to-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="font-semibold text-brand-dark mb-3">{benefit.title}</h3>
                <p className="text-sm text-brand-dark/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider variant="cyan-green" flip />

      <section className="py-16 md:py-20 bg-white" data-testid="process-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Unsere Arbeitsweise"
            subtitle="Strukturiert und transparent von der ersten Analyse bis zur Umsetzung"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {workProcess.map((step, index) => (
              <div key={step.step} className="relative bg-brand-light p-8 rounded-xl border border-brand-grey/10">
                <div className="flex items-center gap-4 mb-5">
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0 ${
                      index === 0 ? "bg-brand-green" : index === 1 ? "bg-gradient-to-r from-brand-green to-brand-cyan" : "bg-brand-cyan"
                    }`}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark">{step.title}</h3>
                </div>
                <p className="text-brand-dark/70 leading-relaxed">{step.description}</p>
                {step.step < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-brand-green to-brand-cyan" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-brand-light to-white" data-testid="references-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Erfahrung aus führenden Unternehmen"
            subtitle="Branchenexpertise aus namhaften Unternehmen der Medizintechnik und Pharmabranche"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl border border-brand-grey/10 hover:border-brand-cyan/30 transition-colors"
                data-testid={`home-company-${index}`}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-brand-green/10 to-brand-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-7 h-7 text-brand-cyan" />
                </div>
                <h3 className="font-semibold text-brand-dark text-sm">{company.name}</h3>
                <p className="text-xs text-brand-dark/60 mt-1">{company.industry}</p>
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
              <h3 className="font-semibold text-brand-dark mb-2">Wichtiger Hinweis</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
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
