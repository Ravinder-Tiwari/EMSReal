import React, { useState } from 'react';
import { loginUser, signupUser } from '../utils/auth';

export default function Login({ onLogin, onShowRoleSelect }) {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      let user;
      if (isSignup) {
        user = signupUser(email, password, role);
        if (!user) {
          setError('Email already registered');
          return;
        }
      } else {
        user = loginUser(email, password);
        if (!user) {
          setError('Invalid email or password');
          return;
        }
      }
      onLogin(user);
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div className="card" style={{ maxWidth: 400, width: '100%' }}>
        <h1 style={{ fontSize: 28, fontWeight: 900, marginBottom: 12, textAlign: 'center' }}>
          Career Router
        </h1>
        <p style={{ color: 'var(--text2)', textAlign: 'center', marginBottom: 32 }}>
          AI-Powered EdTech Platform
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={{ marginBottom: 16 }}
          />

          <label htmlFor="password">Password</label>
          <div className="pw-wrap" style={{ marginBottom: 16 }}>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
            />
            <span
              className="pw-eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </span>
          </div>

          {isSignup && (
            <>
              <label htmlFor="role">Role</label>
              <select
                id="role"
                value={role}
                onChange={e => setRole(e.target.value)}
                style={{ marginBottom: 16 }}
              >
                <option value="student">Student / Job Seeker</option>
                <option value="creator">Course Creator</option>
              </select>
            </>
          )}

          {error && (
            <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1.5px solid rgba(239, 68, 68, 0.25)', borderRadius: 8, padding: 12, marginBottom: 16, color: 'var(--accent3)', fontSize: 13 }}>
              {error}
            </div>
          )}

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginBottom: 16 }}>
            {isSignup ? 'Create Account' : 'Login'}
          </button>

          <button
            type="button"
            className="btn btn-ghost"
            style={{ width: '100%' }}
            onClick={() => {
              setIsSignup(!isSignup);
              setError('');
            }}
          >
            {isSignup ? 'Already have an account? Login' : 'Create new account'}
          </button>
        </form>

        <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1.5px solid var(--border)' }}>
          <p style={{ fontSize: 12, color: 'var(--text3)', marginBottom: 12, textAlign: 'center' }}>
            Demo credentials (for testing):
          </p>
          <div style={{ fontSize: 11, color: 'var(--text2)', fontFamily: 'monospace', background: 'var(--surface2)', padding: 12, borderRadius: 8, lineHeight: 1.6 }}>
            Email: demo@example.com
            <br />
            Password: password123
          </div>
        </div>
      </div>
    </div>
  );
}
