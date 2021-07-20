import logo from '../logo-lightblue-2642-991-black-border.png';
import './Home.css';

function Home () {
   return (
      <div id="app-container">
      <nav id="navbar">
        <img id="navbar-logo" src={logo} alt="logo"/>
        <div id="navbar-links-container">
          <a>Products</a>
          <a>About us</a>
          <a>Contact</a>
        </div>
      </nav>
      <div id="main-content-container">
      </div>
      <footer id="footer"></footer>
    </div>
   );
}

export default Home;
