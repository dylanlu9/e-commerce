import { useAuth0 } from '@auth0/auth0-react';

function HomePage () {
   const { loginWithRedirect } = useAuth0();
   return (
      <div style={styles.mainContainer}>
         <button style={styles.button} onClick={() => loginWithRedirect()}>
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
