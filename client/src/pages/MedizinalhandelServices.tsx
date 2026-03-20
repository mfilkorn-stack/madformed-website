import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABand } from "@/components/CTABand";
import { SEO } from "@/components/SEO";
import { ServiceData, FAQData, BreadcrumbData } from "@/components/StructuredData";
import { RelatedServices } from "@/components/RelatedContent";
import { useServicesContent, useFaqsContent, usePageContent } from "@/hooks/useContent";
import { ArrowRight, ShoppingCart, Users, CheckCircle2 } from "lucide-react";

export default function MedizinalhandelServices() {
  const { medizinalhandelServices, medizinalhandelTargetGroups } = useServicesContent();
  const { medizinalhandelFaqs } = useFaqsContent();
  const { isEnglish, paths, labels } = usePageContent();
  const faqItems = medizinalhandelFaqs.map(faq => ({ question: faq.question, answer: faq.answer }));

  return (
    <div className="bg-brand-light">
      <SEO
        title={isEnglish ? "Medical Trade Consulting" : "Medizinalhandel Beratung"}
        description={isEnglish
          ? "Consulting for medical trade: Sales strategy, supplier management, logistics, key account management. For distributors and traders."
          : "Beratung für den Medizinalhandel: Vertriebsstrategie, Lieferantenmanagement, Logistik, Key Account Management. Für Händler und Distributoren."}
      />
      <ServiceData
        name={isEnglish ? "Medical Trade Consulting" : "Beratung Medizinalhandel"}
        description={isEnglish
          ? "Specialized consulting for medical products trade: Sales strategy, supplier management, key account management, and process optimization."
          : "Spezialisierte Beratung für den Handel mit Medizinprodukten: Vertriebsstrategie, Lieferantenmanagement, Key Account Management und Prozessoptimierung."}
        serviceType="Consulting"
      />
      <FAQData items={faqItems} />
      <BreadcrumbData items={[
        { name: isEnglish ? "Home" : "Start", url: isEnglish ? "/en" : "/" },
        { name: isEnglish ? "Services" : "Leistungen", url: paths.services },
        { name: isEnglish ? "Medical Trade" : "Medizinalhandel", url: paths.medizinalhandel }
      ]} />
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-brand-dark/60 mb-6">
            <Link href={paths.services}>
              <span className="hover:text-brand-cyan cursor-pointer">{isEnglish ? "Services" : "Leistungen"}</span>
            </Link>
            <span>/</span>
            <span className="text-brand-dark">{isEnglish ? "Medical Trade" : "Medizinalhandel"}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-cyan/10 rounded-full text-brand-cyan text-sm font-medium mb-4">
                <ShoppingCart className="w-4 h-4" />
                {isEnglish ? "Consulting Focus" : "Beratungsschwerpunkt"}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-6">
                {isEnglish ? "Medical Trade" : "Medizinalhandel"}
              </h1>
              <p className="text-lg text-brand-dark/70 mb-6 leading-relaxed">
                {isEnglish
                  ? "Specialized consulting for medical products trade – from sales strategy to supplier management to customer care. We understand the specifics of the pure trading business model."
                  : "Spezialisierte Beratung für den Handel mit Medizinprodukten – von der Vertriebsstrategie über Lieferantenmanagement bis zur Kundenbetreuung. Wir verstehen die Besonderheiten des rein handelnden Geschäftsmodells."}
              </p>
              <Link href={paths.contact}>
                <Button
                  size="lg"
                  className="bg-brand-cyan hover:bg-brand-cyan/90 text-white"
                  data-testid="button-contact-handel"
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
                {medizinalhandelTargetGroups.map((group, index) => (
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
            subtitle={isEnglish ? "Practice-oriented consulting for medical trade" : "Praxisorientierte Beratung für den Medizinalhandel"}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {medizinalhandelServices.map((service) => (
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
            title={isEnglish ? "Our Expertise" : "Unsere Expertise"}
            subtitle={isEnglish ? "What sets us apart in medical trade" : "Was uns im Medizinalhandel auszeichnet"}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-white border-brand-grey/20">
              <div className="w-12 h-12 bg-brand-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-brand-cyan" />
              </div>
              <h3 className="font-semibold text-brand-dark mb-2">{isEnglish ? "Product Knowledge" : "Produktkenntnisse"}</h3>
              <p className="text-sm text-brand-dark/70">
                {isEnglish
                  ? "Deep understanding of implants, capital equipment, and consumables in orthopedics, surgery, and anesthesia."
                  : "Tiefes Verständnis für Implantate, Investitionsgüter und Verbrauchsmaterialien in Orthopädie, Chirurgie und Anästhesie."}
              </p>
            </Card>
            <Card className="p-6 bg-white border-brand-grey/20">
              <div className="w-12 h-12 bg-brand-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-brand-cyan" />
              </div>
              <h3 className="font-semibold text-brand-dark mb-2">{isEnglish ? "Market Understanding" : "Marktverständnis"}</h3>
              <p className="text-sm text-brand-dark/70">
                {isEnglish
                  ? "Years of experience working with clinics, practices, surgical centers, and purchasing groups."
                  : "Jahrelange Erfahrung in der Zusammenarbeit mit Kliniken, Praxen, OP-Zentren und Einkaufsgemeinschaften."}
              </p>
            </Card>
            <Card className="p-6 bg-white border-brand-grey/20">
              <div className="w-12 h-12 bg-brand-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-brand-cyan" />
              </div>
              <h3 className="font-semibold text-brand-dark mb-2">{isEnglish ? "Manufacturer Network" : "Herstellernetzwerk"}</h3>
              <p className="text-sm text-brand-dark/70">
                {isEnglish
                  ? "Long-standing relationships with leading medical technology manufacturers and knowledge of distribution models."
                  : "Langjährige Beziehungen zu führenden Medizintechnik-Herstellern und Kenntnis der Distributionsmodelle."}
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={isEnglish ? "FAQ" : "Häufige Fragen"}
            subtitle={isEnglish ? "Answers to common questions about medical trade consulting" : "Antworten auf typische Fragen zur Medizinalhandel-Beratung"}
          />
          <Card className="p-6 md:p-8 bg-brand-light border-brand-grey/20">
            <FAQAccordion items={medizinalhandelFaqs} />
          </Card>
        </div>
      </section>

      <RelatedServices
        services={[
          {
            title: isEnglish ? "Medical Cannabis" : "Medizinisches Cannabis",
            description: isEnglish ? "EU-GMP/GDP consulting and market entry for cannabis companies." : "EU-GMP/GDP-Beratung und Markteintritt für Cannabis-Unternehmen.",
            href: paths.cannabis,
            icon: "cannabis",
            color: "green"
          },
          {
            title: isEnglish ? "Medical Technology" : "Medizintechnik",
            description: isEnglish ? "Go-to-Market and sales enablement for medical technology companies." : "Go-to-Market und Sales Enablement für Medizintechnik-Unternehmen.",
            href: paths.medtech,
            icon: "medtech",
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
              ? "Boost your trade sales team's productivity with our AI workshops. Copilot & ChatGPT for emails, proposals, and account preparation – practical and measurable."
              : "Steigern Sie die Produktivität Ihres Handelsvertriebs mit unseren KI-Workshops. Copilot & ChatGPT für E-Mails, Angebote und Account-Vorbereitung – praxisnah und messbar."}
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
        title={isEnglish ? "Request Medical Trade Consulting" : "Medizinalhandel-Beratung anfragen"}
        subtitle={isEnglish ? "Let's discuss your challenges." : "Lassen Sie uns Ihre Herausforderungen besprechen."}
      />
    </div>
  );
}
