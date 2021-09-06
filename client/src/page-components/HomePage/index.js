import ProductCrudForm from '../../components/ProductCrudForm';

function HomePage () {
   return (
      <div style={styles.mainContainer}>
         <ProductCrudForm/>
      </div>
   );
}

const styles = {
   mainContainer: {
      minHeight: 'calc(100vh - 104.1px)'
   }
};

export default HomePage;
