import React from 'react';
import { PROBLEMS } from '../data/problems';

export default function Problems() {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <input placeholder="Search problems..." style={{ marginBottom: 16 }} />
      </div>
      <div className="grid-2">
        {PROBLEMS.map(p => (
          <div key={p.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 12 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700 }}>{p.title}</h3>
              <span className={`badge badge-${p.difficulty.toLowerCase()}`}>{p.difficulty}</span>
            </div>
            <p style={{ fontSize: 12, color: 'var(--text2)', marginBottom: 12, lineHeight: 1.5 }}>{p.description.split('\n')[0]}</p>
            <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
              {p.tags.slice(0, 2).map(tag => (
                <span key={tag} className="badge badge-gray">{tag}</span>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 11, color: 'var(--text3)' }}>Acceptance: {p.acceptance}%</span>
              <button className="btn btn-primary btn-sm">Solve →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
