function loginUser(credentials) {
  return fetch('http://localhost:3000/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

  export default loginUser;