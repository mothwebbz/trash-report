'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleLogout = () => {
    // For now, just redirect to login
    // In a real app, clear auth tokens, etc.
    router.push('/login');
  };

  // Simulate logged-in user (you'd get this from context/auth)
  const userName = 'Budi Santoso';

  return (
    <div style={styles.container}>
      {/* Top Navigation Bar */}
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <span style={styles.brand}>🗑️ TrashReport</span>
        </div>
        <div style={styles.navRight}>
          <span style={styles.userGreeting}>Hello, {userName}</span>
          <button onClick={handleLogout} style={styles.logoutButton}>
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main style={styles.main}>
        <h1 style={styles.welcome}>Welcome to your Dashboard</h1>
        <p style={styles.subtext}>Manage your waste reports efficiently.</p>

        {/* Stats Cards */}
        <div style={styles.cardsContainer}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Total Reports</h3>
            <p style={styles.cardNumber}>12</p>
            <p style={styles.cardSubtext}>+2 this week</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Total Weight</h3>
            <p style={styles.cardNumber}>87.5 kg</p>
            <p style={styles.cardSubtext}>Recycled 70%</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Active Reports</h3>
            <p style={styles.cardNumber}>5</p>
            <p style={styles.cardSubtext}>Pending review</p>
          </div>
        </div>

        {/* Action Button */}
        <div style={styles.actionArea}>
          <Link href="/report/new" style={styles.primaryButton}>
            + New Report
          </Link>
        </div>

        {/* Quick info */}
        <div style={styles.infoBox}>
          <p style={styles.infoText}>
            📌 You can view all your reports from the Reports page.
          </p>
        </div>
      </main>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e0e0e0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
  },
  navLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  brand: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#000000',
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  userGreeting: {
    fontSize: '1rem',
    color: '#333333',
  },
  logoutButton: {
    padding: '0.4rem 1rem',
    backgroundColor: '#f0f0f0',
    color: '#000000',
    border: '1px solid #cccccc',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'background 0.2s',
  },
  main: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '2rem 1.5rem',
  },
  welcome: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    color: '#000000',
  },
  subtext: {
    fontSize: '1.1rem',
    color: '#555555',
    marginBottom: '2rem',
  },
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2.5rem',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    border: '1px solid #eeeeee',
  },
  cardTitle: {
    fontSize: '1rem',
    fontWeight: '500',
    color: '#333333',
    marginBottom: '0.3rem',
  },
  cardNumber: {
    fontSize: '2.2rem',
    fontWeight: '700',
    color: '#000000',
    margin: '0.2rem 0',
  },
  cardSubtext: {
    fontSize: '0.85rem',
    color: '#666666',
  },
  actionArea: {
    marginBottom: '2rem',
  },
  primaryButton: {
    display: 'inline-block',
    padding: '0.75rem 2rem',
    backgroundColor: '#0070f3',
    color: '#ffffff',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'background 0.2s',
  },
  infoBox: {
    backgroundColor: '#f5f5f5',
    padding: '1rem 1.5rem',
    borderRadius: '8px',
    borderLeft: '4px solid #0070f3',
  },
  infoText: {
    margin: 0,
    color: '#333333',
    fontSize: '0.95rem',
  },
};