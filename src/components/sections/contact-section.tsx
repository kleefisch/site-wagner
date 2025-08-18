"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  MapPin, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
const contactSchema = z.object({
  name: z.string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(50, "Nome deve ter no máximo 50 caracteres"),
  email: z.string()
    .email("Por favor, insira um e-mail válido"),
  phone: z.string()
    .min(10, "Telefone deve ter pelo menos 10 dígitos")
    .max(15, "Telefone deve ter no máximo 15 dígitos")
    .regex(/^[\d\s\(\)\-\+]+$/, "Telefone deve conter apenas números e símbolos válidos"),
  message: z.string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(1000, "Mensagem deve ter no máximo 1000 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simular envio do formulário
      console.log('Dados do formulário:', data);
      
      // Aqui você pode implementar o envio real do formulário
      // Por exemplo, usar uma API route do Next.js ou um serviço como Formspree
      
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simular delay
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp e Telefone",
      content: "(62) 98267-7272\nAtendimento 24 horas",
      link: "https://wa.me/5562982677272?text=Ol%C3%A1%2C%20Dra.%20Brennda!%0A%0APreciso%20de%20suporte%20jur%C3%ADdico.%20Voc%C3%AA%20poderia%20me%20auxiliar%3F",
      isWhatsApp: true
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Av. 136, 777\nSetor Marista, Goiânia - GO\nCEP: 74000-000",
      link: "https://goo.gl/maps/xyz"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@brenndasilvaadv.com.br",
      link: "mailto:contato@brenndasilvaadv.com.br"
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "Seg-Sex: 9h-18h",
    }
  ];

  return (
    <section className="py-10 md:py-20 bg-secundario">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Pronto para defender seus direitos? Entre em contato conosco e 
            agende sua consulta personalizada. Estamos aqui para ajudar você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div>
            <h3 className="text-2xl font-bold text-principal mb-8 text-center lg:text-left">
              Informações para Contato
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-destaque/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-destaque" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-principal mb-1">
                        {info.title}
                      </h4>
                      <div className="text-gray-700 whitespace-pre-line mb-3">
                        {info.link && !info.isWhatsApp ? (
                          <a 
                            href={info.link}
                            className="hover:text-destaque transition-colors"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.content}
                          </a>
                        ) : (
                          info.content
                        )}
                      </div>
                      {info.isWhatsApp && (
                        <Button asChild className="bg-green-600 hover:bg-green-700 text-white border-0 px-4 py-2 text-sm font-semibold">
                          <a 
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/icons/icon-whatsapp.svg" alt="WhatsApp" className="mr-1 inline-block" width={28} height={28} />
                            FALAR NO WHATSAPP
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-claro p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-principal mb-6">
              Envie sua Mensagem
            </h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800">
                  Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-principal font-medium">Nome*</Label>
                <Input
                  id="name"
                  {...register('name')}
                  placeholder="Seu nome"
                  className="mt-1 border-gray-300 focus:border-destaque focus:ring-destaque"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-principal font-medium">E-mail*</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder="seu@email.com"
                  className="mt-1 border-gray-300 focus:border-destaque focus:ring-destaque"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-principal font-medium">Telefone*</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  placeholder="(11) 99999-9999"
                  className="mt-1 border-gray-300 focus:border-destaque focus:ring-destaque"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="text-principal font-medium">Mensagem*</Label>
                <Textarea
                  id="message"
                  {...register('message')}
                  placeholder="Descreva sua situação ou dúvida..."
                  rows={5}
                  className="mt-1 border-gray-300 focus:border-destaque focus:ring-destaque"
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-principal hover:bg-principal/90 text-claro border-0 px-8 py-4 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>

            <p className="text-sm text-gray-600 mt-4">
              * Campos obrigatórios. Seus dados são tratados com total confidencialidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
