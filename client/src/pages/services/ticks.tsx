import { SERVICES } from '@/lib/constants';
import ServicePage from '@/pages/ServicePage';

export default function Ticks() {
  // Find the ticks service data
  const tickService = SERVICES.find(service => service.id === 'ticks');
  
  if (!tickService) {
    return <div>Service information not found</div>;
  }
  
  return <ServicePage service={tickService} />;
}
