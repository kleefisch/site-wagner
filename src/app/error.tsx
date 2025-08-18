'use client';

import { useEffect } from 'react';
import { Metadata } from 'next';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { WhatsappButton } from '@/components/ui/whatsapp-button';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log do erro para monitoramento
    console.error(error);
  }, [error]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-secundario">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="w-10 h-10 text-red-600" />
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                  Oops! Algo deu errado
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Encontramos um erro inesperado. Nossa equipe foi notificada e está trabalhando para resolver. 
                  Tente novamente ou entre em contato conosco.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  onClick={reset}
                  size="lg"
                  className="bg-destaque hover:bg-destaque/90 text-white"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Tentar Novamente
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/">
                    <Home className="w-5 h-5 mr-2" />
                    Voltar ao Início
                  </Link>
                </Button>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-principal mb-4">
                  Precisa de Ajuda Jurídica?
                </h2>
                <p className="text-gray-600 mb-6">
                  Enquanto resolvemos esse problema técnico, você pode entrar em contato diretamente conosco.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <WhatsappButton size="lg">
                    Falar no WhatsApp
                  </WhatsappButton>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/contato">Outras Formas de Contato</Link>
                  </Button>
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
