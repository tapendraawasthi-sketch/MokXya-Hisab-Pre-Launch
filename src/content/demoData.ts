export type LanguageVariant = 'English' | 'Romanised Nepali' | 'Nepali';
export type PaymentStatus = 'Due' | 'Paid' | 'Payable' | 'None';
export type DemoState = 'ready' | 'interpreting' | 'preview' | 'confirmed' | 'reset';

export interface DemoEffect {
  description: string;
  type: 'increase' | 'decrease' | 'neutral';
}

export interface DemoInterpretation {
  party?: string;
  item?: string;
  quantity?: number;
  transactionType: string;
  amount?: number;
  paymentMethod?: string;
  paymentStatus?: PaymentStatus;
  accountingEffects: DemoEffect[];
  caveats?: string[];
}

export interface DemoLanguageInput {
  language: LanguageVariant;
  text: string;
}

export interface DemoExample {
  id: string;
  title: string;
  inputs: Record<LanguageVariant, string>;
  interpretation: DemoInterpretation;
}

export const demoExamples: DemoExample[] = [
  {
    id: 'credit-sale',
    title: 'Credit sale',
    inputs: {
      'Romanised Nepali': 'Ram lai Rs 10,000 ko saman udharo beche.',
      'Nepali': 'रामलाई रु १०,००० को सामान उधारो बिक्री गरियो।',
      'English': 'Sold goods worth NPR 10,000 to Ram on credit.'
    },
    interpretation: {
      party: 'Ram',
      transactionType: 'Credit sale',
      amount: 10000,
      paymentStatus: 'Due',
      accountingEffects: [
        { description: 'Sales increase', type: 'increase' },
        { description: 'Customer amount due increases', type: 'increase' },
        { description: 'Stock decreases (if tracked)', type: 'decrease' }
      ]
    }
  },
  {
    id: 'cash-expense',
    title: 'Cash expense',
    inputs: {
      'Romanised Nepali': 'Pasal ko bijuli bill Rs 2,500 cash ma tire.',
      'Nepali': 'पसलको बिजुली बिल रु २,५०० नगदमा तिरियो।',
      'English': 'Paid the shop electricity bill of NPR 2,500 in cash.'
    },
    interpretation: {
      transactionType: 'Electricity expense',
      amount: 2500,
      paymentMethod: 'Cash',
      accountingEffects: [
        { description: 'Expense increases', type: 'increase' },
        { description: 'Cash decreases', type: 'decrease' }
      ]
    }
  },
  {
    id: 'customer-payment',
    title: 'Customer payment received',
    inputs: {
      'Romanised Nepali': 'Ram bata purano udharo ko Rs 5,000 cash payo.',
      'Nepali': 'रामबाट पुरानो उधारोको रु ५,००० नगद प्राप्त भयो।',
      'English': 'Received NPR 5,000 in cash from Ram against an earlier credit balance.'
    },
    interpretation: {
      party: 'Ram',
      transactionType: 'Customer payment received',
      amount: 5000,
      paymentMethod: 'Cash',
      accountingEffects: [
        { description: 'Cash increases', type: 'increase' },
        { description: 'Customer amount due decreases', type: 'decrease' }
      ]
    }
  },
  {
    id: 'purchase',
    title: 'Credit purchase',
    inputs: {
      'Romanised Nepali': 'Shyam Suppliers bata Rs 20,000 ko saman udharo kine.',
      'Nepali': 'श्याम सप्लायर्सबाट रु २०,००० को सामान उधारो खरिद गरियो।',
      'English': 'Purchased goods worth NPR 20,000 on credit from Shyam Suppliers.'
    },
    interpretation: {
      party: 'Shyam Suppliers',
      transactionType: 'Credit purchase',
      amount: 20000,
      paymentStatus: 'Payable',
      accountingEffects: [
        { description: 'Purchases or inventory increase', type: 'increase' },
        { description: 'Supplier amount due increases', type: 'increase' }
      ]
    }
  },
  {
    id: 'stock-adjustment',
    title: 'Stock adjustment',
    inputs: {
      'Romanised Nepali': '5 ota damaged charger stock bata hataunu.',
      'Nepali': '५ वटा बिग्रिएका चार्जर स्टकबाट हटाउनु।',
      'English': 'Remove five damaged chargers from available stock.'
    },
    interpretation: {
      item: 'Charger',
      quantity: 5,
      transactionType: 'Damaged-stock adjustment',
      accountingEffects: [
        { description: 'Available quantity decreases', type: 'decrease' }
      ],
      caveats: [
        'Financial effect requires item cost and configured adjustment treatment'
      ]
    }
  }
];
