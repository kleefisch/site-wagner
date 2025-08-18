import Image from "next/image";
import { WhatsappButton } from "@/components/ui/whatsapp-button";
import { Phone, Clock } from "lucide-react";
// importação removida, usando SVG estático

const HeroSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-principal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Conteúdo */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-claro leading-tight mb-6">
              Defenda Seus Direitos com Quem Entende
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Quando a liberdade está em risco, contar com um advogado
              experiente faz toda a diferença. Atuação completa em processos
              criminais, da prisão em flagrante aos tribunais superiores, com
              foco total na defesa técnica qualificada.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <WhatsappButton
                size="lg"
                iconSize={28}
                className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold"
              >
                <span className="uppercase">Fale com o Advogado</span>
              </WhatsappButton>
            </div>

            {/* Contato Rápido */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-gray-300 justify-center lg:justify-start">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(62) 99642-1788</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 justify-center lg:justify-start">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>WhatsApp 24h</span>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative max-w-sm sm:max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-white/5 rounded-2xl"></div>
              <Image
                src="/images/hero-picture.png"
                alt="Dra. Brennda - Advogada especializada"
                width={400}
                height={500}
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 550px"
                priority
                className="relative rounded-2xl shadow-2xl object-cover w-full max-w-lg lg:max-w-xl h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
