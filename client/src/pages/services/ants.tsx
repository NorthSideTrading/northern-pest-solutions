import { SERVICES } from '@/lib/constants';
import ServicePage from '@/pages/ServicePage';

export default function Ants() {
  // Find the ants service data
  const antService = SERVICES.find(service => service.id === 'ants');
  
  if (!antService) {
    return <div>Service information not found</div>;
  }
  
  return <ServicePage service={antService} />;
}
