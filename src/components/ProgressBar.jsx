import React from 'react';

export const ProgressBar = ({ 
  value, 
  color = 'linear-gradient(90deg, var(--accent), var(--accent-mid))', 
  height = 8 
}) => {
  return (
    <div className="progress-bar" style={{ height }}>
      <div
        className="progress-fill"
        style={{
          width: `${Math.min(value, 100)}%`,
          background: color,
          height,
        }}
      />
    </div>
  );
};
