import { useContext } from 'react';
import AuthContext from '../AuthContext';
import useFetch from './useFetch';
import { User } from '../types';

/**
 * Hook for accessing currently logged in User.
 */
function useUser(): User | undefined {
  const auth = useContext(AuthContext);
  const user = useFetch<User>('https://api.spotify.com/v1/me', {
    headers: {
      'Authorization': `Bearer ${auth?.access_token}`
    }
  });

  return user;
};

export default useUser;
