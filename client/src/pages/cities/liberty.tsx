import LocalCityPage from "../LocalCityPage";
import { LOCAL_PAGES } from "../../lib/constants";

export default function Liberty() {
  const cityData = LOCAL_PAGES.find(page => page.city === "Liberty")!;
  
  return (
    <LocalCityPage
      city={cityData.city}
      title={cityData.title}
      description={cityData.description}
      population={cityData.population}
      keyPests={cityData.keyPests}
      zipCodes={cityData.zipCodes}
    />
  );
}