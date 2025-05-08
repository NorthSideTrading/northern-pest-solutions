import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

interface HeroProps {
  title: string;
  subtitle: string;
  showButtons?: boolean;
}

export default function Hero({ title, subtitle, showButtons = true }: HeroProps) {
  return (
    <section className="relative bg-nps-forest text-nps-ivory hero-section overflow-hidden">
      <div className="absolute inset-0 bg-nps-forest opacity-90"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 200 200"
          className="absolute right-0 top-1/2 -translate-y-1/2 h-96 w-96 text-white opacity-[0.07]"
          aria-hidden="true"
        >
          {/* Compass circle */}
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="8" fill="transparent"/>
          
          {/* Bug silhouette */}
          <path d="M100 60 L80 80 L120 80 Z" fill="currentColor"/> {/* Head */}
          <ellipse cx="100" cy="110" rx="25" ry="40" fill="currentColor"/> {/* Body */}
          <ellipse cx="100" cy="110" rx="8" ry="25" fill="#F6B04D" opacity="0.6"/> {/* Orange center */}
          
          {/* Legs */}
          <path d="M80 95 L55 85 M80 125 L55 135 M120 95 L145 85 M120 125 L145 135" stroke="currentColor" strokeWidth="5" fill="none"/>
          
          {/* Compass pointers */}
          <path d="M100 30 L100 45 M100 155 L100 170 M30 100 L45 100 M155 100 L170 100" stroke="currentColor" strokeWidth="8" fill="none"/>
        </svg>
      </div>
      <div className="relative container mx-auto px-4 py-32 md:py-48 lg:py-52">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-2xl mb-8">{subtitle}</p>
          
          {showButtons && (
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#services">
                <Button className="bg-nps-amber hover:bg-nps-amber/90 text-nps-forest font-medium py-3 px-8 rounded-md text-center transition-colors text-lg">
                  Our Services
                </Button>
              </Link>
              <Link href="#contact-form">
                <Button className="bg-nps-ivory hover:bg-nps-ivory/90 text-nps-forest font-medium py-3 px-8 rounded-md text-center transition-colors text-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
