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

  const updateHash = useCallback((newHash: string = '') => {
    if (newHash !== hash) window.location.hash = newHash;
  }, [hash]);

  return [hash, updateHash] as const;
};

export default useHash;
