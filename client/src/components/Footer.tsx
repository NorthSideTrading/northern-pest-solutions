import { Link } from 'wouter';
import { Clock, Mail, Phone } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION, SERVICES } from '@/lib/constants';

export default function Footer() {
  // Only show the first 5 services in the footer
  const featuredServices = SERVICES.slice(0, 5);

  return (
    <footer className="bg-[var(--nps-forest)] text-[var(--nps-ivory)] py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <svg width="240" height="200" viewBox="0 0 240 200" className="w-36 h-auto">
                <circle cx="120" cy="80" r="50" stroke="#295231" strokeWidth="5" fill="transparent"/>
                <path d="M120 20 L120 45 M120 115 L120 140" stroke="#295231" strokeWidth="5" fill="none"/>
                <path d="M60 80 L85 80 M155 80 L180 80" stroke="#295231" strokeWidth="5" fill="none"/>
                <path d="M120 55 L110 65 L130 65 Z" fill="#295231" />
                <ellipse cx="120" cy="80" rx="12" ry="20" fill="#295231" />
                <ellipse cx="120" cy="80" rx="4" ry="10" fill="#F29D38" />
                <path d="M112 75 L102 70 M112 85 L102 90 M128 75 L138 70 M128 85 L138 90" stroke="#295231" strokeWidth="3" fill="none"/>
                <text x="120" y="160" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#295231">NORTHERN</text>
                <text x="120" y="185" fontFamily="Arial, sans-serif" fontSize="16" textAnchor="middle" fill="#295231">PEST SOLUTIONS</text>
              </svg>
            </div>
            <p className="mb-4 text-sm">
              A professional pest control company serving Central Maine with effective and reliable pest management services.
            </p>
            <p className="text-sm">© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[var(--nps-amber)]">Quick Links</h4>
            <ul className="space-y-2">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <span className="text-sm hover:text-[var(--nps-amber)] transition-colors cursor-pointer">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[var(--nps-amber)]">Our Services</h4>
            <ul className="space-y-2">
              {featuredServices.map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`}>
                    <span className="text-sm hover:text-[var(--nps-amber)] transition-colors cursor-pointer">
                      {service.name} Control
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#services">
                  <span className="text-sm hover:text-[var(--nps-amber)] transition-colors cursor-pointer">
                    View All Services
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[var(--nps-amber)]">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-[var(--nps-amber)]" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-sm hover:text-[var(--nps-amber)] transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-[var(--nps-amber)]" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm hover:text-[var(--nps-amber)] transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-[var(--nps-amber)]" />
                <span className="text-sm">{COMPANY_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
