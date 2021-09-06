import logo from '../../logo-lightblue-2642-991-black-border.png';
import { Link } from 'react-router-dom';

function NavBar () {
   return(
      <nav style={styles.mainContainer}>
         <Link to='/'>
            <img style={styles.logo} src={logo} alt="logo"/>
         </Link>
         <div style={styles.linksContainer}>
            <Link to="/products" style={styles.link}>
               <a>Products</a>
            </Link>
            <Link to="#" style={styles.link}>
               <a>About us</a>
            </Link>
            <Link to="#" style={styles.link}>
               <a>Contact</a>
            </Link>
         </div>
      </nav>
   );
}

const styles = {
   mainContainer: {
      width: '100vw',
      height: '50px',
      backgroundColor: 'var(--helio-orange)',
      paddingLeft: '5px',
      paddingTop: '2.5px',
      borderBottom: '1px solid black',
      display: 'flex',
      justifyContent: 'space-around',
   },
   logo: {
      width: '119.7px',
      height: '45px',
   },
   linksContainer: {
      width: '40vw',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   link: {
      color: 'black',
      textDecoration: 'none',
      fontWeight: '600',
   },
};

export default NavBar;
