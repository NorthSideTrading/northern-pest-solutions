import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

interface HeroProps {
  title: string;
  subtitle: string;
  showButtons?: boolean;
}

export default function Hero({ title, subtitle, showButtons = true }: HeroProps) {
  return (
    <section className="relative bg-nps-forest text-nps-ivory hero-section overflow-hidden min-h-[70vh] md:min-h-[65vh]">
      <div className="absolute inset-0 bg-[var(--nps-forest)]/70"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,.4)_100%)]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <img 
          src="/images/logo-watermark.svg" 
          alt="" 
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-[600px] opacity-25" 
          aria-hidden="true"
        />
      </div>
      <div className="relative container mx-auto px-4 py-20 md:py-28 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-3xl">{title}</h1>
          <p className="mt-6 text-xl md:text-2xl text-[var(--nps-ivory)] max-w-2xl">{subtitle}</p>
          
          {showButtons && (
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#services">
                <Button className="btn-primary text-lg">
                  Our Services
                </Button>
              </Link>
              <Link href="#contact-form">
                <Button className="btn-outline text-lg">
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
