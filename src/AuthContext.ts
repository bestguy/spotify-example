import { createContext } from 'react';
import { Auth } from './types';

/**
 * Context for User's auth information.
 */
const AuthContext = createContext<Auth | undefined>(undefined);

export default AuthContext;
