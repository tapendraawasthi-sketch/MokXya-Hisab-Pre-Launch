import React from 'react';
import { formatNPR } from '../../utils/format';
import './product.css';
import { PenSquare, CheckCircle2 } from 'lucide-react';

export const MobileEntryPreview: React.FC = () => {
  return (
    <div className="product-preview mobile-entry-preview">
      <div className="product-preview-header">
        <span className="product-preview-title">Example mobile entry</span>
        <span className="product-preview-disclosure">Illustrative preview</span>
      </div>
      
      <div className="mobile-preview-body">
        <div className="mobile-input-bubble font-devanagari">
          "रामलाई रु १०,००० को सामान उधारो बिक्री गरियो।"
        </div>
        
        <div className="mobile-structured-card">
          <div className="mobile-card-row">
            <span className="mobile-label">Transaction</span>
            <span className="mobile-value">Credit sale</span>
          </div>
          <div className="mobile-card-row">
            <span className="mobile-label">Party</span>
            <span className="mobile-value">Ram</span>
          </div>
          <div className="mobile-card-row">
            <span className="mobile-label">Amount</span>
            <span className="mobile-value tabular-nums">{formatNPR(10000)}</span>
          </div>
          <div className="mobile-card-row">
            <span className="mobile-label">Status</span>
            <span className="mobile-value status-due-text">Due</span>
          </div>
        </div>

        <div className="mobile-actions">
          <button className="mobile-btn mobile-btn-outline">
            <PenSquare size={16} /> Edit
          </button>
          <button className="mobile-btn mobile-btn-primary">
            <CheckCircle2 size={16} /> Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
