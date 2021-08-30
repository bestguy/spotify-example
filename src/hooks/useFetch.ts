import { useEffect, useState } from 'react';

/**
 * Hook for accessing remote JSON data.
 */
function useFetch<T>(url: RequestInfo, options: RequestInit | undefined, timeout: number = 0): T | undefined {
  const [response, setResponse] = useState<T | undefined>(undefined);

  const fn = async () => {
    try {
      const res = await fetch(url, options);
      if (res.status === 204) {
        setResponse(undefined);
      } else {
        const data = await res.json();
        setResponse(data);
      }
    } catch (e) {
      console.error(e);
      setResponse(undefined);
    }
  };

  useEffect(() => {
    fn();
  }, []);

  useEffect(() => {
    const timer = timeout ? setInterval(() => fn(), timeout) : undefined;
    return () => clearInterval(timer);
  }, [timeout]);

  return response;
};

export default useFetch;
