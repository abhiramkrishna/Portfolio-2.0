import React from 'react';
import { Menu } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onOpenMobileMenu: () => void;
}

const NAV_ITEMS = [
  { id: 'hero', label: 'INDEX' },
  { id: 'philosophy', label: 'POLYMATH' },
  { id: 'technology', label: 'TECH STACK' },
  { id: 'contact', label: 'CONTACT' }
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onOpenMobileMenu
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar-container" aria-label="Main Navigation">


        <div className="nav-links">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={`nav-link ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            );
          })}
        </div>



        <button
          type="button"
          onClick={onOpenMobileMenu}
          className="mobile-menu-trigger"
          aria-label="Open navigation menu"
        >
          <Menu size={18} />
        </button>
      </nav>
    </div>
  );
};
