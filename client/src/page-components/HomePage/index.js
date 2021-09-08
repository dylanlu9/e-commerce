import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

function HomePage () {
   const { isAuthenticated, logout } = useAuth0();
   const history = useHistory();
   return (
      <div style={styles.mainContainer}>
         <button style={styles.button} onClick={() => history.push('/admin')}>
            Admin panel
         </button>
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
      </div>
   );
}

const styles = {
   mainContainer: {
      minHeight: 'calc(100vh - 104.1px)',
      paddingTop: '15px',
      paddingLeft: '15px',
   },
   button: {
      backgroundColor: 'var(--helio-orange)',
      borderRadius: '5px',
      margin: '15px',
      padding: '5px',
      fontWeight: '600',
      margin: '15px',
   },
};

export default HomePage;
