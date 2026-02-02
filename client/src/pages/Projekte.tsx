import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/lib/i18n";
import { projectTypes } from "@/content/company";
import { projectReferences, companyLogos, experienceHighlights } from "@/content/references";
import { ArrowRight, FileText, Briefcase, LayoutGrid, TrendingUp, Leaf, Stethoscope, ShoppingCart, CheckCircle2, Building2 } from "lucide-react";

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

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={labels.references.title}
            subtitle={labels.references.subtitle}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectRefsLabels.map((project, index) => {
              const industryIcon = project.industry === "Cannabis" ? Leaf 
                : project.industry === "Medical Technology" || project.industry === "Medizintechnik" ? Stethoscope 
                : ShoppingCart;
              const Icon = industryIcon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-brand-light border-brand-grey/20"
                  data-testid={`project-card-${index}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-green" />
                    </div>
                    <span className="text-xs font-medium text-brand-green uppercase tracking-wide">
                      {project.industry}
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

      <CTABand
        title={labels.cta.title}
        subtitle={labels.cta.subtitle}
      />
    </div>
  );
}
