import "./index.css";

function ProductPage () {
   return (
      <div id="product-page-main-container">
         <div id="product-page-main-content">
            <h1 id="product-page-product-title">Lorem ipsum dolor sit amet, consectetur.</h1>
            <div id="product-page-product-image"></div>
            <div id="product-page-product-info-container">
               <div id="product-page-description-container">
                  <h2 className="product-page-h2">Description:</h2>
                  {/* <p id="product-page-product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
                     <p id="product-page-product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut</p>
               </div>
               <div id="product-page-second-data-container">
                  <h2 className="product-page-h2">Price: $42</h2>
                  <h2 className="product-page-h2">Stock: 9</h2>
                  <h2 className="product-page-h2">Average<br/>score:<br/>3/5</h2>
               </div>
            </div>
            <div id="products-page-reviews-container">
               <h2 id="product-page-reviews-h2" className="product-page-h2">Reviews</h2>
               <div className="product-page-review">
                  <div className="product-page-review-left-area">
                     <div className="product-page-user-profile-picture"></div>
                  </div>
                  <div className="product-page-review-right-area">
                     <span className="product-page-user-says-text">anAverageUser123 says:</span>
                     <p className="product-page-user-review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                     <span className="product-page-review-score">Score: 3/5</span>
                  </div>
               </div>
               <div className="product-page-review">
                  <div className="product-page-review-left-area">
                     <div className="product-page-user-profile-picture"></div>
                  </div>
                  <div className="product-page-review-right-area">
                     <span className="product-page-user-says-text">anAverageUser123 says:</span>
                     <p className="product-page-user-review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                     <span className="product-page-review-score">Score: 3/5</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProductPage;
