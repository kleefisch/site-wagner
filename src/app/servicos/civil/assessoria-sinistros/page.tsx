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
  Shield
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assessoria em Sinistros - Advocacia Brennda Silva | Direito Civil",
  description: "Atuação especializada em assessoria para sinistros: orientação, análise de cobertura, negociação com seguradoras e defesa dos direitos do segurado.",
  keywords: "assessoria em sinistros, direito civil, advogada, Brennda Silva, seguro, indenização, defesa do segurado, negociação com seguradora",
};

export default function AssessoriaSinistrosPage() {
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
      title: "Expertise em Seguros",
      description: "Conhecimento profundo das leis de seguros e práticas do mercado"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Análise Técnica",
      description: "Avaliação detalhada de contratos e coberturas de seguro"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Negociação Especializada",
      description: "Experiência em negociação com seguradoras de grande porte"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Defesa do Segurado",
      description: "Proteção integral dos direitos e interesses do segurado"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Resultados Efetivos",
      description: "Histórico comprovado de sucesso em recuperação de indenizações"
    }
  ];

  const faqItems = [
    {
      icon: <FileText className="w-6 h-6 text-destaque" />,
      question: "Análise de Cobertura",
      answer: "Avaliação do contrato de seguro, verificação de cobertura e exclusões para garantir o direito à indenização."
    },
    {
      icon: <Users className="w-6 h-6 text-destaque" />,
      question: "Negociação com Seguradora",
      answer: "Atuação em negociações para recebimento de indenização, contestação de negativas e defesa do segurado."
    },
    {
      icon: <Shield className="w-6 h-6 text-destaque" />,
      question: "Contestação de Negativas",
      answer: "Revisão e contestação de negativas injustas de cobertura por parte das seguradoras."
    },
    {
      icon: <Scale className="w-6 h-6 text-destaque" />,
      question: "Ações Judiciais",
      answer: "Propositura de ações contra seguradoras quando necessário para garantir os direitos do segurado."
    }
  ];

  return (
    <ServicePageTemplate
      title="Assessoria em Sinistros"
      category="Direito Civil"
      categoryIcon={<Scale className="w-4 h-4" />}
      description="Orientação e defesa do segurado em casos de sinistro, buscando a efetiva indenização e proteção dos seus direitos."
      ctaTitle="Precisa de Assessoria em Sinistros?"
      ctaDescription="Entre em contato para defender seus direitos perante a seguradora. Expertise comprovada em casos de sinistro."
    >
      {/* Modalidades de Assessoria em Sinistros */}
      <section className="py-8 md:py-16 bg-secundario">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                Modalidades de Assessoria em Sinistros
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Soluções para diferentes tipos de sinistros e defesa dos interesses do segurado.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <ServiceSection
                icon={<div className="bg-destaque/20 p-3 rounded-full"><FileText className="w-6 h-6 text-destaque" /></div>}
                title="Análise de Cobertura"
                description="Avaliação do contrato de seguro, verificação de cobertura e exclusões para garantir o direito à indenização."
                benefits={[
                  "Interpretação técnica do contrato de seguro",
                  "Identificação de cláusulas abusivas",
                  "Verificação de direitos de cobertura",
                  "Orientação sobre procedimentos corretos"
                ]}
              />
              
              <ServiceSection
                icon={<div className="bg-principal/20 p-3 rounded-full"><Users className="w-6 h-6 text-destaque" /></div>}
                title="Negociação com Seguradora"
                description="Atuação em negociações para recebimento de indenização, contestação de negativas e defesa do segurado."
                benefits={[
                  "Busca de acordos favoráveis ao segurado",
                  "Contestação fundamentada de negativas",
                  "Agilização do processo de indenização",
                  "Proteção contra práticas abusivas"
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
