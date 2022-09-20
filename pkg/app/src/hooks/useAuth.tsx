// React Imports
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';

// Firebase Imports
import { useAuthState } from 'react-firebase-hooks/auth';

// Interfaces
import { User } from '../interfaces/db';
import { auth } from '../lib/firebase';

interface AuthService {
  uid: string | null;
  user: User | null;
}

const AuthContext = createContext<AuthService>({
  uid: null,
  user: null,
});

const useAuthContextProvider = (): AuthService => {
  const [userData, setUserData] = useState<User | null>(null);

  const setCurrentUserData = useCallback((user: User): void => {
    setUserData({
      uid: user?.uid,
      isAnonymous: user?.isAnonymous,
      displayName: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL,
    });
  }, []);

  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!loading && user) {
      setCurrentUserData(user);
    }
  }, [loading, user, setCurrentUserData]);

  return {
    uid: user?.uid || null,
    user: userData,
  };
};

const AuthContextProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const authContext = useAuthContextProvider();
  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

const useAuth = (): AuthService => useContext(AuthContext);

export { useAuth, AuthContextProvider };
