import React from 'react';

export const ScoreRing = ({ score, size = 100, stroke = 8, color = 'var(--accent)' }) => {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;

  return (
    <div className="score-ring" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--border)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="score-ring-stroke"
          style={{ transition: 'stroke-dashoffset 0.8s ease' }}
        />
      </svg>
      <div className="score-ring-inner">
        <div className="score-ring-num" style={{ fontSize: size * 0.22, color }}>
          {score}
        </div>
        <div className="score-ring-label" style={{ fontSize: size * 0.09 }}>
          SCORE
        </div>
      </div>
    </div>
  );
};
