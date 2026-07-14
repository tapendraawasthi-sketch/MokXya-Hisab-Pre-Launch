import React from 'react';
import { demoExamples } from '../../../content/demoData';

interface DemoExampleSelectorProps {
  selectedId: string;
  onChange: (id: string) => void;
  disabled?: boolean;
}

export const DemoExampleSelector: React.FC<DemoExampleSelectorProps> = ({ selectedId, onChange, disabled }) => {
  return (
    <div className="demo-example-selector">
      <label htmlFor="demo-example-select" className="sr-only">
        Select a transaction example
      </label>
      <select
        id="demo-example-select"
        value={selectedId}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="demo-select"
      >
        {demoExamples.map(example => (
          <option key={example.id} value={example.id}>
            {example.title}
          </option>
        ))}
      </select>
    </div>
  );
};
