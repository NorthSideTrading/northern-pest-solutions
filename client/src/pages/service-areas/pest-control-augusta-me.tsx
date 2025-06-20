import { useEffect } from 'react';
import Layout from '@/components/Layout';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/ContactForm';
import { COMPANY_INFO } from '@/lib/constants';
import { Phone, MapPin, Clock, Shield, Users, CheckCircle, Building, Home } from 'lucide-react';

export default function PestControlAugustaMe() {
  useEffect(() => {
    document.title = "Pest Control Augusta ME | Government & Commercial Pest Control | Maine Pest Pros";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional pest control Augusta, Maine. Government facility and commercial pest management. Licensed exterminators. Call (207) 215-0860');
    }
  }, []);

  return (
    <Layout>
      <LocalBusinessSchema city="Augusta" service="pest control" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Augusta's Government & Commercial Pest Specialists
            </h1>
            <p className="text-xl mb-8">
              Serving Maine's capital city with professional pest control for government facilities, 
              businesses, and residential properties since 2015.
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
                className="border-2 border-white text-white hover:bg-white hover:text-purple-800 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Schedule Service
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Augusta Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Augusta Area Coverage</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {['04330', '04332', '04333', 'State House', 'Downtown', 'Hallowell', 'Gardiner', 'Farmingdale'].map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg shadow-sm">
                <MapPin className="w-5 h-5 mx-auto mb-2 text-purple-600" />
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government & Commercial Focus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Specialized Service Sectors</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Building className="w-10 h-10 mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Government Facilities</h3>
                <p className="text-gray-700 mb-4">
                  Trusted by state offices and municipal buildings for discreet, effective pest control 
                  that maintains professional standards.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Security clearance available</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />After-hours service</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Detailed reporting</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <Home className="w-10 h-10 mb-4 text-green-600" />
                <h3 className="text-xl font-semibold text-green-800 mb-4">Residential Services</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive home pest control for Augusta families, including seasonal treatments 
                  and emergency response services.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Family-safe treatments</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Seasonal protection plans</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />24/7 emergency response</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Augusta-Specific Pest Issues */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Common Augusta Pest Problems</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Office Building Ants</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Augusta's government and office buildings attract ants seeking food sources. 
                  We provide discrete treatments that don't disrupt daily operations.
                </p>
                <p className="text-xs text-gray-600">Baiting systems • Break room treatments • Entry point sealing</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Historic Building Pests</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Many Augusta buildings have unique pest challenges due to age and construction. 
                  Our treatments preserve historic integrity while eliminating pests.
                </p>
                <p className="text-xs text-gray-600">Carpenter ants • Wood-boring beetles • Structural protection</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Seasonal Wasp Issues</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Augusta's summers bring wasp problems around outdoor dining and recreation areas. 
                  Safe removal and prevention services available.
                </p>
                <p className="text-xs text-gray-600">Nest removal • Preventive treatments • Public safety focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Trusted by Augusta's Professional Community</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <Shield className="w-12 h-12 mb-4 text-purple-600" />
                <h3 className="font-semibold">State Licensed</h3>
                <p className="text-sm text-gray-600">Maine DEP certified</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-12 h-12 mb-4 text-purple-600" />
                <h3 className="font-semibold">Bonded & Insured</h3>
                <p className="text-sm text-gray-600">Full liability coverage</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-12 h-12 mb-4 text-purple-600" />
                <h3 className="font-semibold">Emergency Service</h3>
                <p className="text-sm text-gray-600">24/7 availability</p>
              </div>
              <div className="flex flex-col items-center">
                <Building className="w-12 h-12 mb-4 text-purple-600" />
                <h3 className="font-semibold">Government Approved</h3>
                <p className="text-sm text-gray-600">State contractor</p>
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