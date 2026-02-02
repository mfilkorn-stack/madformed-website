import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Leaf, Brain, Monitor, Target, ShoppingCart } from "lucide-react";
import heroSlide1 from "@assets/image_1770051852409.png";

const slides = [
  {
    image: heroSlide1,
    icon: Target,
    accentColor: "brand-green",
    title: "",
    subtitle: "",
    tagline: "",
    isFullImage: true
  },
  {
    image: "/images/hero-slide-2.jpg",
    icon: Leaf,
    accentColor: "brand-green",
    title: "Medizinisches Cannabis",
    subtitle: "Von EU-GMP/GDP bis zur Supply Chain: Regulatorische Expertise und operative Begleitung für Hersteller, Importeure und Großhändler.",
    tagline: "Beratung & Compliance"
  },
  {
    image: "/images/hero-slide-3.jpg",
    icon: Brain,
    accentColor: "brand-gradient",
    title: "KI-Enablement für Vertrieb",
    subtitle: "Copilot & ChatGPT praxisnah einführen: Workshops, Prompt-Playbooks und Enablement-Programme für Sales-Teams.",
    tagline: "Workshops & Training"
  },
  {
    image: "/images/hero-slide-4.jpg",
    icon: Monitor,
    accentColor: "brand-cyan",
    title: "Medizintechnik",
    subtitle: "Medizintechnik mit Schwerpunkt auf das ambulante Operieren: Go-to-Market, Prozessoptimierung und Sales Enablement.",
    tagline: "Strategie & Umsetzung"
  },
  {
    image: "/images/hero-slide-5.png",
    icon: ShoppingCart,
    accentColor: "brand-cyan",
    title: "Medizinalhandel",
    subtitle: "Vertriebsstrategie, Lieferantenmanagement und Key Account Management für Händler und Distributoren von Medizinprodukten.",
    tagline: "Handel & Distribution"
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
            className={`absolute inset-0 bg-cover bg-no-repeat ${s.isFullImage ? 'bg-[25%_top]' : 'bg-center'}`}
            style={{ backgroundImage: `url(${s.image})` }}
          >
            {!s.isFullImage && (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
                <div className={`absolute inset-0 ${
                  s.accentColor === 'brand-green' 
                    ? 'bg-gradient-to-br from-brand-green/20 to-transparent' 
                    : s.accentColor === 'brand-gradient'
                    ? 'bg-gradient-to-br from-brand-green/15 via-brand-cyan/15 to-transparent'
                    : 'bg-gradient-to-br from-brand-cyan/20 to-transparent'
                }`} />
              </>
            )}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
          <div className="max-w-2xl">
            <div
              className={`transition-all duration-700 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {!slide.isFullImage && slide.tagline && (
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm text-sm font-medium mb-6 ${
                  slide.accentColor === 'brand-green'
                    ? 'bg-brand-green/30 text-brand-green border border-brand-green/30'
                    : slide.accentColor === 'brand-gradient'
                    ? 'bg-gradient-to-r from-brand-green/30 to-brand-cyan/30 text-brand-cyan border border-brand-cyan/30'
                    : 'bg-brand-cyan/30 text-brand-cyan border border-brand-cyan/30'
                }`}>
                  <Icon className="w-4 h-4" />
                  {slide.tagline}
                </div>
              )}
              {!slide.isFullImage && (
                <>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl drop-shadow-md">
                    {slide.subtitle}
                  </p>
                </>
              )}
            </div>
            {!slide.isFullImage && (
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
                ? `w-8 ${s.accentColor === 'brand-green' ? 'bg-brand-green' : s.accentColor === 'brand-gradient' ? 'bg-gradient-to-r from-brand-green to-brand-cyan' : 'bg-brand-cyan'}`
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
