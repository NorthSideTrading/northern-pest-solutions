import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import LocalBusinessSchema from '../../components/LocalBusinessSchema';

export default function PestControlPortlandMe() {
  return (
    <Layout>
      <LocalBusinessSchema city="Portland" service="pest control" />
      <Hero 
        title="Expert Exterminator in Portland, Maine"
        subtitle="Need pest control Portland ME fast? We eliminate bed bugs, rodents, ants, and termites—24/7 emergency response."
        showButtons={true}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Portland Maine Pest Control Services</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Emergency Pest Removal Portland</h3>
                <p className="text-gray-600 mb-4">
                  Portland homeowners trust Maine Pest Pros for immediate pest elimination. Our certified exterminators 
                  respond within 1 hour to handle bed bugs, mice, ants, and wasp infestations throughout greater Portland.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Same-day bed bug heat treatments</li>
                  <li>Rodent exclusion and removal</li>
                  <li>Ant colony elimination</li>
                  <li>Wasp nest removal</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Portland Service Areas</h3>
                <p className="text-gray-600 mb-4">
                  We provide comprehensive pest control throughout Portland and surrounding neighborhoods:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Old Port District</li>
                  <li>Back Cove</li>
                  <li>West End</li>
                  <li>Deering Center</li>
                  <li>Woodfords Corner</li>
                  <li>Munjoy Hill</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                Why Portland Residents Choose Maine Pest Pros
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                  <p className="text-green-700">Emergency Response</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <p className="text-green-700">Satisfaction Guarantee</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                  <p className="text-green-700">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}