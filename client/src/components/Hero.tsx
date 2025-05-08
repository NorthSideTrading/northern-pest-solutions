import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

interface HeroProps {
  title: string;
  subtitle: string;
  showButtons?: boolean;
}

export default function Hero({ title, subtitle, showButtons = true }: HeroProps) {
  return (
    <section className="relative bg-[#295231] text-white hero-section">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative container mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-3">{title}</h2>
          <p className="text-lg mb-6">{subtitle}</p>
          
          {showButtons && (
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link href="#services">
                <Button className="bg-[#F29D38] hover:bg-amber-500 text-white font-medium py-2 px-5 rounded-lg text-center transition-colors">
                  Our Services
                </Button>
              </Link>
              <Link href="#contact">
                <Button className="bg-white hover:bg-gray-100 text-[#295231] font-medium py-2 px-5 rounded-lg text-center transition-colors">
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
