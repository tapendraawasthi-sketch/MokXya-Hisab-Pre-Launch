import React from 'react';
import { useTheme } from '../../app/ThemeProvider';
import { IconButton } from './IconButton';
import { Moon, Sun, Monitor } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const getIcon = () => {
    if (theme === 'light') return <Sun size={20} aria-hidden="true" />;
    if (theme === 'dark') return <Moon size={20} aria-hidden="true" />;
    return <Monitor size={20} aria-hidden="true" />;
  };

  return (
    <IconButton
      onClick={toggleTheme}
      label={`Toggle theme, currently ${theme}`}
      title={`Toggle theme (current: ${theme})`}
    >
      {getIcon()}
    </IconButton>
  );
};
