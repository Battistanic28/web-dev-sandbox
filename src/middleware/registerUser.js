// TODO: move base URL to config

function registerUser(payload) {
    return fetch('http://localhost:5000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(data => data.json())
   }
  
    export default registerUser;