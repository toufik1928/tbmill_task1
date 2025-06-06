// Welcome.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you use React Router

const Welcome = ({ user, onLogout }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    onLogout();
    // Redirect to login or home page after logout
    navigate('/login'); 
  };

  return (
    <div style={styles.outerContainer}>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <div style={styles.navBrand}>YourAppLogo</div>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="#" style={styles.navLink} onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }}>Dashboard</a></li>
          <li style={styles.navItem}><a href="#" style={styles.navLink} onClick={(e) => { e.preventDefault(); navigate('/profile'); }}>Profile</a></li>
          <li style={styles.navItem}><a href="#" style={styles.navLink} onClick={(e) => { e.preventDefault(); navigate('/settings'); }}>Settings</a></li>
          <li style={styles.navItem}>
            <button 
              onClick={handleLogout} 
              style={styles.navLogoutButton}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.navLogoutButtonHover.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.navLogoutButton.backgroundColor}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>

      <div style={styles.innerContainer}>
        {/* Dynamic welcome message */}
        <h1 style={styles.welcomeText}>
          Welcome, <span style={styles.usernameHighlight}>{user.username}</span>!
        </h1>

        <p style={styles.tagline}>
          Your journey begins here. What would you like to do next?
        </p>

        <div style={styles.buttonGroup}>
          {/* Example Action Buttons */}
          <button 
            onClick={() => navigate('/dashboard')} 
            style={styles.actionButton}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.actionButtonHover.backgroundColor}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.actionButton.backgroundColor}
          >
            Go to Dashboard
          </button>
          
          <button 
            onClick={() => navigate('/settings')} 
            style={styles.actionButton}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.actionButtonHover.backgroundColor}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.actionButton.backgroundColor}
          >
            View Settings
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>&copy; {new Date().getFullYear()} YourApp Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

// --- Styles for a Modern Look ---
const styles = {
  outerContainer: {
    display: 'flex',
    flexDirection: 'column', // Arrange children vertically
    minHeight: '100vh', // Full viewport height
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', // Subtle gradient background
    fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif", // Modern sans-serif font stack
    color: '#333',
    boxSizing: 'border-box', // Include padding in element's total width and height
  },
  
  // Navbar Styles
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 40px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    flexShrink: 0, // Prevent navbar from shrinking
  },
  navBrand: {
    fontSize: '1.8em',
    fontWeight: '700',
    color: '#007bff', // Brand color
  },
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    gap: '30px', // Space between nav items
  },
  navItem: {
    // No specific style for li, handled by navLink
  },
  navLink: {
    textDecoration: 'none',
    color: '#555',
    fontSize: '1.05em',
    fontWeight: '500',
    padding: '5px 0',
    position: 'relative',
    transition: 'color 0.3s ease',
  },
  navLinkHover: {
    color: '#007bff',
  },
  // Add an underline effect on hover (CSS pseudo-elements)
  // This cannot be done purely inline, you'd need a CSS file or styled-components
  // Example if using a CSS file:
  // .navLink::after {
  //   content: '';
  //   position: absolute;
  //   width: 0;
  //   height: 2px;
  //   background: #007bff;
  //   left: 0;
  //   bottom: -5px;
  //   transition: width 0.3s ease;
  // }
  // .navLink:hover::after {
  //   width: 100%;
  // }
  
  navLogoutButton: {
    padding: '8px 18px',
    fontSize: '0.95em',
    color: '#fff',
    backgroundColor: '#dc3545', // Logout button color
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  navLogoutButtonHover: {
    backgroundColor: '#c82333',
  },

  // Main Content Container Styles
  innerContainer: {
    flexGrow: 1, // Allows inner container to take up remaining space
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', // Deeper, softer shadow
    padding: '60px 40px', // More internal padding
    textAlign: 'center',
    maxWidth: '600px',
    width: '100%',
    margin: '40px auto', // Auto margins for centering
    animation: 'fadeIn 0.8s ease-out', // Subtle fade-in animation
    position: 'relative', 
  },
  welcomeText: {
    fontSize: '3em', 
    fontWeight: '700', 
    color: '#2c3e50', 
    marginBottom: '15px',
  },
  usernameHighlight: {
    color: '#007bff', 
  },
  tagline: {
    fontSize: '1.2em',
    color: '#555',
    marginBottom: '40px',
    lineHeight: '1.5',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px', 
    marginBottom: '30px',
    flexWrap: 'wrap', 
  },
  actionButton: {
    padding: '15px 30px',
    fontSize: '1.1em',
    fontWeight: '600',
    color: '#fff',
    backgroundColor: '#007bff', 
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0, 123, 255, 0.2)', 
    transition: 'background-color 0.3s ease, transform 0.2s ease', 
  },
  actionButtonHover: { 
    backgroundColor: '#0056b3',
    transform: 'translateY(-2px)', 
  },

  // Footer Styles
  footer: {
    backgroundColor: '#333', // Dark background for footer
    color: '#aaa', // Lighter text color
    padding: '20px 40px',
    textAlign: 'center',
    fontSize: '0.9em',
    flexShrink: 0, // Prevent footer from shrinking
    marginTop: 'auto', // Pushes footer to the bottom
  },
  footerText: {
    margin: 0,
  },
};

export default Welcome;