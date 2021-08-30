import useHash from './useHash';

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
  const hash = useHash();
  return hash ? getParameters(hash) : undefined;
};

export default useAuth;
