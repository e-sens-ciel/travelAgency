import React, { useState } from 'react';
import './register.css';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


  const handleRegister = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('http://localhost:4000/api/register', {
        email,
        password
      });
      setMessage(response.data);
    } catch (error) {
      setMessage(error.response ? error.response.data : 'Ошибка сервера');
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
