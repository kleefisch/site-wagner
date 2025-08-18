"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "./button";

interface LikeButtonProps {
  initialLikes: number;
  articleId: string;
}

export function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLike = async () => {
    if (isLoading) return;

    setIsLoading(true);
    
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 300));

    if (isLiked) {
      setLikes(prev => prev - 1);
      setIsLiked(false);
    } else {
      setLikes(prev => prev + 1);
      setIsLiked(true);
    }

    setIsLoading(false);

    // Em produção, aqui faria a chamada para a API
    // await updateArticleLikes(articleId, isLiked ? -1 : 1);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleLike}
      disabled={isLoading}
      className={`flex items-center gap-2 transition-all duration-200 ${
        isLiked 
          ? 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100' 
          : 'hover:bg-gray-50'
      }`}
    >
      <Heart 
        className={`w-4 h-4 transition-all duration-200 ${
          isLiked ? 'fill-red-500 text-red-500' : 'text-gray-500'
        } ${isLoading ? 'animate-pulse' : ''}`} 
      />
      <span className="font-medium">{likes}</span>
    </Button>
  );
}
