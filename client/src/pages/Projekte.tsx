import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";
import { SEO } from "@/components/SEO";
import { projectTypes } from "@/content/company";
import { projectReferences, companyLogos, experienceHighlights } from "@/content/references";
import { ArrowRight, FileText, Briefcase, LayoutGrid, TrendingUp, Leaf, Stethoscope, ShoppingCart, CheckCircle2, Building2 } from "lucide-react";

const projectIcons = [Briefcase, LayoutGrid, FileText, TrendingUp];

export default function Projekte() {
  return (
    <div className="bg-brand-light">
      <SEO
        title="Projekte & Referenzen"
        description="Referenzprojekte aus den Bereichen Medizinalcannabis und Medizintechnik: M&A, Interim Management, Restrukturierung und strategische Beratung."
      />
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-6">
              Projekte & Referenzen
            </h1>
            <p className="text-lg text-brand-dark/70 leading-relaxed">
              Über {experienceHighlights.yearsExperience} Jahre Erfahrung in den Bereichen 
              Medizinalcannabis und Medizintechnik. Hier finden Sie ausgewählte Projektbeispiele 
              aus unserer Beratungspraxis.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="text-center p-6 bg-white rounded-lg border border-brand-grey/20">
              <div className="text-3xl font-bold text-brand-green mb-2">{experienceHighlights.yearsExperience}</div>
              <div className="text-sm text-brand-dark/70">Jahre Erfahrung</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-brand-grey/20">
              <div className="text-3xl font-bold text-brand-green mb-2">{experienceHighlights.projectsCompleted}</div>
              <div className="text-sm text-brand-dark/70">Projekte</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-brand-grey/20">
              <div className="text-3xl font-bold text-brand-green mb-2">4</div>
              <div className="text-sm text-brand-dark/70">Industriepartnerschaften</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-brand-grey/20">
              <div className="text-3xl font-bold text-brand-green mb-2">EU</div>
              <div className="text-sm text-brand-dark/70">Internationale Projekte</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Erfahrung aus führenden Unternehmen"
            subtitle="Branchenexpertise aus namhaften Unternehmen der Medizintechnik und Pharmabranche"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyLogos.map((company, index) => (
              <Card
                key={index}
                className="p-6 bg-brand-light border-brand-grey/20 text-center"
                data-testid={`company-logo-${index}`}
              >
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="font-semibold text-brand-dark mb-1">{company.name}</h3>
                <p className="text-xs text-brand-green font-medium mb-2">{company.industry}</p>
                <p className="text-sm text-brand-dark/60">{company.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Ausgewählte Projekte"
            subtitle="Referenzprojekte aus dem Bereich Interim Management und Beratung"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {projectReferences.map((project) => (
              <Card
                key={project.id}
                className="p-6 bg-white border-brand-grey/20"
                data-testid={`project-ref-${project.id}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                      project.category === "handel" ? "bg-brand-cyan/10" : "bg-brand-green/10"
                    }`}>
                    {project.category === "cannabis" ? (
                      <Leaf className="w-6 h-6 text-brand-green" />
                    ) : project.category === "handel" ? (
                      <ShoppingCart className="w-6 h-6 text-brand-cyan" />
                    ) : (
                      <Stethoscope className="w-6 h-6 text-brand-green" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        project.category === "handel" 
                          ? "text-brand-cyan bg-brand-cyan/10" 
                          : "text-brand-green bg-brand-green/10"
                      }`}>
                        {project.category === "cannabis" ? "Cannabis" : project.category === "handel" ? "Medizinalhandel" : "Medizintechnik"}
                      </span>
                    </div>
                    <h3 className="font-semibold text-brand-dark mb-2">{project.title}</h3>
                    <p className="text-sm text-brand-dark/70 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.deliverables.map((deliverable, i) => (
                        <span
                          key={i}
                          className="inline-block px-2 py-1 bg-brand-light rounded text-xs text-brand-dark/70 border border-brand-grey/20"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand-green" />
                      <span className="text-brand-dark font-medium">{project.result}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/leistungen/medizinisches-cannabis">
              <Card className="p-6 bg-brand-light border-brand-grey/20 hover:border-brand-green transition-colors cursor-pointer group h-full">
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
              <Card className="p-6 bg-brand-light border-brand-grey/20 hover:border-brand-green transition-colors cursor-pointer group h-full">
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
            <Link href="/leistungen/medizinalhandel">
              <Card className="p-6 bg-brand-light border-brand-grey/20 hover:border-brand-cyan transition-colors cursor-pointer group h-full">
                <h3 className="font-semibold text-brand-dark mb-2">Medizinalhandel</h3>
                <p className="text-sm text-brand-dark/70 mb-4">
                  Vertriebsstrategie, Key Account, Distribution
                </p>
                <span className="inline-flex items-center text-brand-cyan text-sm font-medium">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Card>
            </Link>
            <Link href="/leistungen/ki-sales-bd">
              <Card className="p-6 bg-brand-light border-brand-grey/20 hover:border-brand-cyan transition-colors cursor-pointer group h-full">
                <h3 className="font-semibold text-brand-dark mb-2">KI für Sales & BD</h3>
                <p className="text-sm text-brand-dark/70 mb-4">
                  Workshops, Prompt-Playbooks, Enablement
                </p>
                <span className="inline-flex items-center text-brand-cyan text-sm font-medium">
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
