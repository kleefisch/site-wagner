"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useRef } from "react";
import { WhatsappButton } from "@/components/ui/whatsapp-button";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuAnim, setMenuAnim] = useState<"in" | "out">("in");
  const menuTimeout = useRef<NodeJS.Timeout | null>(null);
  const [activeSection, setActiveSection] = useState<string>("/");
  const pathname = usePathname();

  // Hook para detectar qual seção está ativa baseado no scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "about-section", href: "#about-section" },
        { id: "practice-areas", href: "#practice-areas" },
        { id: "contact", href: "#contact" },
      ];

      const scrollPosition = window.scrollY + 100; // offset para header fixo

      // Se estiver no topo da página, marcar como início
      if (scrollPosition < 200) {
        setActiveSection("/");
        return;
      }

      // Verificar qual seção está visível
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.href);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Executar uma vez no mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Início", href: "/" },
    { name: "O Advogado", href: "#about-section" },
    { name: "Áreas de Atuação", href: "#practice-areas" },
    { name: "Serviços", href: "#practice-areas" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header className="fixed md:sticky top-0 z-50 w-full bg-principal backdrop-blur-sm border-b border-gray-600">
      <div className="container mx-auto pl-4 sm:pl-6 lg:pl-8 pr-2 sm:pr-2 lg:pr-8">
        <div className="flex items-center justify-between h-14 sm:h-16 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 min-w-0">
            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#9A9162] rounded-md flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm sm:text-base">
                WS
              </span>
            </div>
            <div className="flex flex-row items-center min-w-0 whitespace-nowrap">
              <span className="text-base sm:text-xl lg:text-xl font-semibold tracking-wide text-claro truncate">
                WAGNER SOUZA
              </span>
              <span className="text-destaque mx-1">|</span>
              <span className="text-base sm:text-lg lg:text-xl font-light tracking-wide text-gray-300 truncate">
                ADVOCACIA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link text-claro transition-all duration-300${activeSection === item.href ? " text-destaque active" : ""}`}
              >
                {item.name}
              </Link>
            ))}
            <WhatsappButton size="lg" iconSize={28}>
              INICIAR ATENDIMENTO
            </WhatsappButton>
          </nav>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-claro hover:text-destaque hover:bg-white/10 absolute -right-4 top-1/2 -translate-y-1/2 z-50"
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
        {isMenuOpen || menuAnim === "out" ? (
          <>
            <nav
              className={`md:hidden py-4 border-t border-destaque/30 bg-principal/95 backdrop-blur-sm ${menuAnim === "in" ? "animate-menu-in" : "animate-menu-out"}`}
              onAnimationEnd={() => {
                if (menuAnim === "out") {
                  setMenuAnim("in");
                  setIsMenuOpen(false);
                }
              }}
            >
              <div className="flex flex-col space-y-2 items-center text-center">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`transition-colors block px-2 py-2${activeSection === item.href ? " text-destaque" : " text-claro hover:text-destaque"}`}
                    onClick={() => {
                      setMenuAnim("out");
                      if (menuTimeout.current)
                        clearTimeout(menuTimeout.current);
                      menuTimeout.current = setTimeout(() => {
                        setIsMenuOpen(false);
                      }, 350);
                    }}
                  >
                    {item.name}
                  </Link>
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
            <style jsx>{`
              @keyframes menu-in {
                0% {
                  opacity: 0;
                  transform: translateY(-24px) scale(0.98);
                }
                100% {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
              }
              @keyframes menu-out {
                0% {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
                100% {
                  opacity: 0;
                  transform: translateY(-24px) scale(0.98);
                }
              }
              .animate-menu-in {
                animation: menu-in 0.35s cubic-bezier(0.4, 0, 0.2, 1);
              }
              .animate-menu-out {
                animation: menu-out 0.35s cubic-bezier(0.4, 0, 0.2, 1);
              }
            `}</style>
          </>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
