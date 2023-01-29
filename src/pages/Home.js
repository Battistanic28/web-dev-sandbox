import { Link } from "react-router-dom";


function Home() {
  return (
    <ul>
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

export default Home;