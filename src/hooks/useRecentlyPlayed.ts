import { useContext } from 'react';
import AuthContext from '../AuthContext';
import useFetch from './useFetch';
import { RecentlyPlayed } from '../types';

/**
 * Hook for accessing recently played Tracks.
 */
function useRecentlyPlayed(): RecentlyPlayed | undefined {
  const auth = useContext(AuthContext);
  const user = useFetch<RecentlyPlayed>('https://api.spotify.com/v1/me/player/recently-played', {
    headers: {
      'Authorization': `Bearer ${auth?.access_token}`
    }
  });

  return user;
};

export default useRecentlyPlayed;
