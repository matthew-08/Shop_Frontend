import gql from 'graphql-tag';
import * as Urql from 'urql';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const FetchShopItemsDocument = gql`
  query FetchShopItems {
    allItems {
      itemDescription
      itemImage
      itemName
    }
  }
`;

export function useFetchShopItemsQuery(
  options?: Omit<Urql.UseQueryArgs<FetchShopItemsQueryVariables>, 'query'>
) {
  return Urql.useQuery<FetchShopItemsQuery, FetchShopItemsQueryVariables>({
    query: FetchShopItemsDocument,
    ...options,
  });
}
export const LogInDocument = gql`
  mutation LogIn {
    login(input: { email: "test", password: "test" }) {
      __typename
      ... on MutationLoginSuccess {
        data {
          email
          id
          name
          token
        }
      }
      ... on Error {
        message
      }
    }
  }
`;

export function useLogInMutation() {
  return Urql.useMutation<LogInMutation, LogInMutationVariables>(LogInDocument);
}
