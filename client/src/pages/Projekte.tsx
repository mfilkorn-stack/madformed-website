import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/lib/i18n";
import { projectTypes } from "@/content/company";
import { projectReferences, companyLogos, experienceHighlights } from "@/content/references";
import { ArrowRight, FileText, Briefcase, LayoutGrid, TrendingUp, Leaf, Stethoscope, ShoppingCart, CheckCircle2, Building2, Bot, Search } from "lucide-react";

const projectIcons = [Briefcase, LayoutGrid, FileText, TrendingUp];

export default function Projekte() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const labels = {
    title: isEnglish ? "Projects & References" : "Projekte & Referenzen",
    seoDescription: isEnglish
      ? "Reference projects in medical cannabis and medical technology: M&A, interim management, restructuring, and strategic consulting."
      : "Referenzprojekte aus den Bereichen Medizinalcannabis und Medizintechnik: M&A, Interim Management, Restrukturierung und strategische Beratung.",
    intro: isEnglish
      ? `Over ${experienceHighlights.yearsExperience} years of experience in medical cannabis and medical technology. Here you'll find selected project examples from our consulting practice.`
      : `Über ${experienceHighlights.yearsExperience} Jahre Erfahrung in den Bereichen Medizinalcannabis und Medizintechnik. Hier finden Sie ausgewählte Projektbeispiele aus unserer Beratungspraxis.`,
    stats: {
      years: isEnglish ? "Years Experience" : "Jahre Erfahrung",
      projects: isEnglish ? "Projects" : "Projekte",
      partnerships: isEnglish ? "Industry Partnerships" : "Industriepartnerschaften",
      international: isEnglish ? "International Projects" : "Internationale Projekte",
    },
    experience: {
      title: isEnglish ? "Experience from Leading Companies" : "Erfahrung aus führenden Unternehmen",
      subtitle: isEnglish
        ? "Industry expertise from renowned medical technology and pharmaceutical companies"
        : "Branchenexpertise aus namhaften Unternehmen der Medizintechnik und Pharmabranche",
    },
    projectTypes: {
      title: isEnglish ? "Project Types" : "Projektarten",
      subtitle: isEnglish
        ? "We support you in all phases of your project"
        : "Wir unterstützen Sie in allen Phasen Ihres Projekts",
    },
    references: {
      title: isEnglish ? "Selected Reference Projects" : "Ausgewählte Referenzprojekte",
      subtitle: isEnglish
        ? "Anonymized project examples from our consulting practice"
        : "Anonymisierte Projektbeispiele aus unserer Beratungspraxis",
    },
    cta: {
      title: isEnglish ? "Have a Similar Project?" : "Ähnliches Projekt?",
      subtitle: isEnglish
        ? "Let's discuss your requirements in a non-binding conversation."
        : "Lassen Sie uns Ihre Anforderungen in einem unverbindlichen Gespräch besprechen.",
    },
  };

  const projectTypesLabels = isEnglish ? [
    { title: "Strategic Consulting", description: "Market analysis, business model development, go-to-market strategies" },
    { title: "Interim Management", description: "Temporary management for transition phases or special projects" },
    { title: "Process Optimization", description: "Analysis and optimization of business processes and workflows" },
    { title: "M&A Support", description: "Due diligence, integration planning, and post-merger support" },
  ] : projectTypes;

  const projectRefsLabels = isEnglish ? [
    { industry: "Cannabis", title: "Market Entry Strategy", description: "Development of a market entry strategy for a European cannabis manufacturer" },
    { industry: "Medical Technology", title: "Sales Enablement", description: "Sales training and enablement program for a medical device company" },
    { industry: "Cannabis", title: "Regulatory Consulting", description: "EU-GMP/GDP compliance assessment and implementation support" },
    { industry: "Medical Technology", title: "Process Optimization", description: "Workflow analysis and optimization for outpatient surgery center" },
    { industry: "Medical Trade", title: "Key Account Management", description: "Development and implementation of a key account strategy" },
    { industry: "AI", title: "AI Sales Enablement", description: "Copilot implementation and training program for sales teams" },
  ] : projectReferences;

  const caseReport = {
    title: isEnglish ? "SEO & AI Visibility Optimization" : "SEO & KI-Sichtbarkeit optimiert",
    subtitle: isEnglish ? "madformed.de – searchreadiness.io" : "madformed.de – searchreadiness.io",
    description: isEnglish
      ? "Systematic optimization of madformed.de for maximum SEO and AI visibility. Analysis with searchreadiness.io, implementation of 5 JSON-LD schemas, semantic HTML, FAQ markup and 2,000+ words of crawler content."
      : "Systematische Optimierung von madformed.de für maximale SEO- und KI-Sichtbarkeit. Analyse mit searchreadiness.io, Implementierung von 5 JSON-LD Schemas, semantischem HTML, FAQ-Markup und 2.000+ Wörtern Crawler-Content.",
    highlights: isEnglish
      ? ["5 JSON-LD Schemas", "2,000+ words crawler content", "7/7 semantic HTML tags", "30+ ARIA attributes", "Near-perfect scores"]
      : ["5 JSON-LD Schemas", "2.000+ Wörter Crawler-Content", "7/7 semantische HTML-Tags", "30+ ARIA-Attribute", "Nahezu perfekte Scores"],
    linkText: isEnglish ? "View full Case Report" : "Case Report ansehen",
    linkHref: "/case-report",
  };

  const contactPath = isEnglish ? "/en/contact" : "/kontakt";

  return (
    <div className="bg-brand-light">
      <SEO
        title={labels.title}
        description={labels.seoDescription}
      />
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-6">
              {labels.title}
            </h1>
            <p className="text-lg text-brand-dark/70 leading-relaxed">
              {labels.intro}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="text-center p-6 bg-white rounded-lg border border-brand-grey/20">
              <div className="text-3xl font-bold text-brand-green mb-2">{experienceHighlights.yearsExperience}</div>
              <div className="text-sm text-brand-dark/70">{labels.stats.years}</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-brand-grey/20">
              <div className="text-3xl font-bold text-brand-green mb-2">{experienceHighlights.projectsCompleted}</div>
              <div className="text-sm text-brand-dark/70">{labels.stats.projects}</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-brand-grey/20">
              <div className="text-3xl font-bold text-brand-green mb-2">4</div>
              <div className="text-sm text-brand-dark/70">{labels.stats.partnerships}</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-brand-grey/20">
              <div className="text-3xl font-bold text-brand-green mb-2">EU</div>
              <div className="text-sm text-brand-dark/70">{labels.stats.international}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white" data-testid="section-case-report">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={isEnglish ? "Case Report" : "Case Report"}
            subtitle={isEnglish ? "Documented project with measurable results" : "Dokumentiertes Projekt mit messbaren Ergebnissen"}
          />
          <Card className="p-6 md:p-8 bg-gradient-to-r from-[#5FB94E]/5 to-[#1E9BD9]/5 border-[#5FB94E]/30" data-testid="card-case-report">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E9BD9]/10 rounded-full text-[#1E9BD9] text-sm font-medium mb-3">
                  <Search className="w-4 h-4" />
                  searchreadiness.io
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-2">{caseReport.title}</h3>
                <p className="text-sm text-brand-dark/50 mb-3">{caseReport.subtitle}</p>
                <p className="text-brand-dark/70 mb-4 leading-relaxed">{caseReport.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {caseReport.highlights.map((item, i) => (
                    <span key={i} className="inline-flex items-center gap-1 text-xs font-medium bg-white border border-brand-grey/20 text-brand-dark/70 px-2.5 py-1 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-[#5FB94E]" />
                      {item}
                    </span>
                  ))}
                </div>
                <Link href={caseReport.linkHref}>
                  <Button className="bg-[#5FB94E] text-white" data-testid="button-case-report-link">
                    {caseReport.linkText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="md:w-48 flex flex-row md:flex-col gap-3 md:justify-center">
                <div className="flex-1 text-center p-3 bg-white rounded-lg border border-brand-grey/20">
                  <div className="text-2xl font-bold text-[#5FB94E]" data-testid="text-metric-schemas">5</div>
                  <div className="text-xs text-brand-dark/60">JSON-LD Schemas</div>
                </div>
                <div className="flex-1 text-center p-3 bg-white rounded-lg border border-brand-grey/20">
                  <div className="text-2xl font-bold text-[#1E9BD9]" data-testid="text-metric-words">2.011</div>
                  <div className="text-xs text-brand-dark/60">{isEnglish ? "Words" : "Wörter"}</div>
                </div>
                <div className="flex-1 text-center p-3 bg-white rounded-lg border border-brand-grey/20">
                  <div className="text-2xl font-bold text-[#5FB94E]" data-testid="text-metric-aria">30+</div>
                  <div className="text-xs text-brand-dark/60">ARIA Attrs</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={labels.references.title}
            subtitle={labels.references.subtitle}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectRefsLabels.map((project: any, index: number) => {
              const label = project.industry || project.category || "";
              const industryIcon = label === "Cannabis" || label === "cannabis" ? Leaf 
                : label === "Medical Technology" || label === "Medizintechnik" || label === "medtech" ? Stethoscope
                : label === "ki" || label === "AI" ? Bot
                : ShoppingCart;
              const Icon = industryIcon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-white border-brand-grey/20"
                  data-testid={`project-card-${index}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-green" />
                    </div>
                    <span className="text-xs font-medium text-brand-green uppercase tracking-wide">
                      {label}
                    </span>
                  </div>
                  <h3 className="font-semibold text-brand-dark mb-2">{project.title}</h3>
                  <p className="text-sm text-brand-dark/70">{project.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={labels.experience.title}
            subtitle={labels.experience.subtitle}
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
            title={labels.projectTypes.title}
            subtitle={labels.projectTypes.subtitle}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypesLabels.map((type, index) => {
              const Icon = projectIcons[index] || Briefcase;
              return (
                <Card
                  key={index}
                  className="p-6 bg-white border-brand-grey/20"
                >
                  <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="font-semibold text-brand-dark mb-2">{type.title}</h3>
                  <p className="text-sm text-brand-dark/70">{type.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand
        title={labels.cta.title}
        subtitle={labels.cta.subtitle}
      />
    </div>
  );
}
