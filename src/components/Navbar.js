import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';


  const Navbar = () => {
    return (
      <div className='nav'>
        <NavLink className='nav-element' to='/' activeStyle>
            Home
        </NavLink>
        <NavLink className='nav-element' to='/login' activeStyle>
            Login
        </NavLink>
      </div>
    );
  };
    
  export default Navbar;

