import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ALL_TECH_TOOLS } from '../../data/techStack';
import { WireframeLogo } from './WireframeLogo';
import './TechStackSection.css';

export const TechStackSection: React.FC = () => {
  const coreTools = ALL_TECH_TOOLS.filter((t) => t.category === 'core');
  const creativeTools = ALL_TECH_TOOLS.filter((t) => t.category === 'creative');
  const envTools = ALL_TECH_TOOLS.filter((t) => t.category === 'environment');

  return (
    <section id="technology" className="tech-bento-section" aria-label="Tech Stack Section">
      <div className="tech-bento-container">
        
        {/* Section Header */}
        <header className="tech-section-header">
          <div className="section-meta-tag">
            <span className="meta-bracket">[</span>
            <span className="meta-text">03 // TECH STACK & TOOLS</span>
            <span className="meta-bracket">]</span>
          </div>
          <div className="header-flex-row">
            <div>
              <h2 className="tech-main-title">TECH STACK & SOFTWARE</h2>
              <p className="tech-main-subtitle">
                Design software, development runtimes, and creative toolsets.
              </p>
            </div>
          </div>
        </header>

        {/* 3 Box Layout */}
        <div className="tech-three-box-layout">
          
          {/* BOX 1: TECH STACKS */}
          <article className="tech-box">
            <div className="box-header">
              <div className="box-title-group">
                <span className="box-category">ENGINEERING RUNTIMES</span>
                <h3 className="box-heading">Tech Stacks</h3>
              </div>
              <ArrowUpRight size={18} className="box-arrow" />
            </div>
            <div className="box-content-grid">
              {coreTools.map((tool) => (
                <div key={tool.id} className="tool-icon-wrapper" title={tool.name}>
                  <WireframeLogo id={tool.id} size={48} strokeWidth={1.8} />
                  <span className="tool-name-label">{tool.name}</span>
                </div>
              ))}
            </div>
          </article>

          {/* BOX 2: SOFTWARE */}
          <article className="tech-box">
            <div className="box-header">
              <div className="box-title-group">
                <span className="box-category">CREATIVE SUITE</span>
                <h3 className="box-heading">Software</h3>
              </div>
              <ArrowUpRight size={18} className="box-arrow" />
            </div>
            <div className="box-content-grid">
              {creativeTools.map((tool) => (
                <div key={tool.id} className="tool-icon-wrapper" title={tool.name}>
                  <WireframeLogo id={tool.id} size={48} strokeWidth={1.8} />
                  <span className="tool-name-label">{tool.name}</span>
                </div>
              ))}
            </div>
          </article>

          {/* BOX 3: IDEs */}
          <article className="tech-box box-dark">
            <div className="box-header">
              <div className="box-title-group">
                <span className="box-category">DEVELOPMENT</span>
                <h3 className="box-heading">IDE & Environments</h3>
              </div>
              <ArrowUpRight size={18} className="box-arrow" />
            </div>
            <div className="box-content-grid">
              {envTools.map((tool) => (
                <div key={tool.id} className="tool-icon-wrapper" title={tool.name}>
                  <WireframeLogo id={tool.id} size={48} strokeWidth={1.8} />
                  <span className="tool-name-label">{tool.name}</span>
                </div>
              ))}
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};
