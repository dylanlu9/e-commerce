import "./index.css";
import H2 from "../../components/H2";

function ProductPage () {
   return (
      <div className="product-page-main-container">
         <div className="product-page-main-content">
            <h1 className="product-page-product-title">Lorem ipsum dolor sit amet, consectetur.</h1>
            <div className="product-page-product-image"></div>
            <div className="product-page-product-info-container">
               <div className="product-page-description-container">
                  <H2>Description:</H2>
                  {/* <p id="product-page-product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
                     <p id="product-page-product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut</p>
               </div>
               <div className="product-page-second-data-container">
                  <H2>Price: $42</H2>
                  <H2>Stock: 9</H2>
                  <H2>Average<br/>score:<br/>3/5</H2>
               </div>
            </div>
            <div className="products-page-reviews-container">
               <H2 id="product-page-reviews-h2">Reviews</H2>
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
