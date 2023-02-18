import React, { useState } from 'react';
import PropTypes from 'prop-types';
import registerUser from '../middleware/registerUser';

function Register( { setToken } ) {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const handleSubmit = async e => {
    e.preventDefault();
    const token = await registerUser({
      username,
      email,
      password
    });
    console.log('token', token);
    setToken(token);
  }

  return (
    <>
      <h2 className="register">Register</h2>
      <form onSubmit={handleSubmit}>
      <label>
        <p>Username</p>
        <input
          type="text"
          onChange={e => setUsername(e.target.value)}
        />
      </label>
      <label>
        <p>Email</p>
        <input
          type="text"
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        <p>Password</p>
        <input
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </>
  );
}

Register.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Register;