import "./index.css";

function ProductPage () {
   return (
      <div id="product-page-main-container">
         <div id="product-page-main-content">
            <h1 id="product-page-product-title">Lorem ipsum dolor sit amet, consectetur.</h1>
            <div id="product-page-product-image"></div>
            <div id="product-page-product-info-container">
               <div id="product-page-description-container">
                  <h2 id="product-page-product-description-title">Description:</h2>
                  <p id="product-page-product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               </div>
               <div id="product-page-second-data-container">
                  <h2 id="product-page-product-price">Price: $42</h2>
                  <h2 id="product-page-product-stock">Stock: 9</h2>
                  <h2 id="product-page-product-avg-score">Average score:<br></br>3/5</h2>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProductPage;
