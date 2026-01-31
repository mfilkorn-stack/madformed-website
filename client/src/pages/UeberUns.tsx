import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";
import { SEO } from "@/components/SEO";
import { companyInfo, values } from "@/content/company";
import { Building2, Target, Users, Shield } from "lucide-react";

const valueIcons = [Shield, Target, Users, Shield];

export default function UeberUns() {
  return (
    <div className="bg-brand-light">
      <SEO
        title="Über uns"
        description="MadforMed GmbH – spezialisierte Beratungsgesellschaft mit Fokus auf medizinisches Cannabis und Medizintechnik. Erfahren Sie mehr über unser Team und unsere Werte."
      />
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-6">
              Über uns
            </h1>
            <p className="text-lg text-brand-dark/70 leading-relaxed">
              MadforMed ist eine spezialisierte Beratungsgesellschaft mit Fokus auf 
              medizinisches Cannabis und Medizintechnik. Wir verbinden Branchenexpertise 
              mit strukturiertem Vorgehen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
                Unser Profil
              </h2>
              <div className="space-y-4 text-brand-dark/70 leading-relaxed">
                <p>
                  Die MadforMed GmbH wurde gegründet, um Unternehmen in zwei dynamischen 
                  und regulierten Wachstumsmärkten zu begleiten: medizinisches Cannabis 
                  und Medizintechnik.
                </p>
                <p>
                  Unsere Berater verfügen über langjährige Erfahrung in beiden Branchen – 
                  von der strategischen Planung über operative Prozesse bis zur Umsetzung 
                  komplexer Projekte.
                </p>
                <p>
                  Wir verstehen die spezifischen Herausforderungen regulierter Märkte und 
                  kombinieren Branchenwissen mit bewährten Beratungsmethoden.
                </p>
              </div>
            </div>

            <Card className="p-6 bg-brand-light border-brand-grey/20">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-5 h-5 text-brand-green" />
                <h3 className="font-semibold text-brand-dark">Unternehmensdaten</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-brand-grey/10 pb-2">
                  <span className="text-brand-dark/60">Firma</span>
                  <span className="text-brand-dark font-medium">{companyInfo.name}</span>
                </div>
                <div className="flex justify-between border-b border-brand-grey/10 pb-2">
                  <span className="text-brand-dark/60">Standort</span>
                  <span className="text-brand-dark font-medium">{companyInfo.address.city}</span>
                </div>
                <div className="flex justify-between border-b border-brand-grey/10 pb-2">
                  <span className="text-brand-dark/60">Schwerpunkte</span>
                  <span className="text-brand-dark font-medium">Cannabis, Medizintechnik</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-dark/60">Beratungsansatz</span>
                  <span className="text-brand-dark font-medium">B2B, projektbasiert</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Erfahrungsschwerpunkte"
            subtitle="Branchenexpertise aus erster Hand"
          />
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white border-brand-grey/20">
              <h3 className="font-semibold text-brand-dark mb-4">Medizinisches Cannabis</h3>
              <ul className="space-y-2 text-sm text-brand-dark/70">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 shrink-0" />
                  Regulatorische Rahmenbedingungen (BtMG, AMG, EU-GMP/GDP)
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 shrink-0" />
                  Supply Chain Management und Logistik
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 shrink-0" />
                  Qualitätsmanagement und Dokumentation
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 shrink-0" />
                  Markteintritt und Geschäftsmodellentwicklung
                </li>
              </ul>
            </Card>
            <Card className="p-6 bg-white border-brand-grey/20">
              <h3 className="font-semibold text-brand-dark mb-4">Medizintechnik</h3>
              <ul className="space-y-2 text-sm text-brand-dark/70">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 shrink-0" />
                  Go-to-Market und Business Development
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 shrink-0" />
                  Workflow-Optimierung in OP und Praxis
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 shrink-0" />
                  Sales Enablement und Schulungen
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 shrink-0" />
                  Projektmanagement und Implementierung
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Unsere Werte"
            subtitle="Prinzipien, die unsere Arbeit leiten"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
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
            <h3 className="font-semibold text-brand-dark mb-4">Netzwerk & Partner</h3>
            <p className="text-brand-dark/70 leading-relaxed">
              Wir arbeiten mit einem Netzwerk von Experten und Partnern zusammen, um 
              unseren Kunden bei Bedarf Zugang zu spezialisiertem Know-how zu ermöglichen. 
              Dies umfasst Rechtsanwälte, Steuerberater, Zertifizierungsstellen und 
              Branchenspezialisten. Bei Bedarf vermitteln wir gerne den Kontakt.
            </p>
          </Card>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
