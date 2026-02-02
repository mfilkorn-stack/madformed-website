import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/lib/i18n";
import { companyInfo, values } from "@/content/company";
import { companyLogos } from "@/content/references";
import { Building2, Target, Users, Shield, GraduationCap, Briefcase, Globe, Award } from "lucide-react";

const valueIcons = [Shield, Target, Users, Shield];

export default function UeberUns() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const founderProfile = {
    name: "Matthias Jörg Filkorn",
    title: isEnglish ? "Founder & Managing Director" : "Gründer & Geschäftsführer",
    education: isEnglish ? [
      { degree: "Master of Arts", field: "Health Economics", university: "Apollon University Bremen" },
      { degree: "Bachelor of Science", field: "Health Economics", university: "University of Cologne" },
      { degree: "Paramedic", field: "", university: "" },
    ] : [
      { degree: "Master of Arts", field: "Health Economics", university: "Apollon Hochschule Bremen" },
      { degree: "Bachelor of Science", field: "Health Economics", university: "Universität zu Köln" },
      { degree: "Notfallsanitäter", field: "", university: "" },
    ],
    languages: isEnglish 
      ? ["German (native)", "English (fluent)", "Portuguese (advanced)"]
      : ["Deutsch (Muttersprache)", "Englisch (fließend)", "Portugiesisch (fortgeschritten)"],
    highlights: isEnglish ? [
      "15+ years experience in Healthcare & Life Sciences",
      "Long-standing leadership experience at Smith & Nephew, Arthrex, Cansativa, aescologic",
      "CEO experience in medical cannabis sector",
      "M&A and restructuring expertise"
    ] : [
      "15+ Jahre Erfahrung in Healthcare & Life Sciences",
      "Langjährige Führungserfahrung bei Smith & Nephew, Arthrex, Cansativa, aescologic",
      "CEO-Erfahrung im Medizinalcannabis-Bereich",
      "M&A und Restrukturierungsexpertise"
    ]
  };

  const labels = {
    title: isEnglish ? "About Us" : "Über uns",
    seoDescription: isEnglish
      ? "MadforMed GmbH – specialized consulting company focusing on medical cannabis and medical technology. Learn more about our team and values."
      : "MadforMed GmbH – spezialisierte Beratungsgesellschaft mit Fokus auf medizinisches Cannabis und Medizintechnik. Erfahren Sie mehr über unser Team und unsere Werte.",
    intro: isEnglish
      ? "MadforMed is a specialized consulting company focusing on medical cannabis and medical technology. We combine industry expertise with a structured approach."
      : "MadforMed ist eine spezialisierte Beratungsgesellschaft mit Fokus auf medizinisches Cannabis und Medizintechnik. Wir verbinden Branchenexpertise mit strukturiertem Vorgehen.",
    founderSection: {
      title: isEnglish ? "Founder & Management" : "Gründer & Geschäftsführung",
      subtitle: isEnglish ? "First-hand experience and expertise" : "Erfahrung und Expertise aus erster Hand",
      education: isEnglish ? "Education" : "Ausbildung",
      languages: isEnglish ? "Languages" : "Sprachen",
    },
    companyData: {
      title: isEnglish ? "Company Data" : "Unternehmensdaten",
      company: isEnglish ? "Company" : "Firma",
      location: isEnglish ? "Location" : "Standort",
      focus: isEnglish ? "Focus Areas" : "Schwerpunkte",
      focusValue: isEnglish ? "Cannabis, Medical Technology" : "Cannabis, Medizintechnik",
      approach: isEnglish ? "Consulting Approach" : "Beratungsansatz",
      approachValue: isEnglish ? "B2B, project-based" : "B2B, projektbasiert",
      founded: isEnglish ? "Founded" : "Gründung",
    },
    career: {
      title: isEnglish ? "Professional Stations" : "Berufliche Stationen",
      subtitle: isEnglish ? "Experience from leading industry companies" : "Erfahrung aus führenden Unternehmen der Branche",
    },
    expertise: {
      title: isEnglish ? "Areas of Expertise" : "Erfahrungsschwerpunkte",
      subtitle: isEnglish ? "First-hand industry expertise" : "Branchenexpertise aus erster Hand",
      cannabis: {
        title: isEnglish ? "Medical Cannabis" : "Medizinisches Cannabis",
        items: isEnglish ? [
          "Regulatory framework (BtMG, AMG, EU-GMP/GDP)",
          "Supply chain management and logistics",
          "Quality management and documentation",
          "Market entry and business model development"
        ] : [
          "Regulatorische Rahmenbedingungen (BtMG, AMG, EU-GMP/GDP)",
          "Supply Chain Management und Logistik",
          "Qualitätsmanagement und Dokumentation",
          "Markteintritt und Geschäftsmodellentwicklung"
        ],
      },
      medtech: {
        title: isEnglish ? "Medical Technology" : "Medizintechnik",
        items: isEnglish ? [
          "Go-to-Market and business development",
          "Workflow optimization in OR and practice",
          "Sales enablement and training",
          "Project management and implementation"
        ] : [
          "Go-to-Market und Business Development",
          "Workflow-Optimierung in OP und Praxis",
          "Sales Enablement und Schulungen",
          "Projektmanagement und Implementierung"
        ],
      },
      ki: {
        title: isEnglish ? "AI Enablement" : "KI-Enablement",
        items: isEnglish ? [
          "AI workshops for sales teams",
          "Copilot & ChatGPT implementation",
          "Prompt playbooks and best practices",
          "Enablement programs and coaching"
        ] : [
          "KI-Workshops für Vertriebsteams",
          "Copilot & ChatGPT Implementierung",
          "Prompt-Playbooks und Best Practices",
          "Enablement-Programme und Coaching"
        ],
      },
    },
    valuesSection: {
      title: isEnglish ? "Our Values" : "Unsere Werte",
      subtitle: isEnglish ? "Principles that guide our work" : "Prinzipien, die unsere Arbeit leiten",
    },
    network: {
      title: isEnglish ? "Network & Partners" : "Netzwerk & Partner",
      text: isEnglish
        ? "We work with a network of experts and partners to provide our clients with access to specialized know-how when needed. This includes lawyers, tax advisors, certification bodies, and industry specialists. We are happy to facilitate contact as needed."
        : "Wir arbeiten mit einem Netzwerk von Experten und Partnern zusammen, um unseren Kunden bei Bedarf Zugang zu spezialisiertem Know-how zu ermöglichen. Dies umfasst Rechtsanwälte, Steuerberater, Zertifizierungsstellen und Branchenspezialisten. Bei Bedarf vermitteln wir gerne den Kontakt.",
    },
  };

  const valuesLabels = isEnglish ? [
    { title: "Compliance-First", description: "Regulatory safety is not an afterthought, but the foundation of every recommendation." },
    { title: "Results-Oriented", description: "Clear milestones, measurable results, and realistic timelines." },
    { title: "Partnership", description: "We work at eye level and see ourselves as partners for your goals." },
    { title: "Discretion", description: "Confidentiality and discretion are self-evident in sensitive industries." },
  ] : values;

  return (
    <div className="bg-brand-light">
      <SEO
        title={labels.title}
        description={labels.seoDescription}
      />
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-6">
              {labels.title}
            </h1>
            <p className="text-lg text-brand-dark/70 leading-relaxed">
              {labels.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={labels.founderSection.title}
            subtitle={labels.founderSection.subtitle}
          />
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="p-6 md:p-8 bg-brand-light border-brand-grey/20">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-24 h-24 bg-brand-green/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-3xl font-bold text-brand-green">MF</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand-dark mb-1">{founderProfile.name}</h3>
                    <p className="text-brand-green font-medium mb-4">{founderProfile.title}</p>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 text-sm font-medium text-brand-dark mb-2">
                          <GraduationCap className="w-4 h-4 text-brand-green" />
                          {labels.founderSection.education}
                        </div>
                        <ul className="space-y-1 text-sm text-brand-dark/70">
                          {founderProfile.education.map((edu, i) => (
                            <li key={i}>
                              {edu.field && edu.university 
                                ? `${edu.degree} – ${edu.field}, ${edu.university}`
                                : edu.degree}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-sm font-medium text-brand-dark mb-2">
                          <Globe className="w-4 h-4 text-brand-green" />
                          {labels.founderSection.languages}
                        </div>
                        <p className="text-sm text-brand-dark/70">{founderProfile.languages.join(" • ")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {founderProfile.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-brand-grey/20">
                    <Award className="w-5 h-5 text-brand-green shrink-0" />
                    <span className="text-sm text-brand-dark">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-brand-light border-brand-grey/20">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-5 h-5 text-brand-green" />
                <h3 className="font-semibold text-brand-dark">{labels.companyData.title}</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-brand-grey/10 pb-2">
                  <span className="text-brand-dark/60">{labels.companyData.company}</span>
                  <span className="text-brand-dark font-medium">{companyInfo.name}</span>
                </div>
                <div className="flex justify-between border-b border-brand-grey/10 pb-2">
                  <span className="text-brand-dark/60">{labels.companyData.location}</span>
                  <span className="text-brand-dark font-medium">{companyInfo.address.city}</span>
                </div>
                <div className="flex justify-between border-b border-brand-grey/10 pb-2">
                  <span className="text-brand-dark/60">{labels.companyData.focus}</span>
                  <span className="text-brand-dark font-medium">{labels.companyData.focusValue}</span>
                </div>
                <div className="flex justify-between border-b border-brand-grey/10 pb-2">
                  <span className="text-brand-dark/60">{labels.companyData.approach}</span>
                  <span className="text-brand-dark font-medium">{labels.companyData.approachValue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-dark/60">{labels.companyData.founded}</span>
                  <span className="text-brand-dark font-medium">2023</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={labels.career.title}
            subtitle={labels.career.subtitle}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyLogos.map((company, index) => (
              <Card
                key={index}
                className="p-6 bg-white border-brand-grey/20 text-center"
              >
                <div className="w-14 h-14 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="font-semibold text-brand-dark mb-1">{company.name}</h3>
                <p className="text-xs text-brand-green font-medium mb-2">{company.industry}</p>
                <p className="text-sm text-brand-dark/60">{company.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={labels.expertise.title}
            subtitle={labels.expertise.subtitle}
          />
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white border-brand-grey/20">
              <h3 className="font-semibold text-brand-dark mb-4">{labels.expertise.cannabis.title}</h3>
              <ul className="space-y-2 text-sm text-brand-dark/70">
                {labels.expertise.cannabis.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-6 bg-white border-brand-grey/20">
              <h3 className="font-semibold text-brand-dark mb-4">{labels.expertise.medtech.title}</h3>
              <ul className="space-y-2 text-sm text-brand-dark/70">
                {labels.expertise.medtech.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-6 bg-white border-brand-grey/20">
              <h3 className="font-semibold text-brand-dark mb-4">{labels.expertise.ki.title}</h3>
              <ul className="space-y-2 text-sm text-brand-dark/70">
                {labels.expertise.ki.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={labels.valuesSection.title}
            subtitle={labels.valuesSection.subtitle}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuesLabels.map((value, index) => {
              const Icon = valueIcons[index] || Shield;
              return (
                <Card key={index} className="p-6 bg-brand-light border-brand-grey/20 text-center">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="font-semibold text-brand-dark mb-2">{value.title}</h3>
                  <p className="text-sm text-brand-dark/70">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-6 md:p-8 bg-white border-brand-grey/20">
            <h3 className="font-semibold text-brand-dark mb-4">{labels.network.title}</h3>
            <p className="text-brand-dark/70 leading-relaxed">
              {labels.network.text}
            </p>
          </Card>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
