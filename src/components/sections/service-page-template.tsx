import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { WhatsappButton } from "@/components/ui/whatsapp-button";
import Link from "next/link";
import { CheckCircle, MessageCircle } from "lucide-react";
import { ReactNode } from "react";

interface ServicePageTemplateProps {
  title: string;
  category: string;
  categoryIcon: ReactNode;
  description: string;
  children: ReactNode;
  ctaTitle?: string;
  ctaDescription?: string;
}

interface WhyChooseItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ProcessStep {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ServiceSectionProps {
  icon: ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

interface FAQItem {
  icon: ReactNode;
  question: string;
  answer: string;
}

export function ServiceSection({ icon, title, description, benefits }: ServiceSectionProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-2xl font-bold text-principal">{title}</h3>
      </div>
      <p className="text-principal mb-6">{description}</p>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-600">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProcessSection({ steps }: { steps: ProcessStep[] }) {
  return (
    <section id="como-funciona" className="py-8 md:py-16 bg-principal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-destaque mb-4">
              Como Funciona o Processo
            </h2>
            <p className="text-lg text-claro max-w-2xl mx-auto">
              Um passo a passo claro e transparente para que você saiba exatamente o que esperar.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg">
                <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-principal mb-3">{step.title}</h3>
                <p className="text-principal">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseSection({ items }: { items: WhyChooseItem[] }) {
  return (
    <section className="py-8 md:py-16 bg-principal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-destaque mb-4">
              Por Que a Presença de Uma Advogada Especialista Faz Toda a Diferença
            </h2>
            <p className="text-lg text-claro max-w-3xl mx-auto">
              O divórcio é um momento delicado que envolve questões emocionais, patrimoniais e familiares complexas. 
              Ter uma especialista ao seu lado garante proteção total dos seus direitos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-secundario rounded-2xl p-8 h-full flex flex-col justify-between">
              <h3 className="text-2xl font-bold text-principal mb-4">
                Experiência que Protege Seus Direitos
              </h3>
              <ul className="space-y-4">
                {items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-destaque">{item.title}:</strong>
                      <span className="text-principal ml-1">{item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-destaque rounded-2xl p-8 h-full flex flex-col justify-between text-principal">
              <h3 className="text-2xl font-bold mb-4 text-principal">Dra. Brennda: Sua Melhor Escolha</h3>
              <p className="text-principal mb-6">
                Especialista reconhecida em Direito de Família, com ampla experiência em casos de divórcio. 
                Atendimento humanizado, ética profissional e resultados comprovados.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-principal rounded-full p-1">
                    <CheckCircle className="w-4 h-4 text-destaque" />
                  </div>
                  <span className="text-base text-principal">Acompanhamento personalizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-principal rounded-full p-1">
                    <CheckCircle className="w-4 h-4 text-destaque" />
                  </div>
                  <span className="text-base text-principal">Linguagem clara e acessível</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-principal rounded-full p-1">
                    <CheckCircle className="w-4 h-4 text-destaque" />
                  </div>
                  <span className="text-base text-principal">Atuação estratégica com foco em resultados</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-principal rounded-full p-1">
                    <CheckCircle className="w-4 h-4 text-destaque" />
                  </div>
                  <span className="text-base text-principal">Comunicação constante e transparente</span>
                </div>
              </div>
              <div className="mt-6">
                <WhatsappButton className="w-full bg-principal hover:bg-principal/90 text-claro text-base">
                  Iniciar Atendimento
                </WhatsappButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQSection({ items }: { items: FAQItem[] }) {
  return (
    <section className="py-8 md:py-16 bg-secundario">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
              Questões Importantes no Divórcio
            </h2>
            <p className="text-lg text-gray-600">
              Principais pontos que precisam ser definidos durante o processo de divórcio.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {items.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h3 className="font-bold text-principal">{item.question}</h3>
                </div>
                <p className="text-principal text-sm flex-1">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTASection({ title, description }: { title?: string; description?: string }) {
  return (
    <section className="py-8 md:py-16 bg-secundario">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
            {title || "Precisa de Consultoria Jurídica Especializada?"}
          </h2>
          <p className="text-xl text-principal mb-8 max-w-2xl mx-auto">
            {description || "Inicie seu atendimento personalizado e tire todas as suas dúvidas. Atendimento humanizado e foco na melhor solução para o seu caso."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsappButton size="lg" className="bg-destaque hover:bg-destaque/90 text-claro">
              <span className="uppercase">INICIAR ATENDIMENTO</span>
            </WhatsappButton>
            <Button size="lg" asChild className="bg-principal hover:bg-principal/90 text-claro">
              <Link href="/areas-de-atuacao">
                Ver Outros Serviços
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicePageTemplate({ 
  title, 
  category, 
  categoryIcon, 
  description, 
  children,
  ctaTitle,
  ctaDescription
}: ServicePageTemplateProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-8 md:py-16 lg:py-24 bg-principal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-destaque/20 text-destaque px-4 py-2 rounded-full text-sm font-medium mb-6">
                {categoryIcon}
                {category}
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-claro mb-6">
                {title}
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsappButton size="lg" className="bg-destaque hover:bg-destaque/90 text-claro">
                  <span className="uppercase">INICIAR ATENDIMENTO</span>
                </WhatsappButton>
                <Button size="lg" variant="outline" asChild className="border-claro text-claro hover:bg-claro hover:text-principal">
                  <Link 
                    href="#como-funciona"
                    className="transition-colors duration-200 hover:bg-[#29406a] hover:text-destaque focus-visible:ring-2 focus-visible:ring-destaque focus:outline-none"
                  >
                    Saiba Como Funciona
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {children}

        <CTASection title={ctaTitle} description={ctaDescription} />
      </main>
      <Footer />
    </>
  );
}
