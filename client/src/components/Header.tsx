import { useState } from 'react';
import { Link } from 'wouter';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO, NAVIGATION } from '@/lib/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-nps-forest text-nps-ivory sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          {/* Logo - Simple Orange Line */}
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                {/* Simple compass logo */}
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 100" className="mr-3" aria-hidden="true">
                  {/* Compass circle */}
                  <circle cx="50" cy="50" r="45" stroke="#FFFFFF" strokeWidth="2" fill="transparent"/>
                  
                  {/* Center bug */}
                  <circle cx="50" cy="50" r="6" fill="#F6B04D"/>
                  
                  {/* Bug body silhouette (small) */}
                  <ellipse cx="50" cy="50" rx="3" ry="10" fill="#FFFFFF"/>
                </svg>
                <span className="text-nps-ivory text-lg font-medium">Northern Pest Solutions</span>
              </div>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="block md:hidden text-nps-ivory hover:text-nps-amber focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {NAVIGATION.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className="font-medium hover:text-nps-amber transition-colors cursor-pointer">{item.name}</span>
              </Link>
            ))}
            
            {/* CTA Button */}
            <Button 
              className="bg-nps-amber hover:bg-nps-amber/90 text-nps-forest font-medium rounded-lg transition-colors"
            >
              Get a Quote
            </Button>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`md:hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <nav className="flex flex-col space-y-4 py-4">
            {NAVIGATION.map((item) => (
              <Link key={item.name} href={item.href}>
                <span 
                  className="font-medium hover:text-nps-amber transition-colors cursor-pointer block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            <Button 
              className="bg-nps-amber hover:bg-nps-amber/90 text-nps-forest font-medium rounded-lg transition-colors mt-2 w-full"
            >
              Get a Quote
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
