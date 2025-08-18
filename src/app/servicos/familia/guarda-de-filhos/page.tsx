import ServicePageTemplate, { 
  ServiceSection, 
  ProcessSection, 
  WhyChooseSection, 
  FAQSection 
} from "@/components/sections/service-page-template";
import {
  Handshake,
  Users,
  FileText,
  Scale,
  Calendar,
  CheckCircle,
  MessageCircle,
  Search
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guarda de Filhos - Advocacia Brennda Silva | Especialista em Direito de Família",
  description: "Atuação especializada em guarda de filhos: guarda compartilhada, unilateral, regulamentação de visitas e proteção do melhor interesse da criança.",
  keywords: "guarda de filhos, guarda compartilhada, guarda unilateral, direito de família, advogada, Brennda Silva, regulamentação de visitas",
};

export default function GuardaDeFilhosPage() {
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
      description: "Especialização em Direito de Família e atualização constante"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Estratégia Personalizada",
      description: "Cada caso é analisado de forma única, buscando a melhor solução"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Negociação Eficaz",
      description: "Busca de acordos justos e defesa firme em processos judiciais"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Proteção dos Direitos",
      description: "Garantia de que os direitos de quem depende e de quem paga sejam respeitados"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Atendimento Humanizado",
      description: "Atenção, empatia e clareza em todas as etapas do processo"
    }
  ];

  const faqItems = [
    {
      icon: <Users className="w-6 h-6 text-destaque" />,
      question: "Quem pode pedir a guarda?",
      answer: "Pais, mães, avós ou responsáveis legais podem solicitar a guarda, sempre visando o melhor interesse da criança."
    },
    {
      icon: <FileText className="w-6 h-6 text-destaque" />,
      question: "Como é definida a guarda?",
      answer: "A guarda é definida pelo juiz, considerando o vínculo afetivo, a rotina da criança e a capacidade dos pais."
    },
    {
      icon: <Calendar className="w-6 h-6 text-destaque" />,
      question: "E a visitação?",
      answer: "O direito de visitas é garantido ao genitor que não detém a guarda, promovendo o convívio saudável com a criança."
    },
    {
      icon: <Scale className="w-6 h-6 text-destaque" />,
      question: "O que é o melhor interesse?",
      answer: "Todas as decisões devem priorizar o bem-estar físico, emocional e social da criança ou adolescente."
    }
  ];

  return (
    <ServicePageTemplate
      title="Guarda de Filhos"
      category="Direito de Família"
      categoryIcon={<Handshake className="w-4 h-4" />}
      description="Proteção, cuidado e o melhor interesse da criança em processos de guarda, regulamentação de visitas e convivência familiar."
      ctaTitle="Precisa de Ajuda com Guarda de Filhos?"
      ctaDescription="Conte com orientação especializada e acolhedora para garantir o melhor para seu filho."
    >
      {/* Tipos de Guarda */}
      <section className="py-8 md:py-16 bg-secundario">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                Tipos de Guarda
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Entenda as modalidades de guarda e como cada uma protege o bem-estar da criança.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <ServiceSection
                icon={<div className="bg-destaque/20 p-3 rounded-full"><Users className="w-6 h-6 text-destaque" /></div>}
                title="Guarda Compartilhada"
                description="Responsabilidade conjunta dos pais, promovendo o convívio equilibrado e decisões compartilhadas sobre a vida do filho."
                benefits={[
                  "Prioriza o melhor interesse da criança",
                  "Decisões importantes tomadas em conjunto",
                  "Convívio equilibrado com ambos os pais",
                  "Responsabilidade parental compartilhada"
                ]}
              />
              
              <ServiceSection
                icon={<div className="bg-principal/20 p-3 rounded-full"><FileText className="w-6 h-6 text-destaque" /></div>}
                title="Guarda Unilateral"
                description="Atribuída a apenas um dos pais ou responsável, quando o outro não tem condições de exercer o poder familiar."
                benefits={[
                  "Proteção em situações de risco ou ausência",
                  "Direito de visitas garantido ao outro genitor",
                  "Definição clara de responsabilidades",
                  "Segurança jurídica para a criança"
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
