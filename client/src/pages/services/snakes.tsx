import { SERVICES } from '@/lib/constants';
import ServicePage from '@/pages/ServicePage';

export default function Snakes() {
  // Find the snakes service data
  const snakeService = SERVICES.find(service => service.id === 'snakes');
  
  if (!snakeService) {
    return <div>Service information not found</div>;
  }
  
  return <ServicePage service={snakeService} />;
}
