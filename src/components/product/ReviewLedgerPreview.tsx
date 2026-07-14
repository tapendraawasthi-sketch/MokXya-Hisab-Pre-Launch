import React from 'react';
import { formatNPR } from '../../utils/format';
import './product.css';

export const ReviewLedgerPreview: React.FC = () => {
  return (
    <div className="product-preview review-ledger-preview">
      <div className="product-preview-header">
        <span className="product-preview-title">Organised for review</span>
        <span className="product-preview-disclosure">Illustrative review view — professional review and judgement remain important.</span>
      </div>
      
      <div className="ledger-table-container">
        <table className="ledger-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Transaction</th>
              <th>Party</th>
              <th className="text-right">Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>14 Jul 2026</td>
              <td>Credit sale</td>
              <td>Ram</td>
              <td className="text-right tabular-nums">{formatNPR(10000)}</td>
              <td><span className="badge badge-success">Confirmed</span></td>
            </tr>
            <tr>
              <td>14 Jul 2026</td>
              <td>Electricity expense</td>
              <td>-</td>
              <td className="text-right tabular-nums">{formatNPR(2500)}</td>
              <td><span className="badge badge-success">Confirmed</span></td>
            </tr>
            <tr>
              <td>14 Jul 2026</td>
              <td>Customer payment</td>
              <td>Sita</td>
              <td className="text-right tabular-nums">{formatNPR(4000)}</td>
              <td><span className="badge badge-success">Confirmed</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
