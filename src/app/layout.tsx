import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WhatsappPopup } from "@/components/ui/whatsapp-popup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brennda-advocacia.vercel.app"),
  title: {
    default: "Dra. Brennda Silva - Advocacia Especializada em SP | Direito de Família, Civil e Consumidor",
    template: "%s | Dra. Brennda Silva - Advocacia Especializada",
  },
  description: "Advocacia especializada com mais de 10 anos de experiência em Direito de Família, Civil, Contratos e Direito do Consumidor. Atendimento personalizado, soluções jurídicas eficazes e consulta gratuita em São Paulo.",
  keywords: [
    "advocacia especializada", 
    "advogada são paulo", 
    "direito de família", 
    "direito civil", 
    "direito do consumidor", 
    "contratos", 
    "divórcio", 
    "pensão alimentícia", 
    "inventário", 
    "usucapião", 
    "Dra. Brennda Silva",
    "consulta gratuita",
    "advocacia moderna"
  ],
  authors: [{ name: "Dra. Brennda Silva", url: "https://brennda-advocacia.vercel.app" }],
  creator: "Dra. Brennda Silva",
  publisher: "Brennda Silva Advocacia",
  category: "Legal Services",
  classification: "Advocacia",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon-16x16.svg",
        sizes: "16x16",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://brennda-advocacia.vercel.app",
    siteName: "Dra. Brennda Silva - Advocacia Especializada",
    title: "Dra. Brennda Silva - Advocacia Especializada em SP",
    description: "Advocacia especializada com mais de 10 anos de experiência. Direito de Família, Civil, Contratos e Direito do Consumidor. Atendimento personalizado e consulta gratuita.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Brennda Silva - Advocacia Especializada em São Paulo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Brennda Silva - Advocacia Especializada em SP",
    description: "Advocacia especializada com mais de 10 anos de experiência. Direito de Família, Civil, Contratos e Direito do Consumidor.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://brennda-advocacia.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1a1a" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <WhatsappPopup />
      </body>
    </html>
  );
}
