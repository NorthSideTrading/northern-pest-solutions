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
    <header className="bg-[#295231] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          {/* Logo - Simple Orange Line */}
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <div className="h-8 w-1.5 bg-[#F29D38] mr-3"></div>
                <span className="text-white text-lg font-medium">Northern Pest Solutions</span>
              </div>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="block md:hidden text-white hover:text-amber-300 focus:outline-none" 
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
                <span className="font-medium hover:text-amber-300 transition-colors cursor-pointer">{item.name}</span>
              </Link>
            ))}
            
            {/* CTA Button */}
            <Button 
              className="bg-[#F29D38] hover:bg-amber-500 text-white font-medium rounded-lg transition-colors"
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
                  className="font-medium hover:text-amber-300 transition-colors cursor-pointer block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            <Button 
              className="bg-[#F29D38] hover:bg-amber-500 text-white font-medium rounded-lg transition-colors mt-2 w-full"
            >
              Get a Quote
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
