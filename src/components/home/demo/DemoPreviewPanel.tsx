import React from 'react';
import type { DemoInterpretation } from '../../../content/demoData';
import { formatNPR } from '../../../utils/format';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Cluster } from '../../common/Cluster';

interface DemoPreviewPanelProps {
  interpretation: DemoInterpretation;
}

export const DemoPreviewPanel: React.FC<DemoPreviewPanelProps> = ({ interpretation }) => {
  return (
    <div className="demo-preview-panel">
      <div className="demo-preview-header">
        <h4 className="t-small" style={{ margin: 0, color: 'var(--color-text-muted)' }}>Structured Preview</h4>
        <span className="demo-badge">Illustrative</span>
      </div>
      
      <div className="demo-preview-grid">
        {interpretation.party && (
          <div className="demo-preview-item">
            <span className="demo-preview-label">Party</span>
            <span className="demo-preview-value">{interpretation.party}</span>
          </div>
        )}
        {interpretation.item && (
          <div className="demo-preview-item">
            <span className="demo-preview-label">Item</span>
            <span className="demo-preview-value">{interpretation.item}</span>
          </div>
        )}
        {interpretation.quantity !== undefined && (
          <div className="demo-preview-item">
            <span className="demo-preview-label">Quantity</span>
            <span className="demo-preview-value">{interpretation.quantity}</span>
          </div>
        )}
        <div className="demo-preview-item">
          <span className="demo-preview-label">Transaction</span>
          <span className="demo-preview-value">{interpretation.transactionType}</span>
        </div>
        {interpretation.amount !== undefined && (
          <div className="demo-preview-item">
            <span className="demo-preview-label">Amount</span>
            <span className="demo-preview-value tabular-nums">{formatNPR(interpretation.amount)}</span>
          </div>
        )}
        {interpretation.paymentMethod && (
          <div className="demo-preview-item">
            <span className="demo-preview-label">Payment Method</span>
            <span className="demo-preview-value">{interpretation.paymentMethod}</span>
          </div>
        )}
        {interpretation.paymentStatus && interpretation.paymentStatus !== 'None' && (
          <div className="demo-preview-item">
            <span className="demo-preview-label">Status</span>
            <Cluster gap="var(--spacing-2)" align="center">
              <span className={`status-dot status-${interpretation.paymentStatus.toLowerCase()}`}></span>
              <span className="demo-preview-value">{interpretation.paymentStatus}</span>
            </Cluster>
          </div>
        )}
      </div>

      <div className="demo-preview-effects">
        <span className="demo-preview-label">Accounting Effect</span>
        <ul className="demo-effect-list">
          {interpretation.accountingEffects.map((effect, idx) => (
            <li key={idx} className="demo-effect-item">
              {effect.type === 'increase' && <TrendingUp size={16} color="var(--color-success)" aria-hidden="true" />}
              {effect.type === 'decrease' && <TrendingDown size={16} color="var(--color-warning)" aria-hidden="true" />}
              {effect.type === 'neutral' && <Minus size={16} color="var(--color-text-muted)" aria-hidden="true" />}
              <span>{effect.description}</span>
            </li>
          ))}
        </ul>
      </div>

      {interpretation.caveats && interpretation.caveats.length > 0 && (
        <div className="demo-preview-caveats">
          {interpretation.caveats.map((caveat, idx) => (
            <p key={idx} className="t-small" style={{ color: 'var(--color-text-muted)', margin: 0 }}>
              <strong>Note:</strong> {caveat}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
