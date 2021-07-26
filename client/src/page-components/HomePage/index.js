import './index.css';
import ProductCrudForm from '../../components/ProductCrudForm';

function HomePage () {
   return (
      <div className="home-page-main-container">
         <div>
            <ProductCrudForm></ProductCrudForm>
         </div>
      </div>
   );
}

export default HomePage;
