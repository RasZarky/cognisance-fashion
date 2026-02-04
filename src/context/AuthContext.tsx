import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  loggedIn: boolean;
  user?: { email: string };
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<{ email: string } | undefined>();

  useEffect(() => {
    const stored = localStorage.getItem('auth_user');
    if (stored) {
      setUser({ email: stored });
      setLoggedIn(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Mock auth: accept any non-empty email/password
    if (!email || !password) {
      throw new Error('Invalid credentials');
    }
    localStorage.setItem('auth_user', email);
    setUser({ email });
    setLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('auth_user');
    setUser(undefined);
    setLoggedIn(false);
  };

  return <AuthContext.Provider value={{ loggedIn, user, login, logout }}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
