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
  Search
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ações Indenizatórias - Advocacia Brennda Silva | Direito Civil",
  description: "Atuação especializada em ações indenizatórias: reparação de danos morais e materiais, responsabilidade civil e defesa dos seus direitos.",
  keywords: "ações indenizatórias, danos morais, danos materiais, direito civil, advogada, Brennda Silva, responsabilidade civil, reparação de danos",
};

export default function AcoesIndenizatoriasPage() {
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
      title: "Conhecimento Profundo",
      description: "Domínio completo das leis civis e jurisprudências sobre responsabilidade civil"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Estratégia Personalizada",
      description: "Cada caso é único e merece uma abordagem específica e cuidadosa"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Negociação Eficaz",
      description: "Habilidade para buscar acordos justos e evitar desgastes desnecessários"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Proteção dos Direitos",
      description: "Defesa firme dos seus interesses e busca pela reparação integral"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Atendimento Humanizado",
      description: "Comunicação clara e acessível com respeito às particularidades de cada cliente"
    }
  ];

  const faqItems = [
    {
      icon: <Scale className="w-6 h-6 text-destaque" />,
      question: "Danos Morais",
      answer: "Reparação por ofensas à honra, dignidade, imagem ou outros direitos da personalidade."
    },
    {
      icon: <FileText className="w-6 h-6 text-destaque" />,
      question: "Danos Materiais",
      answer: "Ressarcimento de prejuízos econômicos, despesas médicas, lucros cessantes e danos emergentes."
    },
    {
      icon: <Users className="w-6 h-6 text-destaque" />,
      question: "Responsabilidade Civil",
      answer: "Análise da responsabilidade e nexo causal para fundamentar o pedido indenizatório."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      question: "Provas e Documentos",
      answer: "Orientação sobre coleta de provas e documentação necessária para o sucesso da ação."
    }
  ];

  return (
    <ServicePageTemplate
      title="Ações Indenizatórias"
      category="Direito Civil"
      categoryIcon={<Scale className="w-4 h-4" />}
      description="Reparação de danos morais e materiais, defesa dos seus direitos e busca por justiça em situações de prejuízo."
      ctaTitle="Precisa de Ajuda com Ação Indenizatória?"
      ctaDescription="Entre em contato para avaliar seu caso e garantir a reparação que você merece. Atendimento especializado e resultados eficazes."
    >
      {/* Tipos de Ações Indenizatórias */}
      <section className="py-8 md:py-16 bg-secundario">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                Tipos de Ações Indenizatórias
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Conheça as modalidades de indenização e como cada uma protege seus direitos e interesses.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <ServiceSection
                icon={<div className="bg-destaque/20 p-3 rounded-full"><Scale className="w-6 h-6 text-destaque" /></div>}
                title="Danos Morais"
                description="Reparação por ofensas à honra, dignidade, imagem, privacidade ou outros direitos da personalidade."
                benefits={[
                  "Defesa da honra e reputação",
                  "Reparação por constrangimentos",
                  "Proteção da imagem e privacidade",
                  "Valoração justa do dano sofrido"
                ]}
              />
              
              <ServiceSection
                icon={<div className="bg-principal/20 p-3 rounded-full"><FileText className="w-6 h-6 text-destaque" /></div>}
                title="Danos Materiais"
                description="Ressarcimento de prejuízos econômicos, despesas médicas, lucros cessantes e danos emergentes."
                benefits={[
                  "Ressarcimento de despesas médicas",
                  "Reparação de lucros cessantes",
                  "Cobertura de danos emergentes",
                  "Análise detalhada dos prejuízos"
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
