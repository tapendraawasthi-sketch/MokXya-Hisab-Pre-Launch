import React, { useState } from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { Stack } from '../components/common/Stack';
import { Button } from '../components/common/Button';
import { siteConfig } from '../config/site';
import { analytics } from '../lib/analytics';
import { ContactSection } from '../components/sections/ContactSection';
import { Meta } from '../components/seo/Meta';

const Pilot: React.FC = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    phone: '',
    city: '',
    businessName: '',
    businessType: '',
    staffRange: '',
    recordMethod: '',
    inventory: 'no',
    creditSales: 'no',
    language: 'nepali',
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;
    
    analytics.trackFormOpen();

    if (siteConfig.pilotFormUrl) {
      window.open(siteConfig.pilotFormUrl, '_blank');
    }
  };

  return (
    <>
      <Meta title="Founding Pilot" description="Apply for the MokXya Hisab founding pilot." path="/pilot" />
      <Section>
        <Container size="small">
          <Stack gap="var(--spacing-8)">
            
            <Stack gap="var(--spacing-4)" style={{ textAlign: 'center' }}>
              <h1 className="t-page-heading">Founding Pilot Application</h1>
              <p className="t-body" style={{ color: 'var(--color-text-muted)' }}>
                Help shape accounting for Nepal's small businesses.
              </p>
            </Stack>

            <div style={{ backgroundColor: 'var(--color-surface-subtle)', padding: 'var(--spacing-6)', borderRadius: 'var(--radius-lg)' }}>
              <h2 className="t-section-heading" style={{ marginBottom: 'var(--spacing-4)' }}>Pilot Details</h2>
              <ul className="t-body" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', paddingLeft: '1.25rem' }}>
                <li><strong>Who it's for:</strong> Business owners with 1-5 staff dealing with daily sales, purchases, inventory, and credit.</li>
                <li><strong>What you get:</strong> Free access during the controlled pilot period and direct support from the founding team.</li>
                <li><strong>Expectations:</strong> Willingness to test weekly and provide honest feedback.</li>
                <li><strong>Note:</strong> The product is under development. Participation may be limited. Future pricing will be disclosed before paid activation. Pilot participation does not guarantee permanent free access.</li>
              </ul>
            </div>

            <Stack gap="var(--spacing-6)">
              <h2 className="t-section-heading" style={{ textAlign: 'center' }}>Pre-Qualification Form</h2>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-4)' }}>
                  <div>
                    <label htmlFor="ownerName" className="t-label">Owner Name</label>
                    <input type="text" id="ownerName" name="ownerName" required value={formData.ownerName} onChange={handleChange} style={{ width: '100%', padding: 'var(--spacing-2)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="t-label">Phone</label>
                    <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} style={{ width: '100%', padding: 'var(--spacing-2)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }} />
                  </div>
                </div>

                <div>
                  <label htmlFor="businessType" className="t-label">Business Type</label>
                  <select id="businessType" name="businessType" required value={formData.businessType} onChange={handleChange} style={{ width: '100%', padding: 'var(--spacing-2)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                    <option value="">Select...</option>
                    <option value="garments">Garments</option>
                    <option value="footwear">Footwear</option>
                    <option value="cosmetics">Cosmetics</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-2)', marginTop: 'var(--spacing-4)' }}>
                  <input type="checkbox" id="consent" name="consent" required checked={formData.consent} onChange={handleChange} style={{ marginTop: '0.25rem' }} />
                  <label htmlFor="consent" className="t-small">
                    I consent to being contacted regarding the founding pilot. I understand no sensitive business data should be submitted here.
                  </label>
                </div>

                <Button type="submit" size="large" disabled={!formData.consent} style={{ marginTop: 'var(--spacing-4)' }}>
                  {siteConfig.pilotFormUrl ? 'Continue to Full Application' : 'Register Interest'}
                </Button>
              </form>

              {!siteConfig.pilotFormUrl && (
                <div style={{ marginTop: 'var(--spacing-8)', textAlign: 'center', borderTop: '1px solid var(--color-border)', paddingTop: 'var(--spacing-8)' }}>
                  <p className="t-body" style={{ marginBottom: 'var(--spacing-4)' }}>
                    Our pilot groups are currently being organized. For immediate inquiries, contact us directly:
                  </p>
                  <ContactSection />
                </div>
              )}
            </Stack>

          </Stack>
        </Container>
      </Section>
    </>
  );
};

export default Pilot;
