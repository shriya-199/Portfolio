import { ExternalLink, Play, Clock, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  metrics?: string[];
  isLive?: boolean;
  index?: number;
  gradient: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  techStack, 
  metrics = [], 
  isLive = true,
  index = 0,
  gradient
}: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "group relative flex-shrink-0 w-[340px] md:w-[400px] rounded-lg overflow-hidden",
        "bg-card hover:bg-card-hover transition-all duration-500 ease-out",
        "card-shadow hover:card-shadow-hover hover:scale-105",
        "opacity-0 animate-fade-in-up cursor-pointer"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project thumbnail */}
      <div className={cn(
        "relative h-48 overflow-hidden",
        gradient
      )}>
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/40">
          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center glow-primary">
            <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>
        
        {/* Live badge */}
        {isLive && (
          <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Live
          </div>
        )}
        
        {/* Rating */}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded bg-background/80 backdrop-blur-sm text-xs">
          <Star className="w-3 h-3 text-yellow-500" fill="currentColor" />
          <span>Featured</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {description}
        </p>
        
        {/* Metrics */}
        {metrics.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-4">
            {metrics.slice(0, 2).map((metric, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs text-primary">
                <Clock className="w-3 h-3" />
                {metric}
              </div>
            ))}
          </div>
        )}
        
        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2">
          {techStack.slice(0, 4).map((tech, i) => (
            <span 
              key={i}
              className="px-2.5 py-1 rounded-full text-xs bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
          {techStack.length > 4 && (
            <span className="px-2.5 py-1 rounded-full text-xs bg-secondary text-muted-foreground">
              +{techStack.length - 4}
            </span>
          )}
        </div>
      </div>
      
      {/* External link indicator */}
      <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ExternalLink className="w-5 h-5 text-muted-foreground" />
      </div>
    </div>
  );
};

export default ProjectCard;
