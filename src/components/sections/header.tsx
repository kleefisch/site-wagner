"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { WhatsappButton } from "@/components/ui/whatsapp-button";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // desktop only
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null); // desktop only
  const [hoveredService, setHoveredService] = useState<string | null>(null); // desktop only
  const pathname = usePathname();

  // Função para verificar se estamos em uma página de serviços
  const isServicesPage = pathname.startsWith("/servicos");

  // Função para verificar qual categoria está ativa
  const getActiveCategory = () => {
    if (pathname.includes("/servicos/familia")) return "Família";
    if (pathname.includes("/servicos/consumidor")) return "Consumidor";
    if (pathname.includes("/servicos/civil")) return "Civil";
    if (pathname.includes("/servicos/imobiliario")) return "Imobiliário";
    return null;
  };

  const activeCategory = getActiveCategory();

  const navigation = [
    { name: "Início", href: "/" },
    { name: "A Advogada", href: "/a-advogada" },
    { name: "Áreas de Atuação", href: "/areas-de-atuacao" },
    {
      name: "Serviços",
      href: "#",
      submenu: [
        {
          category: "Família",
          href: "/areas-de-atuacao",
          items: [
            { name: "Divórcio", href: "/servicos/familia/divorcio" },
            {
              name: "Pensão Alimentícia",
              href: "/servicos/familia/pensao-alimenticia",
            },
            {
              name: "Guarda de Filhos",
              href: "/servicos/familia/guarda-de-filhos",
            },
            {
              name: "Inventário e Herança",
              href: "/servicos/familia/inventario-e-heranca",
            },
            { name: "Testamento", href: "/servicos/familia/testamento" },
            {
              name: "Planejamento Sucessório",
              href: "/servicos/familia/planejamento-sucessorio",
            },
            {
              name: "Interdição, Tutela e Curatela",
              href: "/servicos/familia/interdicao-tutela-curatela",
            },
            {
              name: "Pacto Antenupcial e Contratos",
              href: "/servicos/familia/pacto-antenupcial-contratos",
            },
            {
              name: "Reconhecimento de Paternidade",
              href: "/servicos/familia/reconhecimento-de-paternidade",
            },
          ],
        },
        {
          category: "Consumidor",
          href: "/areas-de-atuacao",
          items: [
            {
              name: "Cobranças Indevidas",
              href: "/servicos/consumidor/cobrancas-indevidas",
            },
            {
              name: "Danos Morais e Materiais",
              href: "/servicos/consumidor/danos-morais-materiais",
            },
            {
              name: "Telefonia, Internet e TV",
              href: "/servicos/consumidor/telefonia-internet-tv",
            },
            {
              name: "Vício de Produto",
              href: "/servicos/consumidor/vicio-de-produto",
            },
            {
              name: "Direito de Arrependimento",
              href: "/servicos/consumidor/direito-de-arrependimento",
            },
            {
              name: "Renegociação de Dívidas",
              href: "/servicos/consumidor/renegociacao-dividas",
            },
            {
              name: "Publicidade Enganosa",
              href: "/servicos/consumidor/publicidade-enganosa",
            },
            {
              name: "Turismo e Transporte",
              href: "/servicos/consumidor/turismo-transporte",
            },
            {
              name: "Garantia Legal e Trocas",
              href: "/servicos/consumidor/garantia-legal-trocas",
            },
            {
              name: "Ação Revisional de Juros",
              href: "/servicos/consumidor/acao-revisional-juros",
            },
            {
              name: "Planos de Saúde e Seguros",
              href: "/servicos/consumidor/planos-saude-seguros",
            },
            {
              name: "Fraudes Financeiras e Golpes Digitais",
              href: "/servicos/consumidor/fraudes-financeiras-golpes-digitais",
            },
          ],
        },
        {
          category: "Civil",
          href: "/areas-de-atuacao",
          items: [
            {
              name: "Elaboração e Revisão de Contratos",
              href: "/servicos/civil/elaboracao-revisao-contratos",
            },
            {
              name: "Consultoria e Pareceres Jurídicos",
              href: "/servicos/civil/consultoria-pareceres-juridicos",
            },
            {
              name: "Ações Indenizatórias",
              href: "/servicos/civil/acoes-indenizatorias",
            },
            {
              name: "Responsabilidade Civil",
              href: "/servicos/civil/responsabilidade-civil",
            },
            {
              name: "Assessoria em Sinistros",
              href: "/servicos/civil/assessoria-sinistros",
            },
            {
              name: "Cobrança e Execução de Dívidas",
              href: "/servicos/civil/cobranca-execucao-dividas",
            },
            {
              name: "Mediação e Arbitragem",
              href: "/servicos/civil/mediacao-arbitragem",
            },
          ],
        },
        {
          category: "Imobiliário",
          href: "/areas-de-atuacao",
          items: [
            {
              name: "Ações Possessórias",
              href: "/servicos/imobiliario/acoes-possessorias",
            },
            {
              name: "Compra e Venda de Imóveis",
              href: "/servicos/imobiliario/compra-venda-imoveis",
            },
            {
              name: "Locação de Imóveis",
              href: "/servicos/imobiliario/locacao-imoveis",
            },
            {
              name: "Lei do Inquilinato",
              href: "/servicos/imobiliario/lei-do-inquilinato",
            },
            {
              name: "Regularização de Imóveis",
              href: "/servicos/imobiliario/regularizacao-imoveis",
            },
            {
              name: "Questões Condominiais",
              href: "/servicos/imobiliario/questoes-condominiais",
            },
            { name: "Usucapião", href: "/servicos/imobiliario/usucapiao" },
            {
              name: "Ações de Despejo",
              href: "/servicos/imobiliario/acoes-despejo",
            },
            {
              name: "Contencioso Imobiliário",
              href: "/servicos/imobiliario/contencioso-imobiliario",
            },
            {
              name: "Assessoria em Loteamentos",
              href: "/servicos/imobiliario/assessoria-loteamentos",
            },
            {
              name: "Assessoria em Leilões",
              href: "/servicos/imobiliario/assessoria-leiloes",
            },
          ],
        },
      ],
    },
    { name: "Artigos", href: "/artigos" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-principal backdrop-blur-sm border-b border-gray-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 min-w-0">
            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#9A9162] rounded-md flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm sm:text-base">
                WS
              </span>
            </div>
            <div className="flex flex-row items-center min-w-0 whitespace-nowrap">
              <span className="text-sm sm:text-lg lg:text-xl font-semibold tracking-wide text-claro truncate">
                WAGNER SOUZA
              </span>
              <span className="text-destaque mx-1">|</span>
              <span className="text-xs sm:text-base lg:text-xl font-light tracking-wide text-gray-300 truncate">
                ADVOCACIA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div
                    className="relative group"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={`nav-link flex items-center space-x-1 transition-all duration-300 ${isServicesPage || isServicesOpen ? "text-destaque active" : "text-claro"}`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    {/* Dropdown Menu Principal */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 transition-all duration-200 ${isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                    >
                      {item.submenu.map((category) => (
                        <div
                          key={category.category}
                          className="relative group/category"
                          onMouseEnter={() =>
                            setHoveredCategory(category.category)
                          }
                          onMouseLeave={() => {
                            setHoveredCategory(null);
                            setHoveredService(null);
                          }}
                        >
                          <Link
                            href={category.href}
                            className={`flex items-center justify-between px-4 py-3 text-sm transition-colors duration-200 border-b border-gray-100 last:border-b-0 ${
                              activeCategory === category.category ||
                              hoveredCategory === category.category
                                ? "bg-secundario text-destaque font-bold"
                                : "text-principal hover:bg-secundario hover:text-destaque"
                            }`}
                          >
                            <span>
                              Direito{" "}
                              {category.category === "Consumidor"
                                ? "do"
                                : category.category === "Civil"
                                  ? ""
                                  : category.category === "Imobiliário"
                                    ? ""
                                    : "de"}{" "}
                              {category.category}
                            </span>
                            <ChevronDown className="h-4 w-4 -rotate-90" />
                          </Link>

                          {/* Submenu Lateral */}
                          <div
                            className={`absolute left-full top-0 ml-1 w-72 bg-white rounded-md shadow-lg border border-gray-200 py-2 transition-all duration-200 ${hoveredCategory === category.category ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`}
                          >
                            {category.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                                  pathname === subItem.href ||
                                  hoveredService === subItem.href
                                    ? "bg-secundario text-destaque font-bold"
                                    : "text-principal hover:bg-secundario hover:text-destaque"
                                }`}
                                onMouseEnter={() =>
                                  setHoveredService(subItem.href)
                                }
                                onMouseLeave={() => setHoveredService(null)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="nav-link text-claro transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <WhatsappButton size="lg" iconSize={28}>
              AGENDAR ATENDIMENTO
            </WhatsappButton>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-claro hover:text-destaque hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-destaque/30 bg-principal/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full text-claro font-medium px-2 py-2 focus:outline-none"
                        onClick={() =>
                          setIsServicesDropdownOpen((prev) => !prev)
                        }
                        aria-expanded={isServicesDropdownOpen}
                        aria-controls="servicos-dropdown"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`h-4 w-4 ml-2 transition-transform ${isServicesDropdownOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {/* Dropdown de Áreas (categorias) */}
                      {isServicesDropdownOpen && (
                        <div
                          id="servicos-dropdown"
                          className="ml-2 mt-1 space-y-1 max-h-64 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-destaque/40 scrollbar-track-transparent"
                        >
                          {item.submenu.map((category) => (
                            <div key={category.category}>
                              <button
                                className="flex items-center justify-between w-full text-xs font-bold text-destaque uppercase tracking-wider px-2 py-2 focus:outline-none bg-principal/80 rounded"
                                onClick={() =>
                                  setOpenCategory(
                                    openCategory === category.category
                                      ? null
                                      : category.category
                                  )
                                }
                                aria-expanded={
                                  openCategory === category.category
                                }
                                aria-controls={`servicos-categoria-${category.category}`}
                              >
                                <span>{category.category}</span>
                                <ChevronDown
                                  className={`h-4 w-4 ml-1 transition-transform ${openCategory === category.category ? "rotate-180" : ""}`}
                                />
                              </button>
                              {/* Dropdown de Serviços */}
                              {openCategory === category.category && (
                                <div
                                  id={`servicos-categoria-${category.category}`}
                                  className="ml-4 mt-1 space-y-1 max-h-48 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-destaque/30 scrollbar-track-transparent"
                                >
                                  {category.items.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="text-gray-200 hover:text-destaque transition-colors block px-4 py-1 text-sm rounded"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-claro hover:text-destaque transition-colors block px-2 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <WhatsappButton
                size="lg"
                iconSize={28}
                className="mx-2 mt-2 font-semibold"
              >
                AGENDAR ATENDIMENTO
              </WhatsappButton>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
