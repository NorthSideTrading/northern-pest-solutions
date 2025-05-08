import { SERVICES } from '@/lib/constants';
import ServicePage from '@/pages/ServicePage';

export default function MiceRats() {
  // Find the mice & rats service data
  const rodentService = SERVICES.find(service => service.id === 'mice-rats');
  
  if (!rodentService) {
    return <div>Service information not found</div>;
  }
  
  return <ServicePage service={rodentService} />;
}
