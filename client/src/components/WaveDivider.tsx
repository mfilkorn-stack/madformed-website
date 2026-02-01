interface WaveDividerProps {
  className?: string;
  flip?: boolean;
  variant?: "green-cyan" | "cyan-green" | "white";
}

export function WaveDivider({ className = "", flip = false, variant = "green-cyan" }: WaveDividerProps) {
  const gradientId = `wave-gradient-${variant}-${flip ? 'flip' : 'normal'}`;
  
  const getGradientColors = () => {
    switch (variant) {
      case "green-cyan":
        return { start: "#5FB94E", end: "#1E9BD9" };
      case "cyan-green":
        return { start: "#1E9BD9", end: "#5FB94E" };
      case "white":
        return { start: "#ffffff", end: "#ffffff" };
      default:
        return { start: "#5FB94E", end: "#1E9BD9" };
    }
  };

  const colors = getGradientColors();

  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`w-full ${flip ? "rotate-180" : ""} ${className}`}
      style={{ height: "80px" }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={colors.start} />
          <stop offset="50%" stopColor={colors.end} />
          <stop offset="100%" stopColor={colors.start} />
        </linearGradient>
      </defs>
      <path
        d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
        fill={`url(#${gradientId})`}
        opacity="0.15"
      />
      <path
        d="M0,80 C360,40 720,100 1080,60 C1260,40 1380,80 1440,80 L1440,120 L0,120 Z"
        fill={`url(#${gradientId})`}
        opacity="0.1"
      />
    </svg>
  );
}
