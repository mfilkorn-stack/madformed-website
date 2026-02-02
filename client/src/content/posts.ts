export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: "cannabis" | "medtech" | "ki" | "allgemein";
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "medizinisches-cannabis-deutschland-ueberblick",
    title: "Medizinisches Cannabis in Deutschland: Überblick für Unternehmen",
    excerpt: "Ein strukturierter Überblick über den deutschen Markt für medizinisches Cannabis, regulatorische Rahmenbedingungen und Markteintrittsstrategien für Unternehmen.",
    content: `Der deutsche Markt für medizinisches Cannabis hat sich seit der Legalisierung 2017 kontinuierlich entwickelt. Für Unternehmen, die in diesem Segment tätig werden möchten, ist ein fundiertes Verständnis der Marktstruktur und regulatorischen Anforderungen essentiell.

Deutschland ist einer der größten Märkte für medizinisches Cannabis in Europa. Die Nachfrage wächst stetig, getrieben durch eine zunehmende Akzeptanz bei Ärzten und Patienten sowie eine Erweiterung der Indikationen.

Die regulatorischen Rahmenbedingungen sind vielschichtig. Das Betäubungsmittelgesetz (BtMG) definiert Cannabis als Betäubungsmittel, dessen Handel streng reguliert ist. Daneben unterliegt medizinisches Cannabis den Anforderungen des Arzneimittelgesetzes (AMG). Hinzu kommen die EU-GMP/GDP-Standards für Herstellung und Distribution.

Die Wertschöpfungskette umfasst typischerweise den Anbau und die Herstellung (meist international), den Import nach Deutschland, den Großhandel und die Distribution sowie die Apotheken als Abgabestellen.

Der Markt bietet durchaus Chancen, erfordert aber eine sorgfältige Vorbereitung und echte Compliance-Expertise. Eine frühzeitige strategische Positionierung ist entscheidend für den Erfolg.

Hinweis: Dieser Artikel dient der allgemeinen Information und stellt keine Rechtsberatung dar.`,
    date: "2024-01-15",
    author: "MadforMed Team",
    category: "cannabis",
    tags: ["Cannabis", "Regulierung", "Markteintritt", "Deutschland"]
  },
  {
    slug: "eu-gdp-stolpersteine-supply-chain",
    title: "EU-GDP in der Praxis: Typische Stolpersteine in der Supply Chain",
    excerpt: "Welche Herausforderungen treten bei der Umsetzung von EU-GDP-Anforderungen in der Cannabis-Supply-Chain häufig auf? Ein Praxisbericht.",
    content: `Die Einhaltung der EU-GDP (Good Distribution Practice) ist für alle Akteure in der pharmazeutischen Lieferkette verpflichtend. Im Bereich medizinisches Cannabis ergeben sich dabei spezifische Herausforderungen.

EU-GDP definiert die Mindeststandards für den Großhandelsvertrieb von Arzneimitteln. Sie soll sicherstellen, dass Produkte ihre Qualität vom Hersteller bis zur Abgabe behalten.

In der Praxis begegnen uns immer wieder dieselben Stolpersteine. Das Temperaturmanagement ist einer davon: Cannabis-Produkte haben spezifische Lagerungsanforderungen, und eine lückenlose Temperaturüberwachung samt Dokumentation ist kritisch.

Ein weiterer häufiger Problembereich ist die Transportvalidierung. Jede Transportroute muss validiert sein, und bei Cannabis kommen zusätzliche Sicherheitsanforderungen hinzu, die viele Unternehmen unterschätzen.

Auch die Dokumentation wird oft unterschätzt. Die GDP erfordert umfassende Dokumentation – von Standardarbeitsanweisungen (SOPs) über Schulungsnachweise bis hin zum Abweichungsmanagement. Der Aufwand dafür überrascht viele.

Schließlich ist die Qualifizierung von Lieferanten ein aufwändiger, aber essentieller Prozess. Alle Partner in der Lieferkette müssen qualifiziert werden.

Meine Empfehlungen: Binden Sie GDP-Expertise frühzeitig ein, investieren Sie in digitale Dokumentationssysteme und führen Sie regelmäßige Audits und Schulungen durch.

Hinweis: Dieser Artikel stellt keine Rechtsberatung dar. Für spezifische Compliance-Fragen konsultieren Sie bitte Fachexperten.`,
    date: "2024-02-20",
    author: "MadforMed Team",
    category: "cannabis",
    tags: ["EU-GDP", "Supply Chain", "Compliance", "Qualitätsmanagement"]
  },
  {
    slug: "medizintechnik-prozessanalyse-ergebnis",
    title: "Medizintechnik: Von Prozessanalyse zu messbarem Ergebnis",
    excerpt: "Wie Medizintechnik-Unternehmen durch strukturierte Prozessoptimierung messbare Verbesserungen in Kliniken und Praxen erzielen können.",
    content: `Die Einführung neuer Medizintechnik scheitert häufig nicht am Produkt selbst, sondern an mangelnder Prozessintegration. Ein strukturierter Ansatz ist entscheidend für den Erfolg.

Das Problem ist oft dasselbe: Neue Medizintechnik wird isoliert betrachtet. Der Fokus liegt auf Produktfeatures statt auf Workflow-Integration. Die Schulung des Personals kommt zu kurz, und eine echte Erfolgsmessung findet nicht statt.

Unser Ansatz beginnt mit einer detaillierten Ist-Analyse. Wir beobachten vor Ort, führen Interviews mit allen Beteiligten und identifizieren Schmerzpunkte und Ineffizienzen.

Auf dieser Basis entwickeln wir in der Konzeptionsphase optimierte Workflows, passende Schulungskonzepte und KPIs für die Erfolgsmessung.

Die Implementierung erfolgt dann schrittweise: Wir starten mit einer Pilotphase in einem ausgewählten Bereich, passen basierend auf dem Feedback an und rollen dann mit begleitenden Schulungen aus.

Am Ende steht die Erfolgskontrolle. Messbare Ergebnisse sind entscheidend – ein Vorher-Nachher-Vergleich anhand definierter KPIs, kontinuierliche Optimierung und eine saubere Dokumentation der Verbesserungen.

Erfolgreiche Medizintechnik-Implementierung erfordert einen ganzheitlichen Ansatz, der Menschen, Prozesse und Technologie zusammendenkt.`,
    date: "2024-03-10",
    author: "MadforMed Team",
    category: "medtech",
    tags: ["Medizintechnik", "Prozessoptimierung", "Implementierung", "KPIs"]
  },
  {
    slug: "ki-aussendienst-use-cases",
    title: "KI im Außendienst: 10 praxiserprobte Use Cases",
    excerpt: "Von Follow-up E-Mails bis zur Account-Vorbereitung: Wie Vertriebsteams mit ChatGPT und Copilot ihre tägliche Arbeit effizienter gestalten.",
    content: `Künstliche Intelligenz verändert den Vertriebsalltag. Doch statt abstrakter Versprechen brauchen Sales-Teams konkrete Anwendungsfälle. Hier sind 10 Use Cases, die sich in der Praxis bewährt haben.

Follow-up E-Mails nach Kundengesprächen lassen sich in 10-15 Minuten statt einer Stunde erstellen. Ein Beispiel: "Schreibe eine Follow-up E-Mail nach einem Erstgespräch mit einem Chefarzt der Orthopädie. Thema war unser neues Arthroskopie-System. Er hat Interesse an einer Produktdemonstration gezeigt."

Account-Briefings vor Terminen sparen 20-30 Minuten pro Vorbereitung. Lassen Sie sich relevante Informationen über Krankenhaus, Entscheider und aktuelle Entwicklungen zusammenfassen. Wichtig: Nur öffentliche Quellen nutzen, keine vertraulichen Daten eingeben.

Auch bei der Einwandbehandlung hilft KI: Generieren Sie überzeugende Antworten auf typische Einwände Ihrer Zielgruppe. Das Modell kann verschiedene Perspektiven durchspielen.

Angebots-Begleittexte lassen sich personalisieren – statt Standardtexte bekommen Sie individuelle Value Propositions für jeden Kunden.

CRM-Notizen können Sie schnell strukturieren. Verwandeln Sie schnelle Notizen nach dem Termin in aussagekräftige CRM-Einträge.

Wettbewerbsvergleiche lassen sich auf Basis öffentlicher Informationen erstellen. Reaktivierungs-Kampagnen werden durch personalisierte E-Mails für länger inaktive Kunden unterstützt.

Interne Reports lassen sich zu Management Summaries verdichten. Schulungsunterlagen für neue Produkte oder Kampagnen können Sie vorbereiten. Und selbst die Terminkoordination wird einfacher – professionell und persönlich formulierte Terminanfragen und -bestätigungen.

Beim Datenschutz gilt: Keine Patientendaten eingeben, keine vertraulichen Geschäftsinformationen, Enterprise-Versionen bevorzugen, und im Zweifel IT oder Datenschutz fragen.

KI ersetzt nicht den persönlichen Kontakt – aber sie befreit Zeit dafür. Die Kunst liegt darin, die richtigen Use Cases zu identifizieren und sauber umzusetzen.

Interessiert an einem KI-Workshop für Ihr Team? Kontaktieren Sie uns.`,
    date: "2025-01-20",
    author: "MadforMed Team",
    category: "ki",
    tags: ["KI", "ChatGPT", "Copilot", "Vertrieb", "Use Cases"]
  },
  {
    slug: "copilot-vs-chatgpt-sales",
    title: "Copilot vs. ChatGPT: Was passt zu Sales-Prozessen?",
    excerpt: "Microsoft Copilot oder ChatGPT? Ein neutraler Vergleich für Vertriebsteams mit konkreten Empfehlungen für verschiedene Anwendungsfälle.",
    content: `Beide Tools haben ihre Stärken. Die richtige Wahl hängt von Ihren spezifischen Anforderungen und der vorhandenen IT-Infrastruktur ab.

Microsoft Copilot punktet vor allem durch die nahtlose Integration in die Microsoft-Welt. Es arbeitet direkt in Outlook, Teams, Word und Excel. Copilot kann auf Unternehmensdaten zugreifen (entsprechende Berechtigungen vorausgesetzt), fasst lange E-Mail-Threads automatisch zusammen und erstellt Zusammenfassungen von Teams-Meetings.

Copilot ist ideal für Teams, die stark in der Microsoft-Welt arbeiten, Unternehmen mit vorhandener M365 E5-Lizenz und Anwendungsfälle, die Unternehmensdaten erfordern. Zu beachten sind die zusätzlichen Lizenzkosten von etwa 30 Euro pro User und Monat, und die volle Funktionalität gibt es nur mit entsprechender Microsoft-Infrastruktur.

ChatGPT hat andere Stärken. Es ist stärker bei Brainstorming und kreativen Aufgaben, bietet mehr Kontrolle über Ausgabeformat und -stil durch flexibles Prompting, ermöglicht dauerhaft hinterlegte Kontext-Informationen durch Custom Instructions und bietet spezialisierte Mini-Anwendungen für wiederkehrende Aufgaben durch GPTs.

ChatGPT ist ideal für kreative Textarbeit und Ideation, Teams mit heterogener IT-Landschaft und Anwendungsfälle, die keine Unternehmensdaten erfordern. Zu beachten: Kein direkter Zugriff auf Unternehmenssysteme, und für die volle Funktionalität braucht es ChatGPT Plus (20 Euro pro Monat) oder Team (25 Euro pro User und Monat).

In der Praxis nutzen viele Teams beide Tools. Copilot für E-Mail-Management und Meeting-Aufgaben, ChatGPT für kreative Aufgaben und komplexe Prompting-Workflows.

Unabhängig vom Tool gilt beim Datenschutz: Keine sensiblen Patientendaten eingeben, keine vertraulichen Geschäftsinformationen, Unternehmensrichtlinien beachten, Enterprise-Versionen bevorzugen.

Meine Empfehlung: Starten Sie mit einem Pilot in einem Team. Testen Sie beide Tools für Ihre spezifischen Use Cases und evaluieren Sie nach 4-6 Wochen, welches Tool besser passt – oder ob eine Kombination sinnvoll ist.

Wir unterstützen Sie bei der Auswahl und Einführung. Kontaktieren Sie uns für ein unverbindliches Gespräch.`,
    date: "2025-01-25",
    author: "MadforMed Team",
    category: "ki",
    tags: ["KI", "ChatGPT", "Copilot", "Microsoft", "Vergleich"]
  },
  {
    slug: "prompt-playbooks-konsistenz",
    title: "Wie Teams mit Prompt-Playbooks Konsistenz gewinnen",
    excerpt: "Ein Prompt-Playbook sorgt für einheitliche Qualität im Team. So erstellen Sie ein effektives Playbook für Ihren Vertrieb.",
    content: `Wenn jedes Teammitglied eigene Prompts entwickelt, entstehen unterschiedliche Qualitätsniveaus und Stile. Ein Prompt-Playbook schafft Abhilfe.

Ein Prompt-Playbook ist eine Sammlung standardisierter Prompts für wiederkehrende Aufgaben. Es enthält fertige Vorlagen zum Copy-Paste, Platzhalter für individuelle Anpassung, Beispiele für gute Ergebnisse und Hinweise zu Dos und Don'ts.

Warum braucht ein Team ein Playbook? Erstens: Ein konsistenter Außenauftritt. Alle E-Mails und Dokumente folgen dem gleichen Tone of Voice. Zweitens: Schnellere Einarbeitung. Neue Teammitglieder können sofort produktiv arbeiten. Drittens: Qualitätssicherung. Bewährte Prompts liefern zuverlässig gute Ergebnisse. Viertens: Zeitersparnis. Kein Neuerfinden des Rades bei jeder Aufgabe.

Ein gutes Playbook ist strukturiert aufgebaut. Es beginnt mit Grundlagen – einer kurzen Einführung in Prompting, generellen Tipps und Datenschutz-Hinweisen. Dann folgen E-Mail-Templates für Follow-ups, Terminvereinbarungen, Angebots-Begleitschreiben und Kundenreaktivierung. Ein weiteres Kapitel behandelt die Vorbereitung: Account-Briefings, Stakeholder-Analysen, Wettbewerbsvergleiche. Dokumentation ist ebenfalls wichtig: CRM-Notizen strukturieren, Management Summaries erstellen, Meeting-Protokolle. Und schließlich Spezialfälle: branchen- und produktspezifische Prompts.

Bei der Erstellung haben sich einige Best Practices bewährt. Starten Sie mit den besten Prompts, die im Team bereits funktionieren. Entwickeln Sie gemeinsam – das erhöht die Akzeptanz. Definieren Sie Platzhalter klar, etwa KUNDENNAME, PRODUKT, ANLIEGEN. Zeigen Sie Beispiele: Gute Prompts plus erwartete Ergebnisse machen das Playbook greifbar. Und aktualisieren Sie regelmäßig – neue Use Cases, bessere Prompts, Lessons Learned.

Beim Format haben Sie verschiedene Optionen: PDF zum Ausdrucken und schnellen Nachschlagen, Notion oder Confluence für einfache Updates und Suche, oder Markdown für technisch versierte Teams.

Nach 4 Wochen sollten Sie messen: Nutzungsrate im Team, Zeitersparnis (Selbsteinschätzung), Qualität der Outputs (Stichproben) und Feedback der Teammitglieder.

Ein Prompt-Playbook ist kein Nice-to-have, sondern die Basis für konsistente KI-Nutzung im Team. Der initiale Aufwand zahlt sich schnell aus.

Wir entwickeln mit Ihnen ein maßgeschneidertes Prompt-Playbook. Kontaktieren Sie uns für mehr Informationen.`,
    date: "2025-01-28",
    author: "MadforMed Team",
    category: "ki",
    tags: ["KI", "Prompting", "Playbook", "Team", "Konsistenz"]
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
