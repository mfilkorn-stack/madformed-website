import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { ArrowRight, Leaf, Brain, Monitor, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/hero-slide-1.jpg",
    icon: Leaf,
    accentColor: "brand-green",
    title: { de: "Medizinisches Cannabis", en: "Medical Cannabis" },
    subtitle: { 
      de: "Beratung für Markteintritt, Compliance und Wachstum in der Cannabis-Pharma-Branche.", 
      en: "Consulting for market entry, compliance, and growth in the cannabis pharma industry." 
    },
    tagline: { de: "Strategie & Compliance", en: "Strategy & Compliance" },
    link: { de: "/leistungen/medizinisches-cannabis", en: "/en/services/medical-cannabis" }
  },
  {
    image: "/images/hero-slide-2.jpg",
    icon: Leaf,
    accentColor: "brand-green",
    title: { de: "Medizinisches Cannabis", en: "Medical Cannabis" },
    subtitle: { 
      de: "Beratung für Markteintritt, Compliance und Wachstum in der Cannabis-Pharma-Branche.", 
      en: "Consulting for market entry, compliance, and growth in the cannabis pharma industry." 
    },
    tagline: { de: "Strategie & Compliance", en: "Strategy & Compliance" },
    link: { de: "/leistungen/medizinisches-cannabis", en: "/en/services/medical-cannabis" }
  },
  {
    image: "/images/hero-slide-3.jpg",
    icon: Brain,
    accentColor: "brand-gradient",
    title: { de: "KI-Enablement für den Vertrieb", en: "AI Enablement for Sales" },
    subtitle: { 
      de: "Copilot & ChatGPT praxisnah einführen: Workshops, Prompt-Playbooks und Enablement-Programme für Sales-Teams.", 
      en: "Practical implementation of Copilot & ChatGPT: Workshops, prompt playbooks, and enablement programs for sales teams." 
    },
    tagline: { de: "Workshops & Training", en: "Workshops & Training" },
    link: { de: "/leistungen/ki-sales-bd", en: "/en/services/ai-sales-bd" }
  },
  {
    image: "/images/hero-slide-4.jpg",
    icon: Monitor,
    accentColor: "brand-cyan",
    title: { de: "Medizintechnik", en: "Medical Technology" },
    subtitle: { 
      de: "Medizintechnik mit Schwerpunkt auf das ambulante Operieren: Go-to-Market, Prozessoptimierung und Sales Enablement.", 
      en: "Medical technology with a focus on outpatient surgery: Go-to-Market, process optimization, and sales enablement." 
    },
    tagline: { de: "Strategie & Umsetzung", en: "Strategy & Implementation" },
    link: { de: "/leistungen/medizintechnik", en: "/en/services/medical-technology" }
  },
  {
    image: "/images/hero-slide-5.png",
    icon: ShoppingCart,
    accentColor: "brand-cyan",
    title: { de: "Medizinalhandel", en: "Medical Trade" },
    subtitle: { 
      de: "Vertriebsberatung für den Medizinprodukte-Handel: Strategie, Herstellermanagement und Kundenbeziehungen.", 
      en: "Sales consulting for medical products trade: Strategy, manufacturer management, and customer relationships." 
    },
    tagline: { de: "Handel & Vertrieb", en: "Trade & Sales" },
    link: { de: "/leistungen/medizinalhandel", en: "/en/services/medical-trade" }
  },
];

export function HeroSlider() {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => goToSlide((currentSlide - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide];
  const Icon = slide.icon;
  const learnMoreText = language === "en" ? "Learn more" : "Mehr erfahren";
  const contactText = language === "en" ? "Get in Touch" : "Kontakt aufnehmen";
  const contactLink = language === "en" ? "/en/contact" : "/kontakt";

  const getAccentClasses = (accent: string) => {
    if (accent === "brand-gradient") {
      return {
        bg: "bg-gradient-to-r from-brand-green to-brand-cyan",
        text: "bg-gradient-to-r from-brand-green to-brand-cyan bg-clip-text text-transparent",
        icon: "text-brand-cyan",
        button: "bg-gradient-to-r from-brand-green to-brand-cyan hover:from-brand-green/90 hover:to-brand-cyan/90",
      };
    }
    if (accent === "brand-cyan") {
      return {
        bg: `bg-${accent}`,
        text: `text-${accent}`,
        icon: `text-${accent}`,
        button: `bg-${accent} hover:bg-${accent}/90`,
      };
    }
    return {
      bg: `bg-${accent}`,
      text: `text-${accent}`,
      icon: `text-${accent}`,
      button: `bg-${accent} hover:bg-${accent}/90`,
    };
  };

  const accent = getAccentClasses(slide.accentColor);

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden" data-testid="hero-slider">
      {slides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${s.image})`,
              backgroundPosition: index === 0 ? "15% top" : "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full max-w-2xl">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                slide.accentColor === "brand-gradient" 
                  ? "bg-gradient-to-br from-brand-green/20 to-brand-cyan/20" 
                  : slide.accentColor === "brand-cyan"
                  ? "bg-brand-cyan/20"
                  : "bg-brand-green/20"
              }`}>
                <Icon className={`w-6 h-6 ${accent.icon}`} />
              </div>
              <span className={`text-sm font-semibold uppercase tracking-wider ${
                slide.accentColor === "brand-gradient" 
                  ? "bg-gradient-to-r from-brand-green to-brand-cyan bg-clip-text text-transparent" 
                  : slide.accentColor === "brand-cyan"
                  ? "text-brand-cyan"
                  : "text-brand-green"
              }`}>
                {slide.tagline[language]}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {slide.title[language]}
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              {slide.subtitle[language]}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href={slide.link[language]}>
                <Button
                  size="lg"
                  className={`${
                    slide.accentColor === "brand-gradient"
                      ? "bg-gradient-to-r from-brand-green to-brand-cyan hover:from-brand-green/90 hover:to-brand-cyan/90"
                      : slide.accentColor === "brand-cyan"
                      ? "bg-brand-cyan hover:bg-brand-cyan/90"
                      : "bg-brand-green hover:bg-brand-green/90"
                  } text-white`}
                  data-testid="button-hero-primary"
                >
                  {learnMoreText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href={contactLink}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                  data-testid="button-hero-secondary"
                >
                  {contactText}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
          aria-label="Previous slide"
          data-testid="button-prev-slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
          aria-label="Next slide"
          data-testid="button-next-slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white scale-110"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              data-testid={`button-slide-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
