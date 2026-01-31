import { companyInfo } from "@/content/company";
import { SEO } from "@/components/SEO";
import { AlertTriangle } from "lucide-react";

export default function Impressum() {
  return (
    <div className="bg-brand-light">
      <SEO
        title="Impressum"
        description="Impressum der MadforMed GmbH - Angaben gemäß § 5 TMG, Kontaktdaten und rechtliche Hinweise."
      />
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">
            Impressum
          </h1>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-800">
              <strong>Hinweis:</strong> Diese Seite enthält Platzhalter und muss 
              vor der Veröffentlichung rechtlich geprüft und vervollständigt werden.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-brand-grey/20 p-6 md:p-8 space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="text-brand-dark/70">
                {companyInfo.name}
                <br />
                {companyInfo.address.street}
                <br />
                {companyInfo.address.zip} {companyInfo.address.city}
                <br />
                {companyInfo.address.country}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                Vertreten durch
              </h2>
              <p className="text-brand-dark/70">
                Geschäftsführer: {companyInfo.legal.geschaeftsfuehrer}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                Kontakt
              </h2>
              <p className="text-brand-dark/70">
                Telefon: {companyInfo.contact.phone}
                <br />
                E-Mail: {companyInfo.contact.email}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                Registereintrag
              </h2>
              <p className="text-brand-dark/70">
                Eintragung im Handelsregister
                <br />
                Registergericht: {companyInfo.legal.handelsregister}
                <br />
                Registernummer: {companyInfo.legal.hrb}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                Umsatzsteuer-ID
              </h2>
              <p className="text-brand-dark/70">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                <br />
                {companyInfo.legal.ustId}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                Haftungsausschluss
              </h2>
              <div className="space-y-4 text-sm text-brand-dark/70">
                <div>
                  <h3 className="font-medium text-brand-dark mb-1">Haftung für Inhalte</h3>
                  <p>
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. 
                    Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte 
                    können wir jedoch keine Gewähr übernehmen.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark mb-1">Haftung für Links</h3>
                  <p>
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf 
                    deren Inhalte wir keinen Einfluss haben. Deshalb können wir für 
                    diese fremden Inhalte auch keine Gewähr übernehmen.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark mb-1">Urheberrecht</h3>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf 
                    diesen Seiten unterliegen dem deutschen Urheberrecht.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
