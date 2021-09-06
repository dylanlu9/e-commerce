import ProductCard from '../../components/ProductCard';

function ProductsPage() {
  return (
    <div style={styles.mainContentContainer}>
      <div style={styles.menuContainer}></div>
      <div style={styles.cardsContainer}>
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

const styles = {
  mainContentContainer: {
    minHeight: 'calc(100vh - 104.1px)',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  },
  menuContainer: {
    width: '27.5vw',
    height: 'calc(100vh - 165px)',
    backgroundColor: 'var(--helio-orange)',
    border: '1px solid black',
    borderRadius: '10px',
  },
  cardsContainer: {
    width: '62.5vw',
    minHeight: 'calc(100vh - 165px)',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    gridColumnGap: '12px',
    gridRowGap: '12px',
  },
};

export default ProductsPage;
