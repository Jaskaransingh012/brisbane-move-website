
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

export const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="service-card p-6 h-full">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        {features && (
          <ul className="text-sm text-gray-600 space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
};
