import { render, waitFor, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import Products from './Products';
import {
  FetchShopItemsDocument,
  FetchShopItemsQuery,
} from '../../generated/graphql';

it('shows loading bar if data is being fetched', async () => {
  const mocks = [
    {
      request: {
        query: FetchShopItemsDocument,
      },
      result: {
        data: {
          allItems: [{ id: '1', itemName: '1' }],
        },
        loading: true,
      },
    },
  ];
  render(
    <MockedProvider>
      <Products />;
    </MockedProvider>
  );
  console.log(screen.debug());

  const ok = await screen.findAllByTestId('product');
});
