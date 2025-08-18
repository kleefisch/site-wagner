# Site de Advocacia - Dra. Brennda

Site profissional para advocacia especializada, construído como MVP (Minimum Viable Product) com foco em captação de clientes, SEO otimizado e performance.

## 🚀 Tecnologias Utilizadas

- **Framework**: Next.js 14+ com App Router
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS v4.0 
- **Componentes UI**: Shadcn UI
- **Ícones**: Lucide React
- **Formulários**: React Hook Form + Zod
- **CMS**: Sanity.io (para blog - futuro)
- **Deploy**: Vercel

## 📋 Funcionalidades

### Homepage Completa
- ✅ Header com navegação responsiva
- ✅ Hero Section otimizada para conversão
- ✅ Áreas de Atuação em grid
- ✅ Sobre a Advogada com destaques
- ✅ Depoimentos de clientes
- ✅ FAQ com accordion
- ✅ Formulário de contato funcional
- ✅ Footer completo com links e informações

### Páginas Adicionais (Futuro)
- 🔄 A Advogada (`/a-advogada`)
- 🔄 Áreas de Atuação (`/areas-de-atuacao`)
- 🔄 Serviços (4 subpáginas)
- 🔄 Blog/Artigos (`/artigos`)
- 🔄 Página de Contato independente (`/contato`)

### SEO e Performance
- ✅ Metadados otimizados
- ✅ HTML semântico
- ✅ Imagens otimizadas com Next.js
- ✅ Core Web Vitals otimizadas
- ✅ Responsivo (mobile-first)

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
│   ├── page.tsx           # Homepage
│   └── globals.css        # Estilos globais
├── components/
│   ├── sections/          # Seções da homepage
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

- **Primary**: Azul marinho profissional (#101840)
- **Accent**: Dourado elegante (#B59037)
- **Secondary**: Cinza claro (#F8FAFC)
- **Background**: Branco (#FFFFFF)
- **Text**: Cinza escuro (#1E1E1E)

## 📱 Design Responsivo

O site é totalmente responsivo com breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Customização

### Dados da Advogada
Edite os seguintes arquivos para personalizar:
- `src/components/sections/header.tsx` - Nome e navegação
- `src/components/sections/hero-section.tsx` - Texto principal
- `src/components/sections/about-section.tsx` - Informações pessoais
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

### Outras Plataformas
O projeto é compatível com:
- Netlify
- Railway
- DigitalOcean App Platform

## 📞 Próximos Passos

1. **Substituir placeholders**: Trocar imagens e textos placeholder pelos reais
2. **Configurar domínio**: Registrar domínio personalizado
3. **Implementar CMS**: Integrar Sanity.io para o blog
4. **Criar páginas adicionais**: Desenvolver páginas restantes
5. **Analytics**: Adicionar Google Analytics/Tag Manager
6. **Performance**: Otimizar ainda mais para Core Web Vitals

## 📄 Licença

Este projeto foi desenvolvido especificamente para a Dra. Brennda.

---

💻 **Desenvolvido com Next.js e Tailwind CSS**
