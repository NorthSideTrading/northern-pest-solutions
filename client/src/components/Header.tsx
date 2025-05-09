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
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-[var(--nps-forest)]">
      {/* Main navigation bar */}
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo and company name */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex-shrink-0">
                <img 
                  src="/images/northern-pest-logo.png"
                  alt="Northern Pest Solutions logo"
                  className="h-16 w-auto"
                />
              </div>
              <div className="ml-4 text-white">
                <span className="font-semibold text-xl block leading-tight">Northern</span>
                <span className="font-semibold text-xl block leading-tight">Pest Solutions</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {NAVIGATION.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link 
                    key={item.name}
                    href={item.href}
                    className={`px-1 py-2 text-base font-medium relative ${
                      active 
                        ? 'text-[var(--nps-amber)]' 
                        : 'text-white hover:text-[var(--nps-amber)]'
                    } transition-colors duration-200`}
                  >
                    {item.name}
                    {active && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--nps-amber)]"></span>
                    )}
                  </Link>
                );
              })}
              
              <Link href="#contact">
                <Button 
                  className="bg-[var(--nps-amber)] hover:bg-[var(--nps-amber)]/90 text-[var(--nps-forest)] font-medium px-5 py-2 rounded"
                >
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[var(--nps-amber)] focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2 border-t border-white/10">
          {NAVIGATION.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium ${
                  active 
                    ? 'text-[var(--nps-amber)]' 
                    : 'text-white hover:text-[var(--nps-amber)]'
                } transition-colors duration-200`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="mt-4 px-3">
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button 
                className="w-full bg-[var(--nps-amber)] hover:bg-[var(--nps-amber)]/90 text-[var(--nps-forest)] font-medium px-4 py-2 rounded"
              >
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom accent border */}
      <div className="h-1 w-full bg-[var(--nps-amber)]"></div>
    </header>
  );
}
