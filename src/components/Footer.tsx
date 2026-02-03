import { Heart, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>and</span>
            <Coffee className="w-4 h-4 text-primary" />
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 Shriya Verma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
