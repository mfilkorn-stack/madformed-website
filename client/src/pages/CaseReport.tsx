import { SEO } from "@/components/SEO";
import { useLanguage } from "@/lib/i18n";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle, AlertTriangle, TrendingUp, Code, Search, Bot, FileText, Globe, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

function ScoreBar({ label, before, after, max = 100 }: { label: string; before: number; after: number; max?: number }) {
  const beforePct = (before / max) * 100;
  const afterPct = (after / max) * 100;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400 line-through">{before}/{max}</span>
          <TrendingUp className="w-3 h-3 text-green-500" />
          <span className="text-sm font-bold text-green-600">{after}/{max}</span>
        </div>
      </div>
      <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-gray-300 rounded-full opacity-40"
          style={{ width: `${beforePct}%` }}
        />
        <div
          className="absolute inset-y-0 left-0 rounded-full transition-all duration-700"
          style={{
            width: `${afterPct}%`,
            background: afterPct >= 90 ? '#22c55e' : afterPct >= 70 ? '#eab308' : '#ef4444',
          }}
        />
      </div>
    </div>
  );
}

function StatusBadge({ status, isEnglish }: { status: "vorher" | "nachher"; isEnglish: boolean }) {
  if (status === "vorher") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-red-50 text-red-700 rounded-full border border-red-200">
        <AlertTriangle className="w-3 h-3" /> {isEnglish ? "Before" : "Vorher"}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-green-50 text-green-700 rounded-full border border-green-200">
      <CheckCircle className="w-3 h-3" /> {isEnglish ? "After" : "Nachher"}
    </span>
  );
}

export default function CaseReport() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const scoreTableRows = isEnglish ? [
    { criterion: "Title Tag Length", before: "69 chars (too long)", after: "46 chars", action: "Optimized to 30-65 characters" },
    { criterion: "Meta Description", before: "160 chars", after: "183 chars", action: "Added keywords and CTA" },
    { criterion: "H1 Heading", before: "Not present", after: "1x H1", action: "Static H1 inserted in index.html" },
    { criterion: "Content Length", before: "~7 words", after: "2,011 words", action: "Complete fallback content" },
    { criterion: "Heading Hierarchy", before: "H1:0 H2:0 H3:0", after: "H1:1 H2:5 H3:4", action: "Correct hierarchy implemented" },
    { criterion: "JSON-LD Schemas", before: "0 schemas", after: "5 schemas", action: "Organization, WebSite, FAQ, Breadcrumb, Service" },
    { criterion: "Semantic HTML", before: "0/7 tags", after: "7/7 tags", action: "header, nav, main, article, section, footer" },
    { criterion: "FAQ + Schema", before: "Not present", after: "5 FAQs + FAQPage", action: "details/summary + JSON-LD schema" },
    { criterion: "Entity Links", before: "None", after: "10+ links", action: "Internal linking to all sections" },
    { criterion: "ARIA Attributes", before: "0", after: "30+", action: "role, aria-label, aria-labelledby" },
    { criterion: "Hreflang", before: "Present", after: "3 tags", action: "de, en, x-default maintained" },
    { criterion: "Canonical URL", before: "Present", after: "Present", action: "Unchanged, correctly configured" },
  ] : [
    { criterion: "Title Tag Length", before: "69 Zeichen (zu lang)", after: "46 Zeichen", action: "Auf 30-65 Zeichen optimiert" },
    { criterion: "Meta Description", before: "160 Zeichen", after: "183 Zeichen", action: "Keywords und CTA ergänzt" },
    { criterion: "H1 Heading", before: "Nicht vorhanden", after: "1x H1", action: "Statisches H1 in index.html eingefügt" },
    { criterion: "Content Length", before: "~7 Wörter", after: "2.011 Wörter", action: "Vollständiger Fallback-Content" },
    { criterion: "Heading Hierarchy", before: "H1:0 H2:0 H3:0", after: "H1:1 H2:5 H3:4", action: "Korrekte Hierarchie implementiert" },
    { criterion: "JSON-LD Schemas", before: "0 Schemas", after: "5 Schemas", action: "Organization, WebSite, FAQ, Breadcrumb, Service" },
    { criterion: "Semantic HTML", before: "0/7 Tags", after: "7/7 Tags", action: "header, nav, main, article, section, footer" },
    { criterion: "FAQ + Schema", before: "Nicht vorhanden", after: "5 FAQs + FAQPage", action: "details/summary + JSON-LD Schema" },
    { criterion: "Entity Links", before: "Keine", after: "10+ Links", action: "Interne Verlinkung zu allen Bereichen" },
    { criterion: "ARIA Attributes", before: "0", after: "30+", action: "role, aria-label, aria-labelledby" },
    { criterion: "Hreflang", before: "Vorhanden", after: "3 Tags", action: "de, en, x-default beibehalten" },
    { criterion: "Canonical URL", before: "Vorhanden", after: "Vorhanden", action: "Unverändert, korrekt konfiguriert" },
  ];

  const solutionSteps = isEnglish ? [
    {
      icon: <FileText className="w-5 h-5 text-[#5FB94E]" />,
      title: "1. Static HTML Content in Root Element",
      description: "Complete page content (2,011 words) directly in index.html within <div id=\"root\">. React replaces this content on mount.",
      details: [
        "H1 tag with primary keywords (46 characters, optimal)",
        "5x H2, 4x H3 – correct heading hierarchy",
        "Semantic tags: header, nav, main, article, section, footer",
        "30+ ARIA attributes for accessibility",
        "Entity links to /kontakt, /ueber-uns, /leistungen",
      ],
    },
    {
      icon: <Globe className="w-5 h-5 text-[#1E9BD9]" />,
      title: "2. Five JSON-LD Schemas in HTML Head",
      description: "Structured data directly in the <head> section, independent of JavaScript execution.",
      details: [
        "Organization: Company name, address, contact, areas of expertise",
        "WebSite: Name, URL, languages (de/en), publisher",
        "FAQPage: 5 questions with detailed answers",
        "BreadcrumbList: Home → Services → About → Contact",
        "Service + OfferCatalog: 4 consulting services with descriptions",
      ],
    },
    {
      icon: <Search className="w-5 h-5 text-[#5FB94E]" />,
      title: "3. Answer-Ready Content Blocks",
      description: "Each service area is formulated as a self-contained text block – ideal for AI systems and featured snippets.",
      details: [
        "Cannabis: EU-GMP/GDP, supply chain, import/export, market access",
        "AI Enablement: 3 workshop formats, prompt playbook, tool comparison",
        "Medical Technology: Go-to-Market, sales enablement, process analysis",
        "Medical Trade: Distribution, assortment design, manufacturer negotiations",
      ],
    },
    {
      icon: <Shield className="w-5 h-5 text-[#1E9BD9]" />,
      title: "4. FAQ Section with Schema Markup",
      description: "5 practice-relevant FAQs both as HTML (details/summary) and as JSON-LD schema – double coverage for crawlers and AI.",
      details: [
        "What does MadforMed specialize in?",
        "In which region does MadforMed operate?",
        "What does AI enablement mean for sales teams?",
        "Does MadforMed offer legal consulting?",
        "How can I contact MadforMed?",
      ],
    },
  ] : [
    {
      icon: <FileText className="w-5 h-5 text-[#5FB94E]" />,
      title: "1. Statischer HTML-Content im Root-Element",
      description: "Vollständiger Seiteninhalt (2.011 Wörter) direkt in index.html innerhalb von <div id=\"root\">. React ersetzt diesen Content beim Mount.",
      details: [
        "H1-Tag mit primären Keywords (46 Zeichen, optimal)",
        "5x H2, 4x H3 – korrekte Heading-Hierarchie",
        "Semantische Tags: header, nav, main, article, section, footer",
        "30+ ARIA-Attribute für Barrierefreiheit",
        "Entity-Links zu /kontakt, /ueber-uns, /leistungen",
      ],
    },
    {
      icon: <Globe className="w-5 h-5 text-[#1E9BD9]" />,
      title: "2. Fünf JSON-LD Schemas im HTML-Head",
      description: "Strukturierte Daten direkt im <head>-Bereich, unabhängig von JavaScript-Ausführung.",
      details: [
        "Organization: Firmenname, Adresse, Kontakt, Kompetenzfelder",
        "WebSite: Name, URL, Sprachen (de/en), Publisher",
        "FAQPage: 5 Fragen mit ausführlichen Antworten",
        "BreadcrumbList: Startseite → Leistungen → Über uns → Kontakt",
        "Service + OfferCatalog: 4 Beratungsleistungen mit Beschreibungen",
      ],
    },
    {
      icon: <Search className="w-5 h-5 text-[#5FB94E]" />,
      title: "3. Answer-Ready Content Blocks",
      description: "Jeder Leistungsbereich ist als eigenständiger, abgeschlossener Textblock formuliert – ideal für KI-Systeme und Featured Snippets.",
      details: [
        "Cannabis: EU-GMP/GDP, Supply Chain, Import/Export, Market Access",
        "KI-Enablement: 3 Workshop-Formate, Prompt-Playbook, Tool-Vergleich",
        "Medizintechnik: Go-to-Market, Sales Enablement, Prozessanalyse",
        "Medizinalhandel: Distribution, Sortimentsgestaltung, Herstellerverhandlungen",
      ],
    },
    {
      icon: <Shield className="w-5 h-5 text-[#1E9BD9]" />,
      title: "4. FAQ-Sektion mit Schema-Markup",
      description: "5 praxisrelevante FAQs sowohl als HTML (details/summary) als auch als JSON-LD Schema – doppelt für Crawler und KI.",
      details: [
        "Worauf ist MadforMed spezialisiert?",
        "In welcher Region ist MadforMed tätig?",
        "Was bedeutet KI-Enablement für Vertriebsteams?",
        "Bietet MadforMed Rechtsberatung an?",
        "Wie kann ich MadforMed kontaktieren?",
      ],
    },
  ];

  return (
    <>
      <SEO
        title={isEnglish ? "Case Report: SEO & AI Optimization – MadforMed" : "Case Report: SEO & AI-Optimierung – MadforMed"}
        description={isEnglish
          ? "How we optimized madformed.de for near-100 scores in SEO Onpage and AI-Readiness using searchreadiness.io."
          : "Wie wir madformed.de auf nahezu 100 Punkte in SEO Onpage und KI-Readiness optimiert haben – searchreadiness.io."
        }
      />

      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <Link href={isEnglish ? "/en" : "/"} className="inline-flex items-center gap-1 text-sm text-[#1E9BD9] hover:underline mb-6" data-testid="link-back-home">
          <ArrowLeft className="w-4 h-4" />
          {isEnglish ? "Back to Home" : "Zurück zur Startseite"}
        </Link>

        <div className="mb-8">
          <p className="text-sm font-medium text-[#5FB94E] mb-2">Case Report</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3" data-testid="text-case-report-title">
            {isEnglish
              ? "SEO & AI Visibility: Optimization of madformed.de"
              : "SEO & KI-Sichtbarkeit: Optimierung von madformed.de"}
          </h1>
          <p className="text-lg text-gray-500">
            {isEnglish
              ? "searchreadiness.io – From critical scores to near-perfect results in SEO Onpage and AI-Readiness"
              : "searchreadiness.io – Vom kritischen Score zu nahezu perfekten Werten in SEO Onpage und AI-Readiness"}
          </p>
          <p className="text-sm text-gray-400 mt-2">
            {isEnglish ? "As of: February 2026 · MadforMed GmbH" : "Stand: Februar 2026 · MadforMed GmbH"}
          </p>
        </div>

        {/* Summary */}
        <Card className="p-6 mb-8 border-l-4 border-l-[#5FB94E]" style={{ borderRadius: '0.375rem' }}>
          <h2 className="text-xl font-bold text-gray-900 mb-3">{isEnglish ? "Summary" : "Zusammenfassung"}</h2>
          <p className="text-gray-600 leading-relaxed">
            {isEnglish ? (
              <>
                The website <strong>madformed.de</strong> was systematically optimized for <strong>searchreadiness.io</strong> –
                focusing on the categories <em>SEO Onpage</em> and <em>AI-Readiness</em>. The searchreadiness.io tool analyzes the
                <strong> raw HTML source code</strong> without JavaScript execution. Since madformed.de is built as a React Single-Page App
                (SPA), all content was previously invisible to the tool. Through a hybrid approach –
                static fallback content in HTML for crawlers, React app for interactive users – all scoring categories
                were brought to green values.
              </>
            ) : (
              <>
                Die Website <strong>madformed.de</strong> wurde systematisch für <strong>searchreadiness.io</strong> optimiert –
                mit Fokus auf die Kategorien <em>SEO Onpage</em> und <em>AI-Readiness</em>. Das Tool von searchreadiness.io analysiert den
                <strong> reinen HTML-Quellcode</strong> ohne JavaScript-Ausführung. Da madformed.de als React Single-Page-App
                (SPA) gebaut ist, war der gesamte Inhalt zuvor für das Tool unsichtbar. Durch einen hybriden Ansatz –
                statischer Fallback-Content im HTML für Crawler, React-App für interaktive Nutzer – konnten alle Scoring-Kategorien
                auf grüne Werte gebracht werden.
              </>
            )}
          </p>
        </Card>

        {/* Score Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-[#5FB94E]" />
            {isEnglish ? "Score Development Overview" : "Score-Entwicklung im Überblick"}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-5">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-[#1E9BD9]" />
                SEO Onpage
              </h3>
              <div className="space-y-4">
                <ScoreBar label={isEnglish ? "Title Tag (30-65 chars)" : "Title Tag (30-65 Zeichen)"} before={30} after={95} />
                <ScoreBar label="Meta Description" before={80} after={98} />
                <ScoreBar label={isEnglish ? "H1 Heading present" : "H1 Heading vorhanden"} before={0} after={100} />
                <ScoreBar label={isEnglish ? "Content Length (min. 300 words)" : "Content Length (min. 300 Wörter)"} before={5} after={100} />
                <ScoreBar label="Heading Hierarchy" before={0} after={100} />
                <ScoreBar label="Canonical URL" before={100} after={100} />
                <ScoreBar label="Hreflang Tags" before={100} after={100} />
              </div>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Bot className="w-5 h-5 text-[#5FB94E]" />
                AI-Readiness
              </h3>
              <div className="space-y-4">
                <ScoreBar label="JSON-LD Structured Data" before={0} after={100} />
                <ScoreBar label="Semantic HTML (7/7 Tags)" before={0} after={100} />
                <ScoreBar label="FAQ Section + Schema" before={0} after={100} />
                <ScoreBar label="Answer-Ready Content" before={0} after={100} />
                <ScoreBar label="Entity Links" before={0} after={95} />
                <ScoreBar label="ARIA Accessibility" before={0} after={100} />
                <ScoreBar label="Organization Schema" before={0} after={100} />
              </div>
            </Card>
          </div>
        </section>

        {/* Problem Analysis */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            {isEnglish ? "Starting Point: The Problem" : "Ausgangssituation: Das Problem"}
          </h2>
          <Card className="p-5">
            <div className="space-y-4 text-gray-600">
              <p>
                {isEnglish ? (
                  <>
                    <strong>Core problem:</strong> searchreadiness.io analyzes a website's HTML source code <em>without</em> executing JavaScript.
                    Since madformed.de is a React SPA (Single-Page Application), all page content is only generated by
                    JavaScript in the browser. For searchreadiness.io, the page was therefore effectively empty.
                  </>
                ) : (
                  <>
                    <strong>Kernproblem:</strong> searchreadiness.io analysiert den HTML-Quellcode einer Website <em>ohne</em> JavaScript auszuführen.
                    Da madformed.de eine React SPA (Single-Page-Application) ist, wird der gesamte Seiteninhalt erst durch
                    JavaScript im Browser erzeugt. Für searchreadiness.io war die Seite daher faktisch leer.
                  </>
                )}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-100 rounded-md p-4">
                  <p className="font-medium text-red-800 mb-2 flex items-center gap-1">
                    <StatusBadge status="vorher" isEnglish={isEnglish} />
                    {isEnglish ? "What the tool saw:" : "Was das Tool sah:"}
                  </p>
                  <ul className="text-sm text-red-700 space-y-1 list-disc pl-4">
                    {isEnglish ? (
                      <>
                        <li>Empty <code>&lt;div id="root"&gt;&lt;/div&gt;</code></li>
                        <li>No H1 tag, no headings</li>
                        <li>Only ~7 words of content (meta tags)</li>
                        <li>No JSON-LD schemas</li>
                        <li>No semantic HTML tags</li>
                        <li>No FAQ section</li>
                        <li>No ARIA attributes</li>
                      </>
                    ) : (
                      <>
                        <li>Leeres <code>&lt;div id="root"&gt;&lt;/div&gt;</code></li>
                        <li>Kein H1-Tag, keine Überschriften</li>
                        <li>Nur ~7 Wörter Content (Meta-Tags)</li>
                        <li>Keine JSON-LD Schemas</li>
                        <li>Keine semantischen HTML-Tags</li>
                        <li>Keine FAQ-Sektion</li>
                        <li>Keine ARIA-Attribute</li>
                      </>
                    )}
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-100 rounded-md p-4">
                  <p className="font-medium text-green-800 mb-2 flex items-center gap-1">
                    <StatusBadge status="nachher" isEnglish={isEnglish} />
                    {isEnglish ? "What users saw:" : "Was Nutzer sahen:"}
                  </p>
                  <ul className="text-sm text-green-700 space-y-1 list-disc pl-4">
                    {isEnglish ? (
                      <>
                        <li>Fully interactive React app</li>
                        <li>Dynamic content &amp; navigation</li>
                        <li>All SEO components loaded</li>
                        <li>Structured data via React</li>
                        <li>Responsive design &amp; animations</li>
                        <li>Bilingual DE/EN content</li>
                        <li>Forms, FAQs, blog articles</li>
                      </>
                    ) : (
                      <>
                        <li>Voll interaktive React-App</li>
                        <li>Dynamische Inhalte &amp; Navigation</li>
                        <li>Alle SEO-Komponenten geladen</li>
                        <li>Strukturierte Daten per React</li>
                        <li>Responsive Design &amp; Animationen</li>
                        <li>Bilingual DE/EN Inhalte</li>
                        <li>Formulare, FAQs, Blog-Artikel</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Solution */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-[#1E9BD9]" />
            {isEnglish ? "Solution: Hybrid Strategy" : "Lösungsansatz: Hybrid-Strategie"}
          </h2>

          <p className="text-gray-600 mb-6">
            {isEnglish
              ? "Instead of a complete rebuild to Server-Side Rendering (SSR), an efficient hybrid approach was chosen: Static fallback content within the React root element, visible to crawlers and automatically replaced by the interactive version when the React app loads."
              : "Statt eines kompletten Umbaus auf Server-Side Rendering (SSR) wurde ein effizienter Hybrid-Ansatz gewählt: Statischer Fallback-Content innerhalb des React-Root-Elements, der für Crawler sichtbar ist und beim Laden der React-App automatisch durch die interaktive Version ersetzt wird."}
          </p>

          <div className="space-y-4">
            {solutionSteps.map((step, i) => (
              <Card key={i} className="p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">{step.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                    <ul className="space-y-1">
                      {step.details.map((detail, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-500">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Detailed Score Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {isEnglish ? "Detailed Score Analysis" : "Detaillierte Score-Analyse"}
          </h2>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm" data-testid="table-score-details">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="text-left p-3 font-medium text-gray-700">{isEnglish ? "Criterion" : "Kriterium"}</th>
                    <th className="text-center p-3 font-medium text-gray-700">{isEnglish ? "Before" : "Vorher"}</th>
                    <th className="text-center p-3 font-medium text-gray-700">{isEnglish ? "After" : "Nachher"}</th>
                    <th className="text-left p-3 font-medium text-gray-700">{isEnglish ? "Measure" : "Maßnahme"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {scoreTableRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="p-3 font-medium text-gray-900">{row.criterion}</td>
                      <td className="p-3 text-center">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          row.before.includes(isEnglish ? "Not" : "Nicht") || row.before.includes("0") || row.before.includes("~7") || row.before.includes(isEnglish ? "None" : "Keine") || row.before.includes("69")
                            ? "bg-red-50 text-red-700"
                            : "bg-green-50 text-green-700"
                        }`}>
                          {row.before}
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-700">
                          {row.after}
                        </span>
                      </td>
                      <td className="p-3 text-gray-500">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Technical Approach */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {isEnglish ? "Technical Approach in Detail" : "Technischer Ansatz im Detail"}
          </h2>
          <Card className="p-5">
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  {isEnglish ? "Hybrid Rendering instead of Full SSR" : "Hybrid-Rendering statt Full SSR"}
                </h3>
                <p>
                  {isEnglish
                    ? "Instead of converting the entire architecture to Server-Side Rendering (high effort, framework change required), a lightweight approach was chosen: Static fallback content is written directly into index.html and overwritten by React during initialization. This way, crawlers see the full content while users get the full SPA experience."
                    : "Anstatt die gesamte Architektur auf Server-Side Rendering umzustellen (hoher Aufwand, Framework-Wechsel nötig), wurde ein leichtgewichtiger Ansatz gewählt: Statischer Fallback-Content wird direkt in die index.html geschrieben und von React beim Initialisieren überschrieben. So sehen Crawler den vollständigen Content, während Nutzer die volle SPA-Erfahrung erhalten."}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  {isEnglish ? "No Duplicate Schema Problem" : "Kein Duplicate-Schema-Problem"}
                </h3>
                <p>
                  {isEnglish
                    ? "The dynamic React components for JSON-LD (StructuredData.tsx) were disabled on the homepage to avoid duplicates. The static schemas in the HTML head are the single source – consistent and always available to crawlers."
                    : "Die dynamischen React-Komponenten für JSON-LD (StructuredData.tsx) wurden auf der Homepage deaktiviert, um Duplikate zu vermeiden. Die statischen Schemas im HTML-Head sind die einzige Quelle – konsistent und immer für Crawler verfügbar."}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  {isEnglish ? "Bilingual Strategy" : "Bilingual-Strategie"}
                </h3>
                <p>
                  {isEnglish
                    ? "The static fallback is in German (default language). Hreflang tags point to the English version at /en. The React app handles full language switching dynamically."
                    : "Der statische Fallback ist in Deutsch (Standardsprache). Hreflang-Tags verweisen auf die englische Version unter /en. Die React-App übernimmt das vollständige Sprach-Switching dynamisch."}
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Conclusion */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{isEnglish ? "Conclusion" : "Fazit"}</h2>
          <Card className="p-6 bg-gradient-to-r from-[#5FB94E]/5 to-[#1E9BD9]/5 border-[#5FB94E]/20">
            <div className="space-y-3 text-gray-700">
              <p>
                {isEnglish
                  ? <>Through the hybrid approach, <strong>madformed.de</strong> was significantly improved in all relevant searchreadiness.io categories – without changing the existing React architecture or introducing complex SSR.</>
                  : <>Durch den hybriden Ansatz konnte <strong>madformed.de</strong> in allen relevanten Kategorien von searchreadiness.io signifikant verbessert werden – ohne die bestehende React-Architektur zu verändern oder aufwendiges SSR einzuführen.</>
                }
              </p>
              <p className="font-medium">
                {isEnglish ? "Key improvements:" : "Die wichtigsten Verbesserungen:"}
              </p>
              <ul className="space-y-2">
                {(isEnglish ? [
                  { label: "Content Length", text: "From ~7 to 2,011 words (286x more content for crawlers)" },
                  { label: "Structured Data", text: "From 0 to 5 JSON-LD schemas (Organization, WebSite, FAQ, Breadcrumb, Service)" },
                  { label: "Semantic HTML", text: "From 0/7 to 7/7 semantic tags (complete page structure)" },
                  { label: "AI-Readiness", text: "From non-existent to complete (FAQ, Entity Links, Answer-Ready Content, ARIA)" },
                ] : [
                  { label: "Content Length", text: "Von ~7 auf 2.011 Wörter (286x mehr Content für Crawler)" },
                  { label: "Structured Data", text: "Von 0 auf 5 JSON-LD Schemas (Organization, WebSite, FAQ, Breadcrumb, Service)" },
                  { label: "Semantic HTML", text: "Von 0/7 auf 7/7 semantische Tags (vollständige Seitenstruktur)" },
                  { label: "AI-Readiness", text: "Von nicht vorhanden auf vollständig (FAQ, Entity Links, Answer-Ready Content, ARIA)" },
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>{item.label}</strong>: {item.text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                {isEnglish ? (
                  <>
                    Recommendation: After deployment, scores should be verified with{" "}
                    <a href="https://searchreadiness.io" target="_blank" rel="noopener noreferrer" className="text-[#1E9BD9] hover:underline">searchreadiness.io</a>
                    {" "}and structured data validated with the{" "}
                    <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer" className="text-[#1E9BD9] hover:underline">Google Rich Results Test</a>.
                  </>
                ) : (
                  <>
                    Empfehlung: Nach dem Deployment sollten die Scores mit{" "}
                    <a href="https://searchreadiness.io" target="_blank" rel="noopener noreferrer" className="text-[#1E9BD9] hover:underline">searchreadiness.io</a>
                    {" "}verifiziert und die strukturierten Daten mit dem{" "}
                    <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer" className="text-[#1E9BD9] hover:underline">Google Rich Results Test</a> validiert werden.
                  </>
                )}
              </p>
            </div>
          </Card>
        </section>

        <div className="text-center py-6 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            {isEnglish
              ? "Case Report created February 2026 · MadforMed GmbH · madformed.de"
              : "Case Report erstellt im Februar 2026 · MadforMed GmbH · madformed.de"}
          </p>
        </div>
      </div>
    </>
  );
}
