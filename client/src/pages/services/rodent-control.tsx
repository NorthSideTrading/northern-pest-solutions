import ServicePage from "../ServicePage";
import { SERVICES } from "../../lib/constants";

export default function RodentControl() {
  const serviceData = {
    ...SERVICES.find(service => service.id === "mice-rats")!,
    id: "rodent-control",
    name: "Rodent Control",
    longDescription: "Emergency rodent control services in Maine for mice, rats, and other rodents. Our 24 hour service provides same day treatments with humane trapping and exclusion methods to protect your property.",
    problems: [
      "Mice and rats contaminating food storage areas",
      "Structural damage from gnawing and nesting",
      "Health risks from rodent droppings and urine",
      "Fire hazards from chewed electrical wiring",
      "Rapid reproduction leading to large infestations"
    ],
    solutions: [
      "Comprehensive property inspection and assessment",
      "Strategic placement of tamper-resistant bait stations",
      "Humane trapping and removal programs",
      "Exclusion services to seal entry points",
      "Ongoing monitoring and maintenance plans"
    ]
  };
  
  return <ServicePage service={serviceData} />;
}