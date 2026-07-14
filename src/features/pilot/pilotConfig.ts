export type PilotSubmissionMode = 'endpoint' | 'whatsapp' | 'email' | 'unavailable';

export interface PilotConfig {
  mode: PilotSubmissionMode;
  endpointUrl?: string;
  whatsappNumber?: string;
  contactEmail?: string;
}

const validateUrl = (url: string): boolean => {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
};

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validateWhatsApp = (number: string): boolean => {
  const digits = number.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
};

export const getPilotConfig = (): PilotConfig => {
  // E2E Test Override
  if (typeof window !== 'undefined') {
    const testMode = window.sessionStorage.getItem('__TEST_PILOT_MODE__');
    if (testMode === 'endpoint') return { mode: 'endpoint', endpointUrl: 'https://test-endpoint.local' };
    if (testMode === 'whatsapp') return { mode: 'whatsapp', whatsappNumber: '9779800000000' };
    if (testMode === 'email') return { mode: 'email', contactEmail: 'test@mokxya.com' };
    if (testMode === 'unavailable') return { mode: 'unavailable' };
  }

  // Read safely. In Vite, process.env is import.meta.env
  // If not defined, default to empty string.
  const rawEndpoint = (import.meta.env.VITE_PILOT_FORM_URL || '').trim();
  const rawWhatsApp = (import.meta.env.VITE_WHATSAPP_NUMBER || '').trim();
  const rawEmail = (import.meta.env.VITE_CONTACT_EMAIL || '').trim();

  // 1. Endpoint Mode
  if (rawEndpoint && validateUrl(rawEndpoint)) {
    return { mode: 'endpoint', endpointUrl: rawEndpoint };
  }

  // 2. WhatsApp Mode
  if (rawWhatsApp && validateWhatsApp(rawWhatsApp)) {
    // Normalise to just digits
    const cleanNumber = rawWhatsApp.replace(/\D/g, '');
    return { mode: 'whatsapp', whatsappNumber: cleanNumber };
  }

  // 3. Email Mode
  if (rawEmail && validateEmail(rawEmail)) {
    return { mode: 'email', contactEmail: rawEmail };
  }

  // 4. Unavailable Mode (Fail closed)
  return { mode: 'unavailable' };
};
