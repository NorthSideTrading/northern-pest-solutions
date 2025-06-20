import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import LocalBusinessSchema from '../../components/LocalBusinessSchema';

export default function PestControlSouthPortlandMe() {
  return (
    <Layout>
      <LocalBusinessSchema city="South Portland" service="pest control" />
      <Hero 
        title="Expert Exterminator in South Portland, Maine"
        subtitle="Need pest control South Portland ME fast? We eliminate bed bugs, rodents, ants, and termites—24/7 emergency response."
        showButtons={true}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">South Portland Maine Pest Control Services</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Emergency Pest Removal South Portland</h3>
                <p className="text-gray-600 mb-4">
                  South Portland homeowners choose Maine Pest Pros for reliable pest elimination. Our expert exterminators 
                  provide immediate service for bed bugs, mice, ants, and coastal pest issues unique to waterfront properties.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Waterfront property pest control</li>
                  <li>Condo and apartment treatments</li>
                  <li>Marine pest prevention</li>
                  <li>Seasonal insect control</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">South Portland Service Areas</h3>
                <p className="text-gray-600 mb-4">
                  Professional pest control throughout South Portland and surrounding areas:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Willard Beach area</li>
                  <li>Bug Light Park</li>
                  <li>Knightville</li>
                  <li>Cash Corner</li>
                  <li>Mill Creek</li>
                  <li>Cape Elizabeth border</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-teal-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-teal-800 mb-4">
                Coastal Pest Control Specialists
              </h3>
              <p className="text-teal-700 mb-6">
                South Portland's coastal location creates unique pest challenges. Our team specializes in marine-influenced 
                pest issues, from moisture-loving insects to seasonal migrations that affect waterfront communities.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-teal-800 mb-2">Coastal Expertise</h4>
                  <ul className="text-teal-600 space-y-1">
                    <li>• Moisture control solutions</li>
                    <li>• Seasonal pest migration patterns</li>
                    <li>• Salt air resistant treatments</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-800 mb-2">Property Types</h4>
                  <ul className="text-teal-600 space-y-1">
                    <li>• Waterfront homes</li>
                    <li>• Condominiums</li>
                    <li>• Commercial marine facilities</li>
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