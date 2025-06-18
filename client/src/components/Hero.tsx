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
      id="home"
      className="hero-container relative"
      style={{ 
        backgroundColor: '#FDDED6',
        minHeight: '70vh'
      }}
    >
      <img 
        src="/images/hero-pests.png" 
        alt="Professional pest control technician treating Maine home"
        className="absolute inset-0 w-full h-full object-cover"
        width="1600"
        height="960"
        decoding="async"
      />
      {/* Content container aligned to the left */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-xl">
          {/* Main headline - carefully stacked text with specific colors */}
          <h1 className="font-bold leading-tight mb-4">
            <span className="text-5xl md:text-6xl lg:text-7xl text-white block">Maine's #1</span>
            <span className="text-5xl md:text-6xl lg:text-7xl text-white block">Pest Control</span>
            <span className="text-5xl md:text-6xl lg:text-7xl text-[var(--nps-amber)] block">Experts</span>
            <span className="text-3xl md:text-4xl text-white block mt-2">Licensed • Insured • Guaranteed</span>
          </h1>
          
          {/* Subheadline - SEO optimized with location keywords */}
          <p className="text-lg md:text-xl text-white/90 max-w-md mb-8">
            Professional ant, rodent, bed bug & wasp extermination 
            in Portland, Augusta, Bangor & Central Maine. 
            <strong className="text-[var(--nps-amber)]">Free inspections</strong> available 24/7.
          </p>
          
          {/* Call to action button - single green button */}
          {showButtons && (
            <div className="flex">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  // Update the URL hash
                  window.history.pushState(null, '', '#contact');
                  
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    const headerHeight = 96;
                    const elementPosition = contactSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerHeight;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="w-full"
              >
                <Button size="lg" className="bg-[var(--nps-forest)] hover:bg-[var(--nps-forest)]/90 text-white font-bold py-4 px-12 rounded-lg text-lg w-full">
                  Get a Free Quote
                </Button>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
