import ServicePageTemplate, { 
  ServiceSection, 
  ProcessSection, 
  WhyChooseSection, 
  FAQSection 
} from "@/components/sections/service-page-template";
import { 
  Handshake, 
  Scale, 
  Users, 
  FileText, 
  CheckCircle,
  MessageCircle,
  Calendar,
  Search
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Divórcio - Advocacia Brennda Silva | Especialista em Direito de Família",
  description: "Especialista em divórcio consensual e litigioso. Acompanhamento completo com foco na proteção dos direitos e bem-estar das partes envolvidas. Atendimento personalizado.",
  keywords: "divórcio, separação, direito de família, advogada, Brennda Silva, divórcio consensual, divórcio litigioso",
};

export default function DivorcioPage() {
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
      description: "Domínio completo das leis de família e jurisprudências atualizadas"
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
      title: "Proteção Patrimonial",
      description: "Análise detalhada de bens para garantir partilha justa e legal"
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
      question: "Partilha de Bens",
      answer: "Divisão justa do patrimônio construído durante o casamento, considerando o regime de bens adotado."
    },
    {
      icon: <Users className="w-6 h-6 text-destaque" />,
      question: "Guarda dos Filhos",
      answer: "Definição de guarda compartilhada ou unilateral, sempre priorizando o bem-estar das crianças."
    },
    {
      icon: <FileText className="w-6 h-6 text-destaque" />,
      question: "Pensão Alimentícia",
      answer: "Fixação de valor justo para pensão alimentícia dos filhos, baseada na capacidade financeira dos pais."
    },
    {
      icon: <Calendar className="w-6 h-6 text-destaque" />,
      question: "Direito de Visitas",
      answer: "Regulamentação de horários e períodos de convivência entre pais e filhos após a separação."
    }
  ];

  return (
    <ServicePageTemplate
      title="Divórcio"
      category="Direito de Família"
      categoryIcon={<Handshake className="w-4 h-4" />}
      description="Acompanhamento completo em separações amigáveis ou judiciais, sempre priorizando o diálogo, a proteção dos direitos e o bem-estar de todas as partes envolvidas."
      ctaTitle="Precisa de Ajuda com Divórcio?"
      ctaDescription="Inicie seu atendimento personalizado e tire todas as suas dúvidas. Atendimento humanizado e foco na melhor solução para o seu caso."
    >
      {/* Tipos de Divórcio */}
      <section className="py-8 md:py-16 bg-secundario">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                Tipos de Divórcio
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cada situação é única. Conheça as diferentes modalidades e encontre a melhor opção para o seu caso.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <ServiceSection
                icon={<div className="bg-destaque/20 p-3 rounded-full"><Handshake className="w-6 h-6 text-destaque" /></div>}
                title="Divórcio Consensual"
                description="Quando há acordo entre as partes sobre partilha de bens, guarda dos filhos e pensão alimentícia. Processo mais rápido e econômico."
                benefits={[
                  "Processo mais rápido (60 a 90 dias)",
                  "Custos reduzidos",
                  "Menos desgaste emocional",
                  "Pode ser feito em cartório (sem filhos menores)"
                ]}
              />
              
              <ServiceSection
                icon={<div className="bg-principal/20 p-3 rounded-full"><Scale className="w-6 h-6 text-destaque" /></div>}
                title="Divórcio Litigioso"
                description="Quando não há acordo entre as partes. Necessita de processo judicial com defesa dos interesses de cada parte."
                benefits={[
                  "Defesa completa dos seus direitos",
                  "Análise detalhada de bens e patrimônio",
                  "Proteção dos interesses dos filhos",
                  "Busca por acordo durante o processo"
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
