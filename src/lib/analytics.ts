import { ENV, ANALYTICS } from './config';

// Interface para eventos de analytics
interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, any>;
}

// Interface para pageviews
interface PageView {
  page: string;
  title: string;
  referrer?: string;
}

class AnalyticsManager {
  private isEnabled: boolean = ENV.IS_PRODUCTION;
  private queue: (AnalyticsEvent | PageView)[] = [];
  private isInitialized: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && this.isEnabled) {
      this.initializeAnalytics();
    }
  }

  private async initializeAnalytics() {
    try {
      // Carrega Google Analytics se configurado
      if (ANALYTICS.GOOGLE_ANALYTICS_ID) {
        await this.loadGoogleAnalytics();
      }

      // Carrega Google Tag Manager se configurado
      if (ANALYTICS.GOOGLE_TAG_MANAGER_ID) {
        await this.loadGoogleTagManager();
      }

      // Carrega Facebook Pixel se configurado
      if (ANALYTICS.FACEBOOK_PIXEL_ID) {
        await this.loadFacebookPixel();
      }

      this.isInitialized = true;
      this.processQueue();
    } catch (error) {
      console.error('Erro ao inicializar analytics:', error);
    }
  }

  private async loadGoogleAnalytics() {
    // Carrega gtag
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS.GOOGLE_ANALYTICS_ID}`;
    document.head.appendChild(script);

    // Configura gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).gtag = function() {
      (window as any).dataLayer.push(arguments);
    };

    (window as any).gtag('js', new Date());
    (window as any).gtag('config', ANALYTICS.GOOGLE_ANALYTICS_ID, {
      page_title: document.title,
      page_location: window.location.href
    });
  }

  private async loadGoogleTagManager() {
    // Carrega GTM
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${ANALYTICS.GOOGLE_TAG_MANAGER_ID}`;
    document.head.appendChild(script);
  }

  private async loadFacebookPixel() {
    // Carrega Facebook Pixel
    (window as any).fbq = (window as any).fbq || function() {
      ((window as any).fbq.q = (window as any).fbq.q || []).push(arguments);
    };
    (window as any)._fbq = (window as any).fbq;
    (window as any).fbq.version = '2.0';
    (window as any).fbq.queue = [];

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);

    (window as any).fbq('init', ANALYTICS.FACEBOOK_PIXEL_ID);
    (window as any).fbq('track', 'PageView');
  }

  private processQueue() {
    while (this.queue.length > 0) {
      const item = this.queue.shift();
      if ('action' in item!) {
        this.sendEvent(item as AnalyticsEvent);
      } else {
        this.sendPageView(item as PageView);
      }
    }
  }

  // Envia evento para analytics
  trackEvent(event: AnalyticsEvent) {
    if (!this.isEnabled) {
      if (ENV.IS_DEVELOPMENT) {
        console.log('📊 Analytics Event (dev):', event);
      }
      return;
    }

    if (!this.isInitialized) {
      this.queue.push(event);
      return;
    }

    this.sendEvent(event);
  }

  private sendEvent(event: AnalyticsEvent) {
    // Google Analytics
    if (ANALYTICS.GOOGLE_ANALYTICS_ID && (window as any).gtag) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.customParameters
      });
    }

    // Google Tag Manager
    if (ANALYTICS.GOOGLE_TAG_MANAGER_ID && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'custom_event',
        event_action: event.action,
        event_category: event.category,
        event_label: event.label,
        event_value: event.value,
        ...event.customParameters
      });
    }

    // Facebook Pixel
    if (ANALYTICS.FACEBOOK_PIXEL_ID && (window as any).fbq) {
      (window as any).fbq('trackCustom', event.action, {
        category: event.category,
        label: event.label,
        value: event.value,
        ...event.customParameters
      });
    }
  }

  // Envia pageview
  trackPageView(pageView: PageView) {
    if (!this.isEnabled) {
      if (ENV.IS_DEVELOPMENT) {
        console.log('📊 Analytics PageView (dev):', pageView);
      }
      return;
    }

    if (!this.isInitialized) {
      this.queue.push(pageView);
      return;
    }

    this.sendPageView(pageView);
  }

  private sendPageView(pageView: PageView) {
    // Google Analytics
    if (ANALYTICS.GOOGLE_ANALYTICS_ID && (window as any).gtag) {
      (window as any).gtag('config', ANALYTICS.GOOGLE_ANALYTICS_ID, {
        page_title: pageView.title,
        page_location: pageView.page
      });
    }

    // Google Tag Manager
    if (ANALYTICS.GOOGLE_TAG_MANAGER_ID && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'page_view',
        page_title: pageView.title,
        page_location: pageView.page,
        page_referrer: pageView.referrer
      });
    }

    // Facebook Pixel
    if (ANALYTICS.FACEBOOK_PIXEL_ID && (window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }
  }

  // Eventos pré-configurados para o site jurídico
  trackLegalConsultation(service: string) {
    this.trackEvent({
      action: 'consultation_request',
      category: 'legal_services',
      label: service,
      customParameters: {
        service_type: service,
        consultation_type: 'initial'
      }
    });
  }

  trackWhatsAppClick(location: string) {
    this.trackEvent({
      action: 'whatsapp_click',
      category: 'contact',
      label: location,
      customParameters: {
        contact_method: 'whatsapp',
        click_location: location
      }
    });
  }

  trackFormSubmission(formType: string) {
    this.trackEvent({
      action: 'form_submit',
      category: 'contact',
      label: formType,
      customParameters: {
        form_type: formType
      }
    });
  }

  trackServicePageView(service: string, category: string) {
    this.trackEvent({
      action: 'service_page_view',
      category: 'legal_services',
      label: service,
      customParameters: {
        service_name: service,
        service_category: category
      }
    });
  }

  trackDownload(fileName: string, fileType: string) {
    this.trackEvent({
      action: 'file_download',
      category: 'engagement',
      label: fileName,
      customParameters: {
        file_name: fileName,
        file_type: fileType
      }
    });
  }

  trackOutboundLink(url: string, linkText?: string) {
    this.trackEvent({
      action: 'outbound_link',
      category: 'engagement',
      label: url,
      customParameters: {
        link_url: url,
        link_text: linkText
      }
    });
  }

  trackScrollDepth(percentage: number) {
    this.trackEvent({
      action: 'scroll',
      category: 'engagement',
      label: `${percentage}%`,
      value: percentage,
      customParameters: {
        scroll_percentage: percentage
      }
    });
  }
}

// Instância global do analytics
export const analytics = new AnalyticsManager();

// Hook React para usar analytics
export function useAnalytics() {
  return {
    trackEvent: (event: AnalyticsEvent) => analytics.trackEvent(event),
    trackPageView: (pageView: PageView) => analytics.trackPageView(pageView),
    trackLegalConsultation: (service: string) => analytics.trackLegalConsultation(service),
    trackWhatsAppClick: (location: string) => analytics.trackWhatsAppClick(location),
    trackFormSubmission: (formType: string) => analytics.trackFormSubmission(formType),
    trackServicePageView: (service: string, category: string) => 
      analytics.trackServicePageView(service, category),
    trackDownload: (fileName: string, fileType: string) => 
      analytics.trackDownload(fileName, fileType),
    trackOutboundLink: (url: string, linkText?: string) => 
      analytics.trackOutboundLink(url, linkText),
    trackScrollDepth: (percentage: number) => analytics.trackScrollDepth(percentage)
  };
}

// Hook para tracking de scroll depth
export function useScrollTracking() {
  React.useEffect(() => {
    const thresholds = [25, 50, 75, 90];
    const tracked = new Set<number>();

    function handleScroll() {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      thresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !tracked.has(threshold)) {
          tracked.add(threshold);
          analytics.trackScrollDepth(threshold);
        }
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

export default AnalyticsManager;

import React from 'react';
