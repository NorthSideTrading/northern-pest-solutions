import { Link } from 'wouter';
import { ChevronLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { COMPANY_INFO } from '@/lib/constants';

interface ServicePageProps {
  service: {
    id: string;
    name: string;
    description: string;
    image: string;
    longDescription: string;
    problems: string[];
    solutions: string[];
  };
}

export default function ServicePage({ service }: ServicePageProps) {
  // Handle scroll to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero 
        title={`${service.name} Control Services`}
        subtitle={service.description}
        showButtons={false}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/#services">
              <a className="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to All Services
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-neutral-light rounded-lg shadow-md overflow-hidden">
                <img 
                  src={service.image} 
                  alt={`${service.name} control services`}
                  className="w-full h-64 object-cover"
                />
                
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-primary mb-4">{service.name} Control</h2>
                  
                  <div className="prose max-w-none mb-6">
                    <p>{service.longDescription}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-primary mb-4">Common {service.name} Problems</h3>
                    <ul className="space-y-2">
                      {service.problems.map((problem, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Our {service.name} Control Solutions</h3>
                    <ul className="space-y-3">
                      {service.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 w-5 h-5 bg-secondary rounded-full flex items-center justify-center mr-3 mt-0.5">
                            <Check className="w-3 h-3 text-white" />
                          </span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <Link href="#contact-form">
                      <Button className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-lg transition-colors">
                        Request {service.name} Control Service
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-primary-light text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Emergency {service.name} Control Available</h3>
                <p className="mb-4">We provide 24/7 emergency pest control services across Central Maine.</p>
                <a 
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="inline-flex items-center bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
            
            <div id="contact-form">
              <div className="sticky top-24">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Import React hooks
import React from 'react';

// Import icons
import { Phone } from 'lucide-react';
