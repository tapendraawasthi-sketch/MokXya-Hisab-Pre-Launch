import React from 'react';
import { Stack } from '../common/Stack';
import { Cluster } from '../common/Cluster';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export const DashboardPreview: React.FC = () => {
  return (
    <Card elevated style={{ width: '100%', maxWidth: '900px', margin: '0 auto', overflow: 'hidden', padding: 0 }}>
      {/* Mockup Header */}
      <div style={{ backgroundColor: 'var(--color-surface-elevated)', borderBottom: '1px solid var(--color-border)', padding: 'var(--spacing-4)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 'bold', color: 'var(--color-primary-blue)' }}>MokXya Hisab</div>
        <Cluster gap="var(--spacing-4)">
          <Badge variant="neutral">Illustrative figures</Badge>
        </Cluster>
      </div>

      {/* Mockup Body */}
      <div style={{ padding: 'var(--spacing-6)', backgroundColor: 'var(--color-bg-page)' }}>
        <Stack gap="var(--spacing-6)">
          <Cluster justify="space-between" align="center">
            <h3 className="t-section-heading" style={{ fontSize: 'var(--font-size-2xl)' }}>Business Overview</h3>
            <span className="t-small" style={{ color: 'var(--color-text-muted)' }}>Updated just now (Sample data)</span>
          </Cluster>

          {/* Metrics Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-4)' }}>
            <Card style={{ backgroundColor: 'var(--color-surface-elevated)' }}>
              <p className="t-small" style={{ color: 'var(--color-text-muted)' }}>Cash & Bank</p>
              <p className="t-financial" style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', marginTop: 'var(--spacing-2)' }}>NPR 1,24,500</p>
            </Card>
            <Card style={{ backgroundColor: 'var(--color-surface-elevated)' }}>
              <p className="t-small" style={{ color: 'var(--color-text-muted)' }}>Receivables (To Collect)</p>
              <p className="t-financial" style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', marginTop: 'var(--spacing-2)', color: 'var(--color-success)' }}>NPR 45,000</p>
            </Card>
            <Card style={{ backgroundColor: 'var(--color-surface-elevated)' }}>
              <p className="t-small" style={{ color: 'var(--color-text-muted)' }}>Payables (To Pay)</p>
              <p className="t-financial" style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', marginTop: 'var(--spacing-2)', color: 'var(--color-danger)' }}>NPR 12,000</p>
            </Card>
            <Card style={{ backgroundColor: 'var(--color-surface-elevated)' }}>
              <p className="t-small" style={{ color: 'var(--color-text-muted)' }}>Today's Sales</p>
              <p className="t-financial" style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', marginTop: 'var(--spacing-2)' }}>NPR 8,500</p>
            </Card>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--spacing-6)' }}>
            {/* Recent Activity */}
            <Card style={{ backgroundColor: 'var(--color-surface-elevated)' }}>
              <h4 className="t-body" style={{ fontWeight: 'bold', marginBottom: 'var(--spacing-4)' }}>Recent Activity</h4>
              <Stack gap="var(--spacing-3)">
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--spacing-2)' }}>
                  <div>
                    <p className="t-small" style={{ fontWeight: 600 }}>Payment Received: Sita</p>
                    <p className="t-small" style={{ color: 'var(--color-text-muted)' }}>10 mins ago</p>
                  </div>
                  <span className="t-financial t-small" style={{ color: 'var(--color-success)' }}>+ NPR 5,000</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--spacing-2)' }}>
                  <div>
                    <p className="t-small" style={{ fontWeight: 600 }}>Credit Sale: Ram</p>
                    <p className="t-small" style={{ color: 'var(--color-text-muted)' }}>1 hour ago</p>
                  </div>
                  <span className="t-financial t-small">NPR 10,000</span>
                </div>
              </Stack>
            </Card>

            {/* Attention Queue */}
            <Card style={{ backgroundColor: 'var(--color-surface-elevated)' }}>
              <h4 className="t-body" style={{ fontWeight: 'bold', marginBottom: 'var(--spacing-4)' }}>Attention Needed</h4>
              <Stack gap="var(--spacing-3)">
                <div style={{ backgroundColor: '#fef2f2', padding: 'var(--spacing-2)', borderRadius: 'var(--radius-md)', border: '1px solid #fecaca' }}>
                  <p className="t-small" style={{ color: '#b91c1c', fontWeight: 600 }}>Low Stock Warning</p>
                  <p className="t-small" style={{ color: '#991b1b' }}>Item: 'Wai Wai Noodles' (Only 5 left)</p>
                </div>
              </Stack>
            </Card>
          </div>
        </Stack>
      </div>
    </Card>
  );
};
