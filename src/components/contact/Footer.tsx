import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const firstName = PROFILE.name.split(' ')[0];

  return (
    <footer className="footer-card-container">
      <div className="footer-card">
        <div className="footer-grid">
          {/* Bio Column */}
          <div className="footer-col-bio">
            <p>{firstName} is an independent {PROFILE.role.toLowerCase()} and {PROFILE.secondaryRoles[0].toLowerCase()}</p>
          </div>

          {/* CTA Column */}
          <div className="footer-col-cta">
            <a href="#contact" className="footer-cta-link">
              <div className="cta-header">
                <span className="cta-title">Connect {firstName}</span>
                <span className="cta-icon-btn"><ArrowUpRight size={14} /></span>
              </div>
              <span className="cta-sub">Let's work together</span>
            </a>
            
            

          </div>
        </div>

        {/* Massive Clipped Text */}
        <div className="footer-massive-clip">
          {firstName.toLowerCase()}
        </div>
        
        {/* Very Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="bottom-left">
            <span>{firstName} ©{currentYear}</span>
            <span className="bottom-dot">·</span>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="bottom-right">
            <span>ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
