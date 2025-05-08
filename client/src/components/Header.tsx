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
    <header className="fixed inset-x-0 top-0 z-50 bg-[var(--nps-forest)]/95 backdrop-blur-sm drop-shadow-md h-16">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center space-x-2">
                <img src="assets/logo.png"
                     alt="Northern Pest Solutions logo"
                     className="h-8 w-auto md:h-10 object-contain shrink-0"/>
                <span className="text-xl font-semibold text-white hidden sm:inline">Northern Pest Solutions</span>
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
                <span className="text-[var(--nps-ivory)] hover:text-[var(--nps-amber)] transition font-medium cursor-pointer">{item.name}</span>
              </Link>
            ))}
            
            {/* CTA Button */}
            <Button 
              className="rounded-full px-5 py-2 bg-[var(--nps-amber)] text-[var(--nps-forest)] font-semibold hover:bg-[var(--nps-amber)]/90 transition"
            >
              Get Quote
            </Button>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`md:hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out absolute top-16 left-0 right-0 bg-[var(--nps-forest)]`}
        >
          <nav className="flex flex-col space-y-4 py-4 px-4">
            {NAVIGATION.map((item) => (
              <Link key={item.name} href={item.href}>
                <span 
                  className="text-[var(--nps-ivory)] hover:text-[var(--nps-amber)] transition font-medium cursor-pointer block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            <Button 
              className="rounded-full px-5 py-2 bg-[var(--nps-amber)] text-[var(--nps-forest)] font-semibold hover:bg-[var(--nps-amber)]/90 transition mt-2 w-full"
            >
              Get Quote
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
