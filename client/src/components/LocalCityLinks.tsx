import { Link } from 'wouter';
import { MapPin } from 'lucide-react';
import { LOCAL_PAGES } from '@/lib/constants';

export default function LocalCityLinks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[var(--nps-forest)] mb-4">
          Local Pest Control Services
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Expert extermination services tailored to each Maine community's unique pest challenges.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {LOCAL_PAGES.map((page) => (
            <Link key={page.slug} href={`/${page.slug}`}>
              <div className="bg-[var(--nps-ivory)] rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group">
                <MapPin className="w-8 h-8 text-[var(--nps-amber)] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-[var(--nps-forest)] mb-2">
                  {page.city} Pest Control
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Population: {page.population}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Common Pests: {page.keyPests.join(', ')}
                </p>
                <span className="text-[var(--nps-amber)] font-medium group-hover:text-[var(--nps-forest)] transition-colors">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Don't see your city listed? We serve all of Central Maine!
          </p>
          <Link href="/#contact">
            <span className="inline-flex items-center bg-[var(--nps-forest)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[var(--nps-forest)]/90 transition-colors cursor-pointer">
              Contact Us for Service in Your Area
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}