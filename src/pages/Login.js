import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate(); // Initialize the navigate function
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    /*
    try {
      const response = await fetch('api link here', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Login Successful
        console.log('Login successful', data);
        navigate('/main'); // Redirect to main page on successful login
      } else {
        // Login Failed
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
    */
   // NAVIGATES TO MAIN PAGE WHEN LOGIN CLICKED FOR NOW
    navigate('/main');
  };

  return (
    <div className="App">
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;