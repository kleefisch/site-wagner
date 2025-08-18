import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Gera structured data para breadcrumbs
  const generateBreadcrumbStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://brennda-advocacia.vercel.app'}${item.href}`
      }))
    };
  };

  if (items.length === 0) return null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbStructuredData())
        }}
      />
      
      <nav 
        aria-label="Breadcrumb" 
        className={`flex items-center space-x-2 text-sm text-gray-600 ${className}`}
      >
        <Link 
          href="/"
          className="flex items-center hover:text-destaque transition-colors"
          aria-label="Página inicial"
        >
          <Home className="w-4 h-4" />
          <span className="sr-only">Início</span>
        </Link>
        
        {items.map((item, index) => (
          <div key={item.href} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400 mx-2" aria-hidden="true" />
            
            {index === items.length - 1 ? (
              // Último item (página atual) - não é link
              <span 
                className="text-principal font-medium"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              // Itens intermediários - são links
              <Link 
                href={item.href}
                className="hover:text-destaque transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}

// Hook para gerar breadcrumbs automaticamente baseado na URL
export function useBreadcrumbs(customItems?: BreadcrumbItem[]) {
  if (typeof window === 'undefined') {
    return { breadcrumbs: customItems || [] };
  }

  const pathname = window.location.pathname;
  
  if (customItems) {
    return { breadcrumbs: customItems };
  }

  // Gera breadcrumbs automaticamente baseado na URL
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];

  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Mapeia segmentos para labels legíveis
    const labelMap: Record<string, string> = {
      'servicos': 'Serviços',
      'familia': 'Direito de Família',
      'civil': 'Direito Civil',
      'consumidor': 'Direito do Consumidor',
      'imobiliario': 'Direito Imobiliário',
      'areas-de-atuacao': 'Áreas de Atuação',
      'a-advogada': 'A Advogada',
      'contato': 'Contato',
      'artigos': 'Artigos',
      'divorcio': 'Divórcio',
      'guarda-de-filhos': 'Guarda de Filhos',
      'inventario-e-heranca': 'Inventário e Herança',
      'pensao-alimenticia': 'Pensão Alimentícia',
      'elaboracao-revisao-contratos': 'Elaboração e Revisão de Contratos',
      'danos-morais-materiais': 'Danos Morais e Materiais',
      'regularizacao-imoveis': 'Regularização de Imóveis'
    };

    const label = labelMap[segment] || segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    breadcrumbs.push({
      label,
      href: currentPath
    });
  });

  return { breadcrumbs };
}

// Componente de breadcrumbs específico para páginas de serviço
interface ServiceBreadcrumbsProps {
  category: 'familia' | 'civil' | 'consumidor' | 'imobiliario';
  serviceName: string;
  className?: string;
}

export function ServiceBreadcrumbs({ 
  category, 
  serviceName, 
  className 
}: ServiceBreadcrumbsProps) {
  const categoryNames = {
    familia: 'Direito de Família',
    civil: 'Direito Civil', 
    consumidor: 'Direito do Consumidor',
    imobiliario: 'Direito Imobiliário'
  };

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Áreas de Atuação', href: '/areas-de-atuacao' },
    { label: categoryNames[category], href: `/servicos/${category}` },
    { label: serviceName, href: window.location.pathname }
  ];

  return <Breadcrumbs items={breadcrumbItems} className={className} />;
}

export default Breadcrumbs;
