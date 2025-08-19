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
    "Dr. Wagner Souza - Advogado Especialista em Direito Criminal | Goiânia, Brasília, Goiás e DF",
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
  openGraph: {
    title: "Dr. Wagner Souza - Advogado Especialista em Direito Criminal",
    description:
      "Defesa técnica em prisões, júri, investigações e processos criminais. Atuação em Goiânia, Brasília, Goiás e Distrito Federal.",
    type: "website",
    url: "https://wagnersouzaadvocacia.com.br",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Wagner Souza - Advogado Especialista em Direito Criminal",
      },
    ],
  },
  alternates: {
    canonical: "https://wagnersouzaadvocacia.com.br",
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
