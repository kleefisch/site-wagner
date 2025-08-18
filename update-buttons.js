const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Função para encontrar arquivos
const findServicePages = () => {
  return glob.sync('src/app/servicos/**/page.tsx');
};

// Padrões de substituição
const replacements = [
  // Padrão 1: Botão Hero com "INICIAR ATENDIMENTO"
  {
    pattern: /<Button size="lg" asChild className="bg-destaque hover:bg-destaque\/90 text-claro">\s*<Link href="\/contato" className="flex items-center gap-2">\s*<img src="\/icons\/icon-whatsapp\.svg"[^>]*>\s*<span className="uppercase">INICIAR ATENDIMENTO<\/span>\s*<\/Link>\s*<\/Button>/g,
    replacement: `<WhatsappButton size="lg" className="bg-destaque hover:bg-destaque/90 text-claro">
                  <span className="uppercase">INICIAR ATENDIMENTO</span>
                </WhatsappButton>`
  },
  // Padrão 2: Botão da seção "Por que" com "Iniciar Atendimento"
  {
    pattern: /<Button asChild className="w-full bg-principal hover:bg-principal\/90 text-claro text-base">\s*<Link[^>]*href="\/contato"[^>]*>\s*<img src="\/icons\/icon-whatsapp\.svg"[^>]*>\s*Iniciar Atendimento\s*<\/Link>\s*<\/Button>/g,
    replacement: `<WhatsappButton className="w-full bg-principal hover:bg-principal/90 text-claro text-base">
                      Iniciar Atendimento
                    </WhatsappButton>`
  },
  // Padrão 3: Botão CTA Final com "INICIAR ATENDIMENTO"
  {
    pattern: /<Button size="lg" asChild className="bg-destaque hover:bg-destaque\/90 text-claro">\s*<Link href="\/contato" className="flex items-center gap-2">\s*<img src="\/icons\/icon-whatsapp\.svg"[^>]*>\s*<span className="uppercase">INICIAR ATENDIMENTO<\/span>\s*<\/Link>\s*<\/Button>/g,
    replacement: `<WhatsappButton size="lg" className="bg-destaque hover:bg-destaque/90 text-claro">
                  <span className="uppercase">INICIAR ATENDIMENTO</span>
                </WhatsappButton>`
  }
];

const processFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Aplicar todas as substituições
    replacements.forEach((replacement, index) => {
      if (replacement.pattern.test(content)) {
        content = content.replace(replacement.pattern, replacement.replacement);
        modified = true;
        console.log(`  ✓ Padrão ${index + 1} encontrado e substituído`);
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ ${path.basename(filePath)} - Atualizado`);
    } else {
      console.log(`- ${path.basename(filePath)} - Nenhuma alteração necessária`);
    }
    
  } catch (error) {
    console.error(`✗ Erro ao processar ${filePath}:`, error.message);
  }
};

// Processar todos os arquivos
const servicePages = findServicePages();
console.log(`Encontradas ${servicePages.length} páginas de serviços\n`);

servicePages.forEach(processFile);

console.log('\n🎉 Processamento concluído!');
