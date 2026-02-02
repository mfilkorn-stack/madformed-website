import { companyInfo } from "@/content/company";
import { SEO } from "@/components/SEO";

export default function Datenschutz() {
  return (
    <div className="bg-brand-light">
      <SEO
        title="Datenschutzerklärung"
        description="Datenschutzerklärung der MadforMed GmbH - Informationen zur Datenverarbeitung, Ihren Rechten und unseren Datenschutzpraktiken."
      />
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">
            Datenschutzerklärung
          </h1>

          <div className="bg-white rounded-lg border border-brand-grey/20 p-6 md:p-8 space-y-8">
            
            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                1. Datenschutz auf einen Blick
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. 
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                2. Verantwortliche Stelle
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                {companyInfo.name}
                <br />
                {companyInfo.address.street}
                <br />
                {companyInfo.address.zip} {companyInfo.address.city}
                <br />
                {companyInfo.address.country}
                <br /><br />
                Geschäftsführer: {companyInfo.legal.geschaeftsfuehrer}
                <br />
                E-Mail: {companyInfo.contact.email}
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              
              <h3 className="font-medium text-brand-dark mb-2 mt-4">Datenschutz</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Wir verarbeiten Ihre personenbezogenen Daten ausschließlich im Rahmen der gesetzlichen 
                Datenschutzvorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO).
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">Rechtsgrundlagen der Verarbeitung</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage von:
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung</li>
                <li>Art. 6 Abs. 1 lit. b DSGVO – Vertrag / vorvertragliche Maßnahmen</li>
                <li>Art. 6 Abs. 1 lit. c DSGVO – rechtliche Verpflichtung</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse</li>
              </ul>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">Ihre Rechte</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                Sie haben jederzeit das Recht auf:
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Auskunft (Art. 15 DSGVO)</li>
                <li>Berichtigung (Art. 16 DSGVO)</li>
                <li>Löschung (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              </ul>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Zudem besteht ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                4. Hosting
              </h2>
              
              <h3 className="font-medium text-brand-dark mb-2">Hosting durch IONOS</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Diese Website wird bei der IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Deutschland gehostet.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                IONOS verarbeitet personenbezogene Daten im Rahmen eines Auftragsverarbeitungsvertrages 
                gemäß Art. 28 DSGVO.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
                <br />
                <strong>Berechtigtes Interesse:</strong> sichere und stabile Bereitstellung der Website.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                5. Datenerfassung auf dieser Website
              </h2>
              
              <h3 className="font-medium text-brand-dark mb-2">Server-Log-Dateien</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                IONOS erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien:
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse (gekürzt oder anonymisiert)</li>
              </ul>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Eine Zusammenführung mit anderen Datenquellen erfolgt nicht.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                6. Kontaktformular
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Wenn Sie uns über das Kontaktformular kontaktieren, werden Ihre Angaben aus dem Formular 
                inklusive der von Ihnen angegebenen Kontaktdaten verarbeitet, um Ihre Anfrage zu bearbeiten.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2 mb-2">
                <strong>Verarbeitete Daten:</strong>
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>ggf. Telefonnummer</li>
                <li>Inhalt der Nachricht</li>
              </ul>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                <strong>Rechtsgrundlage:</strong>
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1 mt-1">
                <li>Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li>
              </ul>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Die Daten werden gelöscht, sobald sie für den Zweck nicht mehr erforderlich sind.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                7. Kontaktaufnahme per E-Mail
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Bei Kontaktaufnahme per E-Mail werden die übermittelten personenbezogenen Daten 
                ausschließlich zur Bearbeitung der Anfrage verwendet.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                8. Google Analytics
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Diese Website nutzt Google Analytics 4, einen Webanalysedienst der Google Ireland Limited, 
                Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website ermöglichen.
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">IP-Anonymisierung</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Die IP-Adresse wird von Google innerhalb der EU oder des EWR gekürzt, bevor sie gespeichert wird.
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">Zweck der Verarbeitung</h3>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Analyse des Nutzerverhaltens</li>
                <li>Optimierung der Website</li>
                <li>Reichweitenmessung</li>
              </ul>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">Rechtsgrundlage</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Die Nutzung von Google Analytics erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß:
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1 mt-1">
                <li>Art. 6 Abs. 1 lit. a DSGVO</li>
                <li>§ 25 Abs. 1 TTDSG</li>
              </ul>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Die Einwilligung erfolgt über ein Cookie-Consent-Tool und kann jederzeit widerrufen werden.
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">Datenübermittlung in Drittländer</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Eine Übertragung von Daten in die USA kann nicht ausgeschlossen werden. Google stützt sich 
                hierbei auf Standardvertragsklauseln (SCCs) der EU-Kommission.
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">Widerspruch / Opt-Out</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Sie können Ihre Einwilligung jederzeit über die Cookie-Einstellungen widerrufen oder das 
                Browser-Add-on zur Deaktivierung von Google Analytics nutzen.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                9. Cookies
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                Diese Website verwendet:
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>technisch notwendige Cookies</li>
                <li>Analyse-Cookies (Google Analytics, nur mit Einwilligung)</li>
              </ul>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Beim ersten Besuch der Website werden Sie über ein Cookie-Banner um Ihre Zustimmung gebeten.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                10. Einsatz von Künstlicher Intelligenz (KI)
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                Sofern KI-gestützte Systeme eingesetzt werden (z. B. zur Textanalyse oder 
                Entscheidungsunterstützung), erfolgt dies:
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>ohne automatisierte Einzelentscheidungen im Sinne von Art. 22 DSGVO</li>
                <li>ohne Profilbildung</li>
                <li>unter Wahrung der Vertraulichkeit</li>
              </ul>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                11. Weitergabe von Daten
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                Eine Weitergabe personenbezogener Daten erfolgt nur, wenn:
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>eine gesetzliche Verpflichtung besteht</li>
                <li>Sie eingewilligt haben</li>
                <li>dies zur Vertragserfüllung erforderlich ist</li>
              </ul>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                12. Aktualität und Änderungen
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Diese Datenschutzerklärung ist aktuell gültig und wird bei Bedarf angepasst.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
