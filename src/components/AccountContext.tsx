import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

interface User {
  email: string | null;
  id: string | null;
}

interface AuthContextType {
  user: null | User;
  setUser: Dispatch<SetStateAction<User>>;
}

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
