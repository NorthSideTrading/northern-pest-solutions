import LocalCityPage from '../LocalCityPage';
import { LOCAL_PAGES } from '@/lib/constants';

export default function Bangor() {
  const bangorData = LOCAL_PAGES.find(page => page.city === "Bangor");
  
  if (!bangorData) {
    return <div>City data not found</div>;
  }

  return (
    <LocalCityPage
      city={bangorData.city}
      title={bangorData.title}
      description={bangorData.description}
      population={bangorData.population}
      keyPests={bangorData.keyPests}
      zipCodes={bangorData.zipCodes}
    />
  );
}