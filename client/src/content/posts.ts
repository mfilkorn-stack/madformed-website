export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: "cannabis" | "medtech" | "allgemein";
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
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
