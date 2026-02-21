import React from 'react';

export interface Program {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
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
  icon: React.ReactNode;
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
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ContactItem {
  icon: React.ReactNode;
  label: string;
  lines: string[];
}

export interface MVVCard {
  label: string;
  title: string;
  description: string;
  variant: 'orange' | 'black' | 'grey';
}