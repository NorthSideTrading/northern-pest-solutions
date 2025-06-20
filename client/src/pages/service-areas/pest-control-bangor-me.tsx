import { useEffect } from 'react';
import Layout from '@/components/Layout';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/ContactForm';
import { COMPANY_INFO } from '@/lib/constants';
import { Phone, MapPin, Clock, Shield, Users, CheckCircle, Bug } from 'lucide-react';

export default function PestControlBangorMe() {
  useEffect(() => {
    document.title = "Pest Control Bangor ME | Tick & Mosquito Control | Maine Pest Pros";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Affordable pest control Bangor, Maine. 24 hour emergency service for ticks, mosquitoes, ants, rodents. Call (207) 215-0860');
    }
  }, []);

  return (
    <Layout>
      <LocalBusinessSchema city="Bangor" service="pest control" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bangor's Trusted Pest Control Service
            </h1>
            <p className="text-xl mb-8">
              Protecting Northern Maine families from ticks, mosquitoes, and seasonal pests. 
              Expert service with guaranteed results since 2015.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Call {COMPANY_INFO.phone}
              </a>
              <a 
                href="#contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Free Inspection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bangor Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Bangor Area Coverage</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {['04401', '04402', 'Downtown', 'Fairmount', 'Stillwater', 'Orono', 'Veazie', 'Brewer'].map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg shadow-sm">
                <MapPin className="w-5 h-5 mx-auto mb-2 text-blue-600" />
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tick & Mosquito Focus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Bangor's Tick & Mosquito Specialists</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-orange-50 p-6 rounded-lg">
                <Bug className="w-10 h-10 mb-4 text-orange-600" />
                <h3 className="text-xl font-semibold text-orange-800 mb-4">Tick Control & Prevention</h3>
                <p className="text-gray-700 mb-4">
                  Bangor's wooded areas harbor deer ticks carrying Lyme disease. Our targeted treatments 
                  create tick-free zones around your property.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Perimeter barrier treatments</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Yard habitat modification</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Monthly monitoring</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <Bug className="w-10 h-10 mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Mosquito Yard Treatments</h3>
                <p className="text-gray-700 mb-4">
                  Bangor's summer mosquito swarms make outdoor activities miserable. Our treatments 
                  eliminate breeding sites and adult populations.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Standing water elimination</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Vegetation spray treatments</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Seasonal protection plans</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Winter Pest Issues */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Winter Rodent Control in Bangor</h2>
            <p className="text-lg text-gray-700 mb-8">
              Bangor's harsh winters drive mice and rats indoors. Our comprehensive rodent control 
              seals entry points and eliminates existing populations before they multiply.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Entry Point Sealing</h3>
                <p className="text-gray-600 text-sm">Professional caulking and screening of gaps, cracks, and openings</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Snap Trap Placement</h3>
                <p className="text-gray-600 text-sm">Strategic trap placement along known rodent pathways</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Sanitation Advice</h3>
                <p className="text-gray-600 text-sm">Food storage and cleanliness tips to prevent re-infestation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <ContactForm />
    </Layout>
  );
}