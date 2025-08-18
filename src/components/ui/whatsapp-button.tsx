import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface WhatsappButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "lg" | "default" | "icon";
  iconSize?: number;
  phone?: string; // Ex: '5562982677272'
  message?: string; // Mensagem do WhatsApp
  // [key: string]: any; // Removido para evitar uso de 'any' explícito
}


function buildWhatsappUrl(phone: string, message: string) {
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMsg}`;
}


export const WhatsappButton = ({
  children,
  className = "",
  size = "lg",
  iconSize = 24,
  phone = "5562982677272",
  message = "Olá, Dra. Brennda!\n\nPreciso de suporte jurídico. Você poderia me auxiliar?",
  ...props
}: WhatsappButtonProps) => {
  const url = buildWhatsappUrl(phone, message);
  return (
    <Button
      asChild
      size={size}
      className={`bg-destaque hover:bg-destaque/90 text-claro border-0 flex items-center gap-2 ${className}`}
      {...props}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <Image
          src="/icons/icon-whatsapp.svg"
          alt="WhatsApp"
          width={iconSize}
          height={iconSize}
          className=""
        />
        {children}
      </a>
    </Button>
  );
};

export default WhatsappButton;
