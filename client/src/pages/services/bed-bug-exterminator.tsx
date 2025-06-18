import ServicePage from "../ServicePage";
import { SERVICES } from "../../lib/constants";

export default function BedBugExterminator() {
  const serviceData = {
    ...SERVICES.find(service => service.id === "bed-bugs")!,
    id: "bed-bug-exterminator",
    name: "Bed Bug Exterminator",
    longDescription: "Professional bed bug extermination in Maine using heat treatments and organic methods. Our licensed exterminators provide same day service with guaranteed results and pet safe treatments for complete elimination.",
    problems: [
      "Bed bugs causing sleepless nights and skin irritation",
      "Rapid spread throughout bedrooms and furniture",
      "Difficulty detecting early infestations",
      "Resistance to over-the-counter treatments",
      "Potential health effects from bites and stress"
    ],
    solutions: [
      "Comprehensive bed bug inspection and identification",
      "Heat treatment services for complete elimination",
      "Targeted chemical applications when needed",
      "Mattress and furniture treatment protocols",
      "Follow-up inspections and guarantee programs"
    ]
  };
  
  return <ServicePage service={serviceData} />;
}