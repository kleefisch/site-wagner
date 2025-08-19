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
  metadataBase: new URL("https://wagnersouza-advocacia.vercel.app"),
  title: {
    default:
      "Dr. Wagner Souza - Advogado Especialista em Direito Criminal | Goiânia, Brasília, Goiás e DF",
    template: "%s | Dr. Wagner Souza - Advogado Criminal",
  },
  description:
    "Dr. Wagner Souza - Advogado Especialista em Direito Criminal. Defesa técnica em prisões, júri, investigações e processos criminais. Atuação em Goiânia, Brasília, Goiás e Distrito Federal.",
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
  authors: [
    {
      name: "Dr. Wagner Souza",
      url: "https://wagnersouza-advocacia.vercel.app",
    },
  ],
  creator: "Dr. Wagner Souza",
  publisher: "Wagner Souza Advocacia Criminal",
  category: "Legal Services",
  classification: "Advocacia Criminal",
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
    url: "https://wagnersouza-advocacia.vercel.app",
    siteName: "Dr. Wagner Souza - Advogado Criminal",
    title: "Dr. Wagner Souza - Advogado Especialista em Direito Criminal",
    description:
      "Defesa técnica em prisões, júri, investigações e processos criminais. Atuação em Goiânia, Brasília, Goiás e Distrito Federal.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Wagner Souza - Advogado Especialista em Direito Criminal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Wagner Souza - Advogado Especialista em Direito Criminal",
    description:
      "Defesa técnica em prisões, júri, investigações e processos criminais. Atuação em Goiânia, Brasília, Goiás e Distrito Federal.",
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
    canonical: "https://wagnersouza-advocacia.vercel.app",
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1a1a" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N2TBPPQ3');
          `,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Dados Estruturados Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Wagner Souza Advocacia Criminal",
            "image": "https://wagnersouza-advocacia.vercel.app/og-image.jpg",
            "url": "https://wagnersouza-advocacia.vercel.app",
            "telephone": "+55-62-99642-1788",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Goiânia",
              "addressRegion": "GO",
              "addressCountry": "BR"
            },
            "areaServed": ["Goiânia", "Brasília", "Goiás", "Distrito Federal"],
            "priceRange": "Consulta sob orçamento",
            "member": {
              "@type": "Person",
              "name": "Dr. Wagner Souza",
              "jobTitle": "Advogado Especialista em Direito Criminal",
              "telephone": "+55-62-99642-1788",
              "url": "https://wagnersouza-advocacia.vercel.app",
              "alumniOf": "OAB/GO 123456"
            }
          }`,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N2TBPPQ3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <WhatsappPopup />
      </body>
    </html>
  );
}
