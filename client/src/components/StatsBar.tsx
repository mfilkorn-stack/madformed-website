import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

function Counter({ target, suffix = "+" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function StatsBar() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const stats = [
    { target: 10, suffix: "+", color: "#5FB94E", label: isEnglish ? "Years Experience" : "Jahre Erfahrung" },
    { target: 50, suffix: "+", color: "#1E9BD9", label: isEnglish ? "Projects Completed" : "Projekte abgeschlossen" },
    { target: 4,  suffix: "",  color: "#4A5A4A", label: isEnglish ? "Consulting Focus Areas" : "Beratungsschwerpunkte" },
  ];

  return (
    <section className="bg-white border-b border-gray-100 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="text-4xl font-extrabold" style={{ color: s.color }}>
                <Counter target={s.target} suffix={s.suffix} />
              </div>
              <div className="text-sm text-gray-400 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
