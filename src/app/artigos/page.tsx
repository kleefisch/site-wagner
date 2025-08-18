
import { Metadata } from 'next';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Construction } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Artigos - Em Construção - Advocacia Brennda Silva',
  description: 'Nossa seção de artigos está em construção. Em breve você terá acesso a conteúdos jurídicos especializados.',
};

export default function ArtigosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center bg-secundario px-4">
        <section className="text-center">
          <Construction className="w-20 h-20 text-destaque mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold text-principal mb-4">Página de Artigos em Construção</h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
            Em breve você terá acesso a conteúdos jurídicos exclusivos sobre Direito de Família, Civil, do Consumidor e Imobiliário.<br /><br />
            Estamos preparando uma biblioteca de artigos para você se informar e tirar dúvidas!
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

