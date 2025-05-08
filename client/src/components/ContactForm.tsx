import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SERVICES } from '@/lib/constants';
import { useToast } from '@/hooks/use-toast';

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[var(--nps-ivory)] p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-[var(--nps-forest)] mb-6">Send Us a Message</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <Label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Name</Label>
          <Input 
            type="text" 
            id="name" 
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-primary" 
            placeholder="Your Name"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Phone</Label>
          <Input 
            type="tel" 
            id="phone" 
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-primary" 
            placeholder="Your Phone Number"
            required
          />
        </div>
      </div>
      
      <div className="mb-6">
        <Label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</Label>
        <Input 
          type="email" 
          id="email" 
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-primary" 
          placeholder="Your Email Address"
          required
        />
      </div>
      
      <div className="mb-6">
        <Label htmlFor="service" className="block text-gray-700 mb-2 font-medium">Service Needed</Label>
        <Select value={formData.service} onValueChange={handleSelectChange}>
          <SelectTrigger id="service" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-primary">
            <SelectValue placeholder="Select a Service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Select a Service</SelectItem>
            {SERVICES.map((service) => (
              <SelectItem key={service.id} value={service.id}>{service.name} Control</SelectItem>
            ))}
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="mb-6">
        <Label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</Label>
        <Textarea 
          id="message" 
          rows={4} 
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-primary" 
          placeholder="Describe your pest issue..."
          required
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
