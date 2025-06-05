import React, { useState } from 'react';
import "../src/style.css";

const AuthForm = ({ onAuthSuccess }) => {
  
  const [isLogin, setLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const resetForm = () => {
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleLogin = async () => {
    setError('');
    setMessage('');

    if (!username || !password) {
      setError('All fields are required.');
      return;
    }

    try {
      const res = await fetch('https://tbmill-task1.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || 'Login failed');
      } else {
        resetForm();
        onAuthSuccess(data.user || { username }); // Trigger context login
      }
    } catch (err) {
      setError('Server error');
    }
  };

  const handleRegister = async () => {
    setError('');
    setMessage('');

    if (!username || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const res = await fetch('https://tbmill-task1.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || 'Registration failed');
      } else {
        setMessage('Registration successful! Please log in.');
        resetForm();
        setLogin(true);
      }
    } catch (err) {
      setError('Server error');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button className={isLogin ? 'active' : ''} onClick={() => setLogin(true)}>Login</button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setLogin(false)}>SignUp</button>
        </div>

        {isLogin ? (
          <div className="form">
            <h2>Login Form</h2>
            <input type="text" placeholder="Enter a UserName" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Enter a Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <p>Not a User? <a href="#" onClick={() => setLogin(false)}>SignUp</a></p>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
          </div>
        ) : (
          <div className="form">
            <h2>SignUp Form</h2>
            <input type="text" placeholder="Enter UserName" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button onClick={handleRegister}>SignUp</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
