import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";
import { SEO } from "@/components/SEO";
import { projectTypes } from "@/content/company";
import { ArrowRight, FileText, Briefcase, LayoutGrid, TrendingUp } from "lucide-react";

const projectIcons = [Briefcase, LayoutGrid, FileText, TrendingUp];

export default function Projekte() {
  return (
    <div className="bg-brand-light">
      <SEO
        title="Projekte & Referenzen"
        description="Anonymisierte Beispiele aus unserer Beratungspraxis: Strategische Beratung, Prozessberatung, Projektmanagement und Business Development."
      />
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-6">
              Projekte
            </h1>
            <p className="text-lg text-brand-dark/70 leading-relaxed">
              Wir arbeiten mit einer Vielzahl von Unternehmen zusammen – von Startups 
              bis zu etablierten Konzernen. Aus Vertraulichkeitsgründen können wir keine 
              Kundennamen nennen, stellen aber gerne typische Projektarten und 
              Ergebnisse vor.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Projektarten"
            subtitle="Die häufigsten Beratungsmandate"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {projectTypes.map((project, index) => {
              const Icon = projectIcons[index] || Briefcase;
              return (
                <Card
                  key={index}
                  className="p-6 bg-brand-light border-brand-grey/20"
                  data-testid={`project-type-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-dark mb-2">{project.title}</h3>
                      <p className="text-sm text-brand-dark/70 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.deliverables.map((deliverable, i) => (
                          <span
                            key={i}
                            className="inline-block px-2 py-1 bg-white rounded text-xs text-brand-dark/70 border border-brand-grey/20"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Beispiel-Deliverables"
            subtitle="Was Sie von unserer Arbeit erwarten können"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-white border-brand-grey/20">
              <h3 className="font-semibold text-brand-dark mb-3">Strategiepapiere</h3>
              <p className="text-sm text-brand-dark/70">
                Fundierte Analysen und Handlungsempfehlungen für strategische 
                Entscheidungen – von der Marktbewertung bis zur Positionierung.
              </p>
            </Card>
            <Card className="p-6 bg-white border-brand-grey/20">
              <h3 className="font-semibold text-brand-dark mb-3">Prozessdokumentationen</h3>
              <p className="text-sm text-brand-dark/70">
                Strukturierte Dokumentationen von Soll-Prozessen, SOPs und 
                Arbeitsanweisungen für den operativen Einsatz.
              </p>
            </Card>
            <Card className="p-6 bg-white border-brand-grey/20">
              <h3 className="font-semibold text-brand-dark mb-3">Schulungsunterlagen</h3>
              <p className="text-sm text-brand-dark/70">
                Maßgeschneiderte Trainingsmaterialien für Vertrieb, Operations 
                und Qualitätsmanagement.
              </p>
            </Card>
            <Card className="p-6 bg-white border-brand-grey/20">
              <h3 className="font-semibold text-brand-dark mb-3">Business Cases</h3>
              <p className="text-sm text-brand-dark/70">
                Wirtschaftlichkeitsberechnungen und Investitionsanalysen als 
                Grundlage für Entscheidungen.
              </p>
            </Card>
            <Card className="p-6 bg-white border-brand-grey/20">
              <h3 className="font-semibold text-brand-dark mb-3">Projektpläne</h3>
              <p className="text-sm text-brand-dark/70">
                Detaillierte Meilensteinpläne mit klaren Verantwortlichkeiten 
                und Ressourcenplanung.
              </p>
            </Card>
            <Card className="p-6 bg-white border-brand-grey/20">
              <h3 className="font-semibold text-brand-dark mb-3">Pitch Decks</h3>
              <p className="text-sm text-brand-dark/70">
                Überzeugende Präsentationen für Investoren, Partner oder 
                interne Stakeholder.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Passende Leistungen"
            subtitle="Erfahren Sie mehr über unsere Beratungsschwerpunkte"
          />
          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/leistungen/medizinisches-cannabis">
              <Card className="p-6 bg-brand-light border-brand-grey/20 hover:border-brand-green transition-colors cursor-pointer group">
                <h3 className="font-semibold text-brand-dark mb-2">Medizinisches Cannabis</h3>
                <p className="text-sm text-brand-dark/70 mb-4">
                  Regulierung, Supply Chain, Qualitätsmanagement
                </p>
                <span className="inline-flex items-center text-brand-green text-sm font-medium">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Card>
            </Link>
            <Link href="/leistungen/medizintechnik">
              <Card className="p-6 bg-brand-light border-brand-grey/20 hover:border-brand-green transition-colors cursor-pointer group">
                <h3 className="font-semibold text-brand-dark mb-2">Medizintechnik</h3>
                <p className="text-sm text-brand-dark/70 mb-4">
                  Go-to-Market, Prozessoptimierung, Sales Enablement
                </p>
                <span className="inline-flex items-center text-brand-green text-sm font-medium">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        title="Ihr Projekt besprechen"
        subtitle="Erzählen Sie uns von Ihrer Herausforderung – wir finden den passenden Ansatz."
      />
    </div>
  );
}
