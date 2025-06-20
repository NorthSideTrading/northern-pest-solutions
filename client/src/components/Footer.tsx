import { Link } from 'wouter';
import { Clock, Mail, Phone } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION, SERVICES, LOCAL_PAGES } from '@/lib/constants';

export default function Footer() {
  // Only show the first 5 services in the footer
  const featuredServices = SERVICES.slice(0, 5);

  return (
    <footer className="bg-[var(--nps-forest)] text-[var(--nps-ivory)] py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <img
                    src="/images/pest-control-logo-optimized.png"
                    alt="Maine Pest Pros logo"
                    className="h-12 w-auto brightness-0 invert"
                    loading="lazy"
                    decoding="async"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg text-white leading-tight">MAINE</span>
                  <span className="font-bold text-lg text-white leading-tight">PEST PROS</span>
                  <span className="text-xs italic text-[var(--nps-amber)]">Maine's Trusted Pest Control Experts</span>
                </div>
              </div>
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

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[var(--nps-amber)]">Service Areas</h4>
            <ul className="space-y-1 text-xs">
              {LOCAL_PAGES.slice(0, 10).map((page: any) => (
                <li key={page.slug}>
                  <Link href={`/${page.slug}`}>
                    <span className="hover:text-[var(--nps-amber)] transition-colors cursor-pointer">
                      {page.city} Pest Control
                    </span>
                  </Link>
                </li>
              ))}
              {LOCAL_PAGES.length > 10 && (
                <li className="text-gray-400 text-xs">
                  + {LOCAL_PAGES.length - 10} more cities
                </li>
              )}
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
