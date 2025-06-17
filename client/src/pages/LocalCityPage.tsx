import { Link } from 'wouter';
import { Phone, MapPin, Clock, Star, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO, SERVICES } from '@/lib/constants';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';

interface LocalCityPageProps {
  city: string;
  title: string;
  description: string;
  population: string;
  keyPests: string[];
  zipCodes: string[];
}

export default function LocalCityPage({ 
  city, 
  title, 
  description, 
  population, 
  keyPests, 
  zipCodes 
}: LocalCityPageProps) {
  
  const featuredServices = SERVICES.filter(service => 
    keyPests.some(pest => service.name.toLowerCase().includes(pest.toLowerCase()) || 
                         pest.toLowerCase().includes(service.name.toLowerCase()))
  ).slice(0, 4);

  return (
    <>
      {/* SEO Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`pest control ${city} ME, exterminator ${city} Maine, ${keyPests.join(' control ' + city + ', ')} control ${city}`} />
      
      {/* Hero Section */}
      <section className="bg-[var(--nps-forest)] text-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/">
              <span className="inline-flex items-center text-white/80 hover:text-[var(--nps-amber)] transition-colors cursor-pointer">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Home
              </span>
            </Link>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Pest Control in {city}, Maine
            </h1>
            <p className="text-xl mb-6 text-white/90">
              Licensed exterminators serving {city} and surrounding areas. 
              Comprehensive pest management for {keyPests.join(', ').toLowerCase()} and more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}>
                <Button size="lg" className="bg-[var(--nps-amber)] hover:bg-[var(--nps-amber)]/90 text-[var(--nps-forest)] font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call {COMPANY_INFO.phone}
                </Button>
              </a>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-[var(--nps-forest)]"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView()}
              >
                Free Inspection
              </Button>
            </div>
            
            {/* City Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-[var(--nps-amber)]" />
                Population: {population}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-[var(--nps-amber)]" />
                24/7 Emergency Service
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-[var(--nps-amber)]" />
                Licensed & Insured
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--nps-forest)] mb-4">
            Common Pest Problems in {city}, ME
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {city} residents commonly deal with {keyPests.join(', ').toLowerCase()} infestations. 
            Our local pest control experts understand the unique challenges facing {city} homes and businesses.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                name={service.name}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Local Area Information */}
      <section className="py-16 bg-[var(--nps-ivory)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[var(--nps-forest)] mb-6">
                Why Choose Northern Pest Solutions in {city}?
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--nps-forest)] mb-2">
                    Local Maine Expertise
                  </h3>
                  <p className="text-gray-600">
                    Our technicians understand {city}'s climate, common pest species, and seasonal patterns. 
                    We provide targeted solutions that work in Maine's unique environment.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[var(--nps-forest)] mb-2">
                    Fast Response Time
                  </h3>
                  <p className="text-gray-600">
                    Same-day service available in {city} and surrounding zip codes: {zipCodes.join(', ')}.
                    Emergency pest control available 24/7.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[var(--nps-forest)] mb-2">
                    Safe for Families & Pets
                  </h3>
                  <p className="text-gray-600">
                    All treatments are eco-friendly and safe for children and pets. 
                    We use integrated pest management techniques for long-lasting results.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[var(--nps-forest)] mb-4">
                Service Areas Around {city}
              </h3>
              <p className="text-gray-600 mb-4">
                We provide comprehensive pest control services throughout the {city} area:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {zipCodes.map(zip => (
                  <div key={zip} className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1 text-[var(--nps-amber)]" />
                    {zip}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-[var(--nps-forest)] text-white rounded-lg">
                <h4 className="font-bold mb-2">Free Pest Inspection</h4>
                <p className="text-sm mb-3">
                  Schedule your complimentary pest assessment in {city} today.
                </p>
                <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}>
                  <Button className="w-full bg-[var(--nps-amber)] hover:bg-[var(--nps-amber)]/90 text-[var(--nps-forest)] font-bold">
                    Call {COMPANY_INFO.phone}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--nps-forest)] mb-8 text-center">
              Get Your Free Pest Control Quote in {city}
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}