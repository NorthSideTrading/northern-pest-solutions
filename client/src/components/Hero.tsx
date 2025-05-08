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
        <img 
          src="/images/logo-watermark.svg" 
          alt="" 
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-[600px] opacity-25" 
          aria-hidden="true"
        />
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
