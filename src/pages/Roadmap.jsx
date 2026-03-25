import React, { useState } from 'react';
import { ROADMAP_ITEMS } from '../data/roadmap';

export default function Roadmap() {
  const [selectedTrack, setSelectedTrack] = useState(null);

  return (
    <div>
      <div className="grid-2" style={{ marginBottom: 28 }}>
        {Object.entries(ROADMAP_ITEMS).map(([key, track]) => {
          const completed = track.items.filter(i => i.done).length;
          const total = track.items.length;
          return (
            <div
              key={key}
              className="card roadmap-card"
              onClick={() => setSelectedTrack(key)}
              style={{ cursor: 'pointer' }}
            >
              <div className="roadmap-card-icon">{track.icon}</div>
              <h3 className="roadmap-card-title">{track.title}</h3>
              <p className="roadmap-card-desc">
                {completed}/{total} topics completed
              </p>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn btn-primary btn-sm">Learn →</button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedTrack && (
        <div className="card">
          <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 20 }}>
            {ROADMAP_ITEMS[selectedTrack].title}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {ROADMAP_ITEMS[selectedTrack].items.map(item => (
              <div key={item.id} className="rm-topic-row">
                <div
                  className={`rm-topic-check ${item.done ? 'done' : ''}`}
                  style={{
                    background: item.done ? 'var(--accent)' : 'transparent',
                    borderColor: item.done ? 'var(--accent)' : 'var(--border)',
                  }}
                >
                  {item.done && '✓'}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{item.title}</div>
                  <div className="rm-topic-meta">
                    {item.subtopics.map((st, i) => (
                      <span key={i} style={{ fontSize: 10, color: 'var(--text3)' }}>
                        {st}
                        {i < item.subtopics.length - 1 ? ' • ' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
