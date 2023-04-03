import { createContext, ReactNode, useState } from 'react';
import { User, AuthContextType } from '../types';

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => null,
});

function AccountContext({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({
    id: null,
    email: null,
  });
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AccountContext;
