/* eslint-disable no-underscore-dangle */
import { createContext, ReactNode, useEffect, useState } from 'react';
import { useFetchSessionMutation } from '../generated/graphql';
import { User, AuthContextType } from '../types';
import getToken from '../utils/getToken';

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => null,
});

function AccountContext({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({
    id: null,
    email: null,
  });
  const [mutateFunction, { data, loading, error }] = useFetchSessionMutation();
  useEffect(() => {
    const checkForUser = async () => {
      const token = getToken();
      if (token) {
        await mutateFunction({
          variables: {
            input: {
              token,
            },
          },
        });
      }
    };
    checkForUser();
  }, []);
  useEffect(() => {
    if (data) {
      if (
        data.checkForSession.__typename === 'MutationCheckForSessionSuccess'
      ) {
        setUser(data.checkForSession.data);
      }
    }
  }, [data]);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AccountContext;
