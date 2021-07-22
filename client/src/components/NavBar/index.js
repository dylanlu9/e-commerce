import logo from '../../logo-lightblue-2642-991-black-border.png';
import './index.css';
import { Link } from 'react-router-dom';

function NavBar () {
   return(
      <nav id="navbar">
         <Link to='/'>
            <img id="navbar-logo" src={logo} alt="logo"/>
         </Link>
         <div id="navbar-links-container">
            <Link to="/products" className="navbar-link">
               <a>Products</a>
            </Link>
            <Link to="#" className="navbar-link">
               <a>About us</a>
            </Link>
            <Link to="#" className="navbar-link">
               <a>Contact</a>
            </Link>
         </div>
      </nav>
   );
}

export default NavBar;
