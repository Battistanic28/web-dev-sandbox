import React, { useState } from 'react';
import PropTypes from 'prop-types';
import loginUser from '../middleware/loginUser';

function Login( setToken ) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();


  return (
    <>
      <h2 className="login">Login</h2>
      <form>
      <label>
        <p>Username</p>
        <input
          type="text"
          onChange={e => setUsername(e.target.value)}
        />
      </label>
      <label>
        <p>Password</p>
        <input
          type="text"
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

// Login.PropTypes = {
//   setToken: PropTypes.func.isRequired
// }

export default Login;