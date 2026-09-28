'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, we just redirect to the home page.
    // In a real app, you'd validate credentials via an API.
    // Simulate successful login:
    router.push('/');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Log In</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Log In
          </button>
        </form>
        <p style={styles.footerText}>
          Don't have an account? <Link href="/register" style={styles.link}>Register</Link>
        </p>
      </div>
    </div>
  );
}

// Same styles as Register page – clean white card, black text
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
    color: '#000000',
  },
  title: {
    textAlign: 'center',
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    fontWeight: '600',
    color: '#000000',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem',
  },
  label: {
    fontWeight: '500',
    color: '#333333',
  },
  input: {
    padding: '0.6rem',
    border: '1px solid #cccccc',
    borderRadius: '6px',
    fontSize: '1rem',
    backgroundColor: '#ffffff',
    color: '#000000',
    outline: 'none',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#0070f3',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '0.5rem',
    transition: 'background 0.2s',
  },
  footerText: {
    textAlign: 'center',
    marginTop: '1.2rem',
    color: '#333333',
  },
  link: {
    color: '#0070f3',
    textDecoration: 'none',
    fontWeight: '500',
  },
};