function Review () {
   return (
      <div style={styles.review}>
         <div style={styles.reviewLeftArea}>
            <div style={styles.userProfilePicture}></div>
         </div>
         <div style={styles.reviewRightArea}>
            <span style={styles.userSaysText}>anAverageUser123 says:</span>
               <p style={styles.userReviewText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
               </p>
            <span style={styles.reviewScore}>Score: 3/5</span>
         </div>
      </div>
   );
}

const styles = {
   review: {
      width: '100%',
      backgroundColor: 'gainsboro',
      borderTop: '1px solid gray',
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: '10px',
   },
   reviewLeftArea: {
      width: '75px',
      position: 'relative',
   },
   userProfilePicture: {
      height: '37.5px',
      width: '37.5px',
      backgroundColor: 'white',
      position: 'absolute',
      left: '18.75px',
      top: '18.75px',
      border: '1px solid gray',
      borderRadius: '10px',
   },
   reviewRightArea: {
      width: 'calc(100% - 75px)',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '13px',
      paddingRight: '18.75px',
   },
   userSaysText: {
      textAlign: 'left',
   },
   userReviewText: {
      textAlign: 'left',
      backgroundColor: 'white',
      padding: '5px 5px 5px 10px',
      borderRadius: '10px',
      marginTop: '15px',
      border: '1px solid gray',
   },
   reviewScore: {
      marginTop: '-5px',
   },
};

export default Review;