import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import LocalBusinessSchema from '../../components/LocalBusinessSchema';

export default function PestControlBangorMe() {
  return (
    <Layout>
      <LocalBusinessSchema city="Bangor" service="pest control" />
      <Hero 
        title="Expert Exterminator in Bangor, Maine"
        subtitle="Need pest control Bangor ME fast? We eliminate bed bugs, rodents, ants, and termites—24/7 emergency response."
        showButtons={true}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Bangor Maine Pest Control Services</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Emergency Pest Removal Bangor</h3>
                <p className="text-gray-600 mb-4">
                  Bangor residents rely on Maine Pest Pros for rapid pest elimination. Our licensed exterminators 
                  provide immediate response for bed bugs, rodents, ants, and stinging insects throughout Bangor and Penobscot County.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Industrial bed bug heat treatments</li>
                  <li>Comprehensive rodent control</li>
                  <li>Carpenter ant elimination</li>
                  <li>Wasp and hornet removal</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Bangor Service Areas</h3>
                <p className="text-gray-600 mb-4">
                  Complete pest control coverage throughout Bangor and surrounding communities:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Downtown Bangor</li>
                  <li>University of Maine area</li>
                  <li>Broadway District</li>
                  <li>Stillwater Avenue</li>
                  <li>Hampden</li>
                  <li>Orono</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Bangor's Trusted Pest Control Experts
              </h3>
              <p className="text-blue-700 mb-6">
                Serving Bangor since 2008, Maine Pest Pros understands the unique pest challenges in central Maine. 
                From university housing to historic downtown buildings, we provide tailored solutions for every property type.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Residential Services</h4>
                  <p className="text-blue-600">Apartments, condos, single-family homes</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Commercial Services</h4>
                  <p className="text-blue-600">Restaurants, hotels, office buildings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}