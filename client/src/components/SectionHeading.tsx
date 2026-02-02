interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({ title, subtitle, align = "center", light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-8 md:mb-12 ${align === "center" ? "text-center" : ""}`}>
      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-3 ${light ? "text-white" : "text-brand-dark"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl mx-auto text-base md:text-lg ${light ? "text-white/70" : "text-brand-dark/70"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
