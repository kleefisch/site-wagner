"use client";
import { useState, useRef, useEffect } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Phone,
  Clock,
} from "lucide-react";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "M. S. Oliveira",
    role: "Envolvimento com Drogas",
    company: "",
    content:
      "Fui acusado de envolvimento com drogas e estava perdido. O Dr. Wagner analisou meu caso detalhadamente e conseguiu a defesa necessária para que meus direitos fossem respeitados. Senti-me protegido e confiante em cada passo.",
    rating: 5,
  },
  {
    name: "R. C. Martins",
    role: "Violência Doméstica",
    company: "",
    content:
      "Passei por uma situação de violência doméstica e não sabia o que fazer. O Dr. Wagner me orientou com paciência e garantiu que todas as medidas de proteção fossem tomadas. Tudo foi resolvido de forma rápido, e me senti segura e amparada graças à sua atuação!",
    rating: 5,
  },
  {
    name: "J. Mendes",
    role: "Acusação de Furto",
    company: "",
    content:
      "Fui acusado injustamente de furto. O Dr. Wagner atuou com precisão e conseguiu demonstrar minha inocência. A forma como conduziu minha defesa fez toda a diferença no resultado final.",
    rating: 5,
  },
  {
    name: "L. A. Costa",
    role: "Acusação Grave",
    company: "",
    content:
      "Meu irmão enfrentava uma acusação grave. O Dr. Wagner desenvolveu uma estratégia sólida e conseguiu reduzir significativamente os riscos do caso, garantindo que seus direitos fossem respeitados em todas as etapas.",
    rating: 5,
  },
  {
    name: "C. M. Silva",
    role: "Posse de Drogas",
    company: "",
    content:
      "Tive um envolvimento em um caso de posse de drogas para consumo. O Dr. Wagner me orientou perfeitamente, apresentou defesa técnica eficaz e conseguiu proteger meus direitos, evitando consequências maiores.",
    rating: 5,
  },
  {
    name: "T. Almeida",
    role: "Tribunal do Júri",
    company: "",
    content:
      "Meu caso foi levado ao tribunal do júri e eu estava muito apreensivo. O Dr. Wagner apresentou argumentos firmes e conduziu a defesa com estratégia e dedicação, garantindo um resultado favorável e a melhor proteção possível para mim.",
    rating: 5,
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      {/* Header com aspas à esquerda e estrelas à direita - todas as telas */}
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <Quote className="h-8 w-8 text-destaque/20" />
          <div className="flex items-center">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
      </div>
      <blockquote className="text-gray-600 mb-6 leading-relaxed">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>
      <div className="border-t border-gray-100 pt-4">
        <div className="font-semibold text-principal">{testimonial.name}</div>
        <div className="text-sm text-gray-500">
          {testimonial.role}
          {testimonial.company && (
            <>
              <br />
              <span className="text-destaque">{testimonial.company}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function CarouselTestimonials({
  testimonials,
  current,
  setCurrent,
  onSwipeInteraction,
}: {
  testimonials: Testimonial[];
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  onSwipeInteraction?: () => void;
}) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Autoplay
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 15000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, testimonials.length]);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Swipe left
          setCurrent((prev) => (prev + 1) % testimonials.length);
        } else {
          // Swipe right
          setCurrent(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
          );
        }
        // Chamar callback para mostrar setas após swipe
        if (onSwipeInteraction) {
          onSwipeInteraction();
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative flex items-center">
        {/* Card com transição */}
        <div
          className="overflow-hidden w-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="transition-transform duration-500"
            style={{
              transform: `translateX(-${current * 100}%)`,
              display: "flex",
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="min-w-full flex flex-col">
                <TestimonialCard testimonial={testimonial} />
                {/* Indicadores posicionados logo abaixo de cada card */}
                <div className="flex justify-center mt-4 gap-2">
                  {testimonials.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      className={`w-2 h-2 rounded-full transition-colors ${current === dotIdx ? "bg-destaque" : "bg-gray-300"}`}
                      onClick={() => setCurrent(dotIdx)}
                      aria-label={`Ir para depoimento ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const [arrowsVisible, setArrowsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Observer para detectar quando a seção está visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowArrows(true);
          // Mostrar setas por 3 segundos inicialmente
          setTimeout(() => {
            setArrowsVisible(false);
          }, 3000);
        } else {
          setShowArrows(false);
          setArrowsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mostrar setas ao detectar a seção
  useEffect(() => {
    if (showArrows) {
      setArrowsVisible(true);
    }
  }, [showArrows]);

  // Função para mostrar setas temporariamente após interação
  const handleSwipeInteraction = () => {
    setArrowsVisible(true);
    setTimeout(() => {
      setArrowsVisible(false);
    }, 2000);
  };

  return (
    <section ref={sectionRef} className="py-8 lg:py-20 bg-secundario">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. Veja
            alguns depoimentos de quem confiou em nosso trabalho.
          </p>
        </div>

        {/* Carrossel Mobile/Tablet, Grid Desktop */}
        <div className="relative">
          {/* Mobile/Tablet: Carrossel */}
          <div className="block md:hidden relative">
            {/* Setas com animação de fade e só aparecem quando necessário */}
            <button
              aria-label="Anterior"
              className={`absolute -left-4 top-1/2 -translate-y-1/2 z-30 p-1 text-destaque/70 hover:text-destaque transition-all duration-500 ${
                arrowsVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2"
              }`}
              onClick={() => {
                setCurrent(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length
                );
                handleSwipeInteraction();
              }}
              style={{ background: "none" }}
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              aria-label="Próximo"
              className={`absolute -right-4 top-1/2 -translate-y-1/2 z-30 p-1 text-destaque/70 hover:text-destaque transition-all duration-500 ${
                arrowsVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-2"
              }`}
              onClick={() => {
                setCurrent((prev) => (prev + 1) % testimonials.length);
                handleSwipeInteraction();
              }}
              style={{ background: "none" }}
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            <CarouselTestimonials
              testimonials={testimonials}
              current={current}
              setCurrent={setCurrent}
              onSwipeInteraction={handleSwipeInteraction}
            />
          </div>
          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* CTA + Avaliação */}
        <div className="text-center mt-12">
          <div className="bg-claro/10 backdrop-blur-sm rounded-xl border border-destaque/20 max-w-4xl mx-auto px-6 py-8 mb-8">
            <h3 className="text-xl font-semibold text-principal mb-2">
              Proteja seus direitos com defesa especializada
            </h3>
            <p className="text-gray-700 mb-6">
              Não deixe sua liberdade em risco. Entre em contato para uma
              consulta jurídica estratégica.
            </p>
            <div className="flex justify-center">
              <WhatsappButton
                size="lg"
                iconSize={20}
                className="px-6 py-4 text-lg font-semibold"
              >
                <span className="uppercase">Falar com Advogado</span>
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-center text-sm text-gray-600 gap-1 md:gap-2">
            <div className="flex items-center justify-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 text-yellow-500 fill-current"
                />
              ))}
            </div>
            <span className="block text-center">
              4.9/5 estrelas baseado em 500+ avaliações
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
