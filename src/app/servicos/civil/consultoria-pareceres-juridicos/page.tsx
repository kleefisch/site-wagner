import ServicePageTemplate, { 
  ServiceSection, 
  ProcessSection, 
  WhyChooseSection, 
  FAQSection 
} from "@/components/sections/service-page-template";
import {
  Scale,
  FileText,
  CheckCircle,
  MessageCircle,
  Users,
  Search,
  BookOpen
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultoria e Pareceres Jurídicos - Advocacia Brennda Silva | Direito Civil",
  description: "Consultoria jurídica especializada e emissão de pareceres técnicos em Direito Civil. Segurança, clareza e respaldo para decisões e negócios.",
  keywords: "consultoria jurídica, parecer jurídico, direito civil, advogada, Brennda Silva, análise contratual, orientação legal",
};

export default function ConsultoriaPareceresJuridicosPage() {
  const processSteps = [
    {
      icon: <MessageCircle className="w-8 h-8 text-destaque" />,
      title: "1. Consultoria Inicial",
      description: "Análise completa do seu caso, esclarecimento de dúvidas e definição da melhor estratégia jurídica."
    },
    {
      icon: <FileText className="w-8 h-8 text-destaque" />,
      title: "2. Documentação",
      description: "Orientação sobre documentos necessários e preparação de toda a documentação legal do processo."
    },
    {
      icon: <Scale className="w-8 h-8 text-destaque" />,
      title: "3. Execução Completa",
      description: "Cuidamos de toda a parte técnica e burocrática do seu processo, garantindo agilidade e precisão em cada etapa."
    },
    {
      icon: <Search className="w-8 h-8 text-destaque" />,
      title: "4. Acompanhamento",
      description: "Atualizações constantes, suporte próximo e linguagem acessível até a solução final, com orientações pós-processo."
    }
  ];

  const whyChooseItems = [
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Expertise Técnica",
      description: "Conhecimento aprofundado e atualizado em Direito Civil"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Análise Detalhada",
      description: "Pareceres técnicos fundamentados e completos"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Orientação Preventiva",
      description: "Consultoria para evitar problemas e litígios futuros"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Respaldo Jurídico",
      description: "Segurança e fundamentação legal para suas decisões"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Linguagem Acessível",
      description: "Explicações claras e compreensíveis sobre questões complexas"
    }
  ];

  const faqItems = [
    {
      icon: <BookOpen className="w-6 h-6 text-destaque" />,
      question: "Consultoria Preventiva",
      answer: "Orientação jurídica para evitar problemas futuros e tomar decisões seguras."
    },
    {
      icon: <FileText className="w-6 h-6 text-destaque" />,
      question: "Pareceres Técnicos",
      answer: "Análises jurídicas fundamentadas sobre questões específicas e complexas."
    },
    {
      icon: <Scale className="w-6 h-6 text-destaque" />,
      question: "Análise Contratual",
      answer: "Revisão e orientação sobre contratos e documentos jurídicos."
    },
    {
      icon: <Users className="w-6 h-6 text-destaque" />,
      question: "Due Diligence",
      answer: "Análise jurídica completa para operações comerciais e negócios."
    }
  ];

  return (
    <ServicePageTemplate
      title="Consultoria e Pareceres Jurídicos"
      category="Direito Civil"
      categoryIcon={<Scale className="w-4 h-4" />}
      description="Orientação técnica e emissão de pareceres para decisões seguras, prevenção de litígios e respaldo em negócios civis."
      ctaTitle="Precisa de Consultoria Jurídica?"
      ctaDescription="Entre em contato para orientação especializada e pareceres técnicos. Segurança jurídica para suas decisões."
    >
      {/* Tipos de Consultoria e Pareceres */}
      <section className="py-8 md:py-16 bg-secundario">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                Tipos de Consultoria e Pareceres
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Soluções especializadas para orientação jurídica e análise técnica em Direito Civil.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <ServiceSection
                icon={<div className="bg-destaque/20 p-3 rounded-full"><BookOpen className="w-6 h-6 text-destaque" /></div>}
                title="Consultoria Preventiva"
                description="Orientação jurídica para evitar problemas futuros e tomar decisões seguras em negócios e contratos."
                benefits={[
                  "Prevenção de litígios e problemas jurídicos",
                  "Orientação para decisões empresariais",
                  "Análise de riscos jurídicos",
                  "Estratégias preventivas personalizadas"
                ]}
              />
              
              <ServiceSection
                icon={<div className="bg-principal/20 p-3 rounded-full"><FileText className="w-6 h-6 text-destaque" /></div>}
                title="Pareceres Técnicos"
                description="Análises jurídicas fundamentadas sobre questões específicas e complexas do Direito Civil."
                benefits={[
                  "Fundamentação jurídica sólida",
                  "Análise de jurisprudência atualizada",
                  "Parecer técnico detalhado",
                  "Respaldo para tomada de decisões"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <ProcessSection steps={processSteps} />

      <FAQSection items={faqItems} />

      <WhyChooseSection items={whyChooseItems} />
    </ServicePageTemplate>
  );
}
