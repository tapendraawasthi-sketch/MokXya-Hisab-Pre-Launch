export type StatusType = 'current' | 'pilot' | 'planned' | 'illustrative';

export interface TrustPoint {
  id: string;
  text: string;
}

export interface ProblemOutcome {
  id: string;
  problem: string;
  outcome: string;
}

export interface WorkflowStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
}

export interface ProductExample {
  id: string;
  language: string;
  input: string;
  interpretation: {
    party: string;
    transactionType: string;
    amount: string;
    paymentStatus: string;
    accountingEffect: string[];
  };
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  status: StatusType;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BusinessType {
  id: string;
  name: string;
}
