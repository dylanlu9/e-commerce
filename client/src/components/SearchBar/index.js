function SearchBar () {
   return (
      <div style={styles.mainContainer}>
         <input style={styles.searchField}></input>
         <button style={styles.searchButton}>Search</button>
      </div>
   );
}

const styles = {
   mainContainer: {
      backgroundColor: 'var(--helio-orange)',
      width: 'fit-content',
      height: '35px',
      marginLeft: '20px',
      marginTop: '20px',
      borderRadius: '10px',
      border: '1px solid black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: '5px',
      paddingRight: '5px',
   },
   searchField: {
      borderRadius: '10px',
      height: '20px',
   },
   searchButton: {
      borderRadius: '10px',
      marginLeft: '5px',
   },
};

export default SearchBar;
