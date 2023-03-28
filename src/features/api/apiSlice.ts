/* eslint-disable import/prefer-default-export */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import request from 'graphql-request';
import { graphql } from '../../gql';

const graphqlBaseQuery =
  ({ baseUrl }: { baseUrl: string }) =>
  async ({ body }: { body: string }) => {
    try {
      const result = await request(baseUrl, body);
      return { data: result };
    } catch (error) {
      if (error instanceof ClientError) {
        return { error: { status: error.response.status, data: error } };
      }
      return { error: { status: 500, data: error } };
    }
  };

export const apiSlice = createApi({
  baseQuery: graphqlBaseQuery({
    baseUrl: 'http://localhost:4000/graphql',
  }),
  endpoints: (builder) => ({
    getShopItems: builder.query({
      query: () => ({
        body: graphql(`
          query allUsers {
            name
          }
        `),
      }),
    }),
    transformResponse: (response) => response.posts.data,
  }),
});
