import { useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useToast } from '@/hooks/use-toast';
import { Clock, Map, Shield, Users, Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowRight, Bug } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO, SERVICES, TESTIMONIALS, SERVICE_AREAS, FEATURES } from '@/lib/constants';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import ContactForm from '@/components/ContactForm';
import Hero from '@/components/Hero';

export default function Home() {
  const [location] = useLocation();
  const { toast } = useToast();

  // Handle scroll to section when hash changes
  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash;
    
    if (hash) {
      // Remove the # symbol
      const targetId = hash.substring(1);
      const element = document.getElementById(targetId);
      
      if (element) {
        // Offset for header height
        const headerOffset = 96; // Increased height to account for the taller header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        // Smooth scroll to the element
        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    } else if (location === '/') {
      // Scroll to top when navigating to home page without hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Helper function to get icon by name
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock':
        return <Clock className="w-8 h-8" />;
      case 'Shield':
        return <Shield className="w-8 h-8" />;
      case 'Map':
        return <Map className="w-8 h-8" />;
      case 'Users':
        return <Users className="w-8 h-8" />;
      default:
        return <Clock className="w-8 h-8" />;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Hero 
        title="" 
        subtitle="Protect your home and business from unwanted pests with our trusted and effective solutions."
      />

      {/* Combined Features & Services Section */}
      <section id="services" className="pt-16 pb-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Features Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {FEATURES.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-[var(--nps-ivory)] rounded-lg shadow-sm transition-transform hover:translate-y-[-5px]">
                <div className="bg-[var(--nps-forest)] w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0">
                  {getFeatureIcon(feature.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--nps-forest)]">{feature.title}</h3>
                  <p className="text-sm text-neutral-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[var(--nps-forest)] mb-3">Our Pest Control Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
              We offer comprehensive solutions for all your pest problems in Central Maine
            </p>
          </div>
          
          {/* Featured Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left column with featured services */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Manually select important pest services to feature */}
              {[
                SERVICES.find(s => s.id === "bed-bugs"),
                SERVICES.find(s => s.id === "mice-rats"),
                SERVICES.find(s => s.id === "ants"),
                SERVICES.find(s => s.id === "stinging-insects")
              ].filter(Boolean).map((service) => (
                <ServiceCard
                  key={service!.id}
                  id={service!.id}
                  name={service!.id === "ants" ? "Ants" : service!.name}
                  description={service!.description}
                  image={service!.image}
                />
              ))}
            </div>
            
            {/* Right column with CTA and testimonial */}
            <div className="flex flex-col gap-6">
              {/* Call to action card */}
              <div className="bg-[var(--nps-forest)] text-white p-6 rounded-lg shadow-lg flex-1">
                <Bug className="w-10 h-10 mb-4 text-[var(--nps-amber)]" />
                <h3 className="text-2xl font-bold mb-3">Pest Emergency?</h3>
                <p className="mb-6">We provide 24/7 emergency pest control services throughout Central Maine</p>
                <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}>
                  <Button size="lg" className="w-full bg-[var(--nps-amber)] hover:bg-[var(--nps-amber)]/90 text-[var(--nps-forest)] font-bold">
                    Call Now
                  </Button>
                </a>
              </div>
              
              {/* Featured testimonial */}
              <div className="bg-[var(--nps-ivory)] p-6 rounded-lg shadow-sm flex-1">
                <h3 className="text-xl font-bold text-[var(--nps-forest)] mb-4">Trusted By Locals</h3>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[var(--nps-amber)]">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm italic mb-4">"{TESTIMONIALS[0].text}"</blockquote>
                <p className="text-right text-sm font-medium">— {TESTIMONIALS[0].author}</p>
              </div>
            </div>
          </div>
          
          {/* View all services and get quote links */}
          <div className="flex justify-center mt-10 gap-4 flex-wrap">
            <div className="text-center">
              <Link href="/#services">
                <Button className="bg-[var(--nps-amber)] hover:bg-[var(--nps-amber)]/90 text-[var(--nps-forest)] font-medium group">
                  View All Services
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="text-center">
              <Link href="#contact">
                <Button variant="outline" className="border-[var(--nps-forest)] text-[var(--nps-forest)] hover:bg-[var(--nps-forest)] hover:text-white group">
                  Get a free quote
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Testimonial & Service Area */}
      <section id="about" className="py-16 bg-[var(--nps-ivory)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service Areas */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--nps-forest)] mb-6">Our Service Area</h2>
              <p className="mb-6">
                We provide comprehensive pest control services throughout Central Maine, including:
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {SERVICE_AREAS.map((area, index) => (
                  <div key={index} className="bg-white border border-[var(--nps-sage)] px-4 py-2 rounded-full text-sm">
                    {area}
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-start">
                <a href="#contact" className="inline-flex items-center text-[var(--nps-forest)] font-medium hover:text-[var(--nps-amber)] transition-colors">
                  Not sure if we service your area? Contact us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            
            {/* Why Choose Us */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--nps-forest)] mb-6">Why Choose Northern Pest Solutions</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <div>
                    <h3 className="flex items-center text-lg font-semibold text-[var(--nps-forest)]">
                      <Shield className="w-5 h-5 mr-2 text-[var(--nps-amber)]" />
                      Safe & Effective Treatments
                    </h3>
                    <p className="mt-1 pl-7 text-neutral-600">
                      Our treatments eliminate pests while being safe for your family, pets, and the environment.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="flex items-center text-lg font-semibold text-[var(--nps-forest)]">
                      <Users className="w-5 h-5 mr-2 text-[var(--nps-amber)]" />
                      Trained Professionals
                    </h3>
                    <p className="mt-1 pl-7 text-neutral-600">
                      Our certified technicians are experienced in handling all types of pest issues in Maine.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="flex items-center text-lg font-semibold text-[var(--nps-forest)]">
                      <Map className="w-5 h-5 mr-2 text-[var(--nps-amber)]" />
                      Local Expertise
                    </h3>
                    <p className="mt-1 pl-7 text-neutral-600">
                      We understand Maine's unique pest challenges and provide targeted solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Simplified */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--nps-forest)] mb-4">Contact Us</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Reach out to us for all your pest control needs. We're available 24/7.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="bg-[var(--nps-ivory)] p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[var(--nps-forest)] mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="mt-1 bg-[var(--nps-amber)] text-[var(--nps-forest)] p-2 rounded-full mr-4">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-[var(--nps-forest)]">Phone</h4>
                      <p className="mt-1">
                        <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="hover:text-[var(--nps-amber)] transition-colors">
                          {COMPANY_INFO.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-start">
                    <div className="mt-1 bg-[var(--nps-amber)] text-[var(--nps-forest)] p-2 rounded-full mr-4">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-[var(--nps-forest)]">Email</h4>
                      <p className="mt-1">
                        <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[var(--nps-amber)] transition-colors">
                          {COMPANY_INFO.email}
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  {/* Hours */}
                  <div className="flex items-start">
                    <div className="mt-1 bg-[var(--nps-amber)] text-[var(--nps-forest)] p-2 rounded-full mr-4">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-[var(--nps-forest)]">Hours</h4>
                      <p className="mt-1">{COMPANY_INFO.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form - wider */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
