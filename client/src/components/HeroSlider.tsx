import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Leaf, Brain, Monitor, Target } from "lucide-react";
import logoImage from "@assets/586E4BEB-9A32-49CD-B6A4-925E000A0D62_1769909787454.png";

const slides = [
  {
    image: "/images/hero-slide-1.jpg",
    icon: Target,
    accentColor: "brand-green",
    title: "Medical Resulting",
    subtitle: "Strategieberatung für regulierte Märkte – strukturiert, compliance-orientiert, ergebnisfokussiert.",
    tagline: "MadforMed GmbH",
    showLogo: true
  },
  {
    image: "/images/hero-slide-2.jpg",
    icon: Leaf,
    accentColor: "brand-green",
    title: "Medizinisches Cannabis",
    subtitle: "Von EU-GMP/GDP bis zur Supply Chain: Regulatorische Expertise und operative Begleitung für Hersteller, Importeure und Großhändler.",
    tagline: "Beratung & Compliance",
    showLogo: false
  },
  {
    image: "/images/hero-slide-3.jpg",
    icon: Brain,
    accentColor: "brand-cyan",
    title: "KI-Enablement für Vertrieb",
    subtitle: "Copilot & ChatGPT praxisnah einführen: Workshops, Prompt-Playbooks und Enablement-Programme für Sales-Teams.",
    tagline: "Workshops & Training",
    showLogo: false
  },
  {
    image: "/images/hero-slide-4.jpg",
    icon: Monitor,
    accentColor: "brand-cyan",
    title: "Medizintechnik",
    subtitle: "Medizintechnik mit Schwerpunkt auf das ambulante Operieren: Go-to-Market, Prozessoptimierung und Sales Enablement.",
    tagline: "Strategie & Umsetzung",
    showLogo: false
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    if (index !== currentSlide && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  const nextSlide = () => {
    if (!isAnimating) {
      goToSlide((currentSlide + 1) % slides.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      goToSlide((currentSlide - 1 + slides.length) % slides.length);
    }
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <section className="relative min-h-[600px] h-[85vh] max-h-[800px] overflow-hidden" data-testid="hero-slider">
      {slides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${s.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            <div className={`absolute inset-0 ${
              s.accentColor === 'brand-green' 
                ? 'bg-gradient-to-br from-brand-green/20 to-transparent' 
                : 'bg-gradient-to-br from-brand-cyan/20 to-transparent'
            }`} />
          </div>
        </div>
      ))}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute bottom-0 left-0 w-full h-32 opacity-30" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path 
            d="M0,100 C360,180 720,20 1080,100 C1260,140 1380,80 1440,100 L1440,200 L0,200 Z" 
            fill="url(#waveGradient1)"
          />
          <path 
            d="M0,140 C240,80 480,160 720,120 C960,80 1200,160 1440,120 L1440,200 L0,200 Z" 
            fill="url(#waveGradient2)"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5FB94E" />
              <stop offset="100%" stopColor="#1E9BD9" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E9BD9" />
              <stop offset="100%" stopColor="#5FB94E" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-2xl">
              <div
                className={`transition-all duration-700 ${
                  isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm text-sm font-medium mb-6 ${
                  slide.accentColor === 'brand-green'
                    ? 'bg-brand-green/30 text-brand-green border border-brand-green/30'
                    : 'bg-brand-cyan/30 text-brand-cyan border border-brand-cyan/30'
                }`}>
                  <Icon className="w-4 h-4" />
                  {slide.tagline}
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl drop-shadow-md">
                  {slide.subtitle}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/leistungen">
                  <Button
                    size="lg"
                    className="bg-brand-green hover:bg-brand-green/90 text-white shadow-lg"
                    data-testid="button-services-hero"
                  >
                    Leistungen ansehen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/kontakt">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/40 text-white hover:bg-white/10 backdrop-blur-sm"
                    data-testid="button-contact-hero"
                  >
                    Kontakt aufnehmen
                  </Button>
                </Link>
              </div>
            </div>

            {slide.showLogo && (
              <div className="hidden md:flex justify-center">
                <div
                  className={`transition-all duration-700 ${
                    isAnimating ? "opacity-0 scale-90" : "opacity-100 scale-100"
                  }`}
                >
                  <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/15 backdrop-blur-lg border border-white/30 shadow-2xl">
                    <img 
                      src={logoImage} 
                      alt="MadforMed Logo" 
                      className="w-48 md:w-64 lg:w-72 h-auto drop-shadow-lg"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors text-white border border-white/20"
        aria-label="Vorheriges Bild"
        data-testid="button-prev-slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors text-white border border-white/20"
        aria-label="Nächstes Bild"
        data-testid="button-next-slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((s, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? `w-8 ${s.accentColor === 'brand-green' ? 'bg-brand-green' : 'bg-brand-cyan'}`
                : "bg-white/40 hover:bg-white/60 w-3"
            }`}
            aria-label={`Zu Folie ${index + 1}`}
            data-testid={`button-slide-${index}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-light to-transparent z-10" />
    </section>
  );
}
