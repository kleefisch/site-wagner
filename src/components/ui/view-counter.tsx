"use client";

import { useEffect, useState } from "react";

interface ViewCounterProps {
  articleId: string;
  initialViews: number;
}

export function ViewCounter({ articleId, initialViews }: ViewCounterProps) {
  const [views, setViews] = useState(initialViews);

  useEffect(() => {
    // Simular incremento de visualização após 3 segundos
    const timer = setTimeout(() => {
      setViews(prev => prev + 1);
      
      // Em produção, aqui faria a chamada para a API
      // await incrementArticleViews(articleId);
    }, 3000);

    return () => clearTimeout(timer);
  }, [articleId]);

  return <span>{views.toLocaleString()} visualizações</span>;
}
