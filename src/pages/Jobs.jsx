import React from 'react';
import { JOBS } from '../data/jobs';

export default function Jobs() {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <input placeholder="Search jobs by title, company, or location..." style={{ marginBottom: 16 }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {JOBS.map(job => (
          <div key={job.id} className="card job-card">
            <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="company-logo">{job.emoji}</div>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 700 }}>{job.title}</h3>
                  <p style={{ fontSize: 11, color: 'var(--text2)' }}>{job.company} • {job.location}</p>
                </div>
              </div>
              <div className="badge badge-green">{job.match}% match</div>
            </div>
            <p style={{ fontSize: 12, color: 'var(--text2)', marginBottom: 12 }}>{job.salary}</p>
            <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
              {job.skills.map(skill => (
                <span key={skill} className="badge badge-blue">{skill}</span>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, borderTop: '1.5px solid var(--border)' }}>
              <span style={{ fontSize: 10, color: 'var(--text3)' }}>
                Posted {job.posted} • {job.applicants} applicants
              </span>
              <button className="btn btn-primary btn-sm">Apply →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
