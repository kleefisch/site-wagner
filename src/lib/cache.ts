// Sistema de cache simples para melhorar performance
interface CacheItem<T> {
  data: T;
  timestamp: number;
  expiresIn: number;
}

class SimpleCache<T = any> {
  private cache: Map<string, CacheItem<T>> = new Map();
  private defaultTTL: number = 5 * 60 * 1000; // 5 minutos padrão

  set(key: string, data: T, ttl?: number): void {
    const expiresIn = ttl || this.defaultTTL;
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      expiresIn
    });
  }

  get(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }

    const isExpired = Date.now() - item.timestamp > item.expiresIn;
    
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  has(key: string): boolean {
    const item = this.cache.get(key);
    
    if (!item) {
      return false;
    }

    const isExpired = Date.now() - item.timestamp > item.expiresIn;
    
    if (isExpired) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }

  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    // Remove itens expirados antes de contar
    this.cleanExpired();
    return this.cache.size;
  }

  private cleanExpired(): void {
    const now = Date.now();
    
    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > item.expiresIn) {
        this.cache.delete(key);
      }
    }
  }
}

// Instâncias de cache para diferentes propósitos
export const apiCache = new SimpleCache();
export const metadataCache = new SimpleCache();
export const validationCache = new SimpleCache();

// Hook para cache com React
export function useCache<T>(
  key: string, 
  fetchFn: () => Promise<T>, 
  ttl?: number
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        // Verifica se há dados no cache
        const cachedData = apiCache.get(key);
        
        if (cachedData) {
          setData(cachedData);
          setLoading(false);
          return;
        }

        // Se não há cache, busca os dados
        setLoading(true);
        const result = await fetchFn();
        
        // Armazena no cache
        apiCache.set(key, result, ttl);
        setData(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [key, fetchFn, ttl]);

  const invalidate = useCallback(() => {
    apiCache.delete(key);
  }, [key]);

  return { data, loading, error, invalidate };
}

// Utilities para cache
export const cacheUtils = {
  // Gera chave de cache baseada em objeto
  generateKey: (prefix: string, params: Record<string, any>): string => {
    const sortedParams = Object.keys(params)
      .sort()
      .reduce((acc, key) => {
        acc[key] = params[key];
        return acc;
      }, {} as Record<string, any>);
    
    return `${prefix}:${JSON.stringify(sortedParams)}`;
  },

  // Cache com memoização para funções puras
  memoize: <T extends (...args: any[]) => any>(
    fn: T,
    generateKey?: (...args: Parameters<T>) => string,
    ttl?: number
  ): T => {
    return ((...args: Parameters<T>) => {
      const key = generateKey 
        ? generateKey(...args)
        : `memoize:${fn.name}:${JSON.stringify(args)}`;
      
      const cached = apiCache.get(key);
      if (cached) {
        return cached;
      }

      const result = fn(...args);
      apiCache.set(key, result, ttl);
      return result;
    }) as T;
  },

  // Cache para dados de sessão
  sessionCache: {
    set: (key: string, data: any): void => {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(key, JSON.stringify({
          data,
          timestamp: Date.now()
        }));
      }
    },

    get: (key: string, maxAge: number = 30 * 60 * 1000): any => {
      if (typeof window === 'undefined') return null;
      
      try {
        const item = sessionStorage.getItem(key);
        if (!item) return null;

        const { data, timestamp } = JSON.parse(item);
        
        if (Date.now() - timestamp > maxAge) {
          sessionStorage.removeItem(key);
          return null;
        }

        return data;
      } catch {
        return null;
      }
    }
  }
};

import { useState, useEffect, useCallback } from 'react';

export default SimpleCache;
