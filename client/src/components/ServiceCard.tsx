import { Card } from "@/components/ui/card";
import {
  Target,
  Shield,
  Truck,
  Handshake,
  FileCheck,
  Rocket,
  Settings,
  Coins,
  Users,
  ClipboardList,
  Code,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  target: Target,
  shield: Shield,
  truck: Truck,
  handshake: Handshake,
  fileCheck: FileCheck,
  rocket: Rocket,
  settings: Settings,
  coins: Coins,
  users: Users,
  clipboardList: ClipboardList,
  code: Code,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  accentColor?: "green" | "cyan" | "gradient";
}

export function ServiceCard({ title, description, icon, accentColor = "green" }: ServiceCardProps) {
  const Icon = iconMap[icon] || Target;

  const colorClasses = {
    green: {
      border: "hover:border-brand-green/40",
      bg: "bg-brand-green/10 group-hover:bg-brand-green/20",
      icon: "text-brand-green",
    },
    cyan: {
      border: "hover:border-brand-cyan/40",
      bg: "bg-brand-cyan/10 group-hover:bg-brand-cyan/20",
      icon: "text-brand-cyan",
    },
    gradient: {
      border: "hover:border-brand-cyan/40",
      bg: "bg-gradient-to-br from-brand-green/10 to-brand-cyan/10 group-hover:from-brand-green/20 group-hover:to-brand-cyan/20",
      icon: "text-brand-cyan",
    },
  };

  const colors = colorClasses[accentColor];

  return (
    <Card
      className={`p-6 bg-white border-brand-grey/20 ${colors.border} transition-colors group`}
      data-testid={`service-card-${title.toLowerCase().replace(/\s/g, "-")}`}
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${colors.bg}`}>
        <Icon className={`w-6 h-6 ${colors.icon}`} />
      </div>
      <h3 className="text-lg font-semibold text-brand-dark mb-2">{title}</h3>
      <p className="text-brand-dark/70 text-sm leading-relaxed">{description}</p>
    </Card>
  );
}
