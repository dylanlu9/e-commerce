function Review (props) {
   return (
      <div style={styles.mainContainer}>
         <div style={styles.leftArea}>
            <div style={styles.userProfilePicture}></div>
         </div>
         <div style={styles.rightArea}>
            <span style={styles.userSaysText}>{props.username} says:</span>
               <p style={styles.userReviewText}>
                  {props.content}
               </p>
            <span style={styles.score}>Score: {props.score}/5</span>
         </div>
      </div>
   );
}

const styles = {
   mainContainer: {
      width: '100%',
      backgroundColor: 'gainsboro',
      borderTop: '1px solid gray',
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: '10px',
   },
   leftArea: {
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
   rightArea: {
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
   score: {
      marginTop: '-5px',
   },
};

export default Review;