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
    <Card className="bg-neutral-light rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={image} alt={`${name} control services`} className="w-full h-48 object-cover" />
      <CardContent className="p-6">
        <h3 className="text-xl font-bold font-heading text-primary mb-2">{name}</h3>
        <p className="text-neutral-dark mb-4">{description}</p>
        <Link href={`/services/${id}`}>
          <a className="text-secondary hover:text-secondary-dark font-medium inline-flex items-center transition-colors">
            Learn More
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </Link>
      </CardContent>
    </Card>
  );
}
