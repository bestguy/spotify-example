import { createContext } from 'react';

/**
 * Context for User's auth information.
 */
const AuthContext = createContext<any>(undefined); // TODO type

export default AuthContext;
