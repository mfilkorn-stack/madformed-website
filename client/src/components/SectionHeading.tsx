interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-8 md:mb-12 ${align === "center" ? "text-center" : ""}`}>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-brand-dark/70 max-w-2xl mx-auto text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
