import { companyInfo } from "@/content/company";
import { SEO } from "@/components/SEO";
import { AlertTriangle } from "lucide-react";

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
                1. Datenschutz auf einen Blick
              </h2>
              <div className="space-y-4 text-sm text-brand-dark/70">
                <div>
                  <h3 className="font-medium text-brand-dark mb-1">Allgemeine Hinweise</h3>
                  <p>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, 
                    was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere 
                    Website besuchen.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark mb-1">Datenerfassung auf unserer Website</h3>
                  <p>
                    Die Datenverarbeitung auf dieser Website erfolgt durch den 
                    Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum 
                    dieser Website entnehmen.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                2. Verantwortliche Stelle
              </h2>
              <p className="text-sm text-brand-dark/70">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                <br /><br />
                {companyInfo.name}
                <br />
                {companyInfo.address.street}
                <br />
                {companyInfo.address.zip} {companyInfo.address.city}
                <br />
                E-Mail: {companyInfo.contact.email}
                <br />
                Telefon: {companyInfo.contact.phone}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                3. Kontaktformular
              </h2>
              <p className="text-sm text-brand-dark/70">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden 
                Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort 
                angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den 
                Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir 
                nicht ohne Ihre Einwilligung weiter.
                <br /><br />
                Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt 
                somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 
                lit. a DSGVO).
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                4. Hosting
              </h2>
              <p className="text-sm text-brand-dark/70">
                Unsere Website wird bei [Hosting-Anbieter] gehostet. Der Hoster 
                erhebt in sog. Logfiles folgende Daten, die Ihr Browser übermittelt:
                <br /><br />
                IP-Adresse, die Adresse der vorher besuchten Website (Referer 
                Anfrage-Header), Datum und Uhrzeit der Anfrage, Zeitzonendifferenz 
                zur Greenwich Mean Time, Inhalt der Anforderung, HTTP-Statuscode, 
                übertragene Datenmenge, Website, von der die Anforderung kommt und 
                Informationen zu Browser und Betriebssystem.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                5. Cookies und Tracking
              </h2>
              <p className="text-sm text-brand-dark/70">
                Diese Website verwendet standardmäßig keine Tracking-Cookies oder 
                Analyse-Tools von Drittanbietern. Es werden nur technisch notwendige 
                Cookies verwendet, die für den Betrieb der Website erforderlich sind.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                6. Ihre Rechte
              </h2>
              <p className="text-sm text-brand-dark/70">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre 
                gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger 
                und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, 
                Sperrung oder Löschung dieser Daten.
                <br /><br />
                Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten 
                können Sie sich jederzeit unter der im Impressum angegebenen Adresse 
                an uns wenden.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                7. SSL-Verschlüsselung
              </h2>
              <p className="text-sm text-brand-dark/70">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der 
                Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung. Eine 
                verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile 
                des Browsers von "http://" auf "https://" wechselt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
