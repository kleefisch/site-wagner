import { SITE_CONFIG, CONTACT_INFO } from "./constants";

export const lawyerSchema = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: "Dr. Wagner Souza",
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  telephone: CONTACT_INFO.whatsappNumber,
  areaServed: {
    "@type": "City",
    name: "Goiânia",
    addressCountry: "BR",
  },
  knowsAbout: [
    "Direito Criminal",
    "Advogado criminal",
    "Defesa criminal",
    "Processo penal",
    "Júri",
    "Prisões",
    "Investigação criminal",
    "Habeas corpus",
    "Revogação de prisão",
    "Audiência de custódia",
    "Acompanhamento de inquérito",
    "Acompanhamento de processos",
    "Consultoria jurídica criminal",
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -16.6869,
      longitude: -49.2648,
    },
    geoRadius: "100000",
  },
  offers: {
    "@type": "Offer",
    name: "Consulta Jurídica",
    description: "Consulta especializada em Direito Criminal",
    price: "Sob orçamento",
    priceCurrency: "BRL",
  },
  image: `${SITE_CONFIG.url}/images/dr-wagner-about.jpg`,
  logo: `${SITE_CONFIG.url}/favicon.svg`,
  sameAs: [CONTACT_INFO.whatsappLink],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/favicon.svg`,
  image: `${SITE_CONFIG.url}/images/dr-wagner-about.jpg`,
  founder: {
    "@type": "Person",
    name: "Dr. Wagner Souza",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Goiânia, Brasília",
    addressRegion: "GO, DF",
    addressCountry: "BR",
  },
  serviceArea: [
    {
      "@type": "City",
      name: "Goiânia",
    },
    {
      "@type": "City",
      name: "Brasília",
    },
    {
      "@type": "State",
      name: "Goiás",
    },
    {
      "@type": "State",
      name: "Distrito Federal",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: CONTACT_INFO.whatsappNumber,
    contactType: "Customer Service",
    availableLanguage: "Portuguese",
  },
  // Removido serviceArea duplicado, já está representado acima
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Advocacia Criminal",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Defesa em processos criminais",
          description:
            "Atuação em todas as fases do processo penal, incluindo inquérito, denúncia, instrução e julgamento.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Habeas corpus e medidas urgentes",
          description:
            "Pedidos de liberdade, revogação de prisão, relaxamento de flagrante e medidas cautelares.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Audiência de custódia e acompanhamento policial",
          description:
            "Acompanhamento em delegacias, audiências de custódia e orientação jurídica imediata.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Consultoria jurídica criminal",
          description:
            "Análise de casos, pareceres e orientação preventiva em Direito Penal.",
        },
      },
    ],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};
