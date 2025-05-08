import { SERVICES } from '@/lib/constants';
import ServicePage from '@/pages/ServicePage';

export default function StingingInsects() {
  // Find the stinging insects service data
  const stingingInsectService = SERVICES.find(service => service.id === 'stinging-insects');
  
  if (!stingingInsectService) {
    return <div>Service information not found</div>;
  }
  
  return <ServicePage service={stingingInsectService} />;
}
