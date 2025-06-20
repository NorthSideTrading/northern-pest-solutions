import { useEffect } from 'react';
import Layout from '@/components/Layout';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/ContactForm';
import { COMPANY_INFO } from '@/lib/constants';
import { Phone, MapPin, Clock, Shield, Users, CheckCircle, Bug, Zap } from 'lucide-react';

export default function PestControlLewistonMe() {
  useEffect(() => {
    document.title = "Pest Control Lewiston ME | Bed Bug Heat Treatment | Maine Pest Pros";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Emergency pest control Lewiston, Maine. Commercial & residential extermination. Organic treatments available. Call (207) 215-0860');
    }
  }, []);

  return (
    <Layout>
      <LocalBusinessSchema city="Lewiston" service="pest control" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Lewiston's Bed Bug Heat Treatment Experts
            </h1>
            <p className="text-xl mb-8">
              Serving Lewiston-Auburn with chemical-free bed bug elimination and comprehensive pest control. 
              Commercial and residential solutions available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Emergency: {COMPANY_INFO.phone}
              </a>
              <a 
                href="#contact"
                className="border-2 border-white text-white hover:bg-white hover:text-red-800 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lewiston Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Lewiston-Auburn Service Areas</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {['04240', '04241', '04243', 'Auburn', 'Downtown', 'Sabattus', 'Lisbon', 'Mechanic Falls', 'Poland'].map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg shadow-sm">
                <MapPin className="w-5 h-5 mx-auto mb-2 text-red-600" />
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bed Bug Heat Treatment Spotlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Zap className="w-16 h-16 mx-auto mb-4 text-red-600" />
              <h2 className="text-3xl font-bold mb-4">Chemical-Free Bed Bug Heat Treatment</h2>
              <p className="text-lg text-gray-700">
                Lewiston's top-rated bed bug elimination service uses industrial heaters to kill all life stages in one treatment
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-red-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-red-800 mb-3">120°F Treatment</h3>
                <p className="text-gray-700">We heat your entire space to lethal temperatures that kill bed bugs instantly</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-red-800 mb-3">4-8 Hour Process</h3>
                <p className="text-gray-700">Complete elimination in a single day - no follow-up treatments needed</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Safe for Families</h3>
                <p className="text-gray-700">No toxic chemicals means no health risks to children or pets</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-800 mb-4">Why Lewiston Residents Choose Heat Treatment</h3>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Kills eggs that chemicals can't reach</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />No preparation required</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Works in furniture and mattresses</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Apartment-friendly treatment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Commercial Pest Control in Lewiston</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Restaurants & Food Service</h3>
                <p className="text-gray-700 mb-4">
                  Health department compliant treatments for cockroaches, flies, and rodents. 
                  Scheduled service to maintain your reputation.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Health code compliance</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Discreet service times</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Documentation provided</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Apartments & Multi-Family</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive pest management for apartment complexes and condos. 
                  Prevent tenant complaints with proactive treatments.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Unit-by-unit treatment</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Tenant coordination</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Emergency response</li>
                </ul>
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