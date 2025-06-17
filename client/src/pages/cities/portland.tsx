import LocalCityPage from '../LocalCityPage';
import { LOCAL_PAGES } from '@/lib/constants';

export default function Portland() {
  const portlandData = LOCAL_PAGES.find(page => page.city === "Portland");
  
  if (!portlandData) {
    return <div>City data not found</div>;
  }

  return (
    <LocalCityPage
      city={portlandData.city}
      title={portlandData.title}
      description={portlandData.description}
      population={portlandData.population}
      keyPests={portlandData.keyPests}
      zipCodes={portlandData.zipCodes}
    />
  );
}