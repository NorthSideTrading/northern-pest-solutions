import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLazyLoading } from '@/hooks/useLazyLoading';

interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
}

export default function ServiceCard({ id, name, description, image }: ServiceCardProps) {
  const { ref, isIntersecting } = useLazyLoading();
  
  // Function to determine if a string is an absolute URL
  const isAbsoluteUrl = (url: string) => {
    return url.indexOf('http://') === 0 || url.indexOf('https://') === 0;
  };
  
  // Get the appropriate image path or URL
  const imageUrl = isAbsoluteUrl(image) ? image : image;
  
  return (
    <Card ref={ref} className="bg-[var(--nps-ivory)] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="w-full h-48 overflow-hidden bg-gray-100">
        {isIntersecting ? (
          <img 
            src={`/.netlify/images?url=${imageUrl}&w=400&h=300&q=80`}
            alt={`${name} control services in Maine - Professional pest extermination`} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
            loading="lazy"
            decoding="async"
            width="400"
            height="300"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <div className="text-gray-400 text-sm">Loading...</div>
          </div>
        )}
      </div>
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
