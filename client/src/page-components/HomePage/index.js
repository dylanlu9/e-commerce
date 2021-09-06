import ProductCrudForm from '../../components/ProductCrudForm';

function HomePage () {
   return (
      <div style={style}>
         <div>
            <ProductCrudForm></ProductCrudForm>
         </div>
      </div>
   );
}

const style = {
   minHeight: 'calc(100vh - 104.1px)'
};

export default HomePage;
