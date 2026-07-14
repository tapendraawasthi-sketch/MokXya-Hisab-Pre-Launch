import React from 'react';
import { formatNPR } from '../../utils/format';
import './product.css';

export const BusinessOverviewPreview: React.FC = () => {
  return (
    <div className="product-preview business-overview-preview">
      <div className="product-preview-header">
        <span className="product-preview-title">Example business overview</span>
        <span className="product-preview-disclosure">Illustrative preview</span>
      </div>
      
      <div className="product-preview-body">
        <div className="metric-grid">
          <div className="metric-card">
            <span className="metric-label">Today's Sales</span>
            <span className="metric-value tabular-nums">{formatNPR(48500)}</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">Expenses</span>
            <span className="metric-value tabular-nums">{formatNPR(6250)}</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">Customer Dues</span>
            <span className="metric-value tabular-nums">{formatNPR(32000)}</span>
          </div>
        </div>

        <div className="recent-activity">
          <span className="section-label">Recent Entries</span>
          <ul className="activity-list">
            <li className="activity-item">
              <span>Credit sale to Ram</span>
              <span className="tabular-nums font-medium">{formatNPR(10000)}</span>
            </li>
            <li className="activity-item">
              <span>Electricity expense</span>
              <span className="tabular-nums font-medium">{formatNPR(2500)}</span>
            </li>
            <li className="activity-item">
              <span>Payment received from Sita</span>
              <span className="tabular-nums font-medium">{formatNPR(4000)}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
