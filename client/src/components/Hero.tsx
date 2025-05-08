import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

interface HeroProps {
  title: string;
  subtitle: string;
  showButtons?: boolean;
}

export default function Hero({ title, subtitle, showButtons = true }: HeroProps) {
  return (
    <section className="relative bg-nps-forest text-nps-ivory hero-section">
      <div className="absolute inset-0 bg-nps-forest opacity-70"></div>
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="600" 
          height="600" 
          viewBox="0 0 600 600"
          className="w-full max-w-5xl scale-125"
          aria-hidden="true"
        >
          {/* Compass circle */}
          <circle cx="300" cy="240" r="180" stroke="#FFFFFF" strokeWidth="20" fill="transparent" opacity="0.25"/>
          
          {/* North-South pointer */}
          <path d="M300 40 L300 100 M300 380 L300 440" stroke="#FFFFFF" strokeWidth="20" fill="none" opacity="0.25"/>
          
          {/* East-West pointer */}
          <path d="M100 240 L180 240 M420 240 L500 240" stroke="#FFFFFF" strokeWidth="20" fill="none" opacity="0.25"/>
          
          {/* Bug silhouette */}
          <path d="M300 140 L260 180 L340 180 Z" fill="#FFFFFF" opacity="0.25"/> {/* Head */}
          <ellipse cx="300" cy="240" rx="50" ry="80" fill="#FFFFFF" opacity="0.25"/> {/* Body */}
          <ellipse cx="300" cy="240" rx="15" ry="40" fill="#F6B04D" opacity="0.35"/> {/* Orange center */}
          
          {/* Legs */}
          <path d="M260 200 L210 180 M260 280 L210 300 M340 200 L390 180 M340 280 L390 300" stroke="#FFFFFF" strokeWidth="12" fill="none" opacity="0.25"/>
          
          {/* Text */}
          <text x="300" y="480" fontFamily="Arial, sans-serif" fontSize="80" fontWeight="bold" textAnchor="middle" fill="#FFFFFF" opacity="0.25">NORTHERN</text>
          <text x="300" y="550" fontFamily="Arial, sans-serif" fontSize="50" textAnchor="middle" fill="#FFFFFF" opacity="0.25">PEST SOLUTIONS</text>
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
