import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABand } from "@/components/CTABand";
import { SEO } from "@/components/SEO";
import { cannabisServices, cannabisTargetGroups } from "@/content/services";
import { cannabisFaqs } from "@/content/faqs";
import { ArrowRight, Leaf, Users } from "lucide-react";

export default function CannabisServices() {
  return (
    <div className="bg-brand-light">
      <SEO
        title="Medizinisches Cannabis Beratung"
        description="Beratung für medizinisches Cannabis: Markteintritt, EU-GMP/GDP, Supply Chain, QM-Konzeption. Für Hersteller, Importeure, Großhändler und Apotheken."
      />
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-brand-dark/60 mb-6">
            <Link href="/leistungen">
              <span className="hover:text-brand-green cursor-pointer">Leistungen</span>
            </Link>
            <span>/</span>
            <span className="text-brand-dark">Medizinisches Cannabis</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 rounded-full text-brand-green text-sm font-medium mb-4">
                <Leaf className="w-4 h-4" />
                Beratungsschwerpunkt
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-6">
                Medizinisches Cannabis
              </h1>
              <p className="text-lg text-brand-dark/70 mb-6 leading-relaxed">
                Der deutsche Markt für medizinisches Cannabis ist hochreguliert und 
                dynamisch. Wir unterstützen Unternehmen bei der strategischen 
                Positionierung, operativen Umsetzung und Compliance-Sicherung.
              </p>
              <Link href="/kontakt">
                <Button
                  size="lg"
                  className="bg-brand-green hover:bg-brand-green/90 text-white"
                  data-testid="button-contact-cannabis"
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
                {cannabisTargetGroups.map((group, index) => (
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
            subtitle="Modulare Beratung – passend zu Ihren Anforderungen"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cannabisServices.map((service) => (
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Häufige Fragen"
            subtitle="Antworten auf typische Fragen zum Bereich medizinisches Cannabis"
          />
          <Card className="p-6 md:p-8 bg-white border-brand-grey/20">
            <FAQAccordion items={cannabisFaqs} />
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/20 text-brand-green text-sm font-medium rounded-full mb-4">
            Passend dazu
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            KI-Enablement für Ihr Team
          </h2>
          <p className="text-white/70 mb-8">
            Ergänzen Sie Ihre Cannabis-Beratung mit unseren KI-Workshops für Vertrieb und Business Development.
            Copilot & ChatGPT praxisnah einführen – compliance-bewusst und messbar.
          </p>
          <Link href="/leistungen/ki-sales-bd">
            <Button className="bg-brand-green hover:bg-brand-green/90 text-white">
              KI-Workshops entdecken
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <CTABand
        title="Cannabis-Beratung anfragen"
        subtitle="Besprechen Sie Ihr Vorhaben mit uns – unverbindlich und vertraulich."
      />
    </div>
  );
}
