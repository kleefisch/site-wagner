# Site Institucional - Dr. Wagner Souza

Site profissional do Dr. Wagner Souza, Advogado Criminalista. Desenvolvido com foco em presença digital, SEO otimizado e alta performance.

## 🚀 Tecnologias Utilizadas

- **Framework**: Next.js 14+ com App Router
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS v4.0
- **Componentes UI**: Shadcn UI
- **Ícones**: Lucide React
- **Formulários**: React Hook Form + Zod
- **Deploy**: Vercel

## 📋 Funcionalidades

- ✅ Header com navegação responsiva
- ✅ Hero Section otimizada para conversão
- ✅ Áreas de atuação destacadas
- ✅ Sobre o advogado
- ✅ Depoimentos de clientes
- ✅ FAQ com accordion
- ✅ Formulário de contato funcional
- ✅ Footer completo com links e informações
- ✅ Metadados otimizados para SEO
- ✅ HTML semântico
- ✅ Imagens otimizadas com Next.js
- ✅ Core Web Vitals otimizadas
- ✅ Design responsivo (mobile-first)

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Executar o projeto

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção localmente
npm start
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 14+)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globais
├── components/
│   ├── sections/          # Seções do site
│   │   ├── header.tsx
│   │   ├── hero-section.tsx
│   │   ├── practice-areas-section.tsx
│   │   ├── about-section.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── faq-section.tsx
│   │   ├── contact-section.tsx
│   │   └── footer.tsx
│   └── ui/               # Componentes Shadcn UI
└── lib/                  # Utilitários e configurações
```

## 🎨 Paleta de Cores

- **Primária**: Azul marinho (#101840)
- **Destaque**: Dourado (#B59037)
- **Secundária**: Cinza claro (#F8FAFC)
- **Background**: Branco (#FFFFFF)
- **Texto**: Cinza escuro (#1E1E1E)

## 📱 Design Responsivo

O site é totalmente responsivo com breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Customização

### Dados do Advogado

Edite os seguintes arquivos para personalizar:

- `src/components/sections/header.tsx` - Nome e navegação
- `src/components/sections/hero-section.tsx` - Texto principal
- `src/components/sections/about-section.tsx` - Informações profissionais
- `src/components/sections/contact-section.tsx` - Informações de contato

### Cores e Estilos

- `src/app/globals.css` - Variáveis CSS customizadas
- Componentes usam classes Tailwind CSS

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Conectar com GitHub e fazer deploy automático
# ou usar Vercel CLI
npx vercel
```

## 📞 Próximos Passos

1. **Substituir placeholders**: Trocar imagens e textos pelos reais
2. **Configurar domínio**: Garantir domínio personalizado
3. **Analytics**: Adicionar Google Analytics/Tag Manager
4. **Performance**: Otimizar ainda mais para Core Web Vitals

## 📄 Licença

Este projeto foi desenvolvido para o Dr. Wagner Souza.

---

💻 **Desenvolvido com Next.js e Tailwind CSS**
