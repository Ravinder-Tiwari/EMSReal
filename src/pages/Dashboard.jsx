import React from 'react';
import { ScoreRing } from '../components/ScoreRing';
import { ProgressBar } from '../components/ProgressBar';
import { PROBLEMS } from '../data/problems';
import { COURSES } from '../data/courses';
import { ROADMAP_ITEMS } from '../data/roadmap';

export default function Dashboard() {
  return (
    <div>
      <div className="grid-2" style={{ marginBottom: 36 }}>
        {/* Stats Cards */}
        <div className="card">
          <div style={{ fontSize: 12, color: 'var(--text2)', marginBottom: 8 }}>Total Score</div>
          <div className="stat-num">2,480</div>
          <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 4 }}>+240 this week</div>
        </div>
        <div className="card">
          <div style={{ fontSize: 12, color: 'var(--text2)', marginBottom: 8 }}>Problems Solved</div>
          <div className="stat-num">42</div>
          <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 4 }}>3 more this week</div>
        </div>
        <div className="card">
          <div style={{ fontSize: 12, color: 'var(--text2)', marginBottom: 8 }}>Courses Enrolled</div>
          <div className="stat-num">6</div>
          <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 4 }}>3 in progress</div>
        </div>
        <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ScoreRing score={73} size={120} stroke={8} />
        </div>
      </div>

      {/* Roadmap Progress */}
      <div className="card" style={{ marginBottom: 36 }}>
        <div className="section-header">
          <div className="section-title">Roadmap Progress</div>
          <button className="btn btn-ghost btn-sm">View All →</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {Object.values(ROADMAP_ITEMS).map((track, idx) => {
            const completed = track.items.filter(i => i.done).length;
            const total = track.items.length;
            const progress = (completed / total) * 100;
            return (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>
                    {track.icon} {track.title}
                  </span>
                  <span style={{ fontSize: 11, color: 'var(--text3)' }}>
                    {completed}/{total}
                  </span>
                </div>
                <ProgressBar value={progress} height={6} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Problems */}
      <div className="card">
        <div className="section-header">
          <div className="section-title">Continue Solving</div>
          <button className="btn btn-ghost btn-sm">All Problems →</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {PROBLEMS.slice(0, 3).map(p => (
            <div key={p.id} className="problem-row">
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{p.title}</div>
                <div style={{ fontSize: 11, color: 'var(--text2)' }}>{p.category}</div>
              </div>
              <div className={`badge badge-${p.difficulty.toLowerCase()}`}>
                {p.difficulty}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
