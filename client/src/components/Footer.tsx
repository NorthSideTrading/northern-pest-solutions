import { Link } from 'wouter';
import { Clock, Mail, Phone } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION, SERVICES } from '@/lib/constants';

export default function Footer() {
  // Only show the first 5 services in the footer
  const featuredServices = SERVICES.slice(0, 5);

  return (
    <footer className="bg-[#295231] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img src="/assets/northern-pest-logo.svg" alt="Northern Pest Solutions logo" className="h-36 w-auto" />
            </div>
            <p className="mb-4 text-sm">
              A professional pest control company serving Central Maine with effective and reliable pest management services.
            </p>
            <p className="text-sm">© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <span className="text-sm hover:text-amber-300 transition-colors cursor-pointer">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {featuredServices.map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`}>
                    <span className="text-sm hover:text-amber-300 transition-colors cursor-pointer">
                      {service.name} Control
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#services">
                  <span className="text-sm hover:text-amber-300 transition-colors cursor-pointer">
                    View All Services
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-amber-300" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-sm hover:text-amber-300 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-amber-300" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm hover:text-amber-300 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-amber-300" />
                <span className="text-sm">{COMPANY_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
