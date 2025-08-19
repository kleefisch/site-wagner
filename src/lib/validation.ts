export interface ValidationRule<T = string> {
  message: string;
  validate: (value: T) => boolean;
}

export interface FieldValidation {
  [key: string]: ValidationRule[];
}

// Validações comuns
export const validationRules = {
  required: (message = "Este campo é obrigatório"): ValidationRule<string> => ({
    message,
    validate: (value: string) => Boolean(value && value.trim().length > 0),
  }),

  email: (message = "Digite um e-mail válido"): ValidationRule<string> => ({
    message,
    validate: (value: string) => {
      if (!value) return true; // Se vazio, o required que valida
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    },
  }),

  minLength: (min: number, message?: string): ValidationRule<string> => ({
    message: message || `Mínimo de ${min} caracteres`,
    validate: (value: string) => {
      if (!value) return true; // Se vazio, o required que valida
      return value.length >= min;
    },
  }),

  maxLength: (max: number, message?: string): ValidationRule<string> => ({
    message: message || `Máximo de ${max} caracteres`,
    validate: (value: string) => {
      if (!value) return true; // Se vazio, o required que valida
      return value.length <= max;
    },
  }),

  phone: (message = "Digite um telefone válido"): ValidationRule<string> => ({
    message,
    validate: (value: string) => {
      if (!value) return true; // Se vazio, o required que valida
      // Remove todos os caracteres não numéricos
      const numbersOnly = value.replace(/\D/g, "");
      // Aceita formatos: (11) 12345-6789 ou (11) 1234-5678
      return numbersOnly.length === 10 || numbersOnly.length === 11;
    },
  }),

  cpf: (message = "Digite um CPF válido"): ValidationRule<string> => ({
    message,
    validate: (value: string) => {
      if (!value) return true; // Se vazio, o required que valida
      const cpf = value.replace(/\D/g, "");

      if (cpf.length !== 11) return false;

      // Verifica se todos os dígitos são iguais
      if (/^(\d)\1{10}$/.test(cpf)) return false;

      // Validação dos dígitos verificadores
      let sum = 0;
      for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
      }
      let digit = (sum * 10) % 11;
      if (digit === 10) digit = 0;
      if (digit !== parseInt(cpf.charAt(9))) return false;

      sum = 0;
      for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
      }
      digit = (sum * 10) % 11;
      if (digit === 10) digit = 0;
      return digit === parseInt(cpf.charAt(10));
    },
  }),

  custom: <T>(
    validationFn: (value: T) => boolean,
    message: string
  ): ValidationRule<T> => ({
    message,
    validate: validationFn,
  }),
};

// Validador principal
export function validateField<T>(value: T, rules: ValidationRule<T>[]): string {
  for (const rule of rules) {
    if (!rule.validate(value)) {
      return rule.message;
    }
  }
  return "";
}

export function validateForm<T extends Record<string, string>>(
  values: T,
  validationSchema: FieldValidation
): Record<keyof T, string> {
  const errors = {} as Record<keyof T, string>;

  for (const fieldName in validationSchema) {
    const fieldRules = validationSchema[fieldName];
    const fieldValue = values[fieldName];
    const error = validateField(fieldValue, fieldRules);

    if (error) {
      errors[fieldName as keyof T] = error;
    }
  }

  return errors;
}

// Schemas de validação pré-definidos
export const contactFormValidation: FieldValidation = {
  name: [
    validationRules.required("Nome é obrigatório"),
    validationRules.minLength(2, "Nome deve ter pelo menos 2 caracteres"),
  ],
  email: [
    validationRules.required("E-mail é obrigatório"),
    validationRules.email(),
  ],
  phone: [
    validationRules.required("Telefone é obrigatório"),
    validationRules.phone(),
  ],
  message: [
    validationRules.required("Mensagem é obrigatória"),
    validationRules.minLength(10, "Mensagem deve ter pelo menos 10 caracteres"),
  ],
};

export const newsletterValidation: FieldValidation = {
  email: [
    validationRules.required("E-mail é obrigatório"),
    validationRules.email(),
  ],
};

// Utilitários de formatação
export const formatters = {
  phone: (value: string): string => {
    const numbers = value.replace(/\D/g, "");

    if (numbers.length <= 6) {
      return numbers.replace(/(\d{4})(\d+)/, "$1-$2");
    } else if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d+)/, "($1) $2-$3");
    } else {
      return numbers.replace(/(\d{2})(\d{5})(\d+)/, "($1) $2-$3");
    }
  },

  cpf: (value: string): string => {
    const numbers = value.replace(/\D/g, "");
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  },

  cep: (value: string): string => {
    const numbers = value.replace(/\D/g, "");
    return numbers.replace(/(\d{5})(\d+)/, "$1-$2");
  },

  currency: (value: string): string => {
    const numbers = value.replace(/\D/g, "");
    const amount = parseFloat(numbers) / 100;
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount);
  },
};
