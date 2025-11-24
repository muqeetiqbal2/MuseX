import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => {
  const content = (
    <Card className="group relative overflow-hidden border border-border/50 bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 cursor-pointer h-full">
      <CardContent className="p-6 space-y-4">
        {/* Icon with Glow Effect */}
        <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
          <Icon className="w-7 h-7 text-accent" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

        {/* Arrow Icon */}
        <div className="flex items-center text-accent opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-sm font-medium">Learn More</span>
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </CardContent>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </Card>
  );

  if (link) {
    return <Link to={link}>{content}</Link>;
  }

  return content;
};

export default ServiceCard;
