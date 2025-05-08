import { SERVICES } from '@/lib/constants';
import ServicePage from '@/pages/ServicePage';

export default function Cockroaches() {
  // Find the cockroaches service data
  const cockroachService = SERVICES.find(service => service.id === 'cockroaches');
  
  if (!cockroachService) {
    return <div>Service information not found</div>;
  }
  
  return <ServicePage service={cockroachService} />;
}
