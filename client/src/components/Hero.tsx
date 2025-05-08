import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

interface HeroProps {
  title: string;
  subtitle: string;
  showButtons?: boolean;
}

export default function Hero({ title, subtitle, showButtons = true }: HeroProps) {
  return (
    <section className="relative bg-primary text-white hero-section">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">{title}</h2>
          <p className="text-lg mb-8">{subtitle}</p>
          
          {showButtons && (
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#services">
                <Button className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-lg text-center transition-colors">
                  Our Services
                </Button>
              </Link>
              <Link href="#contact">
                <Button className="bg-white hover:bg-gray-100 text-primary font-medium py-3 px-6 rounded-lg text-center transition-colors">
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
