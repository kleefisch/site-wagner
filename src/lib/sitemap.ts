import { SITE_CONFIG } from './constants';

export interface SitemapUrl {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const sitemapUrls: SitemapUrl[] = [
  // Página inicial
  {
    url: SITE_CONFIG.url,
    changeFrequency: 'weekly',
    priority: 1.0,
  },
  // Páginas principais
  {
    url: `${SITE_CONFIG.url}/a-advogada`,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${SITE_CONFIG.url}/areas-de-atuacao`,
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${SITE_CONFIG.url}/contato`,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${SITE_CONFIG.url}/artigos`,
    changeFrequency: 'weekly',
    priority: 0.7,
  },
  // Serviços - Família
  {
    url: `${SITE_CONFIG.url}/servicos/familia/divorcio`,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${SITE_CONFIG.url}/servicos/familia/guarda-de-filhos`,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${SITE_CONFIG.url}/servicos/familia/pensao-alimenticia`,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${SITE_CONFIG.url}/servicos/familia/inventario-e-heranca`,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${SITE_CONFIG.url}/servicos/familia/planejamento-sucessorio`,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${SITE_CONFIG.url}/servicos/familia/interdicao-tutela-curatela`,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${SITE_CONFIG.url}/servicos/familia/pacto-antenupcial-contratos`,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  // Serviços - Civil
  {
    url: `${SITE_CONFIG.url}/servicos/civil/elaboracao-revisao-contratos`,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${SITE_CONFIG.url}/servicos/civil/consultoria-pareceres-juridicos`,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${SITE_CONFIG.url}/servicos/civil/acoes-indenizatorias`,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${SITE_CONFIG.url}/servicos/civil/responsabilidade-civil`,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${SITE_CONFIG.url}/servicos/civil/mediacao-arbitragem`,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${SITE_CONFIG.url}/servicos/civil/assessoria-sinistros`,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  // Serviços - Consumidor
  {
    url: `${SITE_CONFIG.url}/servicos/consumidor/danos-morais-materiais`,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${SITE_CONFIG.url}/servicos/consumidor/telefonia-internet-tv`,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${SITE_CONFIG.url}/servicos/consumidor/planos-saude-seguros`,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${SITE_CONFIG.url}/servicos/consumidor/turismo-transporte`,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${SITE_CONFIG.url}/servicos/consumidor/acao-revisional-juros`,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  // Serviços - Imobiliário
  {
    url: `${SITE_CONFIG.url}/servicos/imobiliario/locacao-imoveis`,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${SITE_CONFIG.url}/servicos/imobiliario/regularizacao-imoveis`,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${SITE_CONFIG.url}/servicos/imobiliario/usucapiao`,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${SITE_CONFIG.url}/servicos/imobiliario/acoes-possessorias`,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${SITE_CONFIG.url}/servicos/imobiliario/compra-venda-imoveis`,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
];

export function generateSitemap(): string {
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(({ url, lastModified, changeFrequency, priority }) => {
    return `  <url>
    <loc>${url}</loc>
    ${lastModified ? `<lastmod>${new Date(lastModified).toISOString()}</lastmod>` : ''}
    ${changeFrequency ? `<changefreq>${changeFrequency}</changefreq>` : ''}
    ${priority ? `<priority>${priority}</priority>` : ''}
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return sitemapXml;
}
