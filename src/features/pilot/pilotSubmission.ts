import type { PilotConfig } from './pilotConfig';

export interface PilotApplication {
  ownerName: string;
  phone: string;
  city: string;
  businessName: string;
  businessType: string;
  businessTypeOther?: string;
  staffRange: string;
  recordMethod: string;
  inventoryUsage: string;
  creditSalesFrequency: string;
  preferredLanguage: string;
  mainDifficulty?: string;
  consent: boolean;
}

export type PilotSubmissionState = 
  | 'idle' 
  | 'validating' 
  | 'submitting' 
  | 'success' 
  | 'error' 
  | 'ready-for-external-contact' 
  | 'unavailable';

export interface SubmissionResult {
  success: boolean;
  message?: string;
  externalUrl?: string;
}

const buildSummaryText = (data: PilotApplication): string => {
  return `Founding Pilot Application:
Name: ${data.ownerName}
Business: ${data.businessName} (${data.businessType}${data.businessTypeOther ? ` - ${data.businessTypeOther}` : ''})
City: ${data.city}
Phone: ${data.phone}
Staff: ${data.staffRange}
Records: ${data.recordMethod}
Inventory: ${data.inventoryUsage}
Credit: ${data.creditSalesFrequency}
Language: ${data.preferredLanguage}
Difficulty: ${data.mainDifficulty || 'None provided'}`;
};

export const submitApplication = async (
  data: PilotApplication,
  config: PilotConfig
): Promise<SubmissionResult> => {
  if (!data.consent) {
    return { success: false, message: 'Consent is required.' };
  }

  if (config.mode === 'endpoint' && config.endpointUrl) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

      // Map to explicit payload
      const payload = {
        ownerName: data.ownerName.trim(),
        phone: data.phone.trim(),
        city: data.city.trim(),
        businessName: data.businessName.trim(),
        businessType: data.businessType.trim(),
        businessTypeOther: data.businessTypeOther?.trim() || '',
        staffRange: data.staffRange,
        recordMethod: data.recordMethod,
        inventoryUsage: data.inventoryUsage,
        creditSalesFrequency: data.creditSalesFrequency,
        preferredLanguage: data.preferredLanguage,
        mainDifficulty: data.mainDifficulty?.trim() || '',
        consent: data.consent,
        source: 'mokxya-website-founding-pilot'
      };

      // Depending on vendor (e.g. Google Forms), POST might need to be urlencoded,
      // but for a documented endpoint contract, JSON is standard.
      // If VITE_PILOT_FORM_METHOD is needed, we could read it, but we default to POST JSON.
      const method = (import.meta.env.VITE_PILOT_FORM_METHOD || 'POST').toUpperCase();
      
      const response = await fetch(config.endpointUrl, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Endpoint returned status ${response.status}`);
      }

      return { success: true, message: 'Application sent' };
    } catch (err) {
      return { 
        success: false, 
        message: 'We could not send the application. Your details have not been stored by this page. Please try again later or use another available contact option.' 
      };
    }
  }

  if (config.mode === 'whatsapp' && config.whatsappNumber) {
    const summary = buildSummaryText(data);
    const encoded = encodeURIComponent(summary);
    const url = `https://wa.me/${config.whatsappNumber}?text=${encoded}`;
    return { success: true, externalUrl: url };
  }

  if (config.mode === 'email' && config.contactEmail) {
    const subject = encodeURIComponent(`Founding Pilot Application: ${data.businessName}`);
    const body = encodeURIComponent(buildSummaryText(data));
    const url = `mailto:${config.contactEmail}?subject=${subject}&body=${body}`;
    return { success: true, externalUrl: url };
  }

  return { success: false, message: 'Submission is currently unavailable.' };
};
