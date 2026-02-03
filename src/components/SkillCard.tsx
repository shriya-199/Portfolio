import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
  color: string;
  index?: number;
}

const SkillCard = ({ icon: Icon, title, skills, color, index = 0 }: SkillCardProps) => {
  return (
    <div
      className={cn(
        "group flex-shrink-0 w-[280px] p-6 rounded-lg",
        "bg-card hover:bg-card-hover transition-all duration-300",
        "card-shadow hover:card-shadow-hover hover:scale-105",
        "opacity-0 animate-fade-in-up cursor-pointer"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon */}
      <div className={cn(
        "w-14 h-14 rounded-xl flex items-center justify-center mb-4",
        "transition-transform duration-300 group-hover:scale-110",
        color
      )}>
        <Icon className="w-7 h-7 text-primary-foreground" />
      </div>

      <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs",
              "bg-secondary text-secondary-foreground",
              "transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
            )}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
