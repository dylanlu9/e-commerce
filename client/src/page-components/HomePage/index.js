import ProductCrudForm from '../../components/ProductCrudForm';

function HomePage () {
   return (
      <div style={style}>
         <ProductCrudForm/>
      </div>
   );
}

const style = {
   minHeight: 'calc(100vh - 104.1px)'
};

export default HomePage;
