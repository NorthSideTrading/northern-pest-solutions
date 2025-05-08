import { useState } from 'react';
import { Link } from 'wouter';
import { Phone } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION } from '@/lib/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  NPS
                </div>
                <div className="ml-3">
                  <h1 className="text-xl md:text-2xl font-bold text-primary">{COMPANY_INFO.name}</h1>
                  <p className="text-sm italic text-neutral-dark">{COMPANY_INFO.tagline}</p>
                </div>
              </a>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="block md:hidden text-neutral-dark hover:text-primary focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAVIGATION.map((item) => (
              <Link key={item.name} href={item.href}>
                <a className="font-medium hover:text-primary transition-colors">{item.name}</a>
              </Link>
            ))}
          </nav>
          
          {/* Call Now Button (Desktop) */}
          <a 
            href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} 
            className="hidden md:flex items-center bg-accent text-white px-4 py-2 rounded-lg font-medium hover:bg-accent-dark transition-colors"
          >
            <Phone className="h-4 w-4 mr-2" />
            {COMPANY_INFO.phone}
          </a>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
          <nav className="flex flex-col space-y-3">
            {NAVIGATION.map((item) => (
              <Link key={item.name} href={item.href}>
                <a 
                  className="font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </Link>
            ))}
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center bg-accent text-white px-4 py-2 rounded-lg font-medium mt-2 hover:bg-accent-dark transition-colors w-full justify-center"
            >
              <Phone className="h-4 w-4 mr-2" />
              {COMPANY_INFO.phone}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
