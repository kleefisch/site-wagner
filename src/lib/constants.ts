import { ENV } from './config';

// Constantes da aplicação
export const SITE_CONFIG = {
  name: "Dra. Brennda Silva - Advocacia Especializada",
  shortName: "Brennda Silva Advocacia",
  description: "Advocacia especializada com mais de 10 anos de experiência em Direito de Família, Civil, Contratos e Direito do Consumidor. Atendimento personalizado, soluções jurídicas eficazes e consulta gratuita em São Paulo.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://brennda-advocacia.vercel.app",
  ogImage: "/og-image.jpg",
  keywords: [
    "advocacia especializada são paulo",
    "advogada direito de família",
    "advogada direito civil",
    "advogada direito do consumidor",
    "divórcio consensual",
    "pensão alimentícia",
    "inventário herança",
    "usucapião",
    "contratos civis",
    "Dra. Brennda Silva",
    "consulta gratuita advocacia",
    "advocacia moderna são paulo"
  ],
} as const;

export const CONTACT_INFO = {
  whatsappNumber: "5562982677272",
  whatsappLink: "https://api.whatsapp.com/send/?phone=5562982677272&text=Ol%C3%A1%2C+Dra.+Brennda%21%0A%0APreciso+de+suporte+jur%C3%ADdico.+Voc%C3%AA+poderia+me+auxiliar%3F&type=phone_number&app_absent=0",
  email: "contato@brenndasilva.com.br",
  address: "São Paulo, SP",
} as const;

export const PRACTICE_AREAS = {
  familia: {
    name: "Direito de Família",
    slug: "familia",
    description: "Especialização em divórcio, guarda, pensão alimentícia e inventário",
  },
  civil: {
    name: "Direito Civil",
    slug: "civil", 
    description: "Contratos, responsabilidade civil e ações indenizatórias",
  },
  consumidor: {
    name: "Direito do Consumidor",
    slug: "consumidor",
    description: "Defesa dos direitos do consumidor e reparação de danos",
  },
  imobiliario: {
    name: "Direito Imobiliário",
    slug: "imobiliario",
    description: "Usucapião, locação, compra e venda de imóveis",
  },
} as const;

export const SOCIAL_LINKS = {
  whatsapp: CONTACT_INFO.whatsappLink,
  // Adicionar outros links sociais conforme necessário
} as const;
