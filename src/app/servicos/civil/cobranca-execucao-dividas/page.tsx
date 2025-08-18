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
  DollarSign
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cobrança e Execução de Dívidas - Advocacia Brennda Silva | Direito Civil",
  description: "Atuação especializada em cobrança e execução de dívidas: recuperação de crédito, negociação, ações judiciais e defesa dos interesses do credor.",
  keywords: "cobrança de dívidas, execução de dívidas, direito civil, advogada, Brennda Silva, recuperação de crédito, negociação, ações judiciais",
};

export default function CobrancaExecucaoDividasPage() {
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
      title: "Conhecimento Especializado",
      description: "Domínio das técnicas de cobrança e execução mais eficazes"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Estratégia Personalizada",
      description: "Abordagem específica para cada tipo de dívida e devedor"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Negociação Eficaz",
      description: "Habilidade para conseguir acordos justos e pagamentos rápidos"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Proteção dos Interesses",
      description: "Defesa firme dos direitos do credor e maximização da recuperação"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Resultados Comprovados",
      description: "Histórico de sucesso em recuperação de créditos e execuções"
    }
  ];

  const faqItems = [
    {
      icon: <FileText className="w-6 h-6 text-destaque" />,
      question: "Cobrança Extrajudicial",
      answer: "Negociação direta com o devedor, envio de notificações e acordos para recebimento rápido e eficiente."
    },
    {
      icon: <Users className="w-6 h-6 text-destaque" />,
      question: "Execução Judicial",
      answer: "Propositura de ação judicial para penhora de bens, bloqueio de valores e recebimento forçado da dívida."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-destaque" />,
      question: "Recuperação de Crédito",
      answer: "Estratégias para maximizar as chances de recebimento com menor custo e tempo."
    },
    {
      icon: <Scale className="w-6 h-6 text-destaque" />,
      question: "Defesa Jurídica",
      answer: "Proteção completa dos interesses do credor durante todo o processo de cobrança."
    }
  ];

  return (
    <ServicePageTemplate
      title="Cobrança e Execução de Dívidas"
      category="Direito Civil"
      categoryIcon={<Scale className="w-4 h-4" />}
      description="Recuperação de crédito, negociação e ações judiciais para garantir o recebimento de valores devidos."
      ctaTitle="Precisa Recuperar Créditos?"
      ctaDescription="Entre em contato para recuperar seus valores de forma estratégica e eficiente. Experiência comprovada em cobrança e execução."
    >
      {/* Modalidades de Cobrança e Execução */}
      <section className="py-8 md:py-16 bg-secundario">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                Modalidades de Cobrança e Execução
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Soluções para recuperação de crédito e defesa dos interesses do credor.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <ServiceSection
                icon={<div className="bg-destaque/20 p-3 rounded-full"><FileText className="w-6 h-6 text-destaque" /></div>}
                title="Cobrança Extrajudicial"
                description="Negociação direta com o devedor, envio de notificações e acordos para recebimento rápido e eficiente."
                benefits={[
                  "Redução de custos e agilidade na recuperação",
                  "Acordos personalizados conforme o caso",
                  "Preservação do relacionamento comercial",
                  "Resultado mais rápido que a via judicial"
                ]}
              />
              
              <ServiceSection
                icon={<div className="bg-principal/20 p-3 rounded-full"><Users className="w-6 h-6 text-destaque" /></div>}
                title="Execução Judicial"
                description="Propositura de ação judicial para penhora de bens, bloqueio de valores e recebimento forçado da dívida."
                benefits={[
                  "Ações eficazes para garantir o pagamento",
                  "Penhora de bens e bloqueio de contas",
                  "Força executiva para recebimento integral",
                  "Proteção jurídica completa do credor"
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
