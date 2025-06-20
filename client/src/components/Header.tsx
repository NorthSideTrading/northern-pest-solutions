import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO, NAVIGATION } from '@/lib/constants';
import { trackEvent } from '../../lib/analytics';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [activeSection, setActiveSection] = useState('home');

  // Detect which section is currently in view
  useEffect(() => {
    // Throttle function to limit how often the scroll handler runs
    const throttle = (callback: () => void, limit: number) => {
      let waiting = false;
      return () => {
        if (!waiting) {
          callback();
          waiting = true;
          setTimeout(() => {
            waiting = false;
          }, limit);
        }
      };
    };
    
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY;
      const headerHeight = 96;
      const windowHeight = window.innerHeight;
      
      // Check sections in reverse order to prioritize the one that's most in view
      const sections = [
        { id: 'contact', name: 'contact' },
        { id: 'about', name: 'about' },
        { id: 'testimonials', name: 'testimonials' },
        { id: 'services', name: 'services' },
        { id: 'home', name: 'home' }
      ];
      
      // By default, home is active if we're at the top
      if (scrollPosition < 100) {
        setActiveSection('home');
        return;
      }
      
      // Find the section that takes up the most space in the viewport
      let maxVisibleSection = { id: 'home', name: 'home', visibleArea: 0 };

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // Calculate how much of the section is visible in the viewport
          const visibleTop = Math.max(rect.top, headerHeight);
          const visibleBottom = Math.min(rect.bottom, windowHeight);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          
          // If this section has more visible area than the current max, update it
          if (visibleHeight > maxVisibleSection.visibleArea) {
            maxVisibleSection = { 
              ...section, 
              visibleArea: visibleHeight 
            };
          }
        }
      }
      
      // Special case for when we're very close to the top
      if (scrollPosition < 300 && maxVisibleSection.name !== 'home') {
        const homeElement = document.getElementById('home');
        if (homeElement && homeElement.getBoundingClientRect().bottom > 0) {
          setActiveSection('home');
          return;
        }
      }
      
      // Set the section with the most visible area as active
      setActiveSection(maxVisibleSection.name);
    }, 100); // Throttle to run at most every 100ms
    
    // Set initial active section
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const isActive = (path: string) => {
    // For hash links
    if (path.includes('#')) {
      const sectionName = path.substring(path.indexOf('#') + 1);
      return activeSection === sectionName;
    }
    
    // For home link
    if (path === '/') {
      return activeSection === 'home';
    }
    
    // For non-home pages
    if (path !== '/' && location.startsWith(path)) return true;
    
    return false;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-[var(--nps-forest)]">
      {/* Main navigation bar */}
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo and company name */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex-shrink-0">
                <img 
                  src="/images/pest-control-logo-optimized.png"
                  alt="Maine Pest Pros logo"
                  className="h-16 w-auto"
                  width="256"
                  height="64"
                />
              </div>
              <div className="ml-4 text-white">
                <span className="font-semibold text-xl block leading-tight">Maine</span>
                <span className="font-semibold text-xl block leading-tight">Pest Pros</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {NAVIGATION.map((item) => {
                const active = isActive(item.href);
                return (
                  <a 
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = item.href.split('#')[1];
                      if (targetId) {
                        // Update the URL hash to reflect the active section
                        window.history.pushState(null, '', `#${targetId}`);
                        
                        const targetElement = document.getElementById(targetId);
                        if (targetElement) {
                          const headerHeight = 96; // Adjust for header height
                          const elementPosition = targetElement.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.scrollY - headerHeight;
                          
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                          });
                        }
                      } else {
                        // If no hash, navigate to the base URL
                        window.scrollTo(0, 0);
                      }
                    }}
                    className={`px-1 py-2 text-base font-medium relative ${
                      active 
                        ? 'text-[var(--nps-amber)]' 
                        : 'text-white hover:text-[var(--nps-amber)]'
                    } transition-colors duration-200 cursor-pointer`}
                  >
                    {item.name}
                    {active && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--nps-amber)]"></span>
                    )}
                  </a>
                );
              })}
              
              <a 
                href="tel:+12072150860"
                className="bg-[var(--nps-amber)] hover:bg-[var(--nps-amber)]/90 text-[var(--nps-forest)] font-medium px-5 py-2 rounded transition-colors duration-200 inline-flex items-center"
              >
                (207) 215-0860
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[var(--nps-amber)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--nps-amber)]"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
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
              <a
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium ${
                  active 
                    ? 'text-[var(--nps-amber)]' 
                    : 'text-white hover:text-[var(--nps-amber)]'
                } transition-colors duration-200`}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  const targetId = item.href.split('#')[1];
                  if (targetId) {
                    // Update the URL hash to reflect the current section
                    window.history.pushState(null, '', `#${targetId}`);
                    
                    setTimeout(() => {
                      const targetElement = document.getElementById(targetId);
                      if (targetElement) {
                        const headerHeight = 96;
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.scrollY - headerHeight;
                        
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }, 100);
                  } else {
                    window.scrollTo(0, 0);
                  }
                }}
              >
                {item.name}
              </a>
            );
          })}
          <div className="mt-4 px-3">
            <a 
              href="tel:+12072150860"
              className="w-full bg-[var(--nps-amber)] hover:bg-[var(--nps-amber)]/90 text-[var(--nps-forest)] font-medium px-4 py-2 rounded transition-colors duration-200 inline-flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              (207) 215-0860
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom accent border */}
      <div className="h-1 w-full bg-[var(--nps-amber)]"></div>
    </header>
  );
}
