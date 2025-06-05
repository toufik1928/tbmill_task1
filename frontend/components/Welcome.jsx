import React from 'react';

const Welcome = ({ user, onLogout }) => {
  return (
    <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>🎉 Welcome, {user.username}!</h2>
      <button
        onClick={onLogout}
        style={{
          alignItems:'center',
          justifyContent: 'center',
          padding: '10px 20px',
          backgroundColor: 'black',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Welcome;
