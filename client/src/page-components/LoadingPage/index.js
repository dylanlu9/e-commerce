function LoadingPage () {
   return (
      <div style={styles.mainContainer}>
         Loading...
      </div>
   );
}

const styles = {
   mainContainer: {
      minHeight: 'calc(100vh - 104.1px)',
      padding: '20px',
   },
};

export default LoadingPage;
