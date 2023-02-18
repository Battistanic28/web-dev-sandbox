// TODO: move base URL to config

function getAllUsers() {
    return fetch('http://localhost:5000/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
      .then(data => data.json())
   }

export default getAllUsers;