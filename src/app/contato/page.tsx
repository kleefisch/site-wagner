import { Metadata } from "next";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import ContactForm from "@/components/sections/contact-form";
import { Button } from "@/components/ui/button";
import { WhatsappButton } from "@/components/ui/whatsapp-button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contato - Dra. Brennda Silva | Agende sua Consulta Jurídica Gratuita",
  description: "Entre em contato com a Dra. Brennda Silva. Consulta jurídica gratuita, atendimento especializado via WhatsApp. Advocacia em Direito de Família, Civil, Consumidor e Imobiliário em São Paulo.",
  keywords: [
    "contato advogada são paulo",
    "consulta gratuita advogada", 
    "Brennda Silva contato",
    "advogada direito família contato",
    "WhatsApp advogada",
    "agendar consulta jurídica"
  ],
  alternates: {
    canonical: "https://brennda-advocacia.vercel.app/contato",
  },
  openGraph: {
    title: "Contato - Dra. Brennda Silva | Consulta Gratuita",
    description: "Agende sua consulta jurídica gratuita com a Dra. Brennda Silva. Atendimento especializado em São Paulo.",
    url: "https://brennda-advocacia.vercel.app/contato",
    type: "website",
  },
};

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-8 md:py-16 lg:py-24 bg-principal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-claro mb-6">
                Entre em Contato
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Agende sua consulta jurídica gratuita e conte com orientação especializada para o seu caso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsappButton 
                  size="lg" 
                  iconSize={28} 
                  className="bg-destaque hover:bg-destaque/90 text-claro"
                >
                  <span className="uppercase">Falar no WhatsApp</span>
                </WhatsappButton>
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild 
                  className="border-claro text-claro hover:bg-claro hover:text-principal"
                >
                  <Link 
                    href="#contato"
                    className="transition-colors duration-200"
                  >
                    Preencher Formulário
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" aria-label="Formulário de contato">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
