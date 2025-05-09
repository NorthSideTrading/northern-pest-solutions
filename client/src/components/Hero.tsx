import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

interface HeroProps {
  title: string;
  subtitle: string;
  showButtons?: boolean;
}

export default function Hero({ title, subtitle, showButtons = true }: HeroProps) {
  return (
    <section className="relative text-nps-ivory hero-section overflow-hidden min-h-[50vh] md:min-h-[45vh]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,.25)_100%)]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <img 
          src="/images/logo-watermark.svg" 
          alt="" 
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-[600px] opacity-25" 
          aria-hidden="true"
        />
      </div>
      <div className="relative container mx-auto px-4 py-8 md:py-10 lg:py-12">
        <div className="max-w-2xl pt-10 md:pt-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--nps-ivory)] leading-tight max-w-3xl">
            Professional Pest<br />
            Control Services<br />
            in Central Maine
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-[var(--nps-ivory)] max-w-2xl">{subtitle}</p>
          
          {showButtons && (
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
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
