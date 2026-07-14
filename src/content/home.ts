import type { 
  TrustPoint, 
  ProblemOutcome, 
  WorkflowStep, 
  ProductExample, 
  Capability, 
  FAQItem, 
  BusinessType 
} from '../types/content';

export const heroContent = {
  eyebrow: "Nepal-first accounting for everyday business",
  nepaliLead: "आफ्नै भाषामा, सजिलो व्यवसायिक हिसाब।",
  headline: "Accounting that understands how your business speaks.",
  support: "Type or speak a sale, purchase, expense or payment in Nepali, Roman Nepali or English. MokXya prepares a clear accounting preview for you to review before anything is recorded.",
  primaryCta: "Apply for the Founding Pilot",
  secondaryCta: "See the product flow",
  trustPoints: [
    "Review before posting",
    "Built for everyday Nepali business language",
    "Records designed to stay organised for accountant review"
  ]
};

export const trustStrip: TrustPoint[] = [
  { id: 'ts-1', text: 'Nepali, Roman Nepali and English' },
  { id: 'ts-2', text: 'Preview before confirmation' },
  { id: 'ts-3', text: 'Sales, purchases, expenses and payments' },
  { id: 'ts-4', text: 'Designed for small Nepalese businesses' }
];

export const problemOutcomeContent = {
  heading: "Business happens quickly. Record-keeping should not slow it down.",
  pairs: [
    {
      id: 'po-1',
      problem: "Sales and expenses are scattered across notebooks, messages, and memory.",
      outcome: "Describe what happened in familiar language in one place."
    },
    {
      id: 'po-2',
      problem: "Traditional accounting software feels technical and rigid.",
      outcome: "Review a structured interpretation you can easily understand."
    },
    {
      id: 'po-3',
      problem: "Romanised Nepali descriptions must be manually translated into accounting entries.",
      outcome: "Confirm the prepared entry only after checking it."
    },
    {
      id: 'po-4',
      problem: "Customer dues are hard to track and stock becomes disconnected.",
      outcome: "Keep day-to-day records organised for easier accountant review."
    }
  ] as ProblemOutcome[]
};

export const workflowContent = {
  heading: "How MokXya works",
  steps: [
    {
      id: 'ws-1',
      stepNumber: 1,
      title: "Say or type what happened",
      description: "Use familiar Nepali, Roman Nepali or English to describe a sale, purchase, expense, payment or other supported business event."
    },
    {
      id: 'ws-2',
      stepNumber: 2,
      title: "Review what MokXya understood",
      description: "MokXya prepares a structured preview showing the transaction type, amount, parties and expected accounting effect."
    },
    {
      id: 'ws-3',
      stepNumber: 3,
      title: "Confirm before posting",
      description: "Correct anything that needs adjustment. The entry is intended to be recorded only after confirmation."
    }
  ] as WorkflowStep[]
};

export const productExperience = {
  heading: "See how MokXya turns everyday language into a reviewable entry.",
  statusDisclosure: "Illustrative workflow",
  examples: [
    {
      id: 'pe-en',
      language: "English",
      input: "Sold goods worth NPR 10,000 to Ram on credit.",
      interpretation: {
        party: "Ram",
        transactionType: "Credit sale",
        amount: "NPR 10,000",
        paymentStatus: "Due",
        accountingEffect: [
          "sales increase",
          "customer receivable increases",
          "stock decreases, where inventory tracking applies"
        ]
      }
    },
    {
      id: 'pe-ne-roman',
      language: "Romanised Nepali",
      input: "Ram lai Rs 10,000 ko saman udharo beche.",
      interpretation: {
        party: "Ram",
        transactionType: "Credit sale",
        amount: "NPR 10,000",
        paymentStatus: "Due",
        accountingEffect: [
          "sales increase",
          "customer receivable increases",
          "stock decreases, where inventory tracking applies"
        ]
      }
    },
    {
      id: 'pe-ne',
      language: "Nepali",
      input: "रामलाई रु १०,००० को सामान उधारो बिक्री गरियो।",
      interpretation: {
        party: "Ram",
        transactionType: "Credit sale",
        amount: "NPR 10,000",
        paymentStatus: "Due",
        accountingEffect: [
          "sales increase",
          "customer receivable increases",
          "stock decreases, where inventory tracking applies"
        ]
      }
    }
  ] as ProductExample[]
};

export const capabilitiesContent = {
  heading: "Core capabilities",
  items: [
    {
      id: 'cap-1',
      title: "Sales",
      description: "Record cash and credit sales as they happen.",
      status: "pilot"
    },
    {
      id: 'cap-2',
      title: "Purchases",
      description: "Track inventory purchases and supplier dues.",
      status: "pilot"
    },
    {
      id: 'cap-3',
      title: "Expenses",
      description: "Log daily business operating expenses easily.",
      status: "pilot"
    },
    {
      id: 'cap-4',
      title: "Customer dues",
      description: "Keep track of which customers owe you money.",
      status: "pilot"
    },
    {
      id: 'cap-5',
      title: "Cash, bank and QR payments",
      description: "Log payment methods for clear financial tracking.",
      status: "planned"
    },
    {
      id: 'cap-6',
      title: "Stock",
      description: "Basic inventory deductions linked to sales.",
      status: "planned"
    },
    {
      id: 'cap-7',
      title: "Reports",
      description: "View simple summaries of your business position.",
      status: "illustrative"
    },
    {
      id: 'cap-8',
      title: "Accountant-ready review",
      description: "Records structured for easy professional oversight.",
      status: "pilot"
    }
  ] as Capability[]
};

export const controlContent = {
  heading: "You stay in control of every entry.",
  trustConcepts: [
    "Preview before posting",
    "Edit before confirmation",
    "Clear transaction details",
    "Understandable accounting effect",
    "Organised records",
    "Support for accountant review",
    "Human oversight remains important"
  ],
  accountantStatement: "MokXya is designed to make day-to-day records easier to prepare and easier for an accountant to review. It does not replace professional judgement."
};

export const suitableBusinessesContent = {
  heading: "Designed first for everyday trading businesses.",
  types: [
    { id: 'b-1', name: "Garments" },
    { id: 'b-2', name: "Footwear" },
    { id: 'b-3', name: "Cosmetics" },
    { id: 'b-4', name: "Stationery" },
    { id: 'b-5', name: "Mobile accessories" },
    { id: 'b-6', name: "Electrical goods" },
    { id: 'b-7', name: "Hardware" },
    { id: 'b-8', name: "Household goods" },
    { id: 'b-9', name: "Small wholesale" },
    { id: 'b-10', name: "Small distribution" }
  ] as BusinessType[],
  scopeStatement: "The initial pilot is focused on owner-operated retail and trading businesses with straightforward sales, purchases, expenses, stock and customer-dues workflows.",
  limitationStatement: "Complex manufacturing, banking, insurance, large-scale enterprise and highly specialised sector workflows are not the initial pilot focus."
};

export const pilotOfferContent = {
  heading: "Help shape MokXya with the founding pilot.",
  points: [
    "Selected businesses receive access during the controlled pilot",
    "Pilot participants may be asked to provide feedback",
    "Access is intended for suitable early business workflows",
    "The product is still under development",
    "Future pricing will be communicated before paid activation",
    "Pilot access does not guarantee permanent free access"
  ],
  primaryCta: "Apply for the Founding Pilot"
};

export const faqContent = {
  heading: "Frequently Asked Questions",
  questions: [
    {
      id: 'faq-1',
      question: "What is MokXya Hisab?",
      answer: "MokXya Hisab is an AI-assisted accounting and business-management product for owner-operated Nepalese businesses. It allows you to describe business transactions in everyday language, and then prepares a structured accounting preview for your review."
    },
    {
      id: 'faq-2',
      question: "Who is the founding pilot for?",
      answer: "The initial pilot is limited and controlled, focusing on owner-operated retail and trading businesses with straightforward sales, purchases, expenses, stock, and customer-dues workflows."
    },
    {
      id: 'faq-3',
      question: "Can I use Nepali or Roman Nepali?",
      answer: "Yes, you can describe transactions in Nepali, Romanised Nepali, or English. MokXya is built to understand everyday Nepalese business language."
    },
    {
      id: 'faq-4',
      question: "Does MokXya record entries automatically?",
      answer: "No. MokXya prepares an interpretation and preview. The user remains responsible for review and confirmation before anything is posted."
    },
    {
      id: 'faq-5',
      question: "Does MokXya replace my accountant?",
      answer: "No. An accountant's professional role remains important. MokXya is designed to keep your day-to-day records organized, making accountant review easier, but it does not replace professional judgement."
    },
    {
      id: 'faq-6',
      question: "Is MokXya already publicly available?",
      answer: "No. The product is currently under development and is only accessible through a controlled founding pilot for selected participants."
    },
    {
      id: 'faq-7',
      question: "Will the founding pilot always remain free?",
      answer: "Pilot access does not guarantee permanent free access. Future pricing will be communicated to all users before any paid activation is required."
    },
    {
      id: 'faq-8',
      question: "What happens if MokXya misunderstands a transaction?",
      answer: "Since you always preview the interpretation first, misunderstood entries should simply be corrected or adjusted by you before confirmation."
    }
  ] as FAQItem[]
};

export const finalCtaContent = {
  heading: "Ready to test a simpler way to keep business records?",
  supportingText: "Apply for the founding pilot and help shape MokXya for the way small businesses in Nepal actually work.",
  primaryCta: "Apply for the Founding Pilot",
  secondaryCta: "Review how it works",
  secondaryHref: "#how-it-works"
};
