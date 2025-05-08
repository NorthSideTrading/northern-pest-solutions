import { SERVICES } from '@/lib/constants';
import ServicePage from '@/pages/ServicePage';

export default function BedBugs() {
  // Find the bed bugs service data
  const bedBugService = SERVICES.find(service => service.id === 'bed-bugs');
  
  if (!bedBugService) {
    return <div>Service information not found</div>;
  }
  
  return <ServicePage service={bedBugService} />;
}
