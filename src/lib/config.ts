// Configurações de ambiente e aplicação
export const ENV = {
  NODE_ENV: process.env.NODE_ENV || "development",
  IS_PRODUCTION: process.env.NODE_ENV === "production",
  IS_DEVELOPMENT: process.env.NODE_ENV === "development",
} as const;

// URLs e configurações de API
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000",
  TIMEOUT: 10000,
} as const;

// Configurações de analytics e monitoramento
export const ANALYTICS = {
  GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GA_ID,
  GOOGLE_TAG_MANAGER_ID: process.env.NEXT_PUBLIC_GTM_ID,
  FACEBOOK_PIXEL_ID: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
} as const;

// Configurações de SEO
export const SEO_CONFIG = {
  DEFAULT_IMAGE: "/images/og-default.jpg",
  TWITTER_HANDLE: "@wagnersouzaadv", // Atualize para o handle correto ou remova se não houver
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FB_APP_ID,
} as const;

// Configurações de funcionalidades
export const FEATURES = {
  ENABLE_BLOG: process.env.NEXT_PUBLIC_ENABLE_BLOG === "true",
  ENABLE_NEWSLETTER: process.env.NEXT_PUBLIC_ENABLE_NEWSLETTER !== "false",
  ENABLE_WHATSAPP_POPUP:
    process.env.NEXT_PUBLIC_ENABLE_WHATSAPP_POPUP !== "false",
  ENABLE_ANALYTICS: ENV.IS_PRODUCTION,
} as const;

// Configurações de rate limiting
export const RATE_LIMITS = {
  CONTACT_FORM: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 5 requests per windowMs
  },
  NEWSLETTER: {
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 3, // limit each IP to 3 requests per windowMs
  },
} as const;

// Validação de configurações obrigatórias
if (ENV.IS_PRODUCTION) {
  const requiredEnvVars = ["NEXT_PUBLIC_SITE_URL"];

  requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
      throw new Error(`Missing required environment variable: ${envVar}`);
    }
  });
}
