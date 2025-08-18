"use client";

import { useState, useEffect } from "react";
import { ChevronRight, Scale, Users, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsappButton } from "@/components/ui/whatsapp-button";
import Link from "next/link";

// Função para mapear títulos de serviços para URLs
function getServiceUrl(areaKey: string, title: string) {
  const urlMap: { [key: string]: { [serviceTitle: string]: string } } = {
    familia: {
      "Divórcio Consensual e Litigioso": "/servicos/familia/divorcio",
      "Guarda de Filhos e Visitas": "/servicos/familia/guarda-de-filhos",
      "Pensão Alimentícia": "/servicos/familia/pensao-alimenticia",
      "Inventários e Herança": "/servicos/familia/inventario-e-heranca",
      "Testamentos, Holding Familiar e Planejamento Sucessório": "/servicos/familia/planejamento-sucessorio",
      "Interdição, Tutela e Curatela": "/servicos/familia/interdicao-tutela-curatela",
    },
    consumidor: {
      "Cobranças Indevidas ou Abusivas": "/servicos/consumidor/cobrancas-indevidas",
      "Garantias de Produtos e Serviços": "/servicos/consumidor/garantia-legal-trocas",
      "Telefonia, Internet e TV": "/servicos/consumidor/telefonia-internet-tv",
      "Companhias Aéreas": "/servicos/consumidor/turismo-transporte",
      "Planos de Saúde e Seguros": "/servicos/consumidor/planos-saude-seguros",
      "Fraudes Financeiras e Golpes Digitais": "/servicos/consumidor/fraudes-financeiras-golpes-digitais",
    },
    imobiliario: {
      "Compra e Venda de Imóveis": "/servicos/imobiliario/compra-venda-imoveis",
      "Contratos de Locação e Distratos": "/servicos/imobiliario/locacao-imoveis",
      "Lei do Inquilinato": "/servicos/imobiliario/lei-do-inquilinato",
      "Usucapião": "/servicos/imobiliario/usucapiao",
      "Ações Possessórias": "/servicos/imobiliario/acoes-possessorias",
      "Regularização de Imóveis": "/servicos/imobiliario/regularizacao-imoveis",
      "Questões Condominiais": "/servicos/imobiliario/questoes-condominiais",
    },
    civil: {
      "Elaboração e Revisão de Contratos": "/servicos/civil/elaboracao-revisao-contratos",
      "Ações Indenizatórias": "/servicos/civil/acoes-indenizatorias",
      "Cobrança e Execução de Dívidas": "/servicos/civil/cobranca-execucao-dividas",
      "Pareceres Jurídicos e Consultoria": "/servicos/civil/consultoria-pareceres-juridicos",
      "Responsabilidade Civil": "/servicos/civil/responsabilidade-civil",
      "Assessoria em Sinistros": "/servicos/civil/assessoria-sinistros",
    }
  };
  
  return urlMap[areaKey]?.[title] || "#";
}

const macroAreas = [
  {
    key: "familia",
    label: "Direito de Família",
    description: "Atuação completa em questões familiares, sempre priorizando o diálogo, a proteção dos direitos e o bem-estar das partes envolvidas.",
    services: [
      {
        title: "Divórcio Consensual e Litigioso",
        desc: "Acompanhamento completo em separações amigáveis ou judiciais, com foco na proteção dos direitos de cada parte."
      },
      {
        title: "Guarda de Filhos e Visitas",
        desc: "Definição de guarda, convivência e regulamentação de visitas, priorizando o bem-estar das crianças."
      },
      {
        title: "Pensão Alimentícia",
        desc: "Ações de fixação, revisão e execução de alimentos, garantindo o sustento dos dependentes."
      },
      {
        title: "Inventários e Herança",
        desc: "Planejamento e regularização da transmissão de bens, com segurança jurídica para herdeiros."
      },
      {
        title: "Testamentos, Holding Familiar e Planejamento Sucessório",
        desc: "Estratégias para proteção patrimonial e sucessão planejada, evitando conflitos futuros."
      },
      {
        title: "Interdição, Tutela e Curatela",
        desc: "Proteção legal de pessoas incapazes, idosos e menores, garantindo seus direitos e patrimônio."
      }
    ]
  },
  {
    key: "consumidor",
    label: "Direito do Consumidor",
    description: "Defesa dos direitos do consumidor em conflitos com empresas, prestadores de serviço e instituições financeiras.",
    services: [
      {
        title: "Cobranças Indevidas ou Abusivas",
        desc: "Defesa contra cobranças injustas, abusivas ou duplicadas, com atuação rápida para regularização do seu nome."
      },
      {
        title: "Garantias de Produtos e Serviços",
        desc: "Ações para garantir reparo, troca ou devolução de produtos e serviços defeituosos ou não entregues."
      },
      {
        title: "Telefonia, Internet e TV",
        desc: "Atuação em problemas com operadoras, cobranças indevidas, interrupções e má prestação de serviços de telecomunicação."
      },
      {
        title: "Companhias Aéreas",
        desc: "Atuação em casos de cancelamento de voos, extravio de bagagem e outros problemas com companhias aéreas."
      },
      {
        title: "Planos de Saúde e Seguros",
        desc: "Defesa contra negativas de cobertura, reajustes abusivos e outros conflitos com planos de saúde e seguradoras."
      },
      {
        title: "Fraudes Financeiras e Golpes Digitais",
        desc: "Proteção jurídica especializada contra fraudes financeiras e golpes digitais, com recuperação de valores perdidos."
      }
    ]
  },
  {
    key: "imobiliario",
    label: "Direito Imobiliário",
    description: "Segurança jurídica em transações imobiliárias, contratos, regularizações e defesa de direitos de posse e propriedade.",
    services: [
      {
        title: "Compra e Venda de Imóveis",
        desc: "Assessoria completa em transações imobiliárias, garantindo segurança jurídica na aquisição e venda de imóveis."
      },
      {
        title: "Contratos de Locação e Distratos",
        desc: "Elaboração, revisão e rescisão de contratos de locação, protegendo locador e locatário."
      },
      {
        title: "Lei do Inquilinato",
        desc: "Proteção jurídica em relações locatícias: revisão de aluguel, ações de despejo e direitos de locadores e locatários."
      },
      {
        title: "Usucapião",
        desc: "Regularização de posse e aquisição de propriedade por meio de ação de usucapião."
      },
      {
        title: "Ações Possessórias",
        desc: "Defesa e reivindicação de posse, reintegração, manutenção e interdito proibitório."
      },
      {
        title: "Regularização de Imóveis",
        desc: "Soluções para registro, averbação e legalização de imóveis urbanos e rurais."
      },
      {
        title: "Questões Condominiais",
        desc: "Atuação em conflitos, cobranças e administração de condomínios residenciais e comerciais."
      }
    ]
  },
  {
    key: "civil",
    label: "Direito Civil",
    description: "Consultoria, prevenção e solução de conflitos civis e comerciais, com foco em contratos, indenizações e responsabilidade civil.",
    services: [
      {
        title: "Elaboração e Revisão de Contratos",
        desc: "Confecção e análise de contratos civis e comerciais, prevenindo litígios e protegendo seus interesses."
      },
      {
        title: "Ações Indenizatórias",
        desc: "Reparação de danos morais e materiais decorrentes de ilícitos civis ou contratuais."
      },
      {
        title: "Cobrança e Execução de Dívidas",
        desc: "Atuação em processos de cobrança judicial e extrajudicial, recuperação de créditos e defesa em execuções."
      },
      {
        title: "Pareceres Jurídicos e Consultoria",
        desc: "Orientação técnica e emissão de pareceres para tomada de decisões seguras."
      },
      {
        title: "Responsabilidade Civil",
        desc: "Defesa e reivindicação em casos de danos causados a terceiros ou recebidos."
      },
      {
        title: "Assessoria em Sinistros",
        desc: "Acompanhamento em processos de sinistros e indenizações junto a seguradoras."
      }
    ]
  }
];

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import {
  CheckCircle,
  Handshake,
  FileText,
  KeyRound,
  Gavel,
  UserCheck,
  ShieldCheck,
  FileCheck2,
  Banknote,
  ShoppingCart,
  PhoneCall,
  Plane,
  Stethoscope,
  ShieldAlert,
  FileSignature,
  Coins,
  MessageCircle,
  FileSearch,
  Building2,
} from "lucide-react";
// Função utilitária para retornar o ícone conforme o serviço
function getServiceIcon(title: string) {
  switch (title) {
    // Família e Sucessões
    case "Divórcio Consensual e Litigioso":
      return <Handshake className="w-8 h-8 text-destaque mb-2" />;
    case "Guarda de Filhos e Visitas":
      return <Users className="w-8 h-8 text-destaque mb-2" />;
    case "Pensão Alimentícia":
      return <Banknote className="w-8 h-8 text-destaque mb-2" />;
    case "Inventários e Herança":
      return <FileText className="w-8 h-8 text-destaque mb-2" />;
    case "Testamentos, Holding Familiar e Planejamento Sucessório":
      return <Home className="w-8 h-8 text-destaque mb-2" />;
    case "Interdição, Tutela e Curatela":
      return <UserCheck className="w-8 h-8 text-destaque mb-2" />;

    // Consumidor
    case "Cobranças Indevidas ou Abusivas":
      return <ShieldAlert className="w-8 h-8 text-destaque mb-2" />;
    case "Garantias de Produtos e Serviços":
      return <FileCheck2 className="w-8 h-8 text-destaque mb-2" />;
    case "Telefonia, Internet e TV":
      return <PhoneCall className="w-8 h-8 text-destaque mb-2" />;
    case "Companhias Aéreas":
      return <Plane className="w-8 h-8 text-destaque mb-2" />;
    case "Planos de Saúde e Seguros":
      return <Stethoscope className="w-8 h-8 text-destaque mb-2" />;
    case "Fraudes Financeiras e Golpes Digitais":
      return <ShoppingCart className="w-8 h-8 text-destaque mb-2" />;

    // Imobiliário
    case "Compra e Venda de Imóveis":
      return <Home className="w-8 h-8 text-destaque mb-2" />;
    case "Contratos de Locação e Distratos":
      return <FileSignature className="w-8 h-8 text-destaque mb-2" />;
    case "Lei do Inquilinato":
      return <Scale className="w-8 h-8 text-destaque mb-2" />;
    case "Usucapião":
      return <KeyRound className="w-8 h-8 text-destaque mb-2" />;
    case "Ações Possessórias":
      return <Gavel className="w-8 h-8 text-destaque mb-2" />;
    case "Regularização de Imóveis":
      return <FileSearch className="w-8 h-8 text-destaque mb-2" />;
    case "Questões Condominiais":
      return <Building2 className="w-8 h-8 text-destaque mb-2" />;

    // Civil
    case "Elaboração e Revisão de Contratos":
      return <FileSignature className="w-8 h-8 text-destaque mb-2" />;
    case "Ações Indenizatórias":
      return <Coins className="w-8 h-8 text-destaque mb-2" />;
    case "Cobrança e Execução de Dívidas":
      return <Banknote className="w-8 h-8 text-destaque mb-2" />;
    case "Pareceres Jurídicos e Consultoria":
      return <MessageCircle className="w-8 h-8 text-destaque mb-2" />;
    case "Responsabilidade Civil":
      return <ShieldCheck className="w-8 h-8 text-destaque mb-2" />;
    case "Assessoria em Sinistros":
      return <UserCheck className="w-8 h-8 text-destaque mb-2" />;

    default:
      return <CheckCircle className="w-8 h-8 text-destaque mb-2" />;
  }
}

export default function AreasDeAtuacao() {
  const [selected, setSelected] = useState("familia");
  
  useEffect(() => {
    // Detecta se há uma âncora na URL e seleciona a área correspondente
    const hash = window.location.hash.replace('#', '');
    const areaMap: { [key: string]: string } = {
      'direito-de-familia': 'familia',
      'direito-civil': 'civil',
      'direito-do-consumidor': 'consumidor',
      'direito-imobiliario': 'imobiliario'
    };
    
    if (hash && areaMap[hash]) {
      setSelected(areaMap[hash]);
      // Pequeno delay para garantir que o DOM foi renderizado
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);
  
  const area = macroAreas.find((a) => a.key === selected)!;

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Seção Header */}
        <section className="py-8 md:py-16 lg:py-24 bg-principal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-claro mb-6">Áreas de Atuação</h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Soluções jurídicas completas, atendimento humano e foco em resultados. Clique em uma área para conhecer os serviços.
              </p>
            </div>
          </div>
        </section>

        {/* Seção Serviços */}
        <section className="py-8 md:py-16 bg-secundario">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Menu de Áreas */}
            <div className="max-w-4xl mx-auto mb-12">
              <nav className="flex md:flex-row flex-col md:items-center items-stretch md:justify-center justify-center gap-4">
                {macroAreas.map((a) => (
                  <button
                    key={a.key}
                    onClick={() => setSelected(a.key)}
                    id={`direito-${a.key === 'familia' ? 'de-familia' : a.key === 'consumidor' ? 'do-consumidor' : a.key === 'civil' ? 'civil' : 'imobiliario'}`}
                    className={`px-6 py-3 rounded-full font-semibold text-lg transition-colors border-2 focus:outline-none ${selected === a.key ? "bg-destaque text-claro border-destaque" : "bg-claro/10 text-principal border-claro/20 hover:bg-claro/20"}`}
                    aria-current={selected === a.key ? "page" : undefined}
                  >
                    {a.label}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="max-w-6xl mx-auto bg-claro/10 rounded-2xl p-8 border border-claro/15 shadow-md text-principal">
              <h2 className="text-2xl lg:text-3xl font-bold text-principal mb-3 text-left">{area.label}</h2>
              <p className="text-base mb-6 text-left">{area.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
                {area.services.map((service) => {
                  const serviceUrl = getServiceUrl(area.key, service.title);
                  return (
                    <div key={service.title} className="bg-white rounded-xl border border-claro/10 shadow-sm card-clickable group">
                      <Link href={serviceUrl} className="block h-full">
                        <div className="p-4 flex flex-col items-center text-center gap-2 h-full">
                          <div className="flex-shrink-0">
                            {getServiceIcon(service.title)}
                          </div>
                          <span className="text-lg font-semibold text-principal mb-1 flex-shrink-0 group-hover:text-destaque transition-colors">{service.title}</span>
                          <p className="text-principal text-sm leading-relaxed flex-1 flex items-center">{service.desc}</p>
                          <div className="mt-4 w-full">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full text-destaque border-destaque btn-service"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Saiba Mais
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="text-center mt-8">
                <h3 className="text-xl lg:text-2xl font-bold text-principal mb-2">
                  Precisa de ajuda com {area.label}?
                </h3>
                <p className="text-base text-claro/90 mb-4">
                  Fale agora com a Dra. Brennda Silva e tire todas as suas dúvidas
                </p>
                <div className="flex justify-center">
                  <WhatsappButton size="lg" iconSize={28} className="px-4 py-6 text-lg font-semibold uppercase">
                    Fale com a Advogada
                  </WhatsappButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
