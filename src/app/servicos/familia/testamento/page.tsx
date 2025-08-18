import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { WhatsappButton } from "@/components/ui/whatsapp-button";
import Link from "next/link";
import {
  Handshake,
  FileText,
  Scale,
  Calendar,
  CheckCircle,
  MessageCircle,
  Search
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testamento - Advocacia Brennda Silva | Especialista em Direito de Família e Sucessões",
  description: "Atuação especializada em testamentos: elaboração, planejamento sucessório, segurança jurídica e proteção do patrimônio familiar.",
  keywords: "testamento, planejamento sucessório, direito de família, direito das sucessões, advogada, Brennda Silva, proteção patrimonial",
};

export default function TestamentoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-8 md:py-16 lg:py-24 bg-principal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-destaque/20 text-destaque px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Handshake className="w-4 h-4" />
                Direito de Família e Sucessões
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-claro mb-6">
                Testamento
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Planeje o futuro da sua família com segurança, autonomia e proteção patrimonial. Elabore seu testamento com orientação especializada.
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

        {/* Tipos de Testamento */}
        <section className="py-8 md:py-16 bg-secundario">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                  Tipos de Testamento
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Conheça as modalidades de testamento e escolha a mais adequada para sua realidade e objetivos.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-destaque" />
                    <h3 className="text-2xl font-bold text-principal">Testamento Público</h3>
                  </div>
                  <p className="text-principal mb-6">
                    Realizado em cartório, com fé pública, garante máxima segurança jurídica e publicidade controlada.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Lavrado por tabelião na presença de testemunhas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Evita dúvidas e facilita o cumprimento da vontade</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-destaque" />
                    <h3 className="text-2xl font-bold text-principal">Testamento Particular</h3>
                  </div>
                  <p className="text-principal mb-6">
                    Escrito pelo próprio testador, exige testemunhas e posterior confirmação judicial, sendo opção mais flexível.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Redigido pelo testador, com assinatura de testemunhas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Necessita homologação judicial após o falecimento</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona o Processo (SEMPRE igual) */}
        <section id="como-funciona" className="py-8 md:py-16 bg-principal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-destaque mb-4">
                  Como Funciona o Processo
                </h2>
                <p className="text-lg text-claro max-w-2xl mx-auto">
                  Um passo a passo claro e transparente para que você saiba exatamente o que esperar.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <MessageCircle className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">1. Consultoria Inicial</h3>
                  <p className="text-principal">
                    Análise do seu objetivo, explicação das opções de testamento e definição da melhor estratégia sucessória.
                  </p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <FileText className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">2. Elaboração do Testamento</h3>
                  <p className="text-principal">
                    Orientação sobre documentos, redação do testamento e escolha da modalidade mais adequada.
                  </p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <Scale className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">3. Formalização</h3>
                  <p className="text-principal">
                    Providências em cartório ou orientação para testamento particular, garantindo validade e segurança jurídica.
                  </p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <Search className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">4. Acompanhamento</h3>
                  <p className="text-principal">
                    Suporte contínuo, esclarecimento de dúvidas e atualização do testamento conforme mudanças familiares.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Questões Importantes */}
        <section className="py-8 md:py-16 bg-secundario">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                  Questões Importantes sobre Testamento
                </h2>
                <p className="text-lg text-gray-600">
                  Pontos essenciais para garantir que sua vontade seja respeitada e sua família protegida.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 items-stretch">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">Quem pode fazer testamento?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Qualquer pessoa maior de 16 anos e capaz pode dispor de seus bens por testamento, respeitando a lei.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Scale className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">O que pode ser disposto?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    O testador pode definir a destinação de parte dos bens, nomear herdeiros, legatários e estabelecer condições.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">Pode ser alterado?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Sim, o testamento pode ser revogado ou modificado a qualquer tempo, enquanto o testador for capaz.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">Quais cuidados tomar?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    É fundamental observar os requisitos legais, escolher testemunhas idôneas e buscar orientação jurídica especializada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por Que a Presença de Uma Advogada Especialista Faz Toda a Diferença */}
        <section className="py-8 md:py-16 bg-principal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-destaque mb-4">
                  Por Que a Presença de Uma Advogada Especialista Faz Toda a Diferença
                </h2>
                <p className="text-lg text-claro max-w-3xl mx-auto">
                  O testamento exige conhecimento técnico, sensibilidade e atenção aos detalhes para garantir que sua vontade seja respeitada e evitar futuros conflitos familiares.
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
                        <span className="text-principal ml-1">Especialização em Direito das Sucessões e atualização constante</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Planejamento Personalizado:</strong>
                        <span className="text-principal ml-1">Cada testamento é elaborado conforme a realidade e os objetivos do cliente</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Segurança Jurídica:</strong>
                        <span className="text-principal ml-1">Garantia de validade, clareza e cumprimento da vontade do testador</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Prevenção de Conflitos:</strong>
                        <span className="text-principal ml-1">Redução de disputas familiares e proteção do patrimônio</span>
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
                    Advogada especialista em Direito das Sucessões, com experiência, ética e dedicação para garantir tranquilidade e segurança ao seu planejamento sucessório.
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
        <section className="py-8 md:py-16 bg-secundario">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                Precisa de Ajuda com Testamento?
              </h2>
              <p className="text-xl text-principal mb-8 max-w-2xl mx-auto">
                Conte com orientação especializada para garantir que sua vontade seja respeitada e sua família protegida.
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

