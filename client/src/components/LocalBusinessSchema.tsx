import { COMPANY_INFO } from '@/lib/constants';

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY_INFO.name,
    "description": "Professional pest control services in Maine specializing in ant, rodent, bed bug, and wasp extermination for homes and businesses.",
    "url": "https://northern-pest-solutions.netlify.app",
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
      {
        "@type": "City",
        "name": "Portland",
        "addressRegion": "ME"
      },
      {
        "@type": "City", 
        "name": "Augusta",
        "addressRegion": "ME"
      },
      {
        "@type": "City",
        "name": "Bangor", 
        "addressRegion": "ME"
      },
      {
        "@type": "City",
        "name": "Lewiston",
        "addressRegion": "ME"
      },
      {
        "@type": "City",
        "name": "Waterville",
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
      "Mosquito Control"
    ],
    "openingHours": "Mo-Su 00:00-23:59",
    "sameAs": [
      COMPANY_INFO.googleBusinessUrl
    ],
    "hasCredential": "Licensed & Insured Pest Control Company",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
    "currenciesAccepted": "USD"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}