// Simple hash function for passwords
export const hashPassword = (pw) => {
  let h = 0x811c9dc5;
  for (let i = 0; i < pw.length; i++) {
    h ^= pw.charCodeAt(i);
    h = (h * 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0') + btoa(pw.split('').reverse().join('')).slice(0, 16);
};

// Create JWT token
export const makeToken = (uid, email, role) => {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = btoa(
    JSON.stringify({
      uid,
      email,
      role,
      iat: Date.now(),
      exp: Date.now() + 86400000 * 7, // 7 days
    })
  );
  const sig = btoa(uid + email + role + 'vibe_secret').slice(0, 16);
  return `${header}.${payload}.${sig}`;
};

// Parse JWT token
export const parseToken = (token) => {
  try {
    const [, p] = token.split('.');
    const d = JSON.parse(atob(p));
    if (d.exp < Date.now()) return null;
    return d;
  } catch {
    return null;
  }
};

// Get current user from localStorage
export const getCurrentUser = () => {
  const token = localStorage.getItem('auth_token');
  if (!token) return null;
  return parseToken(token);
};

// Login user
export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  const user = users[email];
  if (!user) return null;

  const hashedPw = hashPassword(password);
  if (user.pw !== hashedPw) return null;

  const token = makeToken(user.uid, user.email, user.role);
  localStorage.setItem('auth_token', token);
  return user;
};

// Signup user
export const signupUser = (email, password, role) => {
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  if (users[email]) return null; // User already exists

  const uid = 'user_' + Date.now();
  const user = {
    uid,
    email,
    pw: hashPassword(password),
    role,
    createdAt: Date.now(),
  };

  users[email] = user;
  localStorage.setItem('users', JSON.stringify(users));

  const token = makeToken(uid, email, role);
  localStorage.setItem('auth_token', token);
  return user;
};

// Logout user
export const logoutUser = () => {
  localStorage.removeItem('auth_token');
};
