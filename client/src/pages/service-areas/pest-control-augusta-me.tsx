import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import LocalBusinessSchema from '../../components/LocalBusinessSchema';

export default function PestControlAugustaMe() {
  return (
    <Layout>
      <LocalBusinessSchema city="Augusta" service="pest control" />
      <Hero 
        title="Expert Exterminator in Augusta, Maine"
        subtitle="Need pest control Augusta ME fast? We eliminate bed bugs, rodents, ants, and termites—24/7 emergency response."
        showButtons={true}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Augusta Maine Pest Control Services</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Emergency Pest Removal Augusta</h3>
                <p className="text-gray-600 mb-4">
                  Augusta residents trust Maine Pest Pros for immediate pest control services. Our licensed exterminators 
                  serve Maine's capital city with rapid response for bed bugs, rodents, ants, and seasonal pest issues.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Government building pest control</li>
                  <li>Residential extermination services</li>
                  <li>Commercial pest management</li>
                  <li>Seasonal pest prevention</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Augusta Service Areas</h3>
                <p className="text-gray-600 mb-4">
                  Complete pest control coverage throughout Augusta and Kennebec County:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>State House area</li>
                  <li>Togus</li>
                  <li>Hallowell</li>
                  <li>Gardiner</li>
                  <li>Chelsea</li>
                  <li>Farmingdale</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">
                Augusta's Premier Pest Control Service
              </h3>
              <p className="text-purple-700 mb-6">
                Serving Maine's capital since 2008, we understand the unique pest challenges in government buildings, 
                historic homes, and modern developments throughout the Augusta area.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">Licensed</div>
                  <p className="text-purple-700">State Certified</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">Insured</div>
                  <p className="text-purple-700">Full Coverage</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">Local</div>
                  <p className="text-purple-700">Augusta Based</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}