import { React } from "react";
import { useEffect, useState } from "react";
import getAllUsers from "../middleware/getAllUsers";
import kitty from "../images/maxresdefault.jpg"

function Profile() {

  const [ users, setUsers ] = useState();

  useEffect(() => {
    const getUsers = async () => {
      const users = await getAllUsers()

      if (users) {
        setUsers(users.user);
      }
    };

    getUsers()
  }, [setUsers]);

    return (
      <>
      <h2 className="App">Profile</h2>
      <h3>Hack me plz</h3>
      <ul>
        { users &&
          users.map( user => {
            return(
              <li>
                {user.username}
              </li>
            )
          })
        }
      </ul>
      <img src={kitty} alt='kitty' />
      </>
    );
  }
  
  export default Profile;