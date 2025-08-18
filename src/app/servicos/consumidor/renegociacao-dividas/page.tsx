import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { WhatsappButton } from "@/components/ui/whatsapp-button";
import Link from "next/link";
import {
  Handshake,
  FileText,
  Scale,
  CheckCircle,
  MessageCircle,
  Search,
  Users
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renegociação de Dívidas - Advocacia Brennda Silva | Direito do Consumidor",
  description: "Atuação especializada em renegociação de dívidas: negociação com credores, revisão de contratos, redução de juros e defesa do consumidor endividado.",
  keywords: "renegociação de dívidas, negociação, revisão de contratos, direito do consumidor, advogada, Brennda Silva, dívidas, juros abusivos, acordo",
};

export default function RenegociacaoDividasPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-principal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-destaque/20 text-destaque px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Handshake className="w-4 h-4" />
                Direito do Consumidor
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-claro mb-6">
                Renegociação de Dívidas
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Soluções jurídicas para negociar dívidas, revisar contratos e buscar acordos justos com credores.
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

        {/* Situações de Renegociação */}
        <section className="py-16 bg-secundario">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                  Quando a Renegociação é Indicada?
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Entenda as principais situações em que a renegociação pode trazer alívio financeiro e segurança jurídica.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-destaque" />
                    <h3 className="text-2xl font-bold text-principal">Dívidas Bancárias e Cartão de Crédito</h3>
                  </div>
                  <p className="text-principal mb-6">
                    Negociação de débitos com bancos, financeiras e administradoras de cartão para redução de juros e parcelamento.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Juros abusivos e cobranças indevidas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Acordos para limpar o nome e evitar ações judiciais</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-destaque" />
                    <h3 className="text-2xl font-bold text-principal">Dívidas de Consumo e Serviços</h3>
                  </div>
                  <p className="text-principal mb-6">
                    Negociação de débitos com lojas, operadoras, concessionárias e prestadores de serviços.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Parcelamento, descontos e revisão de contratos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Defesa contra cobranças abusivas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona o Processo */}
        <section id="como-funciona" className="py-16 bg-principal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-destaque mb-4">
                  Como Funciona a Renegociação
                </h2>
                <p className="text-lg text-claro max-w-2xl mx-auto">
                  Um passo a passo claro e transparente para negociar dívidas e buscar acordos vantajosos.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <MessageCircle className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">1. Consultoria Inicial</h3>
                  <p className="text-principal">
                    Análise do caso, levantamento das dívidas e definição da melhor estratégia de negociação.
                  </p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <FileText className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">2. Documentação</h3>
                  <p className="text-principal">
                    Reunião de contratos, extratos, boletos e comprovantes para fundamentar a negociação.
                  </p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <Scale className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">3. Negociação com Credores</h3>
                  <p className="text-principal">
                    Contato com credores, apresentação de propostas e busca de acordos que caibam no orçamento.
                  </p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <Search className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">4. Acompanhamento</h3>
                  <p className="text-principal">
                    Suporte jurídico até a quitação da dívida e regularização do nome do consumidor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Questões Importantes */}
        <section className="py-16 bg-secundario">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                  Questões Importantes sobre Renegociação de Dívidas
                </h2>
                <p className="text-lg text-gray-600">
                  Pontos essenciais para garantir acordos justos e evitar abusos durante a negociação.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 items-stretch">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">Posso negociar qualquer tipo de dívida?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Sim, a maioria das dívidas pode ser negociada, inclusive bancárias, de consumo e serviços.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">Como evitar cair em golpes?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Sempre negocie diretamente com o credor ou com assessoria jurídica de confiança.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Scale className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">É possível reduzir juros e encargos?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Sim, a negociação pode resultar em descontos, redução de juros e melhores condições de pagamento.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Handshake className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">Acordo feito, meu nome sai do SPC/Serasa?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Sim, após o pagamento do acordo, o nome deve ser retirado dos órgãos de proteção ao crédito em até 5 dias úteis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por Que a Presença de Uma Advogada Especialista Faz Toda a Diferença */}
        <section className="py-16 bg-principal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-destaque mb-4">
                  Por Que a Presença de Uma Advogada Especialista Faz Toda a Diferença
                </h2>
                <p className="text-lg text-claro max-w-3xl mx-auto">
                  A renegociação de dívidas exige conhecimento técnico, experiência e estratégia para garantir acordos vantajosos.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="bg-secundario rounded-2xl p-8 h-full flex flex-col justify-between">
                  <h3 className="text-2xl font-bold text-principal mb-4">
                    Experiência que Protege Seus Direitos
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Conhecimento Profundo:</strong>
                        <span className="text-principal ml-1">Especialização em Direito do Consumidor e negociação de dívidas</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Estratégia Personalizada:</strong>
                        <span className="text-principal ml-1">Cada caso é analisado de forma única, buscando a melhor solução</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Negociação Eficaz:</strong>
                        <span className="text-principal ml-1">Busca de acordos justos e defesa firme em processos judiciais</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Proteção dos Direitos:</strong>
                        <span className="text-principal ml-1">Garantia de que todos os direitos do consumidor sejam respeitados</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Atendimento Humanizado:</strong>
                        <span className="text-principal ml-1">Atenção, empatia e clareza em todas as etapas do processo</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-destaque rounded-2xl p-8 h-full flex flex-col justify-between text-principal">
                  <h3 className="text-2xl font-bold mb-4 text-principal">Dra. Brennda: Sua Melhor Escolha</h3>
                  <p className="text-principal mb-6">
                    Advogada especialista em Direito do Consumidor, com experiência em negociação de dívidas, atendimento humanizado e resultados comprovados.
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

        {/* CTA Final */}
        <section className="py-16 bg-secundario">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                Precisa Negociar Dívidas?
              </h2>
              <p className="text-xl text-principal mb-8 max-w-2xl mx-auto">
                Conte com orientação especializada para negociar, revisar contratos e buscar acordos vantajosos.
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
      </main>
      <Footer />
    </>
  );
}

