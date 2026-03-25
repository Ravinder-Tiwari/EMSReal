import React from 'react';
import { INTERVIEWS } from '../data/jobs';

export default function Interviews() {
  return (
    <div>
      <div className="grid-2">
        {INTERVIEWS.map(interview => (
          <div key={interview.id} className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ fontSize: 36 }}>{interview.emoji}</div>
              <div>
                <h3 style={{ fontSize: 13, fontWeight: 700 }}>{interview.mentor}</h3>
                <p style={{ fontSize: 11, color: 'var(--text2)' }}>{interview.role}</p>
              </div>
            </div>
            <div style={{ fontSize: 12, marginBottom: 8 }}>
              <span style={{ display: 'block', marginBottom: 4 }}>📅 {interview.date}</span>
              <span style={{ display: 'block', marginBottom: 4 }}>🕐 {interview.time}</span>
              <span style={{ display: 'block' }}>💬 {interview.type}</span>
            </div>
            <div style={{ marginBottom: 12, paddingTop: 12, borderTop: '1.5px solid var(--border)' }}>
              <div style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 4 }}>Expertise:</div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {interview.expertise.map(skill => (
                  <span key={skill} className="badge badge-gray">{skill}</span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 12, fontWeight: 700 }}>₹{interview.price}</span>
              <button className="btn btn-primary btn-sm">Book →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
