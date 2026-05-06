import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { companyLogos } from "@/content/references";

export function LogoMarquee() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const doubled = [...companyLogos, ...companyLogos];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-brand-light to-white overflow-hidden" aria-labelledby="references-heading" data-testid="references-section">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-bold uppercase tracking-widest text-brand-green mb-2">
          {isEnglish ? "Industry Expertise" : "Branchenexpertise"}
        </p>
        <h2 id="references-heading" className="text-2xl md:text-3xl font-extrabold text-brand-dark">
          {isEnglish ? "Experience from Leading Companies" : "Erfahrung aus führenden Unternehmen"}
        </h2>
        <p className="text-brand-grey mt-2 text-sm">
          {isEnglish
            ? "Industry expertise from renowned medical technology and pharmaceutical companies"
            : "Branchenexpertise aus namhaften Unternehmen der Medizintechnik und Pharmabranche"}
        </p>
      </motion.div>

      <div className="relative">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {doubled.map((company, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-40 h-16 mx-5 bg-white rounded-xl border border-gray-100 flex-shrink-0 hover:border-brand-cyan/30 hover:shadow-md transition-all duration-300"
            >
              <img
                src={company.logo}
                alt={`${company.name} Logo`}
                loading="lazy"
                className="max-h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-light to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
