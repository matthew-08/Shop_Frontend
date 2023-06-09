/* eslint-disable no-underscore-dangle */
import { createContext, ReactNode, useEffect, useState } from 'react';
import { useFetchSessionMutation } from '../generated/graphql';
import { User, AuthContextType } from '../types';
import getToken from '../utils/getToken';
import type { FetchSessionMutation } from '../generated/graphql';

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => null,
  accountFetchData: null,
});

function AccountContext({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({
    id: null,
    email: null,
  });
  console.log(user.id);
  const [mutateFunction, { data: accountFetchData, loading, error }] =
    useFetchSessionMutation();
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
    if (accountFetchData) {
      if (
        accountFetchData.checkForSession.__typename ===
        'MutationCheckForSessionSuccess'
      ) {
        const { email, cart, token, id } =
          accountFetchData.checkForSession.data;
        setUser({
          email,
          id,
        });
      }
    }
  }, [accountFetchData]);
  return (
    <AuthContext.Provider value={{ user, setUser, accountFetchData }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AccountContext;
