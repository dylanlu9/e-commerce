import './index.css';
import { useState } from 'react';
import H2 from '../H2';

function ProductCrudForm () {

   const [methodSelected, setMethodSelected] = useState('create');
   const [readBy, setReadBy] = useState('');
   const [updateBy, setUpdateBy] = useState('');

   let ProductCrudFormComponent;
   switch (methodSelected) {
      case 'create':
         ProductCrudFormComponent =
            <div className="product-crud-form-actual-form">
               Product's data:
               <input className="product-crud-form-actual-form-name-input" placeholder="Name"/>
               <input className="product-crud-form-actual-form-details-input" placeholder="Details"/>
               <input className="product-crud-form-actual-form-price-input"
                  type="number" placeholder="Price"/>
               <input className="product-crud-form-actual-form-stock-input"
                  type="number" placeholder="Stock"/>
               <span>Image:</span>
               <button className="product-crud-form-actual-form-upload-image-button">Upload...</button>
               <button>Add</button>
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
            <div className="product-crud-form-actual-form">

               Select product by:
               <div className="product-crud-form-read-options-container">
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
                  <input className="product-crud-form-actual-form-read-name-input" placeholder={placeholder}/> :
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
            <div className="product-crud-form-actual-form">

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
      <div className="product-crud-form-main-container">
         <H2>Products CRUD form</H2>
         <span>Select the operation you want to perform:</span>
         <div className="product-crud-form-methods-selector-container">
            <button
               className="product-crud-form-button"
               style={{'background-color': methodSelected === 'create' ? 'orange' : 'white'}}
               onClick={() => setMethodSelected('create')}>
               Create
            </button>
            <button 
               className="product-crud-form-button"
               style={{'background-color': methodSelected === 'read' ? 'orange' : 'white'}}
               onClick={() => setMethodSelected('read')}>
               Read
            </button>
            <button
               className="product-crud-form-button"
               style={{'background-color': methodSelected === 'update' ? 'orange' : 'white'}}
               onClick={() => setMethodSelected('update')}>
               Update
            </button>
            <button
               className="product-crud-form-button"
               style={{'background-color': methodSelected === 'delete' ? 'orange' : 'white'}}
               onClick={() => setMethodSelected('delete')}>
               Delete
            </button>
         </div>
         <br />
         { ProductCrudFormComponent }
      </div>
   );
}

export default ProductCrudForm;