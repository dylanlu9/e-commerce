import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

function HomePage () {
   const { isAuthenticated, logout } = useAuth0();
   const history = useHistory();
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
            null
         }
         <button style={styles.button} onClick={() => history.push('/admin')}>
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
