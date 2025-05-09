import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO, NAVIGATION } from '@/lib/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const isActive = (path: string) => {
    if (path === '/' && location === '/') return true;
    if (path !== '/' && location.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[var(--nps-forest)]/95 backdrop-blur-sm shadow-md h-16">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="assets/logo.png"
              alt="Northern Pest Solutions logo"
              className="h-8 w-auto md:h-10 object-contain"
            />
            <span className="text-lg md:text-xl font-semibold text-[var(--nps-ivory)] hidden sm:inline tracking-tight">
              Northern Pest Solutions
            </span>
          </div>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="block md:hidden text-[var(--nps-ivory)] hover:text-[var(--nps-amber)] focus:outline-none transition-colors" 
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
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center space-x-8">
            {NAVIGATION.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.name} className="relative">
                  <Link href={item.href}>
                    <span 
                      className={`text-[var(--nps-ivory)] ${active ? 'text-[var(--nps-amber)]' : 'hover:text-[var(--nps-amber)]'} transition-colors duration-200 py-1 font-medium cursor-pointer text-base`}
                    >
                      {item.name}
                    </span>
                  </Link>
                  {active && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[var(--nps-amber)] rounded-full"></span>
                  )}
                </li>
              );
            })}
            <li>
              <Button className="btn-primary ml-4">
                Get Quote
              </Button>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden ${mobileMenuOpen ? 'max-h-[400px] opacity-100 border-b border-[var(--nps-sage)]/20' : 'max-h-0 opacity-0 border-none'} overflow-hidden transition-all duration-300 absolute w-full bg-[var(--nps-forest)]/95 backdrop-blur-sm`}
      >
        <nav className="container mx-auto px-4 py-5">
          <ul className="flex flex-col space-y-4">
            {NAVIGATION.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.name} className="relative border-l-2 pl-3" style={{ 
                  borderColor: active ? 'var(--nps-amber)' : 'transparent' 
                }}>
                  <Link href={item.href}>
                    <span 
                      className={`${active ? 'text-[var(--nps-amber)]' : 'text-[var(--nps-ivory)] hover:text-[var(--nps-amber)]'} transition-colors py-1 font-medium text-base block`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Button className="btn-primary w-full">
                Get Quote
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
