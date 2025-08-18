import type { Metadata } from "next";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import PracticeAreasSection from "@/components/sections/practice-areas";
import AboutSection from "@/components/sections/about-section";
import TestimonialsSection from "@/components/sections/testimonials";
import FAQSection from "@/components/sections/faq";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import { StructuredData } from "@/components/structured-data";
import {
  lawyerSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title:
    "Dra. Brennda Silva - Advocacia Especializada em São Paulo | Direito de Família, Civil e Consumidor",
  description:
    "Advocacia especializada com mais de 10 anos de experiência em Direito de Família, Civil, Contratos e Direito do Consumidor. Atendimento personalizado, soluções jurídicas eficazes e consulta gratuita em São Paulo. Agende sua consulta!",
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
    "advocacia moderna são paulo",
  ],
  openGraph: {
    title: "Dra. Brennda Silva - Advocacia Especializada em São Paulo",
    description:
      "Advocacia especializada com mais de 10 anos de experiência. Consulta gratuita.",
    type: "website",
    url: "https://brennda-advocacia.vercel.app",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Brennda Silva - Advocacia Especializada",
      },
    ],
  },
  alternates: {
    canonical: "https://brennda-advocacia.vercel.app",
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData data={lawyerSchema} />
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <Header />
      <main>
        <HeroSection />
        <PracticeAreasSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
