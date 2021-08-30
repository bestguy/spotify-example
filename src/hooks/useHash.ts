import { useCallback, useEffect, useState } from 'react';

/**
 * Hook for accessing the browser's URL hash. 
 */
function useHash() {
  const [hash, setHash] = useState(() => window.location.hash);

  const onHashChange = useCallback(() => {
    setHash(window.location.hash);
  }, []);

  useEffect(() => {
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange)
  });

  return hash;
};

export default useHash;
