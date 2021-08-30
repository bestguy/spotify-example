import { useEffect, useState } from 'react';
import useHash from './useHash';
import { Auth } from '../types';

function getParameters(hash: string) {
  const params: { [key: string]: string } = {};

  hash.substr(1).split('&').forEach(pair => {
    const [key, value] = pair.split('=');
    params[key] = decodeURIComponent(value);
  });

  return params;
}

/**
 * Hook for handling current auth state.
 */
function useAuth() {
  const [hash, setHash] = useHash();
  const [auth, setAuth] = useState<Auth>();

  // Store auth when token hash is present
  useEffect(() => {
    if (!!hash) {
      setAuth(getParameters(hash));
      setHash();
    }
  }, [hash]);

  // Remove auth when expired
  useEffect(() => {
    let timeout: number | undefined;

    if (auth) {
      timeout = setTimeout(() => {
        setAuth(undefined);
      }, parseInt(auth.expires_in, 10) * 1000);
    }

    return () => clearInterval(timeout);
  }, [auth]);

  return auth;
};

export default useAuth;
