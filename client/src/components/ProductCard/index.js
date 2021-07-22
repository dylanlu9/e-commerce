import './index.css';
import { Link } from 'react-router-dom';

function ProductCard () {
   return (
      <div className="product-card">
         <Link to="/product">
            <div className="product-card-image"></div>
         </Link>
         <div className="product-card-title-container">
            <Link to="/product" className='product-card-title-link' >
               <span>Lorem ipsum dolor sit amet, consectetur.</span>
            </Link>
         </div>
      </div>
   );
}

export default ProductCard;
