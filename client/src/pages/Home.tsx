import { useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useToast } from '@/hooks/use-toast';
import { Clock, Map, Shield, Users } from 'lucide-react';
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
    const hash = location.split('#')[1];
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        // Offset for header height
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
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
        title="Professional Pest Control Services in Central Maine" 
        subtitle="Protect your home and business from unwanted pests with our trusted and effective solutions."
      />

      {/* Service Highlights */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Pest Control Services</h2>
            <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
              We offer comprehensive solutions for all your pest problems, available 24 hours a day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                name={service.name}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="#contact">
              <Button className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Request Pest Control Service
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Northern Pest Solutions</h2>
            <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
              We're committed to providing effective, safe, and reliable pest control services across Central Maine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-primary shadow-md">
                  {getFeatureIcon(feature.icon)}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-neutral-dark">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">What Our Customers Say</h2>
            <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
              Hear from satisfied customers about their experience with Northern Pest Solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                text={testimonial.text}
                author={testimonial.author}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 service-area-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Service Area</h2>
            <p className="text-lg max-w-3xl mx-auto">{COMPANY_INFO.serviceArea}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-6 text-lg">We provide comprehensive pest control services throughout Central Maine, including:</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {SERVICE_AREAS.map((area, index) => (
                  <div key={index} className="bg-primary-light px-4 py-2 rounded">
                    {area}
                  </div>
                ))}
                <div className="bg-primary-light px-4 py-2 rounded">And more...</div>
              </div>
              
              <p className="mt-6">Not sure if we service your area? Contact us today to find out!</p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Map of Central Maine service area" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Contact Us</h2>
            <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
              Reach out to us for all your pest control needs. We're available 24/7.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="bg-neutral-light p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="mt-1 bg-primary text-white p-2 rounded-full mr-4">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-primary">Phone</h4>
                      <p className="mt-1">
                        <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}>
                          {COMPANY_INFO.phone}
                        </a>
                      </p>
                      <p className="text-sm text-neutral-dark mt-1">Available 24 hours</p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-start">
                    <div className="mt-1 bg-primary text-white p-2 rounded-full mr-4">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-primary">Email</h4>
                      <p className="mt-1">
                        <a href={`mailto:${COMPANY_INFO.email}`}>
                          {COMPANY_INFO.email}
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="mt-1 bg-primary text-white p-2 rounded-full mr-4">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-primary">Location</h4>
                      <p className="mt-1">Waterville, Maine</p>
                      <p className="text-sm text-neutral-dark mt-1">{COMPANY_INFO.serviceArea}</p>
                    </div>
                  </div>
                  
                  {/* Hours */}
                  <div className="flex items-start">
                    <div className="mt-1 bg-primary text-white p-2 rounded-full mr-4">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-primary">Hours</h4>
                      <p className="mt-1">{COMPANY_INFO.hours}</p>
                      <p className="text-sm text-neutral-dark mt-1">Available for emergency pest control</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-medium text-primary mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-primary hover:bg-primary-dark text-white p-2 rounded-full transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="bg-primary hover:bg-primary-dark text-white p-2 rounded-full transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="bg-primary hover:bg-primary-dark text-white p-2 rounded-full transition-colors">
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

// Import icons here
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
