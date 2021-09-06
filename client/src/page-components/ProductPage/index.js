import H2 from "../../components/H2";
import Review from "../../components/Review";

function ProductPage () {
   return (
      <div style={styles.mainContainer}>
         <div style={styles.mainContent}>
            <h1 style={styles.productTitle}>Lorem ipsum dolor sit amet, consectetur.</h1>
            <div style={styles.productImage}></div>
            <div style={styles.productInfoContainer}>
               <div style={styles.descriptionContainer}>
                  <H2>Description:</H2>
                     <p style={styles.productDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut</p>
               </div>
               <div style={styles.secondDataContainer}>
                  <H2>Price: $42</H2>
                  <H2>Stock: 9</H2>
                  <H2>Average<br/>score:<br/>3/5</H2>
               </div>
            </div>
            <div style={styles.reviewsContainer}>
               <H2 style={styles.reviewsH2}>Reviews</H2>
               <Review
                  username="Dylan"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua."
                  score="4"
               />
               <Review
                  username="Nahuel"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua."
                  score="2"
               />
            </div>
         </div>
      </div>
   );
}

const styles = {
   mainContainer: {
      padding: '40px 5vw 40px 5vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: 'calc(100vh - 100px)',
   },
   mainContent: {
      width: '66vw',
      maxWidth: '500px',
      backgroundColor: 'var(--helio-orange)',
      border: '1px solid black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      paddingLeft: '5vw',
      paddingRight: '5vw',
      borderRadius: '10px',
   },
   productTitle: {
      width: '50vw',
      maxWidth: '250px',
      fontSize: '1.5em',
      fontWeight: '600',
   },
   productImage: {
      height: '425px',
      width: '60vw',
      maxWidth: '425px',
      backgroundColor: 'gainsboro',
      border: '1px solid black',
      borderRadius: '10px',
   },
   productInfoContainer: {
      display: 'flex',
   },
   descriptionContainer: {
      width: '25vw',
      maxWidth: '225px',
      paddingBottom: '5px',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   },
   productDescription: {
      width: '23vw',
      maxWidth: '225px',
      marginTop: '0px',
   },
   secondDataContainer: {
      width: '25vw',
      maxWidth: '225px',
   },
   reviewsContainer: {
      width: '60vw',
      maxWidth: '425px',
      backgroundColor: 'white',
      border: '1px solid gray',
      marginBottom: '25px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
   },
   reviewsH2: {
      marginTop: '5px',
      marginBottom: '5px',
   },
};

export default ProductPage;
