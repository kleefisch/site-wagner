# Script para atualizar botões do WhatsApp nas páginas de serviços
# Busca todas as páginas de serviços
$servicePages = Get-ChildItem -Path "src/app/servicos" -Recurse -Filter "page.tsx"

Write-Host "Encontradas $($servicePages.Count) páginas de serviços para atualizar..."

foreach ($page in $servicePages) {
    Write-Host "Processando: $($page.FullName)"
    
    try {
        # Lê o conteúdo do arquivo
        $content = Get-Content -Path $page.FullName -Raw -Encoding UTF8
        
        # Verifica se já tem o import do WhatsappButton
        if ($content -notmatch 'WhatsappButton') {
            # Adiciona o import do WhatsappButton
            $content = $content -replace 'import \{ Button \} from "@/components/ui/button";', 'import { Button } from "@/components/ui/button";
import { WhatsappButton } from "@/components/ui/whatsapp-button";'
            
            # Salva o arquivo atualizado
            $content | Set-Content -Path $page.FullName -Encoding UTF8
            Write-Host "  ✓ Import adicionado e arquivo salvo"
        } else {
            Write-Host "  - Já possui WhatsappButton, pulando..."
        }
    }
    catch {
        Write-Host "  ✗ Erro ao processar: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`nProcessamento concluído!" -ForegroundColor Green
