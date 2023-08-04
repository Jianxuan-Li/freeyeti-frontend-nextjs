import { createContext, useState, useEffect } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { attachToken, removeToken } from '@/utils/apis';

export type User = {
  name: string;
  token: string;
};

interface AuthContext {
  user: User | null;
  setUser: (user: User | null) => void;
  authLoading: boolean;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  setUser: () => {},
  authLoading: true
});

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const { getItem } = useLocalStorage();
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedUser = getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      attachToken(userData.token);
    } else {
      setUser(null);
      removeToken();
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
