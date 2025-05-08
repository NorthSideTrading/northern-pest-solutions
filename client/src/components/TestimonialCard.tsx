import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  text: string;
  author: string;
  rating: number;
}

export default function TestimonialCard({ text, author, rating }: TestimonialCardProps) {
  return (
    <Card className="bg-neutral-light p-6 rounded-lg shadow-md">
      <CardContent className="p-0">
        <div className="flex items-center mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-accent" fill="currentColor" />
          ))}
        </div>
        <p className="mb-4 italic">{text}</p>
        <div className="font-bold text-primary">{author}</div>
      </CardContent>
    </Card>
  );
}
