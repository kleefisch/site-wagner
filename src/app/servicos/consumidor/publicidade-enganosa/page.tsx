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
  title: "Publicidade Enganosa - Advocacia Brennda Silva | Direito do Consumidor",
  description: "Atuação especializada em defesa do consumidor contra publicidade enganosa: direitos, indenização, cancelamento de contratos e proteção contra práticas abusivas.",
  keywords: "publicidade enganosa, propaganda, direito do consumidor, advogada, Brennda Silva, indenização, práticas abusivas, cancelamento",
};

export default function PublicidadeEnganosaPage() {
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
                Publicidade Enganosa
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Proteja-se contra promessas falsas, ofertas não cumpridas e práticas abusivas de propaganda.
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

        {/* Exemplos de Publicidade Enganosa */}
        <section className="py-16 bg-secundario">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                  Exemplos de Publicidade Enganosa
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Conheça situações comuns e saiba como identificar práticas abusivas.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-destaque" />
                    <h3 className="text-2xl font-bold text-principal">Ofertas Não Cumpridas</h3>
                  </div>
                  <p className="text-principal mb-6">
                    Promoções, descontos ou condições anunciadas que não são respeitadas no momento da compra.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Preço diferente do anunciado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Condições de pagamento não informadas claramente</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-destaque" />
                    <h3 className="text-2xl font-bold text-principal">Promessas Falsas</h3>
                  </div>
                  <p className="text-principal mb-6">
                    Produtos ou serviços que não entregam o que foi prometido em anúncios, embalagens ou contratos.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Resultados milagrosos, garantias infundadas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Informações omitidas ou enganosas</span>
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
                  Como Funciona a Defesa Contra Publicidade Enganosa
                </h2>
                <p className="text-lg text-claro max-w-2xl mx-auto">
                  Um passo a passo claro e transparente para buscar seus direitos e reparação de danos.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <MessageCircle className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">1. Consultoria Inicial</h3>
                  <p className="text-principal">
                    Análise do caso, orientação sobre direitos e definição da melhor estratégia para defesa do consumidor.
                  </p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <FileText className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">2. Documentação</h3>
                  <p className="text-principal">
                    Reunião de provas, anúncios, contratos, prints e registros da publicidade enganosa.
                  </p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <Scale className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">3. Notificação e Negociação</h3>
                  <p className="text-principal">
                    Notificação ao fornecedor, tentativa de acordo e, se necessário, ingresso com ação judicial.
                  </p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <Search className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">4. Acompanhamento</h3>
                  <p className="text-principal">
                    Suporte jurídico até a solução do caso e reparação dos danos sofridos.
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
                  Questões Importantes sobre Publicidade Enganosa
                </h2>
                <p className="text-lg text-gray-600">
                  Pontos essenciais para garantir seus direitos e evitar prejuízos com propaganda enganosa.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 items-stretch">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">O que caracteriza publicidade enganosa?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Qualquer informação falsa, omissa ou que induza o consumidor ao erro sobre produto ou serviço.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">Quais os direitos do consumidor lesado?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Direito à reparação de danos, cancelamento do contrato e devolução de valores pagos.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Scale className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">Como comprovar a publicidade enganosa?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Guarde anúncios, prints, contratos e qualquer material que comprove a oferta ou promessa feita.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Handshake className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">É possível pedir indenização?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Sim, o consumidor pode pleitear indenização por danos materiais e morais decorrentes da publicidade enganosa.
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
                  A defesa contra publicidade enganosa exige conhecimento técnico, experiência e agilidade para garantir seus direitos.
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
                        <span className="text-principal ml-1">Especialização em Direito do Consumidor e práticas abusivas</span>
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
                    Advogada especialista em Direito do Consumidor, com experiência em práticas abusivas, atendimento humanizado e resultados comprovados.
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
                Foi vítima de Publicidade Enganosa?
              </h2>
              <p className="text-xl text-principal mb-8 max-w-2xl mx-auto">
                Conte com orientação especializada para buscar seus direitos e reparação de danos.
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

