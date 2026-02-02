export const kiServiceInfo = {
  title: "Praktische Einführung in KI-Modelle (Copilot & ChatGPT)",
  subtitle: "für Sales & Business Development",
  description: "Workshops, Use-Cases und Enablement für Teams – praxisnah, messbar, compliance-bewusst.",
  crossSellNote: "Diese Leistung ist unabhängig vom Fachbereich buchbar und kombinierbar mit unseren Cannabis- und Medizintechnik-Beratungen."
};

export const kiTargetGroups = [
  {
    title: "Sales Teams",
    description: "Field Sales, Key Account Manager und Inside Sales",
    icon: "users"
  },
  {
    title: "Business Development",
    description: "Strategische Geschäftsentwicklung und Partnermanagement",
    icon: "target"
  },
  {
    title: "Marketing & Commercial Ops",
    description: "Marketing-Teams und Commercial Operations",
    icon: "megaphone"
  },
  {
    title: "Management",
    description: "Führungskräfte und Teamleiter im Vertrieb",
    icon: "briefcase"
  }
];

export const kiOutcomes = [
  {
    title: "Schnellere E-Mail- & Angebotserstellung",
    description: "Reduzieren Sie die Zeit für Routineaufgaben um bis zu 50%"
  },
  {
    title: "Bessere Recherche & Gesprächsvorbereitung",
    description: "Fundierte Account-Briefings in Minuten statt Stunden"
  },
  {
    title: "Einheitlicher Außenauftritt",
    description: "Konsistente Templates und Tone of Voice im gesamten Team"
  },
  {
    title: "Verbesserte Pipeline-Qualität",
    description: "Strukturierte Follow-ups und höhere Conversion-Raten"
  }
];

export const kiWorkshopPackages = [
  {
    id: "kickstart",
    title: "Kickstart",
    duration: "2 Stunden",
    goal: "Schneller Einstieg in KI-Tools für das gesamte Team",
    deliverables: [
      "Einführung in Copilot & ChatGPT",
      "Setup und erste Konfiguration",
      "5 sofort einsetzbare Use-Cases",
      "Cheat-Sheet für den Alltag"
    ],
    prerequisites: "Microsoft 365 oder ChatGPT-Zugang"
  },
  {
    id: "team-workshop",
    title: "Team-Workshop",
    duration: "½ Tag (4 Stunden)",
    goal: "Tiefgreifende Integration in bestehende Vertriebsprozesse",
    deliverables: [
      "Prozessanalyse: Wo hilft KI am meisten?",
      "Prompting-Techniken für Fortgeschrittene",
      "Erstellung individueller Templates",
      "Live-Übungen mit echten Anwendungsfällen"
    ],
    prerequisites: "Grundkenntnisse vorhanden oder Kickstart absolviert"
  },
  {
    id: "enablement",
    title: "Enablement Programm",
    duration: "4 Wochen",
    goal: "Nachhaltige Verankerung von KI im Vertriebsalltag",
    deliverables: [
      "Individuelles Prompt-Playbook (PDF/Markdown)",
      "Wöchentliche Review-Sessions",
      "KPI-Definition und Erfolgsmessung",
      "Coaching für Power-User",
      "Abschluss-Workshop mit Best Practices"
    ],
    prerequisites: "Team-Workshop empfohlen"
  }
];

export const kiUseCases = [
  {
    category: "Kommunikation",
    cases: [
      "Follow-up E-Mails nach Kundengesprächen",
      "Reaktivierung inaktiver Kunden",
      "Terminvereinbarungs-Templates",
      "Professionelle Absagen und Verschiebungen"
    ]
  },
  {
    category: "Vorbereitung",
    cases: [
      "Account-Briefings erstellen",
      "Stakeholder-Mapping",
      "Wettbewerbsanalysen",
      "Branchenrecherche"
    ]
  },
  {
    category: "Angebote & Sales",
    cases: [
      "Value Proposition formulieren",
      "Einwandbehandlung vorbereiten",
      "Vergleichstabellen erstellen",
      "Pricing-Argumentationen"
    ]
  },
  {
    category: "Dokumentation",
    cases: [
      "CRM-Notizen in Follow-ups übersetzen",
      "Management Summaries erstellen",
      "Meeting-Protokolle strukturieren",
      "Quartalsberichte vorbereiten"
    ]
  }
];

export const kiToolComparison = {
  copilot: {
    name: "Microsoft Copilot",
    bestFor: [
      "Nahtlose MS365-Integration (Outlook, Teams, Word)",
      "Unternehmensdaten-Zugriff (mit entsprechenden Rechten)",
      "E-Mail-Zusammenfassungen und Entwürfe",
      "Kalender- und Meeting-Management"
    ],
    considerations: "Erfordert Microsoft 365 Business/Enterprise Lizenz"
  },
  chatgpt: {
    name: "ChatGPT",
    bestFor: [
      "Kreative Ideenfindung und Brainstorming",
      "Komplexe Prompt-Workflows",
      "Unabhängig von Microsoft-Ökosystem",
      "Custom Instructions und GPTs"
    ],
    considerations: "ChatGPT Plus oder Team für erweiterte Funktionen"
  },
  datenschutz: {
    title: "Datenschutz-Hinweise",
    points: [
      "Keine sensiblen Patientendaten eingeben",
      "Unternehmensrichtlinien beachten",
      "Bei Unsicherheit: IT/Datenschutz konsultieren",
      "Enterprise-Versionen bevorzugen"
    ]
  }
};

export const kiDeliverables = [
  {
    title: "Prompt-Playbook",
    description: "Umfassende Dokumentation aller Prompts (PDF/Markdown)",
    format: "PDF/Markdown"
  },
  {
    title: "10-20 Prompt-Vorlagen",
    description: "Fertige Templates für E-Mails, Angebote, Recherche, Follow-ups",
    format: "Copy-Paste-fertig"
  },
  {
    title: "Standard-Workflows",
    description: "1-2 dokumentierte Prozesse (z.B. Angebotserstellung)",
    format: "Schritt-für-Schritt"
  },
  {
    title: "Teams-Training Deck",
    description: "Präsentation für interne Weitergabe (optional)",
    format: "PowerPoint"
  }
];

export const kiFaqs = [
  {
    question: "Was darf ich datenschutzrechtlich eingeben?",
    answer: "Grundsätzlich gilt: Keine personenbezogenen Daten, keine Patientendaten, keine vertraulichen Geschäftsinformationen. Wir erarbeiten im Workshop klare Leitlinien für Ihr Team, die mit Ihrer IT/Datenschutzabteilung abgestimmt werden können."
  },
  {
    question: "Brauchen wir Enterprise-Lizenzen?",
    answer: "Für den Einstieg reichen oft Standard-Lizenzen. Wir analysieren Ihren Bedarf und empfehlen die passende Lizenzstrategie – von ChatGPT Plus über Microsoft 365 Copilot bis hin zu Enterprise-Lösungen."
  },
  {
    question: "Wie messen wir den Erfolg?",
    answer: "Im Enablement-Programm definieren wir gemeinsam KPIs wie Zeitersparnis bei E-Mails, Anzahl qualifizierter Follow-ups oder Template-Nutzungsraten. Diese werden über 4 Wochen getrackt."
  },
  {
    question: "Welche Voraussetzungen braucht das Team?",
    answer: "Keine technischen Vorkenntnisse nötig. Wichtig sind Offenheit für neue Tools und Bereitschaft, bestehende Prozesse zu hinterfragen. Die Workshops sind praxisnah und niedrigschwellig aufgebaut."
  },
  {
    question: "Kann das mit Projekten aus der Pharma oder der Medizintechnik kombiniert werden?",
    answer: "Ja, absolut! Die KI-Schulung ist eine Querschnittsleistung, die perfekt zu unseren Fachberatungen passt. Gerade im regulierten Umfeld hilft KI bei Dokumentation und Compliance-konformer Kommunikation."
  }
];
