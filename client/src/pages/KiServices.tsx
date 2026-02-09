import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SEO } from "@/components/SEO";
import { ServiceData, FAQData, BreadcrumbData } from "@/components/StructuredData";
import { RelatedArticles, RelatedServices } from "@/components/RelatedContent";
import {
  kiServiceInfo,
  kiTargetGroups,
  kiOutcomes,
  kiWorkshopPackages,
  kiUseCases,
  kiToolComparison,
  kiDeliverables,
  kiFaqs
} from "@/content/ki-services";
import {
  ArrowRight,
  Users,
  Target,
  Megaphone,
  Briefcase,
  Zap,
  CheckCircle2,
  Clock,
  FileText,
  MessageSquare,
  Shield,
  Bot,
  Sparkles,
  Package,
  Search,
  BarChart3,
  Code
} from "lucide-react";

const targetGroupIcons: Record<string, React.ElementType> = {
  users: Users,
  target: Target,
  megaphone: Megaphone,
  briefcase: Briefcase
};

export default function KiServices() {
  const faqItems = kiFaqs.map(faq => ({ question: faq.question, answer: faq.answer }));
  
  return (
    <div className="bg-brand-light">
      <SEO
        title="KI für Sales & Business Development | Copilot & ChatGPT Workshops"
        description="Praktische Einführung in KI-Modelle für Vertriebsteams. Workshops, Use-Cases und Enablement – praxisnah, messbar, compliance-bewusst."
      />
      <ServiceData 
        name="KI-Enablement für Sales & Business Development" 
        description="Praktische Einführung in Copilot und ChatGPT für Vertriebsteams: Workshops, Prompt-Playbooks und Enablement-Programme für nachhaltige Produktivitätssteigerung."
        serviceType="Training"
      />
      <FAQData items={faqItems} />
      <BreadcrumbData items={[
        { name: "Start", url: "/" },
        { name: "Leistungen", url: "/leistungen" },
        { name: "KI für Sales & BD", url: "/leistungen/ki-sales-bd" }
      ]} />

      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-dark via-brand-dark to-brand-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/20 rounded-full text-brand-green text-sm font-medium mb-6">
              <Bot className="w-4 h-4" />
              Querschnittsleistung
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {kiServiceInfo.title}
              <span className="block text-brand-green mt-2">{kiServiceInfo.subtitle}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              {kiServiceInfo.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt">
                <Button
                  size="lg"
                  className="bg-brand-green hover:bg-brand-green/90 text-white"
                  data-testid="button-ki-contact"
                >
                  Workshop anfragen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white" data-testid="section-target-groups">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Für wen ist das?"
            subtitle="Zielgruppen, die von KI im Vertrieb profitieren"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kiTargetGroups.map((group, index) => {
              const Icon = targetGroupIcons[group.icon] || Users;
              return (
                <Card key={index} className="p-6 bg-brand-light border-brand-grey/20 text-center">
                  <div className="w-14 h-14 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-brand-green" />
                  </div>
                  <h3 className="font-semibold text-brand-dark mb-2">{group.title}</h3>
                  <p className="text-sm text-brand-dark/70">{group.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" data-testid="section-outcomes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Messbare Ergebnisse"
            subtitle="Was Ihr Team nach dem Workshop kann"
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {kiOutcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg border border-brand-grey/20">
                <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark mb-1">{outcome.title}</h3>
                  <p className="text-sm text-brand-dark/70">{outcome.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white" data-testid="section-packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Workshop-Formate"
            subtitle="Wählen Sie das passende Paket für Ihr Team"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {kiWorkshopPackages.map((pkg, index) => (
              <Card
                key={pkg.id}
                className={`p-6 border-brand-grey/20 ${index === 2 ? 'bg-brand-green/5 border-brand-green' : 'bg-brand-light'}`}
                data-testid={`package-${pkg.id}`}
              >
                {index === 2 && (
                  <div className="inline-flex items-center gap-1 px-2 py-1 bg-brand-green text-white text-xs font-medium rounded mb-4">
                    <Sparkles className="w-3 h-3" />
                    Empfohlen
                  </div>
                )}
                <h3 className="text-xl font-bold text-brand-dark mb-2">{pkg.title}</h3>
                <div className="flex items-center gap-2 text-brand-green font-medium mb-4">
                  <Clock className="w-4 h-4" />
                  {pkg.duration}
                </div>
                <p className="text-sm text-brand-dark/70 mb-4">{pkg.goal}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-brand-dark mb-2">Inhalte:</h4>
                  <ul className="space-y-2">
                    {pkg.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-brand-dark/70">
                        <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-brand-grey/20">
                  <p className="text-xs text-brand-dark/60">
                    <span className="font-medium">Voraussetzung:</span> {pkg.prerequisites}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" data-testid="section-use-cases">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Use-Case Library"
            subtitle="Konkrete Anwendungsfälle für Ihren Vertriebsalltag"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kiUseCases.map((category, index) => (
              <Card key={index} className="p-6 bg-white border-brand-grey/20">
                <h3 className="font-semibold text-brand-dark mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-brand-green" />
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.cases.map((useCase, i) => (
                    <li key={i} className="text-sm text-brand-dark/70 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 shrink-0" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white" data-testid="section-tools">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Copilot vs. ChatGPT"
            subtitle="Welches Tool passt zu Ihren Anforderungen?"
          />
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 bg-brand-light border-brand-grey/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Bot className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-brand-dark">{kiToolComparison.copilot.name}</h3>
              </div>
              <ul className="space-y-2 mb-4">
                {kiToolComparison.copilot.bestFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-brand-dark/70">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-brand-dark/60 pt-3 border-t border-brand-grey/20">
                {kiToolComparison.copilot.considerations}
              </p>
            </Card>

            <Card className="p-6 bg-brand-light border-brand-grey/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-brand-dark">{kiToolComparison.chatgpt.name}</h3>
              </div>
              <ul className="space-y-2 mb-4">
                {kiToolComparison.chatgpt.bestFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-brand-dark/70">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-brand-dark/60 pt-3 border-t border-brand-grey/20">
                {kiToolComparison.chatgpt.considerations}
              </p>
            </Card>
          </div>

          <Card className="p-6 bg-amber-50 border-amber-200">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-amber-600 shrink-0" />
              <div>
                <h3 className="font-semibold text-brand-dark mb-2">{kiToolComparison.datenschutz.title}</h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {kiToolComparison.datenschutz.points.map((point, i) => (
                    <li key={i} className="text-sm text-brand-dark/70 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-20" data-testid="section-deliverables">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Was Sie erhalten"
            subtitle="Konkrete Deliverables aus unseren Workshops"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kiDeliverables.map((item, index) => (
              <Card key={index} className="p-6 bg-white border-brand-grey/20">
                <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-5 h-5 text-brand-green" />
                </div>
                <h3 className="font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-sm text-brand-dark/70 mb-2">{item.description}</p>
                <span className="inline-block text-xs text-brand-green font-medium bg-brand-green/10 px-2 py-1 rounded">
                  {item.format}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white" data-testid="section-searchreadiness">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="SEO & KI-Sichtbarkeit mit searchreadiness.io"
            subtitle="Analyse, Empfehlungen und Umsetzung für maximale Online-Sichtbarkeit"
          />
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 bg-brand-light border-brand-grey/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1E9BD9]/10 rounded-lg flex items-center justify-center">
                  <Search className="w-6 h-6 text-[#1E9BD9]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark">searchreadiness.io Analyse</h3>
                  <p className="text-xs text-brand-dark/60">SEO Onpage & AI-Readiness Scoring</p>
                </div>
              </div>
              <p className="text-sm text-brand-dark/70 mb-4">
                Wir analysieren Ihre Website mit searchreadiness.io und identifizieren konkrete Optimierungspotenziale 
                für Suchmaschinen und KI-Systeme. Der Audit deckt technische SEO-Faktoren, strukturierte Daten, 
                semantisches HTML und AI-Readiness-Kriterien ab.
              </p>
              <ul className="space-y-2">
                {["SEO Onpage Score-Analyse", "AI-Readiness Bewertung", "JSON-LD Schema Audit", "Content-Gap Identifikation"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-brand-dark/70">
                    <CheckCircle2 className="w-4 h-4 text-[#1E9BD9] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-brand-light border-brand-grey/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#5FB94E]/10 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-[#5FB94E]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark">Umsetzung & Optimierung</h3>
                  <p className="text-xs text-brand-dark/60">Von der Analyse zur messbaren Verbesserung</p>
                </div>
              </div>
              <p className="text-sm text-brand-dark/70 mb-4">
                Basierend auf den Ergebnissen setzen wir die Empfehlungen direkt um: Structured Data implementieren, 
                semantische HTML-Struktur optimieren, FAQ-Schemas einbetten und Content für KI-Crawler aufbereiten – 
                für messbar bessere Scores.
              </p>
              <ul className="space-y-2">
                {["Structured Data (JSON-LD) Implementierung", "Semantisches HTML & ARIA Markup", "FAQ-Schema & Answer-Ready Content", "Crawler-optimierter Fallback-Content"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-brand-dark/70">
                    <CheckCircle2 className="w-4 h-4 text-[#5FB94E] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="p-6 bg-gradient-to-r from-[#5FB94E]/5 to-[#1E9BD9]/5 border-[#5FB94E]/30">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-brand-grey/20">
                  <BarChart3 className="w-5 h-5 text-[#1E9BD9]" />
                </div>
                <div>
                  <p className="font-semibold text-brand-dark">Case Report: madformed.de</p>
                  <p className="text-sm text-brand-dark/60">Von kritischen Scores zu nahezu perfekten Werten in SEO & AI-Readiness</p>
                </div>
              </div>
              <Link href="/case-report">
                <Button className="bg-[#1E9BD9] text-white" data-testid="button-searchreadiness-case-report">
                  Case Report ansehen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-20" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Häufige Fragen"
            subtitle="Antworten auf die wichtigsten Fragen zu KI im Vertrieb"
          />
          <FAQAccordion items={kiFaqs} />
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Bereit, Ihr Team mit KI zu enablen?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Lassen Sie uns in einem kurzen Gespräch klären, welches Format zu Ihnen passt.
          </p>
          <Link href="/kontakt">
            <Button
              size="lg"
              className="bg-white text-brand-green hover:bg-white/90"
              data-testid="button-ki-cta"
            >
              Workshop anfragen
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <RelatedArticles category="ki" title="Insights zu KI im Vertrieb" />

      <RelatedServices 
        services={[
          {
            title: "Medizinisches Cannabis",
            description: "KI-Enablement für Cannabis-Vertriebsteams.",
            href: "/leistungen/medizinisches-cannabis",
            icon: "cannabis",
            color: "green"
          },
          {
            title: "Medizintechnik",
            description: "KI-Enablement für Medizintechnik-Vertriebsteams.",
            href: "/leistungen/medizintechnik",
            icon: "medtech",
            color: "cyan"
          },
          {
            title: "Medizinalhandel",
            description: "KI-Enablement für Handelsvertriebsteams.",
            href: "/leistungen/medizinalhandel",
            icon: "handel",
            color: "cyan"
          }
        ]}
        title="KI-Workshops passend zu Ihrer Branche"
      />
    </div>
  );
}
