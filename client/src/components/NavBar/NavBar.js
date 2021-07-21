import logo from '../../logo-lightblue-2642-991-black-border.png';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar () {
   return(
      <nav id="navbar">
         <Link to='/'>
            <img id="navbar-logo" src={logo} alt="logo"/>
         </Link>
         <div id="navbar-links-container">
            <Link to="/products">
               <a className="navbar-link">Products</a>
            </Link>
            <a className="navbar-link">About us</a>
            <a className="navbar-link">Contact</a>
         </div>
      </nav>
   );
}

export default NavBar;
