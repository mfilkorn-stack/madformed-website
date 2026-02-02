import { companyInfo } from "@/content/company";
import { SEO } from "@/components/SEO";

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
                Vertreten durch den Geschäftsführer
              </h2>
              <p className="text-brand-dark/70">
                {companyInfo.legal.geschaeftsfuehrer}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                Kontakt
              </h2>
              <p className="text-brand-dark/70">
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
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="text-brand-dark/70">
                {companyInfo.legal.geschaeftsfuehrer}
                <br />
                {companyInfo.address.street}
                <br />
                {companyInfo.address.zip} {companyInfo.address.city}
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                Beratungs- und Haftungsausschluss
              </h2>
              <p className="text-brand-dark/70 text-sm leading-relaxed">
                Die auf dieser Website bereitgestellten Informationen, Inhalte und Darstellungen 
                dienen ausschließlich der allgemeinen Information über Leistungen der MadforMed GmbH 
                und stellen keine rechtliche, steuerliche, medizinische oder regulatorische Beratung 
                im Einzelfall dar.
              </p>
              <p className="text-brand-dark/70 text-sm leading-relaxed mt-3">
                Insbesondere ersetzen die Inhalte keine individuelle Fachberatung durch entsprechend 
                qualifizierte Berufsgruppen (z. B. Rechtsanwälte, Steuerberater, Ärzte, Apotheker, 
                Regulatory- oder Compliance-Experten).
              </p>
              <p className="text-brand-dark/70 text-sm leading-relaxed mt-3">
                Die MadforMed GmbH übernimmt keine Haftung für Entscheidungen oder Maßnahmen, die auf 
                Grundlage der auf dieser Website bereitgestellten Informationen getroffen werden. 
                Eine Haftung entsteht ausschließlich im Rahmen eines separat geschlossenen, 
                schriftlichen Beratungs- oder Dienstleistungsvertrages.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                Haftung für Inhalte
              </h2>
              <p className="text-brand-dark/70 text-sm leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen 
                Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir 
                als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                rechtswidrige Tätigkeit hinweisen.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                Haftung für Links
              </h2>
              <p className="text-brand-dark/70 text-sm leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir 
                keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine 
                Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige 
                Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                Urheberrecht
              </h2>
              <p className="text-brand-dark/70 text-sm leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
