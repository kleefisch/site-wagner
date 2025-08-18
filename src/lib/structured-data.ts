import { SITE_CONFIG, CONTACT_INFO } from "./constants";

export const lawyerSchema = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  "name": "Dra. Brennda Silva",
  "description": SITE_CONFIG.description,
  "url": SITE_CONFIG.url,
  "telephone": CONTACT_INFO.whatsappNumber,
  "areaServed": {
    "@type": "City",
    "name": "São Paulo",
    "addressCountry": "BR"
  },
  "knowsAbout": [
    "Direito de Família",
    "Direito Civil", 
    "Direito do Consumidor",
    "Direito Imobiliário",
    "Contratos",
    "Divórcio",
    "Pensão Alimentícia",
    "Inventário",
    "Usucapião"
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": -23.5505,
      "longitude": -46.6333
    },
    "geoRadius": "50000"
  },
  "offers": {
    "@type": "Offer",
    "name": "Consulta Jurídica Gratuita",
    "description": "Primeira consulta gratuita para análise do seu caso",
    "price": "0",
    "priceCurrency": "BRL"
  },
  "image": `${SITE_CONFIG.url}/images/brennda.jpg`,
  "logo": `${SITE_CONFIG.url}/favicon.svg`,
  "sameAs": [
    CONTACT_INFO.whatsappLink
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": SITE_CONFIG.name,
  "description": SITE_CONFIG.description,
  "url": SITE_CONFIG.url,
  "logo": `${SITE_CONFIG.url}/favicon.svg`,
  "image": `${SITE_CONFIG.url}/images/brennda.jpg`,
  "founder": {
    "@type": "Person",
    "name": "Dra. Brennda Silva"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": CONTACT_INFO.whatsappNumber,
    "contactType": "Customer Service",
    "availableLanguage": "Portuguese"
  },
  "serviceArea": {
    "@type": "City",
    "name": "São Paulo"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços Jurídicos",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Direito de Família",
          "description": "Divórcio, guarda de filhos, pensão alimentícia, inventário"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Direito Civil",
          "description": "Contratos, responsabilidade civil, ações indenizatórias"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Direito do Consumidor",
          "description": "Defesa dos direitos do consumidor, danos morais e materiais"
        }
      }
    ]
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": SITE_CONFIG.name,
  "description": SITE_CONFIG.description,
  "url": SITE_CONFIG.url,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${SITE_CONFIG.url}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};
