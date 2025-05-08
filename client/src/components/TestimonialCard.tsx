import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  text: string;
  author: string;
  rating: number;
}

export default function TestimonialCard({ text, author, rating }: TestimonialCardProps) {
  return (
    <Card className="bg-[var(--nps-ivory)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="flex items-center mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-[var(--nps-amber)]" fill="currentColor" />
          ))}
        </div>
        <p className="mb-4 italic text-gray-700">{text}</p>
        <div className="font-bold text-[var(--nps-forest)]">{author}</div>
      </CardContent>
    </Card>
  );
}
