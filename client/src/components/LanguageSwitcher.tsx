import { useLanguage, Language } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div 
      className="flex items-center gap-1 text-sm font-medium"
      role="navigation"
      aria-label="Language selection"
    >
      <button
        onClick={() => setLanguage("de")}
        className={`px-2 py-1 rounded transition-colors ${
          language === "de"
            ? "text-brand-green bg-brand-green/10"
            : "text-brand-dark/60 hover:text-brand-green"
        }`}
        aria-label="Deutsch"
        aria-current={language === "de" ? "true" : undefined}
        data-testid="button-lang-de"
      >
        DE
      </button>
      <span className="text-brand-grey/40">|</span>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 rounded transition-colors ${
          language === "en"
            ? "text-brand-green bg-brand-green/10"
            : "text-brand-dark/60 hover:text-brand-green"
        }`}
        aria-label="English"
        aria-current={language === "en" ? "true" : undefined}
        data-testid="button-lang-en"
      >
        EN
      </button>
    </div>
  );
}
