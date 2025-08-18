"use client";

import { useState } from "react";
import { Plus, Minus, Phone, Clock } from "lucide-react";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

const faqs = [
  {
    question: "Quando devo procurar um advogado criminalista?",
    answer:
      "Sempre que houver investigação, acusação ou risco de processo criminal. Um especialista sabe agir rapidamente para proteger seus direitos e sua liberdade desde o primeiro momento.",
  },
  {
    question: "O advogado pode me atender em caso de prisão em flagrante?",
    answer:
      "Sim. Nesses casos, a presença de um advogado experiente é essencial. O Dr. Wagner garante que seus direitos sejam respeitados imediatamente.",
  },
  {
    question: "Quais tipos de casos são atendidos pelo Dr. Wagner?",
    answer:
      "Ele atua em todas as áreas do Direito Criminal, incluindo crimes contra a pessoa, patrimônio, trânsito, drogas, violência doméstica, Tribunal do Júri e acompanhamento em delegacias e audiências. Ter um especialista em cada etapa do processo garante defesa técnica sólida e estratégica.",
  },
  {
    question: "Como funciona a consulta inicial?",
    answer:
      "A primeira conversa é objetiva e visa avaliar seu caso com precisão, definindo a melhor estratégia de defesa. O Dr. Wagner oferece orientação clara desde o primeiro contato. Podendo ser por WhatsApp, telefone, videoconferência ou presencial (em Goiânia e região).",
  },
  {
    question: "É possível acompanhamento em qualquer cidade?",
    answer:
      "Sim. Um advogado especializado pode atuar remotamente ou presencialmente, garantindo suporte completo independentemente da sua localização.",
  },
  {
    question: "O que esperar de um processo criminal?",
    answer:
      "Cada caso é único, mas um especialista mantém você informado sobre prazos, etapas e possibilidades de defesa, assegurando que todas as ações sejam estratégicas, aumentando as chances de sucesso.",
  },
  {
    question: "Como agir em casos de emergência?",
    answer:
      "Em situações urgentes, um advogado experiente sabe priorizar cada ação. O Dr. Wagner oferece atendimento rápido e orientações imediatas para proteger seus direitos.",
  },
  // ...existing code...
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 md:py-20 bg-principal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-claro mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos serviços jurídicos.
            Se sua pergunta não estiver aqui, entre em contato conosco.
          </p>
        </div>

        {/* FAQ Custom Design */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <h3 className="font-semibold text-principal pr-4 group-hover:text-destaque transition-colors text-base sm:text-lg">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destaque/10 flex items-center justify-center group-hover:bg-destaque/20 transition-colors">
                  <div
                    className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"}`}
                  >
                    {openIndex === index ? (
                      <Minus className="h-4 w-4 text-destaque" />
                    ) : (
                      <Plus className="h-4 w-4 text-destaque" />
                    )}
                  </div>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 border-t border-gray-100">
                  <div className="pt-4 text-gray-600 leading-relaxed text-base sm:text-lg">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-12 bg-claro/10 backdrop-blur-sm rounded-xl border border-destaque/20 max-w-4xl mx-auto px-4 sm:px-0 pt-6 md:pt-8 pb-6 md:pb-8">
          <h3 className="text-xl font-semibold text-claro mb-2">
            Ainda tem dúvidas?
          </h3>
          <p className="text-gray-200 mb-4">
            Entre em contato conosco para uma consulta personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-2 sm:px-0">
            <WhatsappButton
              size="lg"
              iconSize={20}
              className="px-3 sm:px-4 py-4 sm:py-6 text-sm sm:text-lg font-semibold min-w-0 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
            >
              <span className="uppercase text-center block leading-tight">
                Consultar advogado
              </span>
            </WhatsappButton>
          </div>

          {/* Contato Rápido */}
          <div className="flex flex-col sm:flex-row gap-4 text-sm justify-center mt-4">
            <div className="flex items-center gap-2 text-gray-300 justify-center">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span>(62) 99642-1788</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 justify-center">
              <Clock className="h-4 w-4 flex-shrink-0" />
              <span>WhatsApp 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
