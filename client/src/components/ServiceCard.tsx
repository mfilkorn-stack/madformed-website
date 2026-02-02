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
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const Icon = iconMap[icon] || Target;

  return (
    <Card
      className="p-6 bg-white border-brand-grey/20 hover:border-brand-green/40 transition-colors group"
      data-testid={`service-card-${title.toLowerCase().replace(/\s/g, "-")}`}
    >
      <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-green/20 transition-colors">
        <Icon className="w-6 h-6 text-brand-green" />
      </div>
      <h3 className="text-lg font-semibold text-brand-dark mb-2">{title}</h3>
      <p className="text-brand-dark/70 text-sm leading-relaxed">{description}</p>
    </Card>
  );
}
