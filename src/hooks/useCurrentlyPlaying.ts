import { useContext } from 'react';
import AuthContext from '../AuthContext';
import useFetch from './useFetch';
import { CurrentlyPlaying } from '../types';

/**
 * Hook for accessing currently playing Track.
 */
function useCurrentlyPlaying(): CurrentlyPlaying | undefined {
  const auth = useContext(AuthContext);
  const user = useFetch<CurrentlyPlaying>('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      'Authorization': `Bearer ${auth.access_token}`
    }
  }, 5000);

  return user;
};

export default useCurrentlyPlaying;
