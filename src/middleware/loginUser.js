// TODO: move base URL to config

function loginUser(credentials) {
  return fetch('http://localhost:5000/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

  export default loginUser;