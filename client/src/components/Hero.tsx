import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

interface HeroProps {
  title: string;
  subtitle: string;
  showButtons?: boolean;
}

export default function Hero({ title, subtitle, showButtons = true }: HeroProps) {
  return (
    <section className="relative bg-[#0a160c] text-white hero-section">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative container mx-auto px-4 py-32 md:py-48 lg:py-52">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-2xl mb-8">{subtitle}</p>
          
          {showButtons && (
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#services">
                <Button className="bg-[#F29D38] hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-md text-center transition-colors text-lg">
                  Our Services
                </Button>
              </Link>
              <Link href="#contact-form">
                <Button className="bg-white hover:bg-gray-100 text-[#295231] font-medium py-3 px-8 rounded-md text-center transition-colors text-lg">
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
