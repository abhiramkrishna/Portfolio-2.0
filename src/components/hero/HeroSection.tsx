import React from 'react';
import { Download } from 'lucide-react';
import { PROFILE } from '../../data/profile';
import heroPeek from '../../assets/hero-peek.png';

export const HeroSection: React.FC = () => {


  return (
    <section id="hero" className="hero-section" aria-label="Hero Introduction">
      {/* Peeking character illustration — clipped to the right edge */}
      <div className="hero-peek" aria-hidden="true">
        <img src={heroPeek} alt="" className="hero-peek-img" draggable={false} />
      </div>

      <div className="container">
        <div className="hero-content">


          {/* Main Title & Identity */}
          <h1 className="hero-title">
            {PROFILE.name}
          </h1>

          <div className="hero-subtitle">
            <span>{PROFILE.role}</span>
            <span style={{ margin: '0 8px', opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--text-secondary)' }}>DESIGNER · DEVELOPER · 3D ARTIST</span>
          </div>



          <p style={{ maxWidth: '640px', fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-2xl)', lineHeight: 1.6 }}>
            {PROFILE.elevatorPitch}
          </p>

          {/* Action Triggers */}
          <div className="hero-actions">
            <a
              href="/Creative%20Portfolio_Abhiram_.pdf"
              download="Creative Portfolio_Abhiram_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              data-cursor="hover"
              style={{ textDecoration: 'none' }}
            >
              <span>DOWNLOAD RESUME</span>
              <Download size={16} />
            </a>


          </div>


        </div>
      </div>
    </section>
  );
};
