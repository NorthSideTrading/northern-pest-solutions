import { SERVICES } from '@/lib/constants';
import ServicePage from '@/pages/ServicePage';

export default function Spiders() {
  // Find the spiders service data
  const spiderService = SERVICES.find(service => service.id === 'spiders');
  
  if (!spiderService) {
    return <div>Service information not found</div>;
  }
  
  return <ServicePage service={spiderService} />;
}
