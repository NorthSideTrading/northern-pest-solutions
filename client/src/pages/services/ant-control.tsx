import ServicePage from "../ServicePage";
import { SERVICES } from "../../lib/constants";

export default function AntControl() {
  const serviceData = {
    ...SERVICES.find(service => service.id === "ants")!,
    id: "ant-control",
    name: "Ant Control",
    longDescription: "Professional ant control services in Maine targeting carpenter ants, pavement ants, and other common species. Our same day treatments eliminate colonies and prevent future infestations with pet safe methods.",
    problems: [
      "Carpenter ants damaging wooden structures",
      "Kitchen and pantry contamination from ant trails",
      "Large ant colonies in walls and foundations",
      "Seasonal ant invasions during spring and summer",
      "Multiple ant species requiring different treatment approaches"
    ],
    solutions: [
      "Targeted baiting systems to eliminate entire colonies",
      "Exterior perimeter treatments to prevent entry",
      "Interior crack and crevice applications",
      "Organic and pet safe treatment options available",
      "Regular monitoring and maintenance programs"
    ]
  };
  
  return <ServicePage service={serviceData} />;
}