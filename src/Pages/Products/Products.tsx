import React from 'react';
import { useFetchShopItemsQuery } from '../../generated/graphql';

function Products() {
  const { loading, data } = useFetchShopItemsQuery();

  let products;
  if (loading) {
    products = <div>Loading...</div>;
  } else {
    products = data?.allItems.map((item) => {
      return <div>{item.itemName}</div>;
    });
  }
  return products;
}

export default Products;
