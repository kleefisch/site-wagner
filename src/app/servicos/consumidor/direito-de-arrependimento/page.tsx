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
  title: "Direito de Arrependimento - Advocacia Brennda Silva | Direito do Consumidor",
  description: "Atuação especializada em defesa do consumidor no exercício do direito de arrependimento: devolução de produtos, cancelamento de compras online e reembolso.",
  keywords: "direito de arrependimento, devolução, cancelamento, compras online, direito do consumidor, advogada, Brennda Silva, reembolso, e-commerce",
};

export default function DireitoDeArrependimentoPage() {
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
                Direito de Arrependimento
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Saiba como exercer seu direito de devolver produtos e cancelar compras feitas fora do estabelecimento comercial.
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

        {/* Situações de Exercício do Direito */}
        <section className="py-16 bg-secundario">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                  Quando o Direito de Arrependimento se Aplica?
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Entenda em quais situações o consumidor pode cancelar a compra e exigir reembolso integral.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-destaque" />
                    <h3 className="text-2xl font-bold text-principal">Compras Online ou Fora da Loja</h3>
                  </div>
                  <p className="text-principal mb-6">
                    O direito de arrependimento é garantido para compras realizadas pela internet, telefone, catálogo ou em domicílio.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Prazo de 7 dias para desistir da compra</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Reembolso integral, incluindo frete</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-destaque" />
                    <h3 className="text-2xl font-bold text-principal">Produtos e Serviços</h3>
                  </div>
                  <p className="text-principal mb-6">
                    O direito vale tanto para produtos quanto para serviços contratados fora do estabelecimento comercial.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Não é necessário justificar o motivo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">O fornecedor deve arcar com todos os custos</span>
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
                  Como Funciona o Exercício do Direito
                </h2>
                <p className="text-lg text-claro max-w-2xl mx-auto">
                  Um passo a passo claro e transparente para cancelar a compra e garantir seu reembolso.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <MessageCircle className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">1. Consultoria Inicial</h3>
                  <p className="text-principal">
                    Análise do caso, orientação sobre direitos e definição da melhor estratégia para exercer o direito de arrependimento.
                  </p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <FileText className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">2. Comunicação ao Fornecedor</h3>
                  <p className="text-principal">
                    Notificação formal ao fornecedor sobre o desejo de cancelar a compra e solicitar o reembolso.
                  </p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <Scale className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">3. Devolução do Produto</h3>
                  <p className="text-principal">
                    Envio do produto ao fornecedor, com custos de devolução arcados pela empresa.
                  </p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <Search className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">4. Reembolso</h3>
                  <p className="text-principal">
                    Recebimento do valor pago, incluindo frete, em prazo razoável após a devolução do produto.
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
                  Questões Importantes sobre Direito de Arrependimento
                </h2>
                <p className="text-lg text-gray-600">
                  Pontos essenciais para garantir seus direitos ao cancelar compras feitas fora do estabelecimento.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 items-stretch">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">Preciso justificar o motivo do arrependimento?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Não. O consumidor pode desistir da compra sem apresentar justificativa, desde que esteja no prazo legal.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">O fornecedor pode recusar o cancelamento?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Não. O direito de arrependimento é garantido por lei para compras fora do estabelecimento.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Scale className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">E se o reembolso não for feito?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    O consumidor pode exigir judicialmente o valor pago, além de indenização por eventuais prejuízos.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Handshake className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">O direito vale para compras em loja física?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Não. O direito de arrependimento é exclusivo para compras fora do estabelecimento comercial.
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
                  O exercício do direito de arrependimento exige conhecimento técnico, experiência e agilidade para garantir seus direitos.
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
                        <span className="text-principal ml-1">Especialização em Direito do Consumidor e e-commerce</span>
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
                    Advogada especialista em Direito do Consumidor, com experiência em e-commerce, atendimento humanizado e resultados comprovados.
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
                Precisa Cancelar uma Compra Online?
              </h2>
              <p className="text-xl text-principal mb-8 max-w-2xl mx-auto">
                Conte com orientação especializada para exercer seu direito de arrependimento e garantir o reembolso.
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

