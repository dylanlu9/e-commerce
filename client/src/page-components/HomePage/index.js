function HomePage () {
   return (
      <div style={styles.mainContainer}>
         <button style={styles.button}>
            Admin panel
         </button>
      </div>
   );
}

const styles = {
   mainContainer: {
      minHeight: 'calc(100vh - 104.1px)'
   },
   button: {
      backgroundColor: 'var(--helio-orange)',
      borderRadius: '5px',
      margin: '15px',
      padding: '5px',
      fontWeight: '600',
   },
};

export default HomePage;
