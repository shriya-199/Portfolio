import { Search, Bell, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled 
        ? "bg-background/95 backdrop-blur-md border-b border-border" 
        : "bg-gradient-to-b from-background via-background/80 to-transparent"
    )}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground">S</span>
              </div>
              <span className="hidden md:block font-display font-semibold text-lg">
                Portfolio
              </span>
            </a>

            {/* Nav links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            </button>
            <button className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors">
              <User className="w-4 h-4 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
