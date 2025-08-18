import { Metadata } from 'next';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { WhatsappButton } from '@/components/ui/whatsapp-button';
import Link from 'next/link';
import { Home, Search, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '404 - Página Não Encontrada | Advocacia Brennda Silva',
  description: 'A página que você procura não foi encontrada. Navegue por nossos serviços jurídicos especializados ou entre em contato conosco.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-secundario">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="text-8xl lg:text-9xl font-bold text-destaque/20 mb-4">
                  404
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                  Página Não Encontrada
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  A página que você está procurando pode ter sido movida, removida ou não existe. 
                  Navegue por nossos serviços ou entre em contato conosco.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="bg-destaque/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Home className="w-6 h-6 text-destaque" />
                  </div>
                  <h3 className="font-bold text-principal mb-2">Página Inicial</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Conheça nossos serviços e áreas de atuação
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/">Ir para Home</Link>
                  </Button>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="bg-destaque/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Search className="w-6 h-6 text-destaque" />
                  </div>
                  <h3 className="font-bold text-principal mb-2">Áreas de Atuação</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Veja todos os nossos serviços jurídicos
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/areas-de-atuacao">Ver Serviços</Link>
                  </Button>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="bg-destaque/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-destaque" />
                  </div>
                  <h3 className="font-bold text-principal mb-2">Entre em Contato</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Fale diretamente com nossa equipe
                  </p>
                  <WhatsappButton className="w-full">
                    Falar no WhatsApp
                  </WhatsappButton>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-principal mb-4">
                  Nossos Principais Serviços
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <Link 
                    href="/servicos/familia/divorcio" 
                    className="text-destaque hover:underline"
                  >
                    Divórcio
                  </Link>
                  <Link 
                    href="/servicos/familia/guarda-de-filhos" 
                    className="text-destaque hover:underline"
                  >
                    Guarda de Filhos
                  </Link>
                  <Link 
                    href="/servicos/civil/elaboracao-revisao-contratos" 
                    className="text-destaque hover:underline"
                  >
                    Contratos
                  </Link>
                  <Link 
                    href="/servicos/consumidor/danos-morais-materiais" 
                    className="text-destaque hover:underline"
                  >
                    Danos Morais
                  </Link>
                  <Link 
                    href="/servicos/familia/inventario-e-heranca" 
                    className="text-destaque hover:underline"
                  >
                    Inventário
                  </Link>
                  <Link 
                    href="/servicos/imobiliario/regularizacao-imoveis" 
                    className="text-destaque hover:underline"
                  >
                    Imóveis
                  </Link>
                  <Link 
                    href="/servicos/consumidor/planos-saude-seguros" 
                    className="text-destaque hover:underline"
                  >
                    Planos de Saúde
                  </Link>
                  <Link 
                    href="/contato" 
                    className="text-destaque hover:underline"
                  >
                    Contato
                  </Link>
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
