# Script simples para adicionar imports do WhatsappButton
$servicePages = Get-ChildItem -Path "src/app/servicos" -Recurse -Filter "page.tsx"

Write-Host "Encontradas $($servicePages.Count) páginas de serviços"

foreach ($page in $servicePages) {
    $content = Get-Content -Path $page.FullName -Raw -Encoding UTF8
    
    if ($content -notmatch 'WhatsappButton') {
        $newContent = $content -replace 'import \{ Button \} from "@/components/ui/button";', 'import { Button } from "@/components/ui/button";
import { WhatsappButton } from "@/components/ui/whatsapp-button";'
        
        Set-Content -Path $page.FullName -Value $newContent -Encoding UTF8
        Write-Host "Atualizado: $($page.Name)"
    }
}

Write-Host "Concluído!"
