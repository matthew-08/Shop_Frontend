/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
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
  register: User;
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

export type MutationCheckForSessionResult = Error | MutationCheckForSessionSuccess;

export type MutationCheckForSessionSuccess = {
  __typename?: 'MutationCheckForSessionSuccess';
  data: User;
};

export type MutationLoginResult = Error | MutationLoginSuccess;

export type MutationLoginSuccess = {
  __typename?: 'MutationLoginSuccess';
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
  name: Scalars['String'];
  token: Scalars['String'];
};

export type UserRegisterInput = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type FetchShopItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchShopItemsQuery = { __typename?: 'Query', allItems: Array<{ __typename?: 'ShopItem', itemDescription: string, itemImage: string, itemName: string }> };

export type LogInMutationVariables = Exact<{ [key: string]: never; }>;


export type LogInMutation = { __typename?: 'Mutation', login: { __typename: 'Error', message: string } | { __typename: 'MutationLoginSuccess', data: { __typename?: 'User', email: string, id: string, name: string, token: string } } };


export const FetchShopItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchShopItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemDescription"}},{"kind":"Field","name":{"kind":"Name","value":"itemImage"}},{"kind":"Field","name":{"kind":"Name","value":"itemName"}}]}}]}}]} as unknown as DocumentNode<FetchShopItemsQuery, FetchShopItemsQueryVariables>;
export const LogInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"StringValue","value":"test","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"StringValue","value":"test","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationLoginSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<LogInMutation, LogInMutationVariables>;