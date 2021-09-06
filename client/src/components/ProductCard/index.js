import { Link } from 'react-router-dom';

function ProductCard () {
   return (
      <div style={styles.mainContainer}>
         <Link to="/product">
            <div style={styles.image}></div>
         </Link>
         <div style={styles.titleContainer}>
            <Link to="/product" style={styles.titleLink}>
               <span>Lorem ipsum dolor sit amet, consectetur.</span>
            </Link>
         </div>
      </div>
   );
}

const styles = {
   mainContainer: {
      backgroundColor: 'var(--helio-orange)',
      border: '1px solid black',
      padding: '5px',
      fontSize: '14px',
      borderRadius: '10px',
      height: '25vh',
   },
   image: {
      height: '80%',
      backgroundColor: 'white',
      border: '1px solid black',
      borderRadius: '10px',
   },
   titleContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '4px',
      height: 'calc(20% - 5px)',
      textAlign: 'center',
   },
   titleLink: {
      textDecoration: 'none',
      color: 'black',
   },
};

export default ProductCard;
