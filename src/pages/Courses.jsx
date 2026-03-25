import React from 'react';
import { COURSES } from '../data/courses';
import { ProgressBar } from '../components/ProgressBar';

export default function Courses() {
  return (
    <div>
      <div className="grid-3">
        {COURSES.map(c => (
          <div key={c.id} className="card">
            <div className="course-thumb" style={{ background: c.color }}>
              {c.emoji}
            </div>
            <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>{c.title}</h3>
            <p style={{ fontSize: 11, color: 'var(--text2)', marginBottom: 12 }}>by {c.creator}</p>
            {c.enrolled && (
              <>
                <div style={{ fontSize: 10, color: 'var(--text3)', marginBottom: 6 }}>Progress: {c.progress}%</div>
                <ProgressBar value={c.progress} height={5} />
              </>
            )}
            <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: 11, color: 'var(--text2)' }}>⭐ {c.rating}</div>
              <button className="btn btn-primary btn-sm">
                {c.enrolled ? 'Continue' : 'Enroll'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
