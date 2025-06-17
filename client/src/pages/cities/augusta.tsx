import LocalCityPage from '../LocalCityPage';
import { LOCAL_PAGES } from '@/lib/constants';

export default function Augusta() {
  const augustaData = LOCAL_PAGES.find(page => page.city === "Augusta");
  
  if (!augustaData) {
    return <div>City data not found</div>;
  }

  return (
    <LocalCityPage
      city={augustaData.city}
      title={augustaData.title}
      description={augustaData.description}
      population={augustaData.population}
      keyPests={augustaData.keyPests}
      zipCodes={augustaData.zipCodes}
    />
  );
}