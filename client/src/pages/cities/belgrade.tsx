import LocalCityPage from "../LocalCityPage";
import { LOCAL_PAGES } from "../../lib/constants";

export default function Belgrade() {
  const cityData = LOCAL_PAGES.find(page => page.city === "Belgrade")!;
  
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