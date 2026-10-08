import React from 'react';

interface SectionHeaderProps {
  index: string;
  tag: string;
  title: string;
  description?: string;
  rightBadge?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  rightBadge
}) => {
  return (
    <div className="section-header">
      {rightBadge && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
          <div className="telemetry-tag telemetry-tag-sm">
            {rightBadge}
          </div>
        </div>
      )}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-desc">{description}</p>}
    </div>
  );
};
