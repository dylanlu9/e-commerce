import './index.css';
import ProductCrudForm from '../../components/ProductCrudForm';

function HomePage () {
   return (
      <div id="home-page-main-container">
         <div id="home-page-main-content">
            <ProductCrudForm></ProductCrudForm>
         </div>
      </div>
   );
}

export default HomePage;
