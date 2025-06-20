import { useEffect } from 'react';
import Layout from '@/components/Layout';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/ContactForm';
import { COMPANY_INFO } from '@/lib/constants';
import { Phone, MapPin, Clock, Shield, Users, CheckCircle, Waves, Home } from 'lucide-react';

export default function PestControlSouthPortlandMe() {
  useEffect(() => {
    document.title = "Pest Control South Portland ME | Coastal Pest Management | Maine Pest Pros";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional pest control South Portland, Maine. Coastal pest management for moisture issues. Ant, rodent & spider control. Call (207) 215-0860');
    }
  }, []);

  return (
    <Layout>
      <LocalBusinessSchema city="South Portland" service="pest control" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              South Portland's Coastal Pest Control Experts
            </h1>
            <p className="text-xl mb-8">
              Specialized pest management for South Portland's unique coastal environment. 
              Moisture control and seasonal pest prevention since 2015.
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
                className="border-2 border-white text-white hover:bg-white hover:text-teal-800 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Free Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* South Portland Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">South Portland Service Areas</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {['04106', '04116', 'Mill Creek', 'Knightville', 'Willard', 'Ferry Village', 'Cash Corner', 'Ligonia', 'Thornton Heights'].map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg shadow-sm">
                <MapPin className="w-5 h-5 mx-auto mb-2 text-teal-600" />
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coastal Pest Challenges */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Waves className="w-16 h-16 mx-auto mb-4 text-teal-600" />
              <h2 className="text-3xl font-bold mb-4">Coastal Environment Pest Control</h2>
              <p className="text-lg text-gray-700">
                South Portland's proximity to Casco Bay creates unique moisture and pest challenges 
                that require specialized treatment approaches.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Moisture-Related Issues</h3>
                <p className="text-gray-700 mb-4">
                  High humidity from the ocean creates perfect conditions for certain pests. 
                  Our treatments address both the pests and underlying moisture problems.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Silverfish control</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Moisture ant elimination</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Basement treatments</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Humidity reduction advice</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Seasonal Pest Cycles</h3>
                <p className="text-gray-700 mb-4">
                  Coastal weather patterns affect pest activity differently than inland areas. 
                  We time treatments to match South Portland's unique seasonal patterns.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Spring spider emergence</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Summer ant activity</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Fall rodent prevention</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Winter seal-up services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Focus */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">South Portland Home Protection</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <Home className="w-10 h-10 mx-auto mb-4 text-teal-600" />
                <h3 className="text-lg font-semibold mb-3">Older Homes</h3>
                <p className="text-gray-700 text-sm">
                  Many South Portland homes have unique entry points and structural challenges. 
                  We specialize in retrofitting pest protection for older construction.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <Waves className="w-10 h-10 mx-auto mb-4 text-teal-600" />
                <h3 className="text-lg font-semibold mb-3">Waterfront Properties</h3>
                <p className="text-gray-700 text-sm">
                  Homes near the water face increased moisture and unique pest pressures. 
                  Our treatments protect against both common and waterfront-specific pests.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <Users className="w-10 h-10 mx-auto mb-4 text-teal-600" />
                <h3 className="text-lg font-semibold mb-3">Family-Safe Treatments</h3>
                <p className="text-gray-700 text-sm">
                  All treatments are designed with South Portland families in mind, 
                  using the safest effective methods available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why South Portland Residents Choose Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <Clock className="w-12 h-12 mb-4 text-teal-600" />
                <h3 className="font-semibold mb-2">Quick Response</h3>
                <p className="text-sm text-gray-600 text-center">Same-day service available throughout South Portland</p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-12 h-12 mb-4 text-teal-600" />
                <h3 className="font-semibold mb-2">Coastal Expertise</h3>
                <p className="text-sm text-gray-600 text-center">Specialized knowledge of ocean-influenced pest patterns</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-12 h-12 mb-4 text-teal-600" />
                <h3 className="font-semibold mb-2">Local Team</h3>
                <p className="text-sm text-gray-600 text-center">South Portland-based technicians who know the area</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-12 h-12 mb-4 text-teal-600" />
                <h3 className="font-semibold mb-2">Guaranteed Results</h3>
                <p className="text-sm text-gray-600 text-center">100% satisfaction guarantee on all services</p>
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