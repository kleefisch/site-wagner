"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

interface NewsletterProps {
  title?: string;
  description?: string;
  placeholder?: string;
  className?: string;
}

export default function ArticleNewsletter({ 
  title = "Mantenha-se Atualizado",
  description = "Receba nossos artigos jurídicos diretamente em seu e-mail e fique por dentro das principais mudanças na legislação.",
  placeholder = "Seu melhor e-mail",
  className = ""
}: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Por favor, insira um e-mail válido.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Por favor, insira um e-mail válido.');
      return;
    }

    setStatus('loading');

    try {
      // Simular chamada de API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Em produção, aqui seria a chamada real para a API
      console.log('Inscrição no newsletter:', email);
      
      setStatus('success');
      setMessage('Obrigado! Você foi inscrito com sucesso em nossa newsletter.');
      setEmail('');
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
      
    } catch {
      setStatus('error');
      setMessage('Erro ao processar sua inscrição. Tente novamente.');
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  return (
    <div className={`${className}`}>
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-destaque/10 rounded-full mb-4">
          <Mail className="w-8 h-8 text-destaque" />
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-claro mb-4">
          {title}
        </h2>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="email"
              placeholder={placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading'}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-destaque focus:ring-2 focus:ring-destaque/20 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          <Button 
            type="submit"
            disabled={status === 'loading' || !email}
            className="bg-destaque hover:bg-destaque/90 text-white px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Inscrevendo...
              </>
            ) : (
              'Inscrever-se'
            )}
          </Button>
        </div>

        {/* Status Messages */}
        {message && (
          <div className={`mt-4 p-3 rounded-lg flex items-center gap-2 text-sm ${
            status === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {status === 'success' ? (
              <CheckCircle className="w-4 h-4 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
            )}
            <span>{message}</span>
          </div>
        )}

        <p className="text-sm text-gray-400 mt-4 text-center">
          Sem spam. Apenas conteúdo jurídico de qualidade. Cancele a qualquer momento.
        </p>
      </form>

      {/* Newsletter Benefits */}
      <div className="mt-8 max-w-2xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-destaque/20 rounded-full flex items-center justify-center mb-2">
              <span className="text-destaque font-bold text-sm">📚</span>
            </div>
            <p className="text-sm text-gray-300">Artigos exclusivos</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-destaque/20 rounded-full flex items-center justify-center mb-2">
              <span className="text-destaque font-bold text-sm">⚡</span>
            </div>
            <p className="text-sm text-gray-300">Atualizações jurídicas</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-destaque/20 rounded-full flex items-center justify-center mb-2">
              <span className="text-destaque font-bold text-sm">🎯</span>
            </div>
            <p className="text-sm text-gray-300">Dicas práticas</p>
          </div>
        </div>
      </div>

      {/* Privacy Note */}
      <div className="mt-6 max-w-lg mx-auto">
        <p className="text-xs text-gray-400 text-center leading-relaxed">
          Ao se inscrever, você concorda em receber e-mails da Advocacia Brennda Silva. 
          Seus dados são protegidos conforme nossa política de privacidade.
        </p>
      </div>
    </div>
  );
}
