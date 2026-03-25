import React, { useState } from 'react';

export default function Resume() {
  const [resumeData, setResumeData] = useState({
    name: 'Your Name',
    title: 'Full Stack Developer',
    email: 'your.email@example.com',
    phone: '+91-9999999999',
    summary: 'Passionate developer with 2+ years of experience in building scalable web applications.',
    experience: [
      {
        company: 'Tech Company',
        role: 'Senior Developer',
        duration: '2022 - Present',
        points: ['Led development of core features', 'Improved performance by 40%'],
      },
    ],
    skills: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'CSS', 'Git'],
  });

  return (
    <div className="grid-2">
      {/* Editor */}
      <div>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Edit Resume</h2>
        <div className="card" style={{ marginBottom: 16 }}>
          <label>Full Name</label>
          <input
            value={resumeData.name}
            onChange={e => setResumeData({ ...resumeData, name: e.target.value })}
          />
        </div>
        <div className="card" style={{ marginBottom: 16 }}>
          <label>Professional Title</label>
          <input
            value={resumeData.title}
            onChange={e => setResumeData({ ...resumeData, title: e.target.value })}
          />
        </div>
        <div className="card" style={{ marginBottom: 16 }}>
          <label>Email</label>
          <input
            value={resumeData.email}
            onChange={e => setResumeData({ ...resumeData, email: e.target.value })}
          />
        </div>
        <div className="card">
          <label>Phone</label>
          <input
            value={resumeData.phone}
            onChange={e => setResumeData({ ...resumeData, phone: e.target.value })}
          />
        </div>
      </div>

      {/* Preview */}
      <div>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Preview</h2>
        <div className="resume-preview">
          <div className="resume-name">{resumeData.name}</div>
          <div className="resume-title">{resumeData.title}</div>
          <div style={{ fontSize: 11, color: '#666', marginBottom: 18 }}>
            {resumeData.email} • {resumeData.phone}
          </div>

          <div className="resume-section">
            <h3>Professional Summary</h3>
            <p style={{ fontSize: 12, lineHeight: 1.6 }}>{resumeData.summary}</p>
          </div>

          <div className="resume-section">
            <h3>Skills</h3>
            <p style={{ fontSize: 12 }}>{resumeData.skills.join(' • ')}</p>
          </div>
        </div>

        <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
          <button className="btn btn-primary">Download PDF</button>
          <button className="btn btn-ghost">Share</button>
        </div>
      </div>
    </div>
  );
}
