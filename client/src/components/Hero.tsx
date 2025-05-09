import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  showButtons?: boolean;
}

export default function Hero({ title, subtitle, showButtons = true }: HeroProps) {
  return (
    <section className="hero-container">
      {/* Background overlay - darker gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--nps-forest)]/80 to-[var(--nps-forest)]/60"></div>
      
      {/* Logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <img 
          src="/watermark.svg" 
          alt="" 
          className="absolute right-0 translate-x-1/4 h-[800px] w-[800px]" 
          aria-hidden="true"
        />
      </div>
      
      {/* Content container */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
            Professional Pest Control Services
            <span className="block text-[var(--nps-amber)]">in Central Maine</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mb-8">
            {subtitle}
          </p>
          
          {/* Call to action buttons */}
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#services">
                <Button size="lg" className="btn-primary text-base group">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline" className="btn-outline text-base">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          )}
          
          {/* Trust badge */}
          <div className="flex items-center mt-10 bg-[var(--nps-forest)]/80 backdrop-blur-sm p-4 rounded-lg w-fit shadow-lg border border-white/10">
            <div className="mr-3 bg-[var(--nps-amber)] rounded-full p-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[var(--nps-forest)]">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm font-medium text-white">A trusted solution since 2005</span>
          </div>
        </div>
      </div>
    </section>
  );
}
