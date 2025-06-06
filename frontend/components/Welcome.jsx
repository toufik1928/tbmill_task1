import React from 'react';

const Welcome = ({ user, onLogout }) => {
  return (
    <div className="container" style={styles.container}>
      <h2 style={styles.heading}>🎉 Welcome, {user.username}!</h2>
      <button onClick={onLogout} style={styles.button}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    maxWidth: '600px', 
    margin: '40px auto', 
    padding: '40px', 
    backgroundColor: '#f9f9f9', 
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
    fontFamily: 'Roboto, sans-serif', 
  },
  heading: {
    fontSize: '2.5em', 
    color: '#333',
    marginBottom: '20px',
  },
  button: {
    padding: '12px 24px',
    fontSize: '1.1em', 
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease', 
  },
  buttonHover: {
    backgroundColor: '#0056b3', 
  },
};

export default Welcome;