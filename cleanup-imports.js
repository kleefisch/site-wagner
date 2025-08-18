const fs = require('fs');
const path = require('path');

// Lista dos arquivos que precisam de limpeza baseado nos warnings do build
const filesToClean = [
  'src/app/areas-de-atuacao/page.tsx',
  'src/app/servicos/consumidor/cobrancas-indevidas/page.tsx',
  'src/app/servicos/consumidor/danos-morais-materiais/page.tsx',
  'src/app/servicos/consumidor/direito-de-arrependimento/page.tsx',
  'src/app/servicos/consumidor/fraudes-financeiras-golpes-digitais/page.tsx',
  'src/app/servicos/consumidor/garantia-legal-trocas/page.tsx',
  'src/app/servicos/consumidor/planos-saude-seguros/page.tsx',
  'src/app/servicos/consumidor/publicidade-enganosa/page.tsx',
  'src/app/servicos/consumidor/renegociacao-dividas/page.tsx',
  'src/app/servicos/consumidor/telefonia-internet-tv/page.tsx',
  'src/app/servicos/consumidor/turismo-transporte/page.tsx',
  'src/app/servicos/consumidor/vicio-de-produto/page.tsx',
  'src/app/servicos/familia/divorcio/page.tsx',
  'src/app/servicos/familia/pensao-alimenticia/page.tsx',
  'src/app/servicos/familia/reconhecimento-de-paternidade/page.tsx',
  'src/app/servicos/imobiliario/lei-do-inquilinato/page.tsx'
];

// Mapeamento de imports não utilizados por arquivo
const unusedImports = {
  'src/app/areas-de-atuacao/page.tsx': ['CreditCard'],
  'src/app/servicos/consumidor/cobrancas-indevidas/page.tsx': ['Calendar'],
  'src/app/servicos/consumidor/danos-morais-materiais/page.tsx': ['Calendar'],
  'src/app/servicos/consumidor/direito-de-arrependimento/page.tsx': ['Calendar'],
  'src/app/servicos/consumidor/fraudes-financeiras-golpes-digitais/page.tsx': ['Calendar', 'Users'],
  'src/app/servicos/consumidor/garantia-legal-trocas/page.tsx': ['Calendar', 'RefreshCcw'],
  'src/app/servicos/consumidor/planos-saude-seguros/page.tsx': ['Calendar', 'HeartPulse'],
  'src/app/servicos/consumidor/publicidade-enganosa/page.tsx': ['Calendar'],
  'src/app/servicos/consumidor/renegociacao-dividas/page.tsx': ['Calendar'],
  'src/app/servicos/consumidor/telefonia-internet-tv/page.tsx': ['Calendar'],
  'src/app/servicos/consumidor/turismo-transporte/page.tsx': ['Calendar', 'Bus'],
  'src/app/servicos/consumidor/vicio-de-produto/page.tsx': ['Calendar'],
  'src/app/servicos/familia/divorcio/page.tsx': ['Clock', 'Shield', 'Phone'],
  'src/app/servicos/familia/pensao-alimenticia/page.tsx': ['Clock', 'Shield', 'Phone'],
  'src/app/servicos/familia/reconhecimento-de-paternidade/page.tsx': ['Calendar'],
  'src/app/servicos/imobiliario/lei-do-inquilinato/page.tsx': ['Users']
};

function cleanImportsInFile(filePath, importsToRemove) {
  const fullPath = path.join(__dirname, filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`Arquivo não encontrado: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf-8');
  
  // Para cada import não utilizado, remove da linha de import
  importsToRemove.forEach(importName => {
    // Remove import individual (ex: , Calendar)
    content = content.replace(new RegExp(`,\\s*${importName}`, 'g'), '');
    // Remove import no início (ex: Calendar, )
    content = content.replace(new RegExp(`${importName},\\s*`, 'g'), '');
    // Remove import isolado (ex: { Calendar })
    content = content.replace(new RegExp(`{\\s*${importName}\\s*}`, 'g'), '{}');
    // Remove import único na linha
    content = content.replace(new RegExp(`\\s*${importName}\\s*`, 'g'), ' ');
  });
  
  // Limpa imports vazios
  content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];\s*/g, '');
  
  fs.writeFileSync(fullPath, content, 'utf-8');
  console.log(`✓ Limpo: ${filePath}`);
}

// Executa a limpeza
filesToClean.forEach(file => {
  const importsToRemove = unusedImports[file];
  if (importsToRemove) {
    cleanImportsInFile(file, importsToRemove);
  }
});

console.log('Limpeza de imports concluída!');
