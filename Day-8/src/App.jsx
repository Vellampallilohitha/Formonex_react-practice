import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [userType, setUserType] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !mobile || !userType) {
      setError('All fields are required.');
      return;
    }

    setError('');
    setSubmitted(true);
  }

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Enter your mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <div>
          <label>
            <input
              type="radio"
              value="Student"
              checked={userType === 'Student'}
              onChange={(e) => setUserType(e.target.value)}
            />
            Student
          </label>
          <label>
            <input
              type="radio"
              value="Teacher"
              checked={userType === 'Teacher'}
              onChange={(e) => setUserType(e.target.value)}
            />
            Teacher
          </label>
          <label>
            <input
              type="radio"
              value="Visitor"
              checked={userType === 'Visitor'}
              onChange={(e) => setUserType(e.target.value)}
            />
            Visitor
          </label>
        </div>

        <button type="submit">Login</button>
      </form>

      {error && <p className="error">{error}</p>}

      {submitted && (
        <div className="success">
          <h2>Login Successful!</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Mobile:</strong> {mobile}</p>
          <p><strong>User Type:</strong> {userType}</p>
        </div>
      )}
    </>
  );
}

export default App;