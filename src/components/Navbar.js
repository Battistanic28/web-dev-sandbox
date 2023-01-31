import { Link } from "react-router-dom";


function Navbar() {
  return (
    <ul>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/login'}>Login</Link>
      </li>
      <li>
        <Link to={'/dashboard'}>Dashboard</Link>
      </li>
      <li>
        <Link to={'/profile'}>Profile</Link>
      </li>
    </ul>
  );
}

export default Navbar;

