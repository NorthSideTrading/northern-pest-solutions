import { SERVICES } from '@/lib/constants';
import ServicePage from '@/pages/ServicePage';

export default function Mosquitoes() {
  // Find the mosquitoes service data
  const mosquitoService = SERVICES.find(service => service.id === 'mosquitoes');
  
  if (!mosquitoService) {
    return <div>Service information not found</div>;
  }
  
  return <ServicePage service={mosquitoService} />;
}
