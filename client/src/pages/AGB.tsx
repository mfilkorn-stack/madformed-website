import { companyInfo } from "@/content/company";
import { SEO } from "@/components/SEO";

export default function AGB() {
  return (
    <div className="bg-brand-light">
      <SEO
        title="Allgemeine Geschäftsbedingungen"
        description="Allgemeine Geschäftsbedingungen der MadforMed GmbH – Geltungsbereich, Leistungen, KI-Einsatz, Haftung und Vertraulichkeit."
      />
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>

          <div className="bg-white rounded-lg border border-brand-grey/20 p-6 md:p-8 space-y-8">

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 1 Geltungsbereich
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Geschäftsbeziehungen
                zwischen der {companyInfo.name}, {companyInfo.address.street},{" "}
                {companyInfo.address.zip} {companyInfo.address.city} (nachfolgend „Auftragnehmer")
                und dem jeweiligen Auftraggeber (nachfolgend „Auftraggeber").
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Abweichende, entgegenstehende oder ergänzende AGB des Auftraggebers werden nur dann
                Vertragsbestandteil, wenn der Auftragnehmer ihrer Geltung ausdrücklich schriftlich
                zugestimmt hat.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 2 Vertragsgegenstand und Leistungsumfang
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Der Auftragnehmer erbringt Beratungs- und Dienstleistungen in den Bereichen
                medizinisches Cannabis, Medizintechnik, Medizinalhandel sowie KI-Enablement
                für Vertrieb und Business Development.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Art und Umfang der Leistungen ergeben sich aus dem jeweiligen Angebot, der
                Auftragsbestätigung oder einem gesonderten Vertrag. Mündliche Nebenabreden
                bedürfen der schriftlichen Bestätigung.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 3 Zustandekommen des Vertrages
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Angebote des Auftragnehmers sind freibleibend und unverbindlich. Ein Vertrag
                kommt erst durch die schriftliche Auftragsbestätigung des Auftragnehmers oder
                durch Beginn der Leistungserbringung zustande.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 4 Vergütung und Zahlungsbedingungen
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                Die Vergütung richtet sich nach dem jeweils vereinbarten Honorar. Sofern nicht
                anders vereinbart, gelten folgende Regelungen:
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Alle Preise verstehen sich zzgl. der gesetzlichen Umsatzsteuer</li>
                <li>Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug fällig</li>
                <li>Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen in gesetzlicher
                  Höhe zu berechnen</li>
              </ul>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Reisekosten und Auslagen werden nach vorheriger Vereinbarung gesondert berechnet.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 5 Mitwirkungspflichten des Auftraggebers
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                Der Auftraggeber stellt dem Auftragnehmer alle zur Leistungserbringung erforderlichen
                Informationen, Unterlagen und Zugänge rechtzeitig zur Verfügung. Insbesondere:
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Benennung eines Ansprechpartners mit Entscheidungsbefugnis</li>
                <li>Bereitstellung relevanter Dokumente und Daten</li>
                <li>Zeitnahe Rückmeldung und Freigabe von Zwischenergebnissen</li>
              </ul>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Verzögerungen aufgrund fehlender Mitwirkung des Auftraggebers gehen nicht zulasten
                des Auftragnehmers.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 6 Einsatz von Künstlicher Intelligenz (KI)
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                Der Auftragnehmer setzt im Rahmen seiner Leistungserbringung KI-gestützte Werkzeuge
                ein. Dieser Hinweis erfolgt gemäß der Transparenzpflicht nach Art. 50 der
                KI-Verordnung (EU) 2024/1689 (EU AI Act).
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">6.1 Eingesetzte Werkzeuge und Plattformen</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                Zum Einsatz kommen insbesondere:
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Anthropic Claude / Claude Code (Anthropic, PBC, USA) – KI-gestützte
                  Text- und Code-Erstellung</li>
                <li>GitHub / GitHub Copilot (GitHub, Inc. / Microsoft Corporation, USA) –
                  Versionsverwaltung, kollaborative Entwicklung und KI-gestützte Code-Unterstützung</li>
              </ul>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Der Einsatz weiterer KI-Tools (z. B. OpenAI ChatGPT, Microsoft Copilot) kann im
                Rahmen der Leistungserbringung erfolgen. Die konkret eingesetzten Werkzeuge können
                sich im Rahmen der technologischen Weiterentwicklung ändern.
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">6.2 Einsatzbereiche</h3>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Erstellung und Bearbeitung von Texten, Präsentationen und Dokumenten</li>
                <li>Softwareentwicklung und Quellcode-Erstellung</li>
                <li>Recherche, Analyse und Zusammenfassung von Informationen</li>
                <li>Gestaltung und Optimierung von Website-Inhalten</li>
              </ul>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">6.3 Qualitätssicherung und menschliche Kontrolle</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Sämtliche KI-generierten oder KI-unterstützten Arbeitsergebnisse werden vom
                Auftragnehmer fachlich geprüft, angepasst und freigegeben, bevor sie dem
                Auftraggeber übergeben oder veröffentlicht werden. Die inhaltliche Verantwortung
                verbleibt vollständig beim Auftragnehmer.
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">6.4 Datenschutz beim KI-Einsatz</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                Beim Einsatz von KI-Werkzeugen gelten folgende Grundsätze:
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Personenbezogene Daten des Auftraggebers oder dessen Kunden werden nicht ohne
                  ausdrückliche Vereinbarung in KI-Systeme eingegeben</li>
                <li>Vertrauliche Geschäftsinformationen werden nur in dem Umfang an KI-Systeme
                  übermittelt, der zur Leistungserbringung erforderlich ist</li>
                <li>Es werden bevorzugt Enterprise-Versionen mit vertraglichen
                  Datenschutzgarantien eingesetzt</li>
                <li>Es erfolgt keine automatisierte Entscheidungsfindung im Sinne von Art. 22 DSGVO</li>
              </ul>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">6.5 Haftung für KI-Ergebnisse</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Der Auftragnehmer haftet für die Qualität und Richtigkeit seiner Arbeitsergebnisse
                unabhängig davon, ob KI-Werkzeuge bei deren Erstellung eingesetzt wurden. Die
                Nutzung von KI entbindet nicht von der Sorgfaltspflicht. Die Haftung richtet sich
                nach § 9 dieser AGB.
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">6.6 Hinweispflicht</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Auf Wunsch des Auftraggebers kennzeichnet der Auftragnehmer, welche Arbeitsergebnisse
                unter Einsatz von KI-Werkzeugen erstellt wurden. Der Auftraggeber kann den Einsatz
                von KI-Werkzeugen für seinen Auftrag schriftlich ausschließen.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 7 Vertraulichkeit
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erhaltenen
                vertraulichen Informationen streng vertraulich zu behandeln und nur für die
                vereinbarten Zwecke zu verwenden.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Die Vertraulichkeitspflicht besteht auch nach Beendigung des Vertragsverhältnisses
                fort. Eine gesonderte Vertraulichkeitsvereinbarung (NDA) kann auf Wunsch abgeschlossen
                werden.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 8 Geistiges Eigentum und Nutzungsrechte
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Der Auftraggeber erhält nach vollständiger Bezahlung die vereinbarten Nutzungsrechte
                an den Arbeitsergebnissen. Sofern nicht anders vereinbart, werden einfache, nicht
                übertragbare Nutzungsrechte eingeräumt.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Methoden, Frameworks und allgemeines Know-how des Auftragnehmers verbleiben
                bei diesem und dürfen auch für andere Aufträge weiterverwendet werden.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Soweit Arbeitsergebnisse unter Einsatz von KI-Werkzeugen erstellt wurden,
                weist der Auftragnehmer darauf hin, dass urheberrechtlicher Schutz für rein
                maschinell erzeugte Inhalte nach geltendem Recht eingeschränkt sein kann.
                Die redaktionelle Bearbeitung und fachliche Aufbereitung durch den Auftragnehmer
                begründen jedoch eigenständigen urheberrechtlichen Schutz.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 9 Haftung
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                Der Auftragnehmer haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit
                sowie bei der Verletzung von Leben, Körper oder Gesundheit.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Bei leichter Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung
                wesentlicher Vertragspflichten (Kardinalpflichten). Die Haftung ist in
                diesem Fall auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Die Beratungsleistungen des Auftragnehmers stellen keine rechtliche,
                steuerliche oder medizinische Beratung dar und ersetzen keine Fachberatung
                durch entsprechend qualifizierte Berufsgruppen.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 10 Laufzeit und Kündigung
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                Die Vertragslaufzeit ergibt sich aus der jeweiligen Vereinbarung. Sofern
                nicht anders vereinbart:
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Projektbasierte Aufträge enden mit Erbringung der vereinbarten Leistung</li>
                <li>Laufende Beratungsverhältnisse können von beiden Seiten mit einer Frist von
                  4 Wochen zum Monatsende gekündigt werden</li>
              </ul>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt
                unberührt.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 11 Datenschutz
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Beide Parteien verpflichten sich, die jeweils geltenden datenschutzrechtlichen
                Bestimmungen einzuhalten, insbesondere die DSGVO. Soweit personenbezogene Daten
                im Rahmen des Auftrags verarbeitet werden, wird bei Bedarf eine gesonderte
                Auftragsverarbeitungsvereinbarung (AVV) gemäß Art. 28 DSGVO abgeschlossen.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Nähere Informationen zum Datenschutz finden Sie in unserer{" "}
                <a href="/datenschutz" className="text-brand-green hover:underline">
                  Datenschutzerklärung
                </a>.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 12 Schlussbestimmungen
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des
                UN-Kaufrechts (CISG).
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis ist
                – soweit gesetzlich zulässig – der Sitz des Auftragnehmers.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden,
                bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-4">
                <strong>Stand:</strong> März 2026
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
