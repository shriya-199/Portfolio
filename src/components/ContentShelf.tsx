import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ContentShelfProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const ContentShelf = ({ title, subtitle, children }: ContentShelfProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="py-8 group/shelf">
      {/* Header */}
      <div className="container mx-auto px-6 md:px-12 mb-4">
        <div className="flex items-baseline gap-3">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
            {title}
          </h2>
          {subtitle && (
            <span className="text-muted-foreground text-sm">{subtitle}</span>
          )}
        </div>
      </div>

      {/* Scrollable content */}
      <div className="relative">
        {/* Left scroll button */}
        <button
          onClick={() => scroll('left')}
          className={cn(
            "absolute left-2 top-1/2 -translate-y-1/2 z-20",
            "w-12 h-12 rounded-full bg-surface-elevated/90 backdrop-blur-sm",
            "flex items-center justify-center",
            "opacity-0 group-hover/shelf:opacity-100 transition-opacity duration-300",
            "hover:bg-card-hover hover:scale-110 transition-all",
            "shadow-lg",
            !canScrollLeft && "!opacity-0 pointer-events-none"
          )}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right scroll button */}
        <button
          onClick={() => scroll('right')}
          className={cn(
            "absolute right-2 top-1/2 -translate-y-1/2 z-20",
            "w-12 h-12 rounded-full bg-surface-elevated/90 backdrop-blur-sm",
            "flex items-center justify-center",
            "opacity-0 group-hover/shelf:opacity-100 transition-opacity duration-300",
            "hover:bg-card-hover hover:scale-110 transition-all",
            "shadow-lg",
            !canScrollRight && "!opacity-0 pointer-events-none"
          )}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content row */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 overflow-x-auto hide-scrollbar px-6 md:px-12 pb-4"
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContentShelf;
