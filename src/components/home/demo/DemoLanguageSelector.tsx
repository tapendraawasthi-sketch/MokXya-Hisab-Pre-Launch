import React from 'react';
import type { LanguageVariant } from '../../../content/demoData';

interface DemoLanguageSelectorProps {
  selected: LanguageVariant;
  onChange: (lang: LanguageVariant) => void;
  disabled?: boolean;
}

export const DemoLanguageSelector: React.FC<DemoLanguageSelectorProps> = ({ selected, onChange, disabled }) => {
  const languages: LanguageVariant[] = ['English', 'Romanised Nepali', 'Nepali'];

  return (
    <div 
      role="radiogroup" 
      aria-label="Select language for demonstration"
      className="demo-lang-selector"
    >
      {languages.map((lang) => {
        const isSelected = selected === lang;
        return (
          <label 
            key={lang}
            className={`demo-lang-option ${isSelected ? 'selected' : ''} ${disabled ? 'disabled' : ''}`}
          >
            <input
              type="radio"
              name="demo-language"
              value={lang}
              checked={isSelected}
              onChange={() => onChange(lang)}
              disabled={disabled}
              className="sr-only"
            />
            <span>{lang}</span>
          </label>
        );
      })}
    </div>
  );
};
