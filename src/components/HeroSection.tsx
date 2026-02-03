import { Play, Info, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-10" />
      
      {/* Animated background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Hero content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-3xl opacity-0 animate-fade-in-up">
          {/* Category pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-elevated border border-border mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Full Stack Developer</span>
          </div>
          
          {/* Title */}
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Shriya <span className="text-gradient-primary">Verma</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl">
            Building enterprise-grade solutions with modern architectures
          </p>
          
          {/* Stats row */}
          <div className="flex flex-wrap gap-6 mb-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-primary font-semibold">250+</span>
              <span className="text-muted-foreground">LeetCode Problems</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-semibold">3</span>
              <span className="text-muted-foreground">Production Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-semibold">10K+</span>
              <span className="text-muted-foreground">Requests/Min Handled</span>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button variant="hero" size="lg" className="group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              View Projects
            </Button>
            <Button variant="heroOutline" size="lg">
              <Info className="w-5 h-5 mr-2" />
              More Info
            </Button>
          </div>
          
          {/* Social links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/shriya-199" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/shriyaverma1909" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:shriyav1903@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
