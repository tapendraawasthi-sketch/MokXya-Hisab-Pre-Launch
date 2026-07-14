import React from 'react';
import { Container } from '../../common/Container';
import { Stack } from '../../common/Stack';
import { Cluster } from '../../common/Cluster';
import { capabilitiesContent } from '../../../content/home';
import { BusinessOverviewPreview } from '../../product/BusinessOverviewPreview';
import type { StatusType, Capability } from '../../../types/content';
import './capabilities.css';

const getStatusBadge = (status: StatusType) => {
  switch (status) {
    case 'pilot':
      return { label: 'Available in pilot', className: 'cap-badge-pilot' };
    case 'planned':
      return { label: 'Planned', className: 'cap-badge-planned' };
    case 'illustrative':
      return { label: 'Illustrative', className: 'cap-badge-illustrative' };
    case 'current':
    default:
      return null;
  }
};

export const CapabilitiesSection: React.FC = () => {
  // Group capabilities
  const dailyRecords = capabilitiesContent.items.slice(0, 4); // Sales, Purchases, Expenses, Customer dues
  const businessTracking = capabilitiesContent.items.slice(4, 6); // Cash/QR, Stock
  const review = capabilitiesContent.items.slice(6, 8); // Reports, Accountant-ready review

  const renderCapabilityList = (title: string, items: Capability[]) => (
    <div className="cap-group">
      <h3 className="t-h3 cap-group-title">{title}</h3>
      <div className="cap-list">
        {items.map((item) => {
          const badge = getStatusBadge(item.status);
          return (
            <div key={item.id} className="cap-item">
              <Cluster justify="space-between" align="flex-start" className="cap-item-header">
                <span className="cap-item-title">{item.title}</span>
                {badge && (
                  <span className={`cap-badge ${badge.className}`}>
                    {badge.label}
                  </span>
                )}
              </Cluster>
              <p className="t-small cap-item-desc">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="capabilities" className="capabilities-section">
      <Container>
        <Stack gap="var(--spacing-16)" align="center">
          <h2 className="t-h2 cap-heading">
            {capabilitiesContent.heading}
          </h2>
          
          <div className="capabilities-layout">
            <div className="cap-content-col">
              <Stack gap="var(--spacing-12)">
                {renderCapabilityList('Daily records', dailyRecords)}
                {renderCapabilityList('Business tracking', businessTracking)}
                {renderCapabilityList('Review', review)}
              </Stack>
            </div>
            <div className="cap-visual-col">
              <div className="cap-sticky-visual">
                <BusinessOverviewPreview />
              </div>
            </div>
          </div>
        </Stack>
      </Container>
    </section>
  );
};
