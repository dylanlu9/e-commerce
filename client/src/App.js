import logo from './logo-lightblue-2642-991-black-border.png';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div id="app-container">
      <nav id="navbar">
        <Link to='/home'>
          <img id="navbar-logo" src={logo} alt="logo"/>
        </Link>
        <div id="navbar-links-container">
          <a>Products</a>
          <a>About us</a>
          <a>Contact</a>
        </div>
      </nav>
      <div id="main-content-container">
        <div id="products-menu-container"></div>
        <div id="products-cards-container">
          <div className="product-card">
            <div className="product-card-image"></div>
            <div className="product-card-title-container">
              <span>Lorem ipsum dolor sit amet, consectetur.</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-card-image"></div>
            <div className="product-card-title-container">
              <span>Lorem ipsum dolor sit amet, consectetur.</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-card-image"></div>
            <div className="product-card-title-container">
              <span>Lorem ipsum dolor sit amet, consectetur.</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-card-image"></div>
            <div className="product-card-title-container">
              <span>Lorem ipsum dolor sit amet, consectetur.</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-card-image"></div>
            <div className="product-card-title-container">
              <span>Lorem ipsum dolor sit amet, consectetur.</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-card-image"></div>
            <div className="product-card-title-container">
              <span>Lorem ipsum dolor sit amet, consectetur.</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-card-image"></div>
            <div className="product-card-title-container">
              <span>Lorem ipsum dolor sit amet, consectetur.</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-card-image"></div>
            <div className="product-card-title-container">
              <span>Lorem ipsum dolor sit amet, consectetur.</span>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer"></footer>
    </div>
  );
}

export default App;
