param(
    [string]$ServicePath,
    [string]$Title,
    [string]$Category,
    [string]$CategoryIcon,
    [string]$Description,
    [string]$CtaTitle,
    [string]$CtaDescription
)

$templateContent = @"
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
  title: "$Title - Advocacia Brennda Silva | $Category",
  description: "Atuação especializada em $($Title.ToLower()): $Description",
  keywords: "$($Title.ToLower()), $($Category.ToLower()), advogada, Brennda Silva",
};

export default function $($Title -replace '\s+|[^\w]', '')Page() {
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
      description: "Domínio técnico e experiência comprovada na área"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Estratégia Personalizada",
      description: "Abordagem específica para cada caso e situação"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Negociação Eficaz",
      description: "Habilidade para conseguir os melhores resultados"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Proteção dos Direitos",
      description: "Defesa firme dos seus interesses e direitos"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      title: "Atendimento Diferenciado",
      description: "Comunicação clara e acompanhamento próximo"
    }
  ];

  const faqItems = [
    {
      icon: <FileText className="w-6 h-6 text-destaque" />,
      question: "Como funciona o processo?",
      answer: "Processo estruturado com etapas claras e acompanhamento constante."
    },
    {
      icon: <Users className="w-6 h-6 text-destaque" />,
      question: "Qual o prazo médio?",
      answer: "Varia conforme a complexidade do caso, mas sempre com máxima agilidade."
    },
    {
      icon: <Scale className="w-6 h-6 text-destaque" />,
      question: "Documentos necessários?",
      answer: "Orientação completa sobre toda documentação necessária para o seu caso."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-destaque" />,
      question: "Como acompanhar?",
      answer: "Comunicação constante e transparente sobre o andamento do processo."
    }
  ];

  return (
    <ServicePageTemplate
      title="$Title"
      category="$Category"
      categoryIcon={<$CategoryIcon className="w-4 h-4" />}
      description="$Description"
      ctaTitle="$CtaTitle"
      ctaDescription="$CtaDescription"
    >
      <ProcessSection steps={processSteps} />

      <FAQSection items={faqItems} />

      <WhyChooseSection items={whyChooseItems} />
    </ServicePageTemplate>
  );
}
"@

$templateContent | Set-Content -Path $ServicePath -Encoding UTF8
Write-Host "Template aplicado com sucesso em: $ServicePath"
