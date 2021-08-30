import React from 'react';
import AuthContext from './AuthContext';
import Login from './Login';
import PostLogin from './PostLogin';
import useAuth from './hooks/useAuth';

/**
 * Outer component for providing auth context, and whether to show Login or PostLogin views.
 */
const App = () => {
  const auth = useAuth(); 

  return (
    <AuthContext.Provider value={auth}>
      <div id="main">
        {auth ? <PostLogin /> : <Login />}
      </div>
    </AuthContext.Provider>
  )
}

export default App;
