import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type SetValue<T> = Dispatch<SetStateAction<T>>

/**
 * Hook for reading and modifying localstorage. 
 * Listens for and emits change events to keep value in sync.
 */
function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  const readValue = (): T => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  }

  const [storedValue, setStoredValue] = useState<T>(readValue);

  const setValue: SetValue<T> = value => {
    try {
      // Allow value to be a function so we have the same API as useState
      const newValue = value instanceof Function ? value(storedValue) : value;

      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(newValue));

      // Save state
      setStoredValue(newValue);

      // Dispatch a custom event so every useLocalStorage hook are notified
      window.dispatchEvent(new Event('local-storage'));
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error);
    }
  }

  useEffect(() => {
    setStoredValue(readValue());
  }, [])

  useEffect(() => {
    const handleStorageChange = () => {
      setStoredValue(readValue());
    }

    // Other documents, not the current doc.
    window.addEventListener('storage', handleStorageChange);

    // Custom event, triggered in writeValueToLocalStorage
    window.addEventListener('local-storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('local-storage', handleStorageChange);
    }
  }, []);

  return [storedValue, setValue];
}

export default useLocalStorage;