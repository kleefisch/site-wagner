const fs = require('fs');
const path = require('path');

// Função para extrair informações da página
function extractPageInfo(content) {
  // Extrair título do metadata
  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  const title = titleMatch ? titleMatch[1].split(' - ')[0] : '';
  
  // Extrair descrição do metadata
  const descMatch = content.match(/description:\s*"([^"]+)"/);
  const description = descMatch ? descMatch[1] : '';
  
  // Extrair categoria do hero section
  const categoryMatch = content.match(/<div[^>]*className="[^"]*inline-flex[^"]*"[^>]*>\s*<[^>]+>\s*([^<]+)/);
  const category = categoryMatch ? categoryMatch[1].trim() : '';
  
  // Extrair título H1
  const h1Match = content.match(/<h1[^>]*>[^<]*<[^>]*>[^<]*<\/[^>]*>\s*([^<]+)/);
  const pageTitle = h1Match ? h1Match[1].trim() : title;
  
  // Extrair descrição do hero
  const heroDescMatch = content.match(/<p[^>]*text-xl[^>]*>([^<]+)/);
  const heroDescription = heroDescMatch ? heroDescMatch[1].trim() : description;
  
  return {
    title: pageTitle,
    category,
    description: heroDescription,
    originalTitle: title,
    originalDescription: description
  };
}

// Função para determinar o ícone da categoria
function getCategoryIcon(category) {
  const iconMap = {
    'Direito de Família': '<Users className="w-4 h-4" />',
    'Direito Civil': '<Scale className="w-4 h-4" />',
    'Direito do Consumidor': '<Shield className="w-4 h-4" />',
    'Direito Imobiliário': '<Home className="w-4 h-4" />',
    'Direito Empresarial': '<Building className="w-4 h-4" />',
    'Direito Trabalhista': '<Briefcase className="w-4 h-4" />'
  };
  
  return iconMap[category] || '<FileText className="w-4 h-4" />';
}

// Função para extrair seções específicas do conteúdo
function extractSections(content) {
  const sections = [];
  
  // Procurar por seções principais (entre comentários HTML)
  const sectionRegex = /\/\*\s*([^*]+)\s*\*\/\s*<section[^>]*>([\s\S]*?)<\/section>/g;
  let match;
  
  while ((match = sectionRegex.exec(content)) !== null) {
    const sectionName = match[1].trim();
    const sectionContent = match[2];
    
    if (!sectionName.includes('Hero') && !sectionName.includes('CTA')) {
      sections.push({
        name: sectionName,
        content: sectionContent
      });
    }
  }
  
  return sections;
}

// Função para gerar o template convertido
function generateTemplateCode(pageInfo, originalContent) {
  const { title, category, description } = pageInfo;
  const categoryIcon = getCategoryIcon(category);
  
  // Extrair metadata
  const metadataMatch = originalContent.match(/export const metadata[^}]+}/s);
  const metadata = metadataMatch ? metadataMatch[0] : '';
  
  // Extrair imports de ícones
  const iconImports = originalContent.match(/import\s+{[^}]+}\s+from\s+"lucide-react";/);
  const icons = iconImports ? iconImports[0] : '';
  
  // Extrair conteúdo customizado (seções específicas)
  const customSections = extractCustomContent(originalContent);
  
  return `import ServicePageTemplate, { 
  ServiceSection, 
  ProcessSection, 
  WhyChooseSection, 
  FAQSection 
} from "@/components/sections/service-page-template";
${icons}
import { Metadata } from "next";

${metadata}

export default function ${toCamelCase(title)}Page() {
  const processSteps = [
    // TODO: Extrair e adaptar steps específicos
  ];

  const whyChooseItems = [
    // TODO: Extrair e adaptar items específicos
  ];

  const faqItems = [
    // TODO: Extrair e adaptar FAQs específicos
  ];

  return (
    <ServicePageTemplate
      title="${title}"
      category="${category}"
      categoryIcon={${categoryIcon}}
      description="${description}"
    >
      ${customSections}

      <ProcessSection steps={processSteps} />
      <FAQSection items={faqItems} />
      <WhyChooseSection items={whyChooseItems} />
    </ServicePageTemplate>
  );
}`;
}

function toCamelCase(str) {
  return str.replace(/\s+(.)/g, (match, letter) => letter.toUpperCase()).replace(/\s/g, '');
}

function extractCustomContent(content) {
  // Extrair seções customizadas (não hero, não CTA, não processo padrão)
  const sections = [];
  const sectionRegex = /\/\*\s*([^*]+)\s*\*\/\s*<section[^>]*>([\s\S]*?)<\/section>/g;
  let match;
  
  while ((match = sectionRegex.exec(content)) !== null) {
    const sectionName = match[1].trim();
    const sectionContent = match[0]; // Conteúdo completo da seção
    
    if (!sectionName.includes('Hero') && 
        !sectionName.includes('CTA') &&
        !sectionName.includes('Como Funciona') &&
        !sectionName.includes('Por Que')) {
      sections.push(sectionContent);
    }
  }
  
  return sections.join('\n\n      ');
}

module.exports = {
  extractPageInfo,
  generateTemplateCode,
  extractSections
};
