import { SERVICES } from '@/lib/constants';
import ServicePage from '@/pages/ServicePage';

export default function Fleas() {
  // Find the fleas service data
  const fleaService = SERVICES.find(service => service.id === 'fleas');
  
  if (!fleaService) {
    return <div>Service information not found</div>;
  }
  
  return <ServicePage service={fleaService} />;
}
