import { useAuth0 } from '@auth0/auth0-react';

function HomePage () {
   const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
   return (
      <div style={styles.mainContainer}>
         {
            isAuthenticated ?
            <button style={styles.button} onClick={() => logout({
               returnTo: window.location.origin,
            })}>
               Log out
            </button>
            :
            <button style={styles.button} onClick={() => loginWithRedirect({
               redirectUri: `${process.env.REACT_APP_CLIENT_HOST}/admin/`
            })}>
               Admin panel
            </button>
         }
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
