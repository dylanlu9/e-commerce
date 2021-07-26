import './index.css';
import ProductCard from '../../components/ProductCard';

function ProductsPage() {
  return (
    <div className="main-content-container">
      <div className="products-menu-container"></div>
      <div className="products-cards-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default ProductsPage;
