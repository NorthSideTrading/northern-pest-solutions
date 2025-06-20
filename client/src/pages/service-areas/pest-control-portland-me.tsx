import { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/ContactForm';
import { COMPANY_INFO } from '@/lib/constants';
import { Phone, MapPin, Clock, Shield, Users, CheckCircle } from 'lucide-react';

export default function PestControlPortlandMe() {
  useEffect(() => {
    document.title = "Pest Control Portland ME | 24/7 Emergency Exterminator | Maine Pest Pros";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional pest control Portland, Maine. 24/7 emergency extermination for bed bugs, ants, rodents, wasps. Licensed & insured. Call (207) 215-0860');
    }
  }, []);

  return (
    <Layout>
      <LocalBusinessSchema city="Portland" service="pest control" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Portland's #1 Pest Control Experts
            </h1>
            <p className="text-xl mb-8">
              Serving Portland, Maine with professional pest control since 2015. 
              Fast response times, guaranteed results, and eco-friendly treatments.
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
                className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas in Portland */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Portland Service Areas</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {['04101', '04102', '04103', '04104', '04105', 'Old Port', 'West End', 'East End', 'Deering', 'Woodfords'].map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg shadow-sm">
                <MapPin className="w-5 h-5 mx-auto mb-2 text-green-600" />
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portland-Specific Pest Problems */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Common Pest Issues in Portland</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-800 mb-4">Bed Bugs in Portland Apartments</h3>
                <p className="text-gray-700 mb-4">
                  Portland's dense housing and tourist traffic create perfect conditions for bed bug infestations. 
                  Our heat treatment eliminates all life stages in a single visit.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Chemical-free heat treatment</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Same-day elimination</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Safe for apartments</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Coastal Ant Problems</h3>
                <p className="text-gray-700 mb-4">
                  Portland's coastal climate attracts moisture-loving ants. We target colonies at their source 
                  with targeted baiting systems that eliminate the entire nest.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Colony elimination</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Pet-safe treatments</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Moisture control advice</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us in Portland */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Portland Chooses Maine Pest Pros</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-2">30-Minute Response</h3>
                <p className="text-gray-600">Emergency pest control anywhere in Portland within 30 minutes</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed in Maine with comprehensive insurance coverage</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-2">Local Experts</h3>
                <p className="text-gray-600">Portland-based team with deep knowledge of local pest patterns</p>
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