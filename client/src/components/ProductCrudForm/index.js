import { useState } from 'react';
import H2 from '../H2';
import UploadImageIcon from './outline_file_upload_black_24dp.png';

function ProductCrudForm () {

   const [methodSelected, setMethodSelected] = useState('create');
   const [readBy, setReadBy] = useState('');
   const [updateBy, setUpdateBy] = useState('');

   const [productNameToCreate, setProductNameToCreate] = useState('');
   const [productDetailsToCreate, setProductDetailsToCreate] = useState('');
   const [productPriceToCreate, setProductPriceToCreate] = useState('');
   const [productStockToCreate, setProductStockToCreate] = useState('');
   const [productImageToCreate, setProductImageToCreate] = useState('');

   const [fileInput, setfileInput] = useState({});

   async function handleSubmit (event) {
      // Prepare data to send in the request.
      const data = new FormData();
      data.append('productData', JSON.stringify({
         title: productNameToCreate,
         category: 'Test category',
         description: productDetailsToCreate,
         price: parseInt(productPriceToCreate),
         imgUrl: 'asdasdas',
         availability: false,
         stock: parseInt(productStockToCreate)
      }));
      data.append('image', fileInput );
      // Send request to upload image and add product row.
      const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;
      await fetch(`${SERVER_HOST}/products`, {
         method: 'POST',
         body: data
      });
   }

   let ProductCrudFormComponent;
   switch (methodSelected) {
      case 'create':
         ProductCrudFormComponent =
            <div style={styles.actualForm}>
               Product's data:
               <input style={styles.actualFormNameInput} placeholder="Name"
                  onChange={(event) => {setProductNameToCreate(event.target.value)}}/>
               <input style={styles.actualFormDetailsInput} placeholder="Details"
                  onChange={(event) => {setProductDetailsToCreate(event.target.value)}}/>
               <input style={styles.actualFormPriceInput}
                  type="number" placeholder="Price"
                  onChange={(event) => {setProductPriceToCreate(event.target.value)}}/>
               <input style={styles.actualFormStockInput}
                  type="number" placeholder="Stock"
                  onChange={(event) => {setProductStockToCreate(event.target.value)}}/>
               <span>Image:</span>
               <label style={styles.actualFormUploadImageLabel}>
                  <input style={styles.actualFormUploadImageInput}
                     type="file" onChange={e => setfileInput(e.target.files[0])}/>
               </label>
               <button onClick={handleSubmit}>Add</button>
            </div>
         break;
      case 'read':

         let placeholder;
         switch (readBy) {
            case 'name':
               placeholder = 'Name';
               break;
            case 'id':
               placeholder = 'Id';
               break;
            default:
               break;
         }

         ProductCrudFormComponent =
            <div style={styles.actualForm}>

               Select product by:
               <div style={styles.readOptionsContainer}>
                  <div>
                     <span>Name</span>
                     <input type="radio" name="read-filter-option"
                        onClick={() => setReadBy('name')}/>
                  </div>
                  <div>
                     <span>ID</span>
                     <input type="radio" name="read-filter-option"
                        onClick={() => setReadBy('id')}/>
                  </div>
               </div>

               { 
                  placeholder !== undefined ? 
                  <input style={styles.actualFormReadNameInput} placeholder={placeholder}/> :
                  null
               }

               <button>Get</button>
            </div>
         break;

      case 'update':

         let updatePlaceholder;
         switch (updateBy) {
            case 'name':
               updatePlaceholder = 'Name';
               break;
            case 'id':
               updatePlaceholder = 'Id';
               break;
            default:
               break;
         }

         ProductCrudFormComponent =
            <div style={styles.actualForm}>

               Select product by:
               <div>
                  <div>
                     <span>Name</span>
                     <input type="radio" name="update-filter-option"
                        onClick={() => setUpdateBy('name')}/>
                  </div>
                  <div>
                     <span>ID</span>
                     <input type="radio" name="update-filter-option"
                        onClick={() => setUpdateBy('id')}/>
                  </div>
               </div>

               { 
                  updatePlaceholder !== undefined ? 
                  <input placeholder={updatePlaceholder}/> :
                  null
               }

               <button>Select</button>
            </div>;

         break;
      default:
         ProductCrudFormComponent =
            <div>
            </div>;
         break;
   }

   return (
      <div style={styles.mainContainer}>
         <H2>Products CRUD form</H2>
         <span>Select the operation you want to perform:</span>
         <div style={styles.methodsSelectorContainer}>
            <button
               style={methodSelected === 'create' ? styles.buttonSelected : styles.button }
               onClick={() => setMethodSelected('create')}>
               Create
            </button>
            <button 
               style={methodSelected === 'read' ? styles.buttonSelected : styles.button }    
               onClick={() => setMethodSelected('read')}>
               Read
            </button>
            <button
               style={methodSelected === 'update' ? styles.buttonSelected : styles.button }
               onClick={() => setMethodSelected('update')}>
               Update
            </button>
            <button
               style={methodSelected === 'delete' ? styles.buttonSelected : styles.button }
               onClick={() => setMethodSelected('delete')}>
               Delete
            </button>
         </div>
         <br />
         { ProductCrudFormComponent }
      </div>
   );
}

const styles = {
   mainContainer: {
      width: '50%',
      height: '50%',
      backgroundColor: 'var(--helio-orange)',
      borderRadius: '10px',
      border: '1px solid black',
      padding: '0px 20px 20px 20px',
      margin: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   },
   methodsSelectorContainer: {
      width: '80%',
      height: '30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '10px',
   },
   button: {
      borderRadius: '10px',
   },
   buttonSelected: {
      borderRadius: '10px',
      backgroundColor: 'orange',
   },
   actualForm: {
      backgroundColor: 'lightgray',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid black',
      marginTop: '-10px',
      padding: '20px',
      borderRadius: '10px',
   },
   actualFormNameInput: {
      marginTop: '20px',
   },
   actualFormDetailsInput: {
      marginTop: '10px',
   },
   actualFormPriceInput: {
      marginTop: '10px',
   },
   actualFormStockInput: {
      marginTop: '10px',
      marginBottom: '20px',
   },
   actualFormUploadImageInput: {
      visibility: 'hidden',
   },
   actualFormUploadImageLabel: {
      marginTop: '10px',
      marginBottom: '20px',
      border: '1px solid gray',
      backgroundColor: 'white',
      width: '24px',
      height: '24px',
      position: 'relative',
      borderRadius: '10px',
      background: `url(${UploadImageIcon})`,
   },
   readOptionsContainer: {
      width: '60%',
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '5px',
      marginBottom: '20px',
   },
   actualFormReadNameInput: {
      marginTop: '-10px',
      marginBottom: '10px',
   },
};

export default ProductCrudForm;