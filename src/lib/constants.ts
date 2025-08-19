import { ENV } from "./config";

// Constantes da aplicação
export const SITE_CONFIG = {
  name: "Dr. Wagner Souza - Advogado Especialista em Direito Criminal",
  shortName: "Wagner Souza Advocacia Criminal",
  description:
    "Dr. Wagner Souza - Advogado Especialista em Direito Criminal. Defesa técnica em prisões, júri, investigações e processos criminais. Atuação em Goiânia, Brasília, Goiás e Distrito Federal.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL || "https://wagnersouzaadvocacia.com.br",
  ogImage: "/og-image.jpg",
  keywords: [
    "advocacia criminal",
    "advogado criminal",
    "defesa criminal",
    "direito penal",
    "prisão",
    "júri",
    "Goiânia",
    "Brasília",
    "Goiás",
    "Distrito Federal",
    "Wagner Souza",
    "processo criminal",
    "investigação criminal",
  ],
} as const;

export const CONTACT_INFO = {
  whatsappNumber: "5562996421788",
  whatsappLink:
    "https://api.whatsapp.com/send/?phone=5562996421788&text=Ol%C3%A1%2C+Dr.+Wagner%21+Preciso+de+suporte+jur%C3%ADdico.+Voc%C3%AA+poderia+me+auxiliar%3F&type=phone_number&app_absent=0",
  email: "contato@wagnersouza.adv.br",
  address: "Goiânia, GO | Brasília, DF",
} as const;

export const PRACTICE_AREAS = {
  pessoa: {
    name: "Crimes Contra a Pessoa",
    slug: "pessoa",
    description:
      "Defesa em casos de crimes contra a vida, integridade física e honra.",
  },
  patrimonio: {
    name: "Crimes Contra o Patrimônio",
    slug: "patrimonio",
    description:
      "Defesa em furtos, roubos, estelionato e outros crimes patrimoniais.",
  },
  drogas: {
    name: "Lei de Drogas",
    slug: "drogas",
    description: "Atuação em processos relacionados à Lei de Drogas.",
  },
  audiencias: {
    name: "Audiências e Julgamentos",
    slug: "audiencias",
    description:
      "Acompanhamento e defesa técnica em audiências e julgamentos criminais.",
  },
  delegacias: {
    name: "Acompanhamento em Delegacias",
    slug: "delegacias",
    description: "Atendimento imediato em delegacias e flagrantes.",
  },
  juri: {
    name: "Tribunal do Júri",
    slug: "juri",
    description: "Defesa especializada em processos de júri popular.",
  },
  violencia: {
    name: "Violência Doméstica",
    slug: "violencia",
    description: "Defesa e acompanhamento em casos de violência doméstica.",
  },
  urgencia: {
    name: "Atendimento de Urgência",
    slug: "urgencia",
    description: "Atendimento emergencial em casos criminais.",
  },
} as const;

export const SOCIAL_LINKS = {
  whatsapp: CONTACT_INFO.whatsappLink,
  // Adicione outros links sociais conforme necessário
} as const;
