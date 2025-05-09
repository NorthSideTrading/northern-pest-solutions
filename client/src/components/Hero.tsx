import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

interface HeroProps {
  title?: string;
  subtitle?: string;
  showButtons?: boolean;
}

export default function Hero({ showButtons = true }: HeroProps) {
  return (
    <section 
      className="hero-container"
      style={{ 
        backgroundImage: 'url("/images/hero-pests.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#FDDED6'
      }}
    >
      {/* Content container aligned to the left */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-xl">
          {/* Main headline - carefully stacked text with specific colors */}
          <h1 className="font-bold leading-tight mb-4">
            <span className="text-5xl md:text-6xl lg:text-7xl text-white block">Professional</span>
            <span className="text-5xl md:text-6xl lg:text-7xl text-white block">Pest Control</span>
            <span className="text-5xl md:text-6xl lg:text-7xl text-[var(--nps-amber)] block">Services</span>
            <span className="text-4xl md:text-5xl text-white block mt-2">in Central Maine</span>
          </h1>
          
          {/* Subheadline - custom text from the image */}
          <p className="text-lg md:text-xl text-white/90 max-w-md mb-8">
            Protect your home and business from unwanted pests 
            with our trusted and effective solutions.
          </p>
          
          {/* Call to action buttons - styled to match the image */}
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#services">
                <Button size="lg" className="bg-[var(--nps-forest)] hover:bg-[var(--nps-forest)]/90 text-white font-medium py-2.5 px-6 rounded-md">
                  Explore Our Services
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline" className="bg-white text-[var(--nps-amber)] border-white hover:bg-white/90 font-medium py-2.5 px-6 rounded-md">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
