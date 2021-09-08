import ProductCrudForm from '../../components/ProductCrudForm';

function AdminPage () {
   return (
      <div style={styles.mainContainer}>
         <ProductCrudForm/>
      </div>
   );
}

const styles = {
   mainContainer: {
      minHeight: 'calc(100vh - 104.1px)'
   },
};

export default AdminPage;
