"use client";
import Link from "next/link";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Clover,
} from "lucide-react";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Início", href: "#hero" },
    { name: "O Advogado", href: "#about-section" },
    { name: "Áreas de Atuação", href: "#practice-areas" },
    { name: "Serviços", href: "#practice-areas" },
    { name: "Contato", href: "#contact" },
  ];

  const services = [
    { name: "Crimes Contra a Pessoa", href: "#practice-areas" },
    { name: "Crimes Contra o Patrimônio", href: "#practice-areas" },
    { name: "Lei de Drogas", href: "#practice-areas" },
    { name: "Audiências e Julgamentos", href: "#practice-areas" },
    { name: "Violência Doméstica", href: "#practice-areas" },
  ];

  // Removido: modal e legalLinks

  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com", icon: Instagram },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  ];

  return (
    <footer className="bg-principal text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 lg:gap-12">
          {/* Brand & Contact */}
          <div className="flex flex-col col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6 w-fit">
              <div className="w-10 h-10 bg-[#9A9162] rounded-md flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-base">WS</span>
              </div>
              <div className="flex flex-row items-center min-w-0 whitespace-nowrap">
                <span className="text-lg sm:text-xl font-semibold tracking-wide text-claro truncate">
                  WAGNER SOUZA
                </span>
                <span className="text-destaque mx-1">|</span>
                <span className="text-lg sm:text-xl font-light tracking-wide text-gray-300 truncate">
                  ADVOCACIA
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base max-w-[280px] lg:max-w-[320px]">
              Advocacia criminal especializada com mais de 5 anos de experiência,
              oferecendo soluções jurídicas personalizadas e eficazes.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-destaque flex-shrink-0 mt-0.5" />
                <span className="text-sm break-words">
                  Av Eng. Atílio Correia lima, Qd 108 Lt 11
                  <br />
                  Cidade Jardim, Goiânia - GO
                  <br />
                  74425-030
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-destaque flex-shrink-0" />
                <a
                  href="tel:62996421788"
                  className="text-sm text-gray-300 hover:text-destaque focus:text-destaque active:text-destaque transition-colors outline-none"
                  aria-label="Ligar para (62) 99642-1788"
                >
                  (62) 99642-1788
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-destaque flex-shrink-0 mt-0.5" />
                <span className="text-sm break-all">
                  wagnersouza@advocacia.com.br
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-destaque flex-shrink-0" />
                <span className="text-sm">Plantão 24 horas</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-claro mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-destaque transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-claro mb-6">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-destaque transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-claro mb-6">Conecte-se</h3>
            <p className="text-gray-400 text-sm mb-4">
              Siga-nos nas redes sociais para dicas jurídicas e novidades.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-principal/60 rounded-lg flex items-center justify-center hover:bg-destaque hover:text-principal transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            {/* CTA */}
            <div className="bg-principal/60 backdrop-blur-sm border border-destaque/20 p-4 rounded-lg">
              <h4 className="font-semibold text-claro mb-2 text-sm sm:text-base">
                Consulta Jurídica
              </h4>
              <p className="text-gray-400 text-sm mb-3">
                Agende sua consulta jurídica hoje mesmo.
              </p>
              <WhatsappButton
                size="default"
                iconSize={28}
                className="w-full text-center py-2 px-4 rounded font-medium text-sm"
              >
                Agendar Agora
              </WhatsappButton>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-destaque/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} Dr. Wagner Souza Advocacia. Todos os direitos
              reservados.
            </div>

            {/* KleeLabs Credit */}
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>Desenvolvido por</span>
              <a
                href="https://kleelabs.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-white transition-colors group"
              >
                <Clover className="h-4 w-4 group-hover:text-green-400 transition-colors" />
                <span className="font-medium whitespace-nowrap">
                  <span className="group-hover:text-green-400 transition-colors">
                    Klee
                  </span>
                  <span className="group-hover:text-white transition-colors">
                    Labs
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* OAB Info */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500 px-2">
              Dr. Wagner Souza - OAB/GO 59.075 | Este site está em conformidade
              com o Código de Ética da OAB
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
