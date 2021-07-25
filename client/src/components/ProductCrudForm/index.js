import './index.css';
import { useState } from 'react';

function ProductCrudForm () {

   const [methodSelected, setMethodSelected] = useState('create');
   const [readBy, setReadBy] = useState('');
   const [updateBy, setUpdateBy] = useState('');

   let ProductCrudFormComponent;
   switch (methodSelected) {
      case 'create':
         ProductCrudFormComponent =
            <div id="product-crud-form-actual-form">
               Product's data:
               <input id="product-crud-form-actual-form-name-input" placeholder="Name"/>
               <input id="product-crud-form-actual-form-details-input" placeholder="Details"/>
               <input id="product-crud-form-actual-form-price-input"
                  type="number" placeholder="Price"/>
               <input id="product-crud-form-actual-form-stock-input"
                  type="number" placeholder="Stock"/>
               <span>Image:</span>
               <button id="product-crud-form-actual-form-upload-image-button">Upload...</button>
               <button id="product-crud-form-actual-form-submit-button">Add</button>
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
            <div id="product-crud-form-actual-form">

               Select product by:
               <div id="product-crud-form-read-options-container">
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
                  <input id="product-crud-form-actual-form-read-name-input" placeholder={placeholder}/> :
                  null
               }

               <button id="product-crud-form-actual-form-read-submit-button">Get</button>
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
            <div id="product-crud-form-actual-form">

               Select product by:
               <div id="product-crud-form-update-options-container">
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
                  <input id="product-crud-form-actual-form-update-name-input" placeholder={updatePlaceholder}/> :
                  null
               }

               <button id="product-crud-form-actual-form-update-submit-button">Select</button>
            </div>;

         break;
      default:
         ProductCrudFormComponent =
            <div>
            </div>;
         break;
   }

   return (
      <div id="product-crud-form-main-container">
         <h2 className="product-crud-form-h2">Products CRUD form</h2>
         <span>Select the operation you want to perform:</span>
         <div id="product-crud-form-methods-selector-container">
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