import React, { useState } from 'react';
import { ROLES } from '../data/roadmap';

export const RoleSelectModal = ({ onSelect, onClose }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="auth-modal-bg" onClick={onClose}>
      <div
        style={{
          background: 'var(--surface)',
          border: '1.5px solid var(--border)',
          borderRadius: 20,
          padding: 36,
          maxWidth: 500,
          width: '100%',
          animation: 'fadeIn 0.25s ease',
          position: 'relative',
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            background: 'none',
            border: 'none',
            color: 'var(--text3)',
            fontSize: 18,
            cursor: 'pointer',
            padding: '4px 8px',
          }}
          onClick={onClose}
        >
          ✕
        </button>

        <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>
          Choose Your Path
        </h2>
        <p style={{ fontSize: 14, color: 'var(--text2)', marginBottom: 32 }}>
          Select your role to get personalized learning recommendations
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {ROLES.map(role => (
            <div
              key={role.id}
              className="role-card"
              onMouseEnter={() => setHovered(role.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => onSelect(role.id)}
              style={{
                opacity: hovered && hovered !== role.id ? 0.6 : 1,
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 12 }}>{role.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 6 }}>
                {role.title}
              </h3>
              <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.5 }}>
                {role.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
