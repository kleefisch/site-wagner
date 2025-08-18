const fs = require('fs');
const glob = require('glob');

// Padrão para o terceiro botão - CTA Final
const ctaPattern = /<Button size="lg" asChild className="bg-destaque hover:bg-destaque\/90 text-claro">\s*<Link href="\/contato" className="flex items-center gap-2">\s*<img src="\/icons\/icon-whatsapp\.svg"[^>]*>\s*<span className="uppercase">INICIAR ATENDIMENTO<\/span>\s*<\/Link>\s*<\/Button>/g;

const ctaReplacement = `<WhatsappButton size="lg" className="bg-destaque hover:bg-destaque/90 text-claro">
                  <span className="uppercase">INICIAR ATENDIMENTO</span>
                </WhatsappButton>`;

const servicePages = glob.sync('src/app/servicos/**/page.tsx');

console.log(`Processando CTA Final em ${servicePages.length} páginas...\n`);

servicePages.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (ctaPattern.test(content)) {
      content = content.replace(ctaPattern, ctaReplacement);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ CTA Final atualizado em: ${filePath.split('/').pop()}`);
    }
  } catch (error) {
    console.error(`✗ Erro em ${filePath}:`, error.message);
  }
});

console.log('\n🎉 CTA Final processado!');
