import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
}

export default function ServiceCard({ id, name, description, image }: ServiceCardProps) {
  return (
    <Card className="bg-[var(--nps-ivory)] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={image} alt={`${name} control services`} className="w-full h-48 object-cover" />
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-[var(--nps-forest)] mb-3">{name}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link href={`/services/${id}`}>
          <span className="text-[var(--nps-amber)] hover:text-[var(--nps-forest)] font-medium inline-flex items-center transition-colors cursor-pointer">
            Learn More
            <ChevronRight className="w-4 h-4 ml-1" />
          </span>
        </Link>
      </CardContent>
    </Card>
  );
}
