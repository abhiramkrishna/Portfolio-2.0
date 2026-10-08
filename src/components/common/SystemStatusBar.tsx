import React from 'react';
import { Sun, Moon } from 'lucide-react';
import type { Theme } from '../../hooks/useTheme';

interface SystemStatusBarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export const SystemStatusBar: React.FC<SystemStatusBarProps> = ({
  theme,
  onToggleTheme
}) => {
  return (
    <div className="theme-toggle-fab">
      <button
        type="button"
        onClick={onToggleTheme}
        className="fab-button"
        title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
        aria-label="Toggle visual theme"
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  );
};
