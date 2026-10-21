import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { PROFILE } from '../../data/profile';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

const MENU_ITEMS = [
  { id: 'hero', index: '01', label: 'INDEX' },
  { id: 'philosophy', index: '02', label: 'EXPERIENCE' },
  { id: 'technology', index: '03', label: 'TECH STACK' },
  { id: 'contact', index: '04', label: 'CONTACT' }
];

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSelect = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="mobile-overlay" role="dialog" aria-modal="true" aria-label="Navigation Menu">
      <div className="mobile-menu-header">
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-cyan)' }}>
          NAVIGATION
        </div>
        <button
          type="button"
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close navigation"
        >
          <X size={16} />
          <span>CLOSE</span>
        </button>
      </div>

      <nav className="mobile-nav-list">
        {MENU_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleSelect(item.id)}
            className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
          >
            <span className="mobile-nav-index">{item.index}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div style={{ marginTop: 'auto', paddingTop: 'var(--space-xl)', borderTop: '1px solid var(--border-subtle)' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)', marginBottom: '8px' }}>
          CONNECT
        </div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="social-coord-link">
            <span>GITHUB</span>
            <ExternalLink size={12} />
          </a>
          <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="social-coord-link">
            <span>LINKEDIN</span>
            <ExternalLink size={12} />
          </a>
          <a href={`mailto:${PROFILE.email}`} className="social-coord-link">
            <span>EMAIL</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};
