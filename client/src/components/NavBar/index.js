import logo from '../../logo-lightblue-2642-991-black-border.png';
import './index.css';
import { Link } from 'react-router-dom';

function NavBar () {
   return(
      <nav className="navbar">
         <Link to='/'>
            <img className="navbar-logo" src={logo} alt="logo"/>
         </Link>
         <div className="navbar-links-container">
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
