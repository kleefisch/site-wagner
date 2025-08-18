import React from 'react';
import { ENV } from './config';

// Interface para métricas de performance
interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  url?: string;
  userAgent?: string;
}

// Interface para logs de erro
interface ErrorLog {
  message: string;
  stack?: string;
  url: string;
  timestamp: number;
  userAgent?: string;
  userId?: string;
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private errors: ErrorLog[] = [];
  private isEnabled: boolean = ENV.IS_PRODUCTION;

  constructor() {
    if (typeof window !== 'undefined' && this.isEnabled) {
      this.initializeMonitoring();
    }
  }

  private initializeMonitoring() {
    // Monitora Core Web Vitals
    this.observeWebVitals();
    
    // Monitora erros JavaScript
    this.observeErrors();
    
    // Monitora navegação
    this.observeNavigation();
  }

  private observeWebVitals() {
    // Cumulative Layout Shift (CLS)
    this.observeLayoutShift();
    
    // First Input Delay (FID)
    this.observeFirstInputDelay();
    
    // Largest Contentful Paint (LCP)
    this.observeLargestContentfulPaint();
  }

  private observeLayoutShift() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        
        if (clsValue > 0) {
          this.recordMetric('CLS', clsValue);
        }
      });
      
      observer.observe({ type: 'layout-shift', buffered: true });
    }
  }

  private observeFirstInputDelay() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.recordMetric('FID', (entry as any).processingStart - entry.startTime);
        }
      });
      
      observer.observe({ type: 'first-input', buffered: true });
    }
  }

  private observeLargestContentfulPaint() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.recordMetric('LCP', lastEntry.startTime);
      });
      
      observer.observe({ type: 'largest-contentful-paint', buffered: true });
    }
  }

  private observeErrors() {
    // Erros JavaScript não capturados
    window.addEventListener('error', (event) => {
      this.recordError({
        message: event.message,
        stack: event.error?.stack,
        url: event.filename || window.location.href,
        timestamp: Date.now(),
        userAgent: navigator.userAgent
      });
    });

    // Promises rejeitadas não capturadas
    window.addEventListener('unhandledrejection', (event) => {
      this.recordError({
        message: event.reason?.message || 'Unhandled Promise Rejection',
        stack: event.reason?.stack,
        url: window.location.href,
        timestamp: Date.now(),
        userAgent: navigator.userAgent
      });
    });
  }

  private observeNavigation() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const navEntry = entry as PerformanceNavigationTiming;
          
          // Time to First Byte
          this.recordMetric('TTFB', navEntry.responseStart - navEntry.fetchStart);
          
          // DOM Content Loaded
          this.recordMetric('DCL', navEntry.domContentLoadedEventEnd - navEntry.fetchStart);
          
          // Page Load Complete
          this.recordMetric('Load', navEntry.loadEventEnd - navEntry.fetchStart);
        }
      });
      
      observer.observe({ type: 'navigation', buffered: true });
    }
  }

  recordMetric(name: string, value: number) {
    if (!this.isEnabled) return;

    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent
    };

    this.metrics.push(metric);

    // Remove métricas antigas (mantém apenas as últimas 100)
    if (this.metrics.length > 100) {
      this.metrics.shift();
    }

    // Log para desenvolvimento
    if (ENV.IS_DEVELOPMENT) {
      console.log(`📊 Performance Metric: ${name} = ${value.toFixed(2)}ms`);
    }
  }

  recordError(error: ErrorLog) {
    if (!this.isEnabled) return;

    this.errors.push(error);

    // Remove erros antigos (mantém apenas os últimos 50)
    if (this.errors.length > 50) {
      this.errors.shift();
    }

    // Log para desenvolvimento
    if (ENV.IS_DEVELOPMENT) {
      console.error('🚨 Error recorded:', error);
    }
  }

  // Método para marcar o início de uma operação personalizada
  startTimer(name: string): () => void {
    const startTime = performance.now();
    
    return () => {
      const duration = performance.now() - startTime;
      this.recordMetric(name, duration);
    };
  }

  // Decorator para monitorar funções
  measureFunction<T extends (...args: any[]) => any>(
    fn: T,
    name?: string
  ): T {
    return ((...args: any[]) => {
      const functionName = name || fn.name || 'anonymous';
      const endTimer = this.startTimer(`function:${functionName}`);
      
      try {
        const result = fn(...args);
        
        // Se for uma Promise, aguarda a conclusão
        if (result && typeof result.then === 'function') {
          return result.finally(() => endTimer());
        }
        
        endTimer();
        return result;
      } catch (error) {
        endTimer();
        throw error;
      }
    }) as T;
  }

  // Obtém métricas para análise
  getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  getErrors(): ErrorLog[] {
    return [...this.errors];
  }

  // Gera relatório de performance
  generateReport(): {
    metrics: Record<string, { avg: number; min: number; max: number; count: number }>;
    errors: ErrorLog[];
    summary: {
      totalMetrics: number;
      totalErrors: number;
      timeRange: { start: number; end: number };
    };
  } {
    const metricsByName: Record<string, number[]> = {};
    
    // Agrupa métricas por nome
    this.metrics.forEach(metric => {
      if (!metricsByName[metric.name]) {
        metricsByName[metric.name] = [];
      }
      metricsByName[metric.name].push(metric.value);
    });

    // Calcula estatísticas para cada métrica
    const metricsStats: Record<string, { avg: number; min: number; max: number; count: number }> = {};
    
    Object.entries(metricsByName).forEach(([name, values]) => {
      metricsStats[name] = {
        avg: values.reduce((a, b) => a + b, 0) / values.length,
        min: Math.min(...values),
        max: Math.max(...values),
        count: values.length
      };
    });

    const timestamps = this.metrics.map(m => m.timestamp);
    
    return {
      metrics: metricsStats,
      errors: this.getErrors(),
      summary: {
        totalMetrics: this.metrics.length,
        totalErrors: this.errors.length,
        timeRange: {
          start: Math.min(...timestamps),
          end: Math.max(...timestamps)
        }
      }
    };
  }

  // Limpa todas as métricas e erros
  clear() {
    this.metrics = [];
    this.errors = [];
  }
}

// Instância global do monitor
export const performanceMonitor = new PerformanceMonitor();

// Hook React para usar o monitor
export function usePerformanceMonitor() {
  return {
    recordMetric: (name: string, value: number) => performanceMonitor.recordMetric(name, value),
    startTimer: (name: string) => performanceMonitor.startTimer(name),
    measureFunction: <T extends (...args: any[]) => any>(fn: T, name?: string) => 
      performanceMonitor.measureFunction(fn, name),
    getReport: () => performanceMonitor.generateReport()
  };
}

// Decorator para componentes React
export function withPerformanceMonitoring<P extends object>(
  Component: React.ComponentType<P>,
  name?: string
) {
  return function MonitoredComponent(props: P) {
    const componentName = name || Component.displayName || Component.name || 'Component';
    const endTimer = performanceMonitor.startTimer(`render:${componentName}`);
    
    React.useEffect(() => {
      endTimer();
    });

    return React.createElement(Component, props);
  };
}

export default PerformanceMonitor;
