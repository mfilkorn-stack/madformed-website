import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";
import { SEO } from "@/components/SEO";
import { ArrowRight, Leaf, Stethoscope, ShoppingCart, Bot } from "lucide-react";

export default function Leistungen() {
  return (
    <div className="bg-brand-light">
      <SEO
        title="Unsere Leistungen"
        description="Strukturierte Beratung für medizinisches Cannabis und Medizintechnik – maßgeschneidert für Ihre Herausforderungen in regulierten Wachstumsmärkten."
      />
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
              Unsere Leistungen
            </h1>
            <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
              Strukturierte Beratung für zwei regulierte Wachstumsmärkte – 
              maßgeschneidert für Ihre Herausforderungen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card
              className="p-6 lg:p-8 bg-white border-brand-grey/20 hover:border-brand-green transition-colors"
              data-testid="card-cannabis-overview"
            >
              <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-5">
                <Leaf className="w-7 h-7 text-brand-green" />
              </div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">
                Medizinisches Cannabis
              </h2>
              <p className="text-brand-dark/70 mb-5 leading-relaxed text-sm">
                Navigation durch regulatorische Anforderungen und Entwicklung 
                tragfähiger Geschäftsmodelle im wachsenden Cannabis-Markt.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-brand-dark/70">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                  Markteintritt & Strategie
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                  EU-GMP / EU-GDP Beratung
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                  Supply Chain & Logistik
                </li>
              </ul>
              <Link href="/leistungen/medizinisches-cannabis">
                <Button
                  className="bg-brand-green hover:bg-brand-green/90 text-white w-full"
                  data-testid="button-cannabis-details"
                >
                  Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>

            <Card
              className="p-6 lg:p-8 bg-white border-brand-grey/20 hover:border-brand-cyan transition-colors"
              data-testid="card-medtech-overview"
            >
              <div className="w-14 h-14 bg-brand-cyan/10 rounded-xl flex items-center justify-center mb-5">
                <Stethoscope className="w-7 h-7 text-brand-cyan" />
              </div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">
                Medizintechnik
              </h2>
              <p className="text-brand-dark/70 mb-5 leading-relaxed text-sm">
                Praxisorientierte Beratung für produzierende Medizintechnik-Unternehmen 
                von Markteinführung bis Vertriebsschulung.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-brand-dark/70">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
                  Go-to-Market & BD
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
                  Prozessoptimierung
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
                  Sales Enablement
                </li>
              </ul>
              <Link href="/leistungen/medizintechnik">
                <Button
                  className="bg-brand-cyan hover:bg-brand-cyan/90 text-white w-full"
                  data-testid="button-medtech-details"
                >
                  Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>

            <Card
              className="p-6 lg:p-8 bg-white border-brand-grey/20 hover:border-brand-cyan transition-colors"
              data-testid="card-handel-overview"
            >
              <div className="w-14 h-14 bg-brand-cyan/10 rounded-xl flex items-center justify-center mb-5">
                <ShoppingCart className="w-7 h-7 text-brand-cyan" />
              </div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">
                Medizinalhandel
              </h2>
              <p className="text-brand-dark/70 mb-5 leading-relaxed text-sm">
                Spezialisierte Beratung für Händler und Distributoren von 
                Medizinprodukten – vom Vertrieb bis zur Kundenbetreuung.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-brand-dark/70">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
                  Vertriebsstrategie
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
                  Lieferantenmanagement
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
                  Key Account Management
                </li>
              </ul>
              <Link href="/leistungen/medizinalhandel">
                <Button
                  className="bg-brand-cyan hover:bg-brand-cyan/90 text-white w-full"
                  data-testid="button-handel-details"
                >
                  Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>
          </div>

          <Card
            className="p-8 lg:p-10 mt-8 bg-gradient-to-r from-brand-dark to-brand-dark/95 border-transparent"
            style={{ borderImage: "linear-gradient(to right, #5FB94E, #1E9BD9) 1", borderWidth: "2px", borderStyle: "solid" }}
            data-testid="card-ki-overview"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-brand-green/20 to-brand-cyan/20 text-brand-cyan text-sm font-medium rounded-full mb-4">
                  <Bot className="w-4 h-4" />
                  Querschnittsleistung
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  KI für Sales & Business Development
                </h2>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Praktische Einführung in Copilot & ChatGPT für Vertriebsteams. 
                  Workshops, Use-Cases und Enablement – praxisnah, messbar, compliance-bewusst.
                </p>
                <p className="text-sm text-brand-green mb-6">
                  Diese Leistung ist unabhängig vom Fachbereich buchbar und kombinierbar 
                  mit unseren Cannabis-, Medizintechnik- und Handels-Beratungen.
                </p>
                <Link href="/leistungen/ki-sales-bd">
                  <Button
                    className="bg-brand-green hover:bg-brand-green/90 text-white"
                    data-testid="button-ki-details"
                  >
                    Alle Details ansehen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/10 rounded-lg text-center">
                  <div className="text-2xl font-bold text-brand-green mb-1">2h</div>
                  <div className="text-xs text-white/70">Kickstart Workshop</div>
                </div>
                <div className="p-4 bg-white/10 rounded-lg text-center">
                  <div className="text-2xl font-bold text-brand-green mb-1">½ Tag</div>
                  <div className="text-xs text-white/70">Team-Workshop</div>
                </div>
                <div className="p-4 bg-white/10 rounded-lg text-center">
                  <div className="text-2xl font-bold text-brand-green mb-1">4 Wo.</div>
                  <div className="text-xs text-white/70">Enablement</div>
                </div>
                <div className="p-4 bg-white/10 rounded-lg text-center">
                  <div className="text-2xl font-bold text-brand-green mb-1">20+</div>
                  <div className="text-xs text-white/70">Prompt-Vorlagen</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Weiterführende Informationen"
            subtitle="Erfahren Sie mehr über unsere Projekte und aktuelle Themen"
          />
          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/projekte">
              <Card className="p-6 bg-brand-light border-brand-grey/20 hover:border-brand-green transition-colors cursor-pointer group">
                <h3 className="font-semibold text-brand-dark mb-2">Referenzprojekte</h3>
                <p className="text-sm text-brand-dark/70 mb-4">
                  Anonymisierte Beispiele aus unserer Beratungspraxis
                </p>
                <span className="inline-flex items-center text-brand-green text-sm font-medium">
                  Zu den Projekten
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Card>
            </Link>
            <Link href="/kontakt">
              <Card className="p-6 bg-brand-light border-brand-grey/20 hover:border-brand-green transition-colors cursor-pointer group">
                <h3 className="font-semibold text-brand-dark mb-2">Beratungsgespräch</h3>
                <p className="text-sm text-brand-dark/70 mb-4">
                  Vereinbaren Sie ein unverbindliches Erstgespräch
                </p>
                <span className="inline-flex items-center text-brand-green text-sm font-medium">
                  Kontakt aufnehmen
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
