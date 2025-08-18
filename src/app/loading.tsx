import { Scale } from 'lucide-react';

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-principal flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-6">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-destaque/30 border-t-destaque mx-auto"></div>
          <Scale className="w-8 h-8 text-destaque absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <h2 className="text-xl font-semibold text-claro mb-2">
          Carregando...
        </h2>
        <p className="text-gray-300">
          Preparando o conteúdo para você
        </p>
      </div>
    </div>
  );
}
