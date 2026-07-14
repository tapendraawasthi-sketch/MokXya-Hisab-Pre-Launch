import React, { useState, useRef, useEffect } from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { Stack } from '../components/common/Stack';
import { Button } from '../components/common/Button';
import { Seo } from '../components/seo/Seo';
import { getPilotConfig } from '../features/pilot/pilotConfig';
import type { PilotConfig } from '../features/pilot/pilotConfig';
import { submitApplication } from '../features/pilot/pilotSubmission';
import type { PilotApplication, PilotSubmissionState } from '../features/pilot/pilotSubmission';
import { Check, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import './pilot.css';
import { Link } from 'react-router-dom';

const initialFormState: PilotApplication = {
  ownerName: '',
  phone: '',
  city: '',
  businessName: '',
  businessType: '',
  businessTypeOther: '',
  staffRange: '',
  recordMethod: '',
  inventoryUsage: '',
  creditSalesFrequency: '',
  preferredLanguage: '',
  mainDifficulty: '',
  consent: false,
};

export const Pilot: React.FC = () => {
  const [config, setConfig] = useState<PilotConfig>({ mode: 'unavailable' });
  const [formData, setFormData] = useState<PilotApplication>(initialFormState);
  const [submissionState, setSubmissionState] = useState<PilotSubmissionState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState<string>('');
  
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load config on mount
    setConfig(getPilotConfig());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    
    // Clear error for field on change
    if (errors[name]) {
      setErrors(prev => {
        const newErrs = { ...prev };
        delete newErrs[name];
        return newErrs;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.ownerName.trim()) newErrors.ownerName = 'Owner name is required.';
    
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim() || phoneDigits.length < 10) {
      newErrors.phone = 'Please enter a valid phone number (e.g. 98XXXXXXXX).';
    }
    
    if (!formData.city.trim()) newErrors.city = 'City is required.';
    if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required.';
    if (!formData.businessType) newErrors.businessType = 'Please select a business type.';
    if (formData.businessType === 'other' && !formData.businessTypeOther?.trim()) {
      newErrors.businessTypeOther = 'Please specify your business type.';
    }
    
    if (!formData.staffRange) newErrors.staffRange = 'Please select your staff range.';
    if (!formData.recordMethod) newErrors.recordMethod = 'Please select your current record method.';
    if (!formData.inventoryUsage) newErrors.inventoryUsage = 'Please tell us if you maintain inventory.';
    if (!formData.creditSalesFrequency) newErrors.creditSalesFrequency = 'Please tell us about your credit sales.';
    if (!formData.preferredLanguage) newErrors.preferredLanguage = 'Please select a preferred language.';
    
    if (!formData.consent) newErrors.consent = 'You must consent to be contacted.';

    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      setSubmissionState('validating');
      setTimeout(() => {
        errorSummaryRef.current?.focus();
      }, 50);
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (!validate()) return;
    
    setSubmissionState('submitting');
    
    const result = await submitApplication(formData, config);
    
    if (result.success) {
      if (config.mode === 'endpoint') {
        setSubmissionState('success');
        setFormData(initialFormState); // Clear form on true endpoint success
        setTimeout(() => successRef.current?.focus(), 50);
      } else if (result.externalUrl) {
        setSubmissionState('ready-for-external-contact');
        window.open(result.externalUrl, '_blank');
        // Reset state after a moment so they can click again if popup blocked
        setTimeout(() => setSubmissionState('idle'), 2000);
      }
    } else {
      setSubmissionState('error');
      setErrorMessage(result.message || 'An unknown error occurred.');
      setTimeout(() => errorSummaryRef.current?.focus(), 50);
    }
  };

  const hasErrors = Object.keys(errors).length > 0;
  
  const getActionLabel = () => {
    if (submissionState === 'submitting') return 'Preparing...';
    if (config.mode === 'endpoint') return 'Send pilot application';
    if (config.mode === 'whatsapp') return 'Continue in WhatsApp';
    if (config.mode === 'email') return 'Continue by email';
    return 'Submit';
  };

  return (
    <>
      <Seo title="Founding Pilot | MokXya Hisab" description="Apply for the MokXya Hisab founding pilot." path="/pilot" />
      <Section>
        <Container>
          <div className="pilot-layout">
            
            {/* Left Column: Context */}
            <div className="pilot-context">
              <Stack gap="var(--spacing-4)">
                <span className="t-small" style={{ color: 'var(--color-brand-teal)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Founding Pilot
                </span>
                <h1 className="t-h2" style={{ color: 'var(--color-text-main)' }}>
                  Help shape MokXya for the way small businesses in Nepal actually work.
                </h1>
                <p className="t-large" style={{ color: 'var(--color-text-muted)' }}>
                  We are preparing a controlled pilot with selected retail and trading businesses. The pilot is intended to test everyday workflows such as sales, purchases, expenses, customer dues and stock.
                </p>
              </Stack>

              <Stack gap="var(--spacing-4)">
                <h2 className="t-h4">Who the pilot is for</h2>
                <ul className="t-body" style={{ color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', paddingLeft: '1.25rem' }}>
                  <li>Owner-operated or closely managed retail, trading, wholesale, or distribution businesses.</li>
                  <li>Generally one to five staff with regular sales and purchases.</li>
                  <li>Willing to provide practical feedback.</li>
                  <li>Comfortable testing a product under development.</li>
                </ul>
                <p className="t-small" style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                  Not currently focused on: highly specialised regulated sectors, complex manufacturing, or businesses expecting a fully finished public ERP immediately.
                </p>
              </Stack>

              <Stack gap="var(--spacing-4)">
                <h2 className="t-h4">What selected participants receive</h2>
                <ul className="t-body" style={{ color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', paddingLeft: '1.25rem' }}>
                  <li>Access to suitable pilot workflows.</li>
                  <li>Opportunity to test Nepali, Romanised Nepali and English entry experiences.</li>
                  <li>Direct opportunity to share practical feedback.</li>
                  <li>Notice before any future paid activation.</li>
                </ul>
              </Stack>

              <Stack gap="var(--spacing-4)">
                <h2 className="t-h4">What we expect from participants</h2>
                <ul className="t-body" style={{ color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', paddingLeft: '1.25rem' }}>
                  <li>Test supported everyday workflows and review previews carefully.</li>
                  <li>Provide honest feedback and report usability issues.</li>
                  <li>Understand that the product is still under development.</li>
                  <li>Avoid using the pilot as the sole source of professional accounting judgement.</li>
                </ul>
              </Stack>
            </div>

            {/* Right Column: Form or Status */}
            <div className="pilot-form-container">
              
              {config.mode === 'unavailable' ? (
                <div className="pilot-success-state">
                  <h2 className="t-h3" style={{ color: 'var(--color-text-main)' }}>Applications opening soon</h2>
                  <p className="t-body" style={{ color: 'var(--color-text-muted)', maxWidth: '400px' }}>
                    The founding-pilot contact channel has not been opened yet. Please check back after the application channel is announced.
                  </p>
                  <Link to="/" style={{ marginTop: 'var(--spacing-4)' }}>
                    <Button variant="outline">Return to Home</Button>
                  </Link>
                </div>
              ) : submissionState === 'success' ? (
                <div className="pilot-success-state" tabIndex={-1} ref={successRef} aria-live="polite">
                  <div className="pilot-success-icon">
                    <Check size={32} />
                  </div>
                  <h2 className="t-h3" style={{ color: 'var(--color-text-main)' }}>Application sent</h2>
                  <p className="t-body" style={{ color: 'var(--color-text-muted)', maxWidth: '400px' }}>
                    Your founding-pilot details were sent through the configured application channel.
                  </p>
                  <Link to="/" style={{ marginTop: 'var(--spacing-4)' }}>
                    <Button variant="outline">Return to Home</Button>
                  </Link>
                </div>
              ) : (
                <form className="pilot-form" onSubmit={handleSubmit} noValidate>
                  
                  {/* Error Summary */}
                  {(hasErrors || submissionState === 'error') && (
                    <div 
                      className="pilot-error-summary" 
                      tabIndex={-1} 
                      ref={errorSummaryRef}
                      aria-live="assertive"
                      role="alert"
                    >
                      <h3>There is a problem</h3>
                      {submissionState === 'error' && errorMessage && (
                        <p style={{ marginBottom: '0.5rem', color: 'var(--color-danger)' }}>{errorMessage}</p>
                      )}
                      <ul>
                        {Object.entries(errors).map(([field, msg]) => (
                          <li key={field}>
                            <a href={`#field-${field}`}>{msg}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pilot-form-grid">
                    <div className="pilot-field-group">
                      <label htmlFor="field-ownerName" className="pilot-legend">Owner Name *</label>
                      <input 
                        id="field-ownerName" 
                        name="ownerName" 
                        type="text" 
                        className="pilot-input" 
                        value={formData.ownerName} 
                        onChange={handleChange}
                        aria-invalid={!!errors.ownerName}
                        aria-describedby={errors.ownerName ? "err-ownerName" : undefined}
                      />
                      {errors.ownerName && <span id="err-ownerName" className="pilot-error-text"><AlertCircle size={14}/> {errors.ownerName}</span>}
                    </div>

                    <div className="pilot-field-group">
                      <label htmlFor="field-phone" className="pilot-legend">Phone Number *</label>
                      <input 
                        id="field-phone" 
                        name="phone" 
                        type="tel" 
                        className="pilot-input" 
                        placeholder="e.g. 98XXXXXXXX"
                        value={formData.phone} 
                        onChange={handleChange}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "err-phone" : "help-phone"}
                      />
                      {errors.phone ? (
                        <span id="err-phone" className="pilot-error-text"><AlertCircle size={14}/> {errors.phone}</span>
                      ) : (
                        <span id="help-phone" className="pilot-help-text">Mobile or landline</span>
                      )}
                    </div>
                  </div>

                  <div className="pilot-field-group">
                    <label htmlFor="field-businessName" className="pilot-legend">Business Name *</label>
                    <input 
                      id="field-businessName" 
                      name="businessName" 
                      type="text" 
                      className="pilot-input" 
                      value={formData.businessName} 
                      onChange={handleChange}
                      aria-invalid={!!errors.businessName}
                      aria-describedby={errors.businessName ? "err-businessName" : undefined}
                    />
                    {errors.businessName && <span id="err-businessName" className="pilot-error-text"><AlertCircle size={14}/> {errors.businessName}</span>}
                  </div>

                  <div className="pilot-form-grid">
                    <div className="pilot-field-group">
                      <label htmlFor="field-city" className="pilot-legend">City *</label>
                      <input 
                        id="field-city" 
                        name="city" 
                        type="text" 
                        className="pilot-input" 
                        value={formData.city} 
                        onChange={handleChange}
                        aria-invalid={!!errors.city}
                        aria-describedby={errors.city ? "err-city" : undefined}
                      />
                      {errors.city && <span id="err-city" className="pilot-error-text"><AlertCircle size={14}/> {errors.city}</span>}
                    </div>

                    <div className="pilot-field-group">
                      <label htmlFor="field-businessType" className="pilot-legend">Business Type *</label>
                      <select 
                        id="field-businessType" 
                        name="businessType" 
                        className="pilot-select" 
                        value={formData.businessType} 
                        onChange={handleChange}
                        aria-invalid={!!errors.businessType}
                        aria-describedby={errors.businessType ? "err-businessType" : undefined}
                      >
                        <option value="">Select...</option>
                        <option value="retail">Retail</option>
                        <option value="trading">Trading</option>
                        <option value="wholesale">Small wholesale</option>
                        <option value="distribution">Small distribution</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.businessType && <span id="err-businessType" className="pilot-error-text"><AlertCircle size={14}/> {errors.businessType}</span>}
                    </div>
                  </div>

                  {formData.businessType === 'other' && (
                    <div className="pilot-field-group">
                      <label htmlFor="field-businessTypeOther" className="pilot-legend">Please specify business type *</label>
                      <input 
                        id="field-businessTypeOther" 
                        name="businessTypeOther" 
                        type="text" 
                        className="pilot-input" 
                        value={formData.businessTypeOther} 
                        onChange={handleChange}
                        aria-invalid={!!errors.businessTypeOther}
                        aria-describedby={errors.businessTypeOther ? "err-businessTypeOther" : undefined}
                      />
                      {errors.businessTypeOther && <span id="err-businessTypeOther" className="pilot-error-text"><AlertCircle size={14}/> {errors.businessTypeOther}</span>}
                    </div>
                  )}

                  <fieldset className="pilot-fieldset">
                    <legend className="pilot-legend">Staff Range *</legend>
                    <div className="pilot-radio-group">
                      {['Just me', '2–5', '6–10', 'More than 10'].map(opt => (
                        <label key={opt} className="pilot-radio-label">
                          <input 
                            type="radio" 
                            name="staffRange" 
                            value={opt} 
                            checked={formData.staffRange === opt}
                            onChange={handleChange}
                            className="pilot-radio-input"
                            id={`field-staff-${opt}`}
                            aria-invalid={!!errors.staffRange}
                          />
                          <span className="t-body">{opt}</span>
                        </label>
                      ))}
                    </div>
                    {errors.staffRange && <span className="pilot-error-text"><AlertCircle size={14}/> {errors.staffRange}</span>}
                  </fieldset>

                  <div className="pilot-field-group">
                    <label htmlFor="field-recordMethod" className="pilot-legend">Current Record Method *</label>
                    <select 
                      id="field-recordMethod" 
                      name="recordMethod" 
                      className="pilot-select" 
                      value={formData.recordMethod} 
                      onChange={handleChange}
                      aria-invalid={!!errors.recordMethod}
                      aria-describedby={errors.recordMethod ? "err-recordMethod" : undefined}
                    >
                      <option value="">Select...</option>
                      <option value="Notebook or register">Notebook or register</option>
                      <option value="Spreadsheet">Spreadsheet</option>
                      <option value="Accounting software">Accounting software</option>
                      <option value="Messaging notes">Messaging notes</option>
                      <option value="Mostly memory">Mostly memory</option>
                      <option value="Combination of methods">Combination of methods</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.recordMethod && <span id="err-recordMethod" className="pilot-error-text"><AlertCircle size={14}/> {errors.recordMethod}</span>}
                  </div>

                  <div className="pilot-form-grid">
                    <div className="pilot-field-group">
                      <label htmlFor="field-inventoryUsage" className="pilot-legend">Maintain Inventory? *</label>
                      <select 
                        id="field-inventoryUsage" 
                        name="inventoryUsage" 
                        className="pilot-select" 
                        value={formData.inventoryUsage} 
                        onChange={handleChange}
                        aria-invalid={!!errors.inventoryUsage}
                        aria-describedby={errors.inventoryUsage ? "err-inventoryUsage" : undefined}
                      >
                        <option value="">Select...</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Sometimes">Sometimes</option>
                        <option value="Not sure">Not sure</option>
                      </select>
                      {errors.inventoryUsage && <span id="err-inventoryUsage" className="pilot-error-text"><AlertCircle size={14}/> {errors.inventoryUsage}</span>}
                    </div>

                    <div className="pilot-field-group">
                      <label htmlFor="field-creditSalesFrequency" className="pilot-legend">Sell on Credit? *</label>
                      <select 
                        id="field-creditSalesFrequency" 
                        name="creditSalesFrequency" 
                        className="pilot-select" 
                        value={formData.creditSalesFrequency} 
                        onChange={handleChange}
                        aria-invalid={!!errors.creditSalesFrequency}
                        aria-describedby={errors.creditSalesFrequency ? "err-creditSalesFrequency" : undefined}
                      >
                        <option value="">Select...</option>
                        <option value="Often">Often</option>
                        <option value="Sometimes">Sometimes</option>
                        <option value="Rarely">Rarely</option>
                        <option value="Never">Never</option>
                      </select>
                      {errors.creditSalesFrequency && <span id="err-creditSalesFrequency" className="pilot-error-text"><AlertCircle size={14}/> {errors.creditSalesFrequency}</span>}
                    </div>
                  </div>

                  <fieldset className="pilot-fieldset">
                    <legend className="pilot-legend">Preferred Language *</legend>
                    <div className="pilot-radio-group">
                      {['Nepali', 'Romanised Nepali', 'English', 'Combination'].map(opt => (
                        <label key={opt} className="pilot-radio-label">
                          <input 
                            type="radio" 
                            name="preferredLanguage" 
                            value={opt} 
                            checked={formData.preferredLanguage === opt}
                            onChange={handleChange}
                            className="pilot-radio-input"
                            id={`field-lang-${opt}`}
                            aria-invalid={!!errors.preferredLanguage}
                          />
                          <span className="t-body">{opt}</span>
                        </label>
                      ))}
                    </div>
                    {errors.preferredLanguage && <span className="pilot-error-text"><AlertCircle size={14}/> {errors.preferredLanguage}</span>}
                  </fieldset>

                  <div className="pilot-field-group">
                    <label htmlFor="field-mainDifficulty" className="pilot-legend">Main record-keeping difficulty (Optional)</label>
                    <textarea 
                      id="field-mainDifficulty" 
                      name="mainDifficulty" 
                      className="pilot-textarea" 
                      rows={3}
                      value={formData.mainDifficulty} 
                      onChange={handleChange}
                    />
                  </div>

                  <div style={{ marginTop: 'var(--spacing-4)', paddingTop: 'var(--spacing-4)', borderTop: '1px solid var(--color-border)' }}>
                    <div className="pilot-field-group" style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                      <input 
                        type="checkbox" 
                        id="field-consent" 
                        name="consent" 
                        checked={formData.consent} 
                        onChange={handleChange}
                        style={{ marginTop: '0.25rem', width: '16px', height: '16px' }}
                        aria-invalid={!!errors.consent}
                        aria-describedby={errors.consent ? "err-consent" : undefined}
                      />
                      <label htmlFor="field-consent" className="t-small" style={{ color: 'var(--color-text-main)' }}>
                        I agree that MokXya may use these details to assess my founding-pilot application and contact me about the pilot.
                      </label>
                    </div>
                    {errors.consent && <span id="err-consent" className="pilot-error-text" style={{ marginTop: '0.5rem' }}><AlertCircle size={14}/> {errors.consent}</span>}
                  </div>

                  <Button 
                    type="submit" 
                    size="large" 
                    disabled={submissionState === 'submitting'}
                    style={{ marginTop: 'var(--spacing-4)', width: '100%', justifyContent: 'center' }}
                  >
                    {submissionState === 'submitting' ? (
                      <><Loader2 className="lucide-spin" size={18} style={{ marginRight: '8px' }}/> {getActionLabel()}</>
                    ) : (
                      <>{getActionLabel()} {config.mode !== 'endpoint' && <ArrowRight size={18} style={{ marginLeft: '8px' }} />}</>
                    )}
                  </Button>

                  <p className="t-small" style={{ color: 'var(--color-text-muted)', textAlign: 'center', marginTop: 'var(--spacing-4)' }}>
                    Application details are used only to assess pilot suitability and contact selected applicants.<br/>
                    MokXya Hisab is under development. Applying does not guarantee selection or access. Future pricing will be communicated before any paid activation.
                  </p>

                </form>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Pilot;
