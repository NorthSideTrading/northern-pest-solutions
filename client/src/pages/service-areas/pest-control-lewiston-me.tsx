import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import LocalBusinessSchema from '../../components/LocalBusinessSchema';

export default function PestControlLewistonMe() {
  return (
    <Layout>
      <LocalBusinessSchema city="Lewiston" service="pest control" />
      <Hero 
        title="Expert Exterminator in Lewiston, Maine"
        subtitle="Need pest control Lewiston ME fast? We eliminate bed bugs, rodents, ants, and termites—24/7 emergency response."
        showButtons={true}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Lewiston Maine Pest Control Services</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Emergency Pest Removal Lewiston</h3>
                <p className="text-gray-600 mb-4">
                  Lewiston families depend on Maine Pest Pros for fast pest elimination. Our certified exterminators 
                  provide same-day service for bed bugs, mice, ants, and cockroaches throughout Lewiston-Auburn area.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Bed bug heat treatments - chemical-free</li>
                  <li>Mouse and rat exclusion</li>
                  <li>Ant colony targeting</li>
                  <li>Cockroach elimination programs</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Lewiston Service Areas</h3>
                <p className="text-gray-600 mb-4">
                  Professional pest control throughout Lewiston and neighboring communities:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Downtown Lewiston</li>
                  <li>Auburn</li>
                  <li>Lisbon Falls</li>
                  <li>Sabattus</li>
                  <li>Turner</li>
                  <li>Mechanic Falls</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-red-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-800 mb-4">
                Bed Bug Removal Lewiston Specialists
              </h3>
              <p className="text-red-700 mb-4">
                Our industrial heaters wipe out bed bugs and eggs in a single day—no chemicals needed. 
                Top search in Lewiston ME: "bed bug removal Lewiston," now covered with guaranteed results.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Heat Treatment Benefits</h4>
                  <ul className="text-red-600 space-y-1">
                    <li>• Single-day elimination</li>
                    <li>• No chemical residue</li>
                    <li>• Kills all life stages</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Service Guarantee</h4>
                  <ul className="text-red-600 space-y-1">
                    <li>• 30-day warranty</li>
                    <li>• Follow-up inspections</li>
                    <li>• Satisfaction guaranteed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}