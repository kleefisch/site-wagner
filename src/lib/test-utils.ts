// Utilitários para testes automatizados

// Mock para window.location
export const mockLocation = (href: string) => {
  const url = new URL(href);
  Object.defineProperty(window, 'location', {
    value: {
      href,
      pathname: url.pathname,
      search: url.search,
      hash: url.hash,
      host: url.host,
      hostname: url.hostname,
      port: url.port,
      protocol: url.protocol,
      origin: url.origin,
      assign: jest.fn(),
      replace: jest.fn(),
      reload: jest.fn()
    },
    writable: true
  });
};

// Mock para localStorage
export const mockLocalStorage = () => {
  const store: Record<string, string> = {};
  
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => { store[key] = value; },
      removeItem: (key: string) => { delete store[key]; },
      clear: () => { Object.keys(store).forEach(key => delete store[key]); },
      key: (index: number) => Object.keys(store)[index] || null,
      get length() { return Object.keys(store).length; }
    },
    writable: true
  });
};

// Mock para sessionStorage
export const mockSessionStorage = () => {
  const store: Record<string, string> = {};
  
  Object.defineProperty(window, 'sessionStorage', {
    value: {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => { store[key] = value; },
      removeItem: (key: string) => { delete store[key]; },
      clear: () => { Object.keys(store).forEach(key => delete store[key]); },
      key: (index: number) => Object.keys(store)[index] || null,
      get length() { return Object.keys(store).length; }
    },
    writable: true
  });
};

// Mock para matchMedia
export const mockMatchMedia = (matches: boolean = false) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
};

// Mock para ResizeObserver
export const mockResizeObserver = () => {
  global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
};

// Mock para IntersectionObserver
export const mockIntersectionObserver = () => {
  global.IntersectionObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
    root: null,
    rootMargin: '',
    thresholds: [],
  }));
};

// Mock para fetch
export const mockFetch = (response: any, ok: boolean = true) => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok,
      status: ok ? 200 : 400,
      json: () => Promise.resolve(response),
      text: () => Promise.resolve(JSON.stringify(response)),
    })
  );
};

// Helpers para testes de formulário
export const fillForm = (container: HTMLElement, values: Record<string, string>) => {
  Object.entries(values).forEach(([name, value]) => {
    const input = container.querySelector(`[name="${name}"]`) as HTMLInputElement;
    if (input) {
      fireEvent.change(input, { target: { value } });
    }
  });
};

export const submitForm = (container: HTMLElement) => {
  const form = container.querySelector('form');
  if (form) {
    fireEvent.submit(form);
  }
};

// Helpers para testes de componentes
export const waitForLoadingToFinish = () => {
  return waitFor(() => {
    expect(screen.queryByText(/carregando/i)).not.toBeInTheDocument();
  });
};

export const expectElementToBeVisible = (selector: string) => {
  const element = screen.getByTestId(selector);
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
};

// Setup comum para testes
export const setupTest = () => {
  mockLocalStorage();
  mockSessionStorage();
  mockMatchMedia();
  mockResizeObserver();
  mockIntersectionObserver();
  
  // Limpa todos os mocks após cada teste
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });
};

// Mock para Next.js router
export const mockRouter = {
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  reload: jest.fn(),
  query: {},
  pathname: '/',
  asPath: '/',
  route: '/',
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
};

// Custom render para testes com providers
export const renderWithProviders = (ui: React.ReactElement, options = {}) => {
  const AllProviders = ({ children }: { children: React.ReactNode }) => {
    return (
      <NotificationProvider>
        {children}
      </NotificationProvider>
    );
  };

  return render(ui, { wrapper: AllProviders, ...options });
};

// Testes de acessibilidade
export const testAccessibility = async (component: React.ReactElement) => {
  const { container } = render(component);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
};

// Teste de responsividade
export const testResponsiveness = (component: React.ReactElement) => {
  const viewports = [
    { width: 320, height: 568 }, // Mobile
    { width: 768, height: 1024 }, // Tablet
    { width: 1024, height: 768 }, // Desktop
    { width: 1920, height: 1080 } // Large Desktop
  ];

  viewports.forEach(viewport => {
    Object.defineProperty(window, 'innerWidth', { value: viewport.width, writable: true });
    Object.defineProperty(window, 'innerHeight', { value: viewport.height, writable: true });
    
    render(component);
    // Aqui você pode adicionar asserções específicas para cada viewport
  });
};

// Matchers customizados para Jest
expect.extend({
  toHaveValidMetadata(received) {
    const title = received.querySelector('title');
    const metaDescription = received.querySelector('meta[name="description"]');
    
    const pass = title && metaDescription && 
                 title.textContent && title.textContent.length > 0 &&
                 metaDescription.getAttribute('content') && 
                 metaDescription.getAttribute('content')!.length > 0;
    
    return {
      message: () => pass 
        ? 'Page has valid metadata' 
        : 'Page is missing title or meta description',
      pass
    };
  },
  
  toHaveStructuredData(received, expectedType) {
    const scripts = received.querySelectorAll('script[type="application/ld+json"]');
    let hasExpectedType = false;
    
    scripts.forEach((script: HTMLScriptElement) => {
      try {
        const data = JSON.parse(script.innerHTML);
        if (data['@type'] === expectedType) {
          hasExpectedType = true;
        }
      } catch (e) {
        // Script não é JSON válido
      }
    });
    
    return {
      message: () => hasExpectedType 
        ? `Page has structured data of type ${expectedType}` 
        : `Page is missing structured data of type ${expectedType}`,
      pass: hasExpectedType
    };
  }
});

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

import React from 'react';
import { render, cleanup, waitFor, screen, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import { NotificationProvider } from '../components/ui/notifications';
