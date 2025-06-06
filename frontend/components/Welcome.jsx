// src/components/WelcomePage/Welcome.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './WelcomePage.module.css'; // Import the CSS Module

const WelcomePage = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className={styles.outerContainer}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.navBrand}>YourApp</div>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="/dashboard" onClick={(e) => {e.preventDefault(); navigate('/dashboard');}} className={styles.navLink}>Dashboard</a></li>
          <li className={styles.navItem}><a href="/profile" onClick={(e) => {e.preventDefault(); navigate('/profile');}} className={styles.navLink}>Profile</a></li>
          <li className={styles.navItem}><a href="/settings" onClick={(e) => {e.preventDefault(); navigate('/settings');}} className={styles.navLink}>Settings</a></li>
          <li className={styles.navItem}>
            <button onClick={handleLogout} className={styles.navLogoutButton}>
              Logout
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <div className={styles.card}>
          <h1 className={styles.welcomeText}>
            Hello, <span className={styles.usernameHighlight}>{user.username || user.email}!</span>
          </h1>

          <p className={styles.tagline}>
            You're now logged in and ready to explore.
          </p>

          <div className={styles.buttonGroup}>
            <button onClick={() => navigate('/dashboard')} className={styles.actionButton}>
              Go to Dashboard
            </button>
            
            <button onClick={() => navigate('/settings')} className={styles.secondaryButton}>
              App Settings
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>&copy; {new Date().getFullYear()} YourApp Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WelcomePage;