import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Error = {
  __typename?: 'Error';
  message: Scalars['String'];
};

export type LoginType = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  checkForSession: MutationCheckForSessionResult;
  login: MutationLoginResult;
  register: MutationRegisterResult;
};

export type MutationCheckForSessionArgs = {
  input: SessionCheckInput;
};

export type MutationLoginArgs = {
  input: LoginType;
};

export type MutationRegisterArgs = {
  input: UserRegisterInput;
};

export type MutationCheckForSessionResult =
  | Error
  | MutationCheckForSessionSuccess;

export type MutationCheckForSessionSuccess = {
  __typename?: 'MutationCheckForSessionSuccess';
  data: User;
};

export type MutationLoginResult = Error | MutationLoginSuccess;

export type MutationLoginSuccess = {
  __typename?: 'MutationLoginSuccess';
  data: User;
};

export type MutationRegisterResult = Error | MutationRegisterSuccess;

export type MutationRegisterSuccess = {
  __typename?: 'MutationRegisterSuccess';
  data: User;
};

export type Query = {
  __typename?: 'Query';
  allCategories: Array<ShopCategory>;
  /** All shop items. */
  allItems: Array<ShopItem>;
  /** Shop items filtered by category */
  itemByCategory: Array<ShopItem>;
  /** An individual shop item obtained through ID */
  itemById?: Maybe<ShopItem>;
};

export type QueryItemByCategoryArgs = {
  categoryId: Scalars['Int'];
};

export type QueryItemByIdArgs = {
  id: Scalars['Int'];
};

export type SessionCheckInput = {
  token?: InputMaybe<Scalars['String']>;
};

/** An object type for a shop category */
export type ShopCategory = {
  __typename?: 'ShopCategory';
  categoryId: Scalars['ID'];
  categoryItems: Array<ShopItem>;
  categoryName: Scalars['String'];
};

/** An object representing an individual shop item. */
export type ShopItem = {
  __typename?: 'ShopItem';
  itemDescription: Scalars['String'];
  itemId: Scalars['ID'];
  itemImage: Scalars['String'];
  itemName: Scalars['String'];
  quantity: Scalars['Int'];
};

/** Object type representing a user */
export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  token: Scalars['String'];
};

export type UserRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type FetchShopItemsQueryVariables = Exact<{ [key: string]: never }>;

export type FetchShopItemsQuery = {
  __typename?: 'Query';
  allItems: Array<{
    __typename?: 'ShopItem';
    itemDescription: string;
    itemImage: string;
    itemName: string;
  }>;
};

export type RegisterMutationVariables = Exact<{
  UserRegisterInput: UserRegisterInput;
}>;

export type RegisterMutation = {
  __typename?: 'Mutation';
  register:
    | { __typename: 'Error'; message: string }
    | {
        __typename: 'MutationRegisterSuccess';
        data: { __typename?: 'User'; email: string; id: string; token: string };
      };
};

export type LogInMutationVariables = Exact<{
  LoginType: LoginType;
}>;

export type LogInMutation = {
  __typename?: 'Mutation';
  login:
    | { __typename: 'Error'; message: string }
    | {
        __typename: 'MutationLoginSuccess';
        data: { __typename?: 'User'; email: string; id: string; token: string };
      };
};

export const FetchShopItemsDocument = gql`
  query FetchShopItems {
    allItems {
      itemDescription
      itemImage
      itemName
    }
  }
`;

/**
 * __useFetchShopItemsQuery__
 *
 * To run a query within a React component, call `useFetchShopItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchShopItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchShopItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchShopItemsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FetchShopItemsQuery,
    FetchShopItemsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchShopItemsQuery, FetchShopItemsQueryVariables>(
    FetchShopItemsDocument,
    options
  );
}
export function useFetchShopItemsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchShopItemsQuery,
    FetchShopItemsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchShopItemsQuery, FetchShopItemsQueryVariables>(
    FetchShopItemsDocument,
    options
  );
}
export type FetchShopItemsQueryHookResult = ReturnType<
  typeof useFetchShopItemsQuery
>;
export type FetchShopItemsLazyQueryHookResult = ReturnType<
  typeof useFetchShopItemsLazyQuery
>;
export type FetchShopItemsQueryResult = Apollo.QueryResult<
  FetchShopItemsQuery,
  FetchShopItemsQueryVariables
>;
export const RegisterDocument = gql`
  mutation Register($UserRegisterInput: UserRegisterInput!) {
    register(input: $UserRegisterInput) {
      __typename
      ... on Error {
        message
      }
      ... on MutationRegisterSuccess {
        data {
          email
          id
          token
        }
      }
    }
  }
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      UserRegisterInput: // value for 'UserRegisterInput'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    options
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
export const LogInDocument = gql`
  mutation LogIn($LoginType: LoginType!) {
    login(input: $LoginType) {
      __typename
      ... on MutationLoginSuccess {
        data {
          email
          id
          token
        }
      }
      ... on Error {
        message
      }
    }
  }
`;
export type LogInMutationFn = Apollo.MutationFunction<
  LogInMutation,
  LogInMutationVariables
>;

/**
 * __useLogInMutation__
 *
 * To run a mutation, you first call `useLogInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logInMutation, { data, loading, error }] = useLogInMutation({
 *   variables: {
 *      LoginType: // value for 'LoginType'
 *   },
 * });
 */
export function useLogInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogInMutation,
    LogInMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LogInMutation, LogInMutationVariables>(
    LogInDocument,
    options
  );
}
export type LogInMutationHookResult = ReturnType<typeof useLogInMutation>;
export type LogInMutationResult = Apollo.MutationResult<LogInMutation>;
export type LogInMutationOptions = Apollo.BaseMutationOptions<
  LogInMutation,
  LogInMutationVariables
>;
