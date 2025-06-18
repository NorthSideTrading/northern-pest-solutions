import { COMPANY_INFO, SEO_KEYWORDS } from '@/lib/constants';

interface LocalBusinessSchemaProps {
  city?: string;
  service?: string;
}

export default function LocalBusinessSchema({ city, service }: LocalBusinessSchemaProps = {}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY_INFO.name,
    "description": `Professional pest control services in Maine specializing in ant, rodent, bed bug, and wasp extermination for homes and businesses. ${city ? `Serving ${city}, Maine` : 'Serving Central Maine'} with same day and emergency services.`,
    "url": "https://www.mainepestpros.com",
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Waterville",
      "addressLocality": "Waterville", 
      "addressRegion": "ME",
      "postalCode": "04901",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.5521,
      "longitude": -69.6617
    },
    "areaServed": [
      ...SEO_KEYWORDS.geoList.map(location => ({
        "@type": "City",
        "name": location,
        "addressRegion": "ME"
      })),
      {
        "@type": "State",
        "name": "Maine",
        "addressRegion": "ME"
      }
    ],
    "serviceType": [
      "Pest Control",
      "Exterminator Services", 
      "Ant Control",
      "Rodent Control", 
      "Bed Bug Treatment",
      "Wasp Removal",
      "Mosquito Control",
      "Termite Inspection",
      "Spider Control",
      "Tick Control"
    ],
    "openingHours": "Mo-Su 00:00-23:59",
    "hasCredential": "Licensed & Insured Pest Control Company",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
    "currenciesAccepted": "USD"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How quickly can you provide pest control service in ${city || 'Maine'}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `We offer same day and emergency pest control services in ${city || 'Central Maine'}. Our licensed technicians are available 24/7 for urgent pest situations and can typically respond within 2-4 hours for emergency calls.`
        }
      },
      {
        "@type": "Question", 
        "name": `Are your pest control treatments safe for pets and children?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we use pet safe and organic treatment options whenever possible. Our licensed technicians are trained in the latest eco-friendly pest control methods that are effective against pests while being safe for your family and pets."
        }
      },
      {
        "@type": "Question",
        "name": `What types of pests do you treat in ${city || 'Maine'}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `We provide comprehensive pest control for ants, rodents, bed bugs, wasps, mosquitoes, ticks, spiders, cockroaches, and other common pests found in ${city || 'Maine'}. Our treatments are customized based on the specific pest problem and local conditions.`
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}