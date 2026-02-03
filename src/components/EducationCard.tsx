import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface EducationCardProps {
  institution: string;
  degree: string;
  location: string;
  period: string;
  score: string;
  index?: number;
}

const EducationCard = ({ institution, degree, location, period, score, index = 0 }: EducationCardProps) => {
  return (
    <div
      className={cn(
        "group flex-shrink-0 w-[320px] md:w-[380px] p-6 rounded-lg",
        "bg-card hover:bg-card-hover transition-all duration-300",
        "card-shadow hover:card-shadow-hover hover:scale-105",
        "opacity-0 animate-fade-in-up cursor-pointer border border-transparent hover:border-primary/20"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
        <GraduationCap className="w-6 h-6 text-accent" />
      </div>

      <h3 className="font-display text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
        {institution}
      </h3>

      <p className="text-sm text-muted-foreground mb-4">
        {degree}
      </p>

      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" />
          {location}
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          {period}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <span className="text-primary font-semibold">{score}</span>
      </div>
    </div>
  );
};

export default EducationCard;
