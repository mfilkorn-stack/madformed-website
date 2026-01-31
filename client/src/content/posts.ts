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
    content: `
# Medizinisches Cannabis in Deutschland: Überblick für Unternehmen

Der deutsche Markt für medizinisches Cannabis hat sich seit der Legalisierung 2017 kontinuierlich entwickelt. Für Unternehmen, die in diesem Segment tätig werden möchten, ist ein fundiertes Verständnis der Marktstruktur und regulatorischen Anforderungen essentiell.

## Marktentwicklung

Deutschland ist einer der größten Märkte für medizinisches Cannabis in Europa. Die Nachfrage wächst stetig, getrieben durch eine zunehmende Akzeptanz bei Ärzten und Patienten sowie eine Erweiterung der Indikationen.

## Regulatorische Rahmenbedingungen

Die wichtigsten regulatorischen Säulen sind:

- **Betäubungsmittelgesetz (BtMG)**: Cannabis ist ein Betäubungsmittel, dessen Handel streng reguliert ist
- **Arzneimittelgesetz (AMG)**: Medizinisches Cannabis unterliegt den Anforderungen für Arzneimittel
- **EU-GMP/GDP**: Qualitätsstandards für Herstellung und Distribution

## Marktteilnehmer

Die Wertschöpfungskette umfasst:

1. Anbau und Herstellung (meist international)
2. Import nach Deutschland
3. Großhandel und Distribution
4. Apotheken als Abgabestellen

## Fazit

Der Markt bietet Chancen, erfordert aber sorgfältige Vorbereitung und Compliance-Expertise. Eine frühzeitige strategische Positionierung ist entscheidend.

*Hinweis: Dieser Artikel dient der allgemeinen Information und stellt keine Rechtsberatung dar.*
    `,
    date: "2024-01-15",
    author: "MadforMed Team",
    category: "cannabis",
    tags: ["Cannabis", "Regulierung", "Markteintritt", "Deutschland"]
  },
  {
    slug: "eu-gdp-stolpersteine-supply-chain",
    title: "EU-GDP in der Praxis: Typische Stolpersteine in der Supply Chain",
    excerpt: "Welche Herausforderungen treten bei der Umsetzung von EU-GDP-Anforderungen in der Cannabis-Supply-Chain häufig auf? Ein Praxisbericht.",
    content: `
# EU-GDP in der Praxis: Typische Stolpersteine in der Supply Chain

Die Einhaltung der EU-GDP (Good Distribution Practice) ist für alle Akteure in der pharmazeutischen Lieferkette verpflichtend. Im Bereich medizinisches Cannabis ergeben sich dabei spezifische Herausforderungen.

## Was ist EU-GDP?

EU-GDP definiert die Mindeststandards für den Großhandelsvertrieb von Arzneimitteln. Sie soll sicherstellen, dass Produkte ihre Qualität vom Hersteller bis zur Abgabe behalten.

## Häufige Herausforderungen

### 1. Temperaturmanagement

Cannabis-Produkte haben spezifische Lagerungsanforderungen. Lückenlose Temperaturüberwachung und -dokumentation sind kritisch.

### 2. Transportvalidierung

Jede Transportroute muss validiert sein. Bei Cannabis kommen zusätzliche Sicherheitsanforderungen hinzu.

### 3. Dokumentation

Die GDP erfordert umfassende Dokumentation. Viele Unternehmen unterschätzen den Aufwand für:
- Standardarbeitsanweisungen (SOPs)
- Schulungsnachweise
- Abweichungsmanagement

### 4. Qualifizierung von Lieferanten

Alle Partner in der Lieferkette müssen qualifiziert werden – ein aufwändiger, aber essentieller Prozess.

## Empfehlungen

- Frühzeitige Einbindung von GDP-Expertise
- Investition in digitale Dokumentationssysteme
- Regelmäßige Audits und Schulungen

*Hinweis: Dieser Artikel stellt keine Rechtsberatung dar. Für spezifische Compliance-Fragen konsultieren Sie bitte Fachexperten.*
    `,
    date: "2024-02-20",
    author: "MadforMed Team",
    category: "cannabis",
    tags: ["EU-GDP", "Supply Chain", "Compliance", "Qualitätsmanagement"]
  },
  {
    slug: "medizintechnik-prozessanalyse-ergebnis",
    title: "Medizintechnik: Von Prozessanalyse zu messbarem Ergebnis",
    excerpt: "Wie Medizintechnik-Unternehmen durch strukturierte Prozessoptimierung messbare Verbesserungen in Kliniken und Praxen erzielen können.",
    content: `
# Medizintechnik: Von Prozessanalyse zu messbarem Ergebnis

Die Einführung neuer Medizintechnik scheitert häufig nicht am Produkt selbst, sondern an mangelnder Prozessintegration. Ein strukturierter Ansatz ist entscheidend.

## Das Problem

Neue Medizintechnik wird oft isoliert betrachtet:
- Fokus auf Produktfeatures statt Workflow-Integration
- Unzureichende Schulung des Personals
- Fehlende Erfolgsmessung

## Unser Ansatz

### Phase 1: Ist-Analyse

Wir beginnen mit einer detaillierten Aufnahme der bestehenden Prozesse:
- Beobachtung vor Ort
- Interviews mit allen Beteiligten
- Identifikation von Schmerzpunkten und Ineffizienzen

### Phase 2: Konzeption

Basierend auf der Analyse entwickeln wir:
- Optimierte Workflows
- Schulungskonzepte
- KPIs für die Erfolgsmessung

### Phase 3: Implementierung

Die Umsetzung erfolgt schrittweise:
- Pilotphase in ausgewähltem Bereich
- Anpassung basierend auf Feedback
- Rollout mit begleitenden Schulungen

### Phase 4: Erfolgskontrolle

Messbare Ergebnisse sind entscheidend:
- Vorher-Nachher-Vergleich anhand definierter KPIs
- Kontinuierliche Optimierung
- Dokumentation der Verbesserungen

## Fazit

Erfolgreiche Medizintechnik-Implementierung erfordert einen ganzheitlichen Ansatz, der Menschen, Prozesse und Technologie zusammendenkt.
    `,
    date: "2024-03-10",
    author: "MadforMed Team",
    category: "medtech",
    tags: ["Medizintechnik", "Prozessoptimierung", "Implementierung", "KPIs"]
  },
  {
    slug: "ki-aussendienst-use-cases",
    title: "KI im Außendienst: 10 praxiserprobte Use Cases",
    excerpt: "Von Follow-up E-Mails bis zur Account-Vorbereitung: Wie Vertriebsteams mit ChatGPT und Copilot ihre tägliche Arbeit effizienter gestalten.",
    content: `
# KI im Außendienst: 10 praxiserprobte Use Cases

Künstliche Intelligenz verändert den Vertriebsalltag. Doch statt abstrakter Versprechen brauchen Sales-Teams konkrete Anwendungsfälle. Hier sind 10 Use Cases, die sich in der Praxis bewährt haben.

## 1. Follow-up E-Mails nach Kundengesprächen

**Zeitersparnis: 10-15 Minuten pro E-Mail**

Prompt-Beispiel: "Schreibe eine Follow-up E-Mail nach einem Erstgespräch mit einem Chefarzt der Orthopädie. Thema war unser neues Arthroskopie-System. Er hat Interesse an einer Produktdemonstration gezeigt."

## 2. Account-Briefings vor Terminen

**Zeitersparnis: 20-30 Minuten pro Vorbereitung**

Lassen Sie sich relevante Informationen über Krankenhaus, Entscheider und aktuelle Entwicklungen zusammenfassen. Achtung: Öffentliche Quellen nutzen, keine vertraulichen Daten eingeben!

## 3. Einwandbehandlung vorbereiten

Generieren Sie überzeugende Antworten auf typische Einwände Ihrer Zielgruppe. Das KI-Modell kann verschiedene Perspektiven durchspielen.

## 4. Angebots-Begleittexte personalisieren

Statt Standardtexte: individuelle Value Propositions für jeden Kunden.

## 5. CRM-Notizen strukturieren

Verwandeln Sie schnelle Notizen nach dem Termin in strukturierte, aussagekräftige CRM-Einträge.

## 6. Wettbewerbsvergleiche erstellen

Lassen Sie sich bei der Erstellung von Vergleichstabellen unterstützen – natürlich auf Basis öffentlicher Informationen.

## 7. Reaktivierungs-Kampagnen

Personalisierte E-Mails für Kunden, die länger nicht aktiv waren.

## 8. Interne Reports zusammenfassen

Management Summaries aus detaillierten Field Reports erstellen.

## 9. Schulungsunterlagen vorbereiten

Präsentationen und Gesprächsleitfäden für neue Produkte oder Kampagnen.

## 10. Terminkoordination

Formulierung von Terminanfragen und -bestätigungen, die professionell und persönlich wirken.

## Wichtig: Datenschutz beachten

- Keine Patientendaten eingeben
- Keine vertraulichen Geschäftsinformationen
- Enterprise-Versionen bevorzugen
- Im Zweifel: IT/Datenschutz fragen

## Fazit

KI ersetzt nicht den persönlichen Kontakt – aber sie befreit Zeit dafür. Die Kunst liegt darin, die richtigen Use Cases zu identifizieren und sauber umzusetzen.

*Interessiert an einem KI-Workshop für Ihr Team? [Kontaktieren Sie uns](/kontakt).*
    `,
    date: "2025-01-20",
    author: "MadforMed Team",
    category: "ki",
    tags: ["KI", "ChatGPT", "Copilot", "Vertrieb", "Use Cases"]
  },
  {
    slug: "copilot-vs-chatgpt-sales",
    title: "Copilot vs. ChatGPT: Was passt zu Sales-Prozessen?",
    excerpt: "Microsoft Copilot oder ChatGPT? Ein neutraler Vergleich für Vertriebsteams mit konkreten Empfehlungen für verschiedene Anwendungsfälle.",
    content: `
# Copilot vs. ChatGPT: Was passt zu Sales-Prozessen?

Beide Tools haben ihre Stärken. Die richtige Wahl hängt von Ihren spezifischen Anforderungen und der vorhandenen IT-Infrastruktur ab.

## Microsoft Copilot

### Stärken
- **Nahtlose MS365-Integration**: Arbeitet direkt in Outlook, Teams, Word und Excel
- **Kontextwissen**: Kann auf Unternehmensdaten zugreifen (entsprechende Berechtigungen vorausgesetzt)
- **E-Mail-Zusammenfassungen**: Fasst lange E-Mail-Threads automatisch zusammen
- **Meeting-Protokolle**: Erstellt Zusammenfassungen von Teams-Meetings

### Ideal für
- Teams, die stark in der Microsoft-Welt arbeiten
- Unternehmen mit vorhandener M365 E5-Lizenz
- Anwendungsfälle, die Unternehmensdaten erfordern

### Zu beachten
- Erfordert zusätzliche Lizenzkosten (ca. 30€/User/Monat)
- Volle Funktionalität nur mit entsprechender Microsoft-Infrastruktur

## ChatGPT

### Stärken
- **Kreative Ideenfindung**: Stärker bei Brainstorming und kreativen Aufgaben
- **Flexible Prompting**: Mehr Kontrolle über Ausgabeformat und -stil
- **Custom Instructions**: Dauerhaft hinterlegte Kontext-Informationen
- **GPTs**: Spezialisierte Mini-Anwendungen für wiederkehrende Aufgaben

### Ideal für
- Kreative Textarbeit und Ideation
- Teams mit heterogener IT-Landschaft
- Anwendungsfälle, die keine Unternehmensdaten erfordern

### Zu beachten
- Kein direkter Zugriff auf Unternehmenssysteme
- ChatGPT Plus (20€/Monat) oder Team (25€/User/Monat) für volle Funktionalität

## Kombination beider Tools

In der Praxis nutzen viele Teams beide Tools:
- **Copilot** für E-Mail-Management und Meeting-Aufgaben
- **ChatGPT** für kreative Aufgaben und komplexe Prompting-Workflows

## Datenschutz in beiden Fällen

Unabhängig vom Tool:
- Keine sensiblen Patientendaten eingeben
- Keine vertraulichen Geschäftsinformationen
- Unternehmensrichtlinien beachten
- Enterprise-Versionen bevorzugen

## Empfehlung

Starten Sie mit einem Pilot in einem Team. Testen Sie beide Tools für Ihre spezifischen Use Cases und evaluieren Sie nach 4-6 Wochen, welches Tool besser passt – oder ob eine Kombination sinnvoll ist.

*Wir unterstützen Sie bei der Auswahl und Einführung. [Kontaktieren Sie uns](/kontakt) für ein unverbindliches Gespräch.*
    `,
    date: "2025-01-25",
    author: "MadforMed Team",
    category: "ki",
    tags: ["KI", "ChatGPT", "Copilot", "Microsoft", "Vergleich"]
  },
  {
    slug: "prompt-playbooks-konsistenz",
    title: "Wie Teams mit Prompt-Playbooks Konsistenz gewinnen",
    excerpt: "Ein Prompt-Playbook sorgt für einheitliche Qualität im Team. So erstellen Sie ein effektives Playbook für Ihren Vertrieb.",
    content: `
# Wie Teams mit Prompt-Playbooks Konsistenz gewinnen

Wenn jedes Teammitglied eigene Prompts entwickelt, entstehen unterschiedliche Qualitätsniveaus und Stile. Ein Prompt-Playbook schafft Abhilfe.

## Was ist ein Prompt-Playbook?

Ein Prompt-Playbook ist eine Sammlung standardisierter Prompts für wiederkehrende Aufgaben:
- Fertige Vorlagen zum Copy-Paste
- Platzhalter für individuelle Anpassung
- Beispiele für gute Ergebnisse
- Hinweise zu Dos und Don'ts

## Warum braucht ein Team ein Playbook?

### 1. Konsistenter Außenauftritt
Alle E-Mails und Dokumente folgen dem gleichen Tone of Voice.

### 2. Schnellere Einarbeitung
Neue Teammitglieder können sofort produktiv arbeiten.

### 3. Qualitätssicherung
Bewährte Prompts liefern zuverlässig gute Ergebnisse.

### 4. Zeitersparnis
Kein Neuerfinden des Rades bei jeder Aufgabe.

## Aufbau eines Prompt-Playbooks

### Kapitel 1: Grundlagen
- Kurze Einführung in Prompting
- Generelle Tipps (Kontext geben, klare Anweisungen, etc.)
- Datenschutz-Hinweise

### Kapitel 2: E-Mail-Templates
- Follow-up nach Erstgespräch
- Terminvereinbarung
- Angebots-Begleitschreiben
- Reaktivierung inaktiver Kunden

### Kapitel 3: Vorbereitung
- Account-Briefing
- Stakeholder-Analyse
- Wettbewerbsvergleich

### Kapitel 4: Dokumentation
- CRM-Notizen strukturieren
- Management Summary erstellen
- Meeting-Protokolle

### Kapitel 5: Spezialfälle
- Branchenspezifische Prompts
- Produktspezifische Prompts

## Best Practices für die Erstellung

### 1. Mit den besten Prompts starten
Sammeln Sie, was im Team bereits funktioniert.

### 2. Gemeinsam entwickeln
Binden Sie das Team ein – das erhöht die Akzeptanz.

### 3. Platzhalter definieren
Markieren Sie klar, was individuell angepasst werden muss: [KUNDENNAME], [PRODUKT], [ANLIEGEN].

### 4. Beispiele zeigen
Gute Prompts + erwartete Ergebnisse machen das Playbook greifbar.

### 5. Regelmäßig aktualisieren
Neue Use Cases, bessere Prompts, Lessons Learned einarbeiten.

## Format

- **PDF**: Zum Ausdrucken und schnellen Nachschlagen
- **Notion/Confluence**: Für einfache Updates und Suche
- **Markdown**: Für technisch versierte Teams

## Messung des Erfolgs

Nach 4 Wochen sollten Sie messen:
- Nutzungsrate im Team
- Zeitersparnis (Selbsteinschätzung)
- Qualität der Outputs (Stichproben)
- Feedback der Teammitglieder

## Fazit

Ein Prompt-Playbook ist kein Nice-to-have, sondern die Basis für konsistente KI-Nutzung im Team. Der initiale Aufwand zahlt sich schnell aus.

*Wir entwickeln mit Ihnen ein maßgeschneidertes Prompt-Playbook. [Kontaktieren Sie uns](/kontakt) für mehr Informationen.*
    `,
    date: "2025-01-28",
    author: "MadforMed Team",
    category: "ki",
    tags: ["KI", "Prompting", "Playbook", "Team", "Konsistenz"]
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
