import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "How much does pest control cost in Maine?",
    answer: `Pest control costs in Maine vary based on the type of pest, property size, and treatment method. Initial inspections are free. Typical treatments range from $150-$400 for residential properties. Call ${COMPANY_INFO.phone} for a custom quote.`
  },
  {
    question: "What pests are most common in Maine homes?",
    answer: "Maine's most common household pests include carpenter ants, mice and rats, bed bugs, wasps and hornets, spiders, and seasonal mosquitoes. Winter months see increased rodent activity as they seek warm shelter indoors."
  },
  {
    question: "Are your pest control treatments safe for children and pets?",
    answer: "Yes, all our pest control treatments are family and pet-safe when applied by our licensed technicians. We use integrated pest management (IPM) techniques and eco-friendly products whenever possible."
  },
  {
    question: "Do you provide emergency pest control services in Maine?",
    answer: `Yes, we offer 24/7 emergency pest control services throughout Central Maine including Portland, Augusta, Bangor, and Waterville. Call ${COMPANY_INFO.phone} for immediate assistance with urgent pest problems.`
  },
  {
    question: "How quickly can you respond to pest control requests?",
    answer: "We typically provide same-day service for emergency pest control needs. For non-emergency treatments, we can usually schedule within 24-48 hours. Our goal is fast, effective pest elimination."
  },
  {
    question: "What areas of Maine do you serve?",
    answer: "We provide comprehensive pest control services throughout Central Maine including Portland, Augusta, Bangor, Lewiston, Waterville, Brunswick, and surrounding communities within a 50-mile radius of Waterville."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[var(--nps-ivory)]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--nps-forest)] mb-4">
            Frequently Asked Questions About Maine Pest Control
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12">
            Get answers to common questions about professional pest control services in Maine.
          </p>
          
          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-[var(--nps-forest)] pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[var(--nps-amber)] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[var(--nps-amber)] flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Have more questions about pest control in Maine?
            </p>
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center bg-[var(--nps-forest)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[var(--nps-forest)]/90 transition-colors"
            >
              Call {COMPANY_INFO.phone} for Expert Advice
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}