export interface Program {
  id: number;
  title: string;
  description: string;
  icon: string;
  ageRange: string;
  topics: string[];
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  program: string;
  message: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

export interface FeeCard {
  title: string;
  currency: string;
  amount: string;
  period: string;
  features: string[];
  featured?: boolean;
  badge?: string;
  ctaText: string;
}

export interface DeliveryMode {
  icon: string;
  title: string;
  description: string;
}

export interface ContactItem {
  icon: string;
  label: string;
  lines: string[];
}

export interface MVVCard {
  label: string;
  title: string;
  description: string;
  variant: 'orange' | 'black' | 'grey';
}