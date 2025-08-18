"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Users,
  FileText,
  ShieldCheck,
  Home,
  RotateCcw,
  Target,
  DollarSign,
  Cannabis,
  Briefcase,
  Building,
  Gavel,
  HeartCrack,
  Zap,
  Phone,
  Clock,
} from "lucide-react";
import { WhatsappButton } from "@/components/ui/whatsapp-button";
// importação removida, usando SVG estático

const practiceAreas = [
  {
    icon: Users,
    title: "Crimes Contra a Pessoa",
    description:
      "Defesa em crimes que atentam contra a integridade física e psicológica, como homicídio, lesão corporal e sequestro.",
    detailedServices: [
      "Homicídio e Tentativa",
      "Lesão Corporal",
      "Ameaça e Constrangimento Ilegal",
      "Sequestro e Cárcere Privado",
    ],
    href: "/areas-de-atuacao#crimes-contra-a-pessoa",
  },
  {
    icon: DollarSign,
    title: "Crimes Contra o Patrimônio",
    description:
      "Atuação em casos de furto, roubo, estelionato, extorsão e outros crimes que envolvem bens materiais e financeiros.",
    detailedServices: [
      "Furto e Roubo",
      "Estelionato e Fraudes",
      "Apropriação Indébita",
      "Extorsão",
    ],
    href: "/areas-de-atuacao#crimes-contra-o-patrimonio",
  },
  {
    icon: Cannabis,
    title: "Lei de Drogas",
    description:
      "Defesa em processos relacionados à Lei de Drogas, incluindo tráfico, posse e associação para o tráfico.",
    detailedServices: [
      "Tráfico de Drogas",
      "Posse Para Consumo Pessoal",
      "Associação Para o Tráfico",
      "Defesa em Crimes Conexos",
    ],
    href: "/areas-de-atuacao#lei-de-drogas",
  },
  {
    icon: Briefcase,
    title: "Audiências e Julgamentos",
    description:
      "Representação técnica em audiências, julgamentos, recursos e acompanhamento processual completo.",
    detailedServices: [
      "Representação em Audiências",
      "Defesa técnica em Julgamentos",
      "Recursos e Apelações",
      "Acompanhamento Processual Completo",
    ],
    href: "/areas-de-atuacao#audiencias-e-julgamentos",
  },
  {
    icon: Building,
    title: "Acompanhamento em Delegacias",
    description:
      "Assistência jurídica desde o início da investigação, garantindo proteção de direitos e orientação em depoimentos.",
    detailedServices: [
      "Presença em Depoimentos",
      "Orientação Durante Interrogatórios",
      "Proteção de Direitos na Investigação",
      "Assistência em Inquéritos Policiais",
    ],
    href: "/areas-de-atuacao#acompanhamento-em-delegacias",
  },
  {
    icon: Gavel,
    title: "Tribunal do Júri",
    description:
      "Defesa em crimes dolosos contra a vida, com experiência comprovada em plenário e sustentação oral.",
    detailedServices: [
      "Defesa em Crimes Dolosos Contra a Vida",
      "Preparação de Estratégia de Defesa",
      "Sustentação Oral Especializada",
      "Experiência Comprovada no Plenário",
    ],
    href: "/areas-de-atuacao#tribunal-do-juri",
  },
  {
    icon: HeartCrack,
    title: "Violência Doméstica",
    description:
      "Atuação em casos de violência doméstica, medidas protetivas e acompanhamento familiar especializado.",
    detailedServices: [
      "Lei Maria da Penha",
      "Medidas Protetivas",
      "Defesa Técnica Especializada",
      "Acompanhamento Familiar",
    ],
    href: "/areas-de-atuacao#violencia-domestica",
  },
  {
    icon: Zap,
    title: "Atendimento de Urgência",
    description:
      "Atendimento rápido e eficaz em situações de prisão em flagrante, habeas corpus e plantão 24 horas.",
    detailedServices: [
      "Prisão em Flagrante",
      "Habeas Corpus",
      "Liberdade Provisória",
      "Plantão 24 horas",
    ],
    href: "/areas-de-atuacao#atendimento-de-urgencia",
  },
];

const PracticeAreasSection = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="practice-areas" className="py-8 lg:py-16 bg-secundario">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-principal mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Atuação firme em todas as fases do processo criminal, da delegacia
            aos tribunais superiores.
          </p>
        </div>

        {/* Grid de Áreas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            const isFlipped = flippedCards.includes(index);
            return (
              <div
                key={index}
                className="group relative h-64 md:h-80 perspective-1000"
              >
                {/* Card Container with flip effect */}
                <div
                  className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${isFlipped ? "rotate-y-180" : ""} lg:group-hover:rotate-y-180`}
                >
                  {/* Front Face */}
                  <div
                    className="absolute inset-0 w-full h-full backface-hidden bg-claro p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-lg border border-gray-100 flex flex-col items-center text-center justify-center cursor-pointer lg:cursor-default"
                    onClick={() => toggleCard(index)}
                  >
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-destaque/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-destaque/20 transition-colors flex-shrink-0">
                      <IconComponent className="h-10 sm:h-12 w-10 sm:w-12 text-destaque" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-principal mb-2">
                      <span className="block text-base sm:text-xl font-bold leading-tight break-words whitespace-pre-line">
                        {area.title.includes("Violência Doméstica")
                          ? "Violência\nDoméstica"
                          : `${area.title.split(" ").slice(0, 2).join(" ")}` +
                            (area.title.split(" ").length > 2
                              ? `\n${area.title.split(" ").slice(2).join(" ")}`
                              : "")}
                      </span>
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
                      {area.description}
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 w-full">
                      <span className="flex-1 text-center bg-destaque/10 text-destaque py-2 px-3 rounded-lg text-sm font-medium cursor-default">
                        Saiba Mais
                      </span>
                    </div>

                    {/* Mobile flip indicator */}
                    <div className="absolute top-3 right-3 lg:hidden">
                      <div className="bg-destaque/20 rounded-full p-1.5">
                        <RotateCcw
                          className="h-3 w-3 text-destaque"
                          style={{ animation: "pulse 2s infinite" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div
                    className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-destaque p-2 sm:p-4 rounded-xl shadow-lg border border-destaque/20 flex flex-col cursor-pointer lg:cursor-default"
                    onClick={() => toggleCard(index)}
                  >
                    {/* Close button for mobile */}
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <div className="flex flex-col items-center justify-center w-full mb-2">
                        <IconComponent className="h-10 sm:h-12 w-10 sm:w-12 text-white mb-2" />
                        <span className="block text-base sm:text-xl font-bold leading-tight break-words whitespace-pre-line text-white text-center">
                          {area.title.includes("Violência Doméstica")
                            ? "Violência\nDoméstica"
                            : `${area.title.split(" ").slice(0, 2).join(" ")}` +
                              (area.title.split(" ").length > 2
                                ? `\n${area.title.split(" ").slice(2).join(" ")}`
                                : "")}
                        </span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCard(index);
                        }}
                        className="lg:hidden bg-white/20 rounded-full p-1 hover:bg-white/30 transition-colors"
                        aria-label="Fechar detalhes"
                      >
                        <RotateCcw className="h-3 w-3 text-white" />
                      </button>
                    </div>

                    <div className="flex-1 flex flex-col justify-center min-h-0 overflow-hidden">
                      <div className="flex flex-col gap-y-2 text-white/90 text-sm sm:text-base">
                        {area.detailedServices.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-white/60 rounded-full mr-2 flex-shrink-0 mt-2"></div>
                            <span className="leading-tight text-sm sm:text-base">
                              {service}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <WhatsappButton
                      size="sm"
                      className="mt-1 sm:mt-2 w-full bg-white/20 backdrop-blur-sm text-white text-center py-1 px-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors flex-shrink-0"
                    >
                      Saiba Mais
                    </WhatsappButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-700 mb-6 text-sm sm:text-base">
            Precisa de orientação jurídica em alguma dessas áreas?
          </p>
          <div className="flex justify-center">
            <WhatsappButton
              size="lg"
              iconSize={28}
              className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold"
            >
              <span className="uppercase">Falar no WhatsApp</span>
            </WhatsappButton>
          </div>

          {/* Contato Rápido */}
          <div className="flex flex-col sm:flex-row gap-4 text-sm justify-center mt-4">
            <div className="flex items-center gap-2 text-gray-600 justify-center">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span>(62) 99642-1788</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 justify-center">
              <Clock className="h-4 w-4 flex-shrink-0" />
              <span>WhatsApp 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
