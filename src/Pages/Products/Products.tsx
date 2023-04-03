import { SimpleGrid } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';
import { Audio } from 'react-loader-spinner';
import { useFetchShopItemsQuery } from '../../generated/graphql';
import ProductCard from './components/ProductCard';

function Products() {
  const { loading, data } = useFetchShopItemsQuery();
  let products;
  if (loading) {
    products = (
      <Audio height="300" width="300" color="green" ariaLabel="loading" />
    );
  } else {
    products = data?.allItems.map((item) => {
      return <ProductCard key={uuid()} productInfo={item} />;
    });
  }
  return (
    <SimpleGrid as="main" px="20rem" gap="2rem" minChildWidth="330px" py="1rem">
      {products}
    </SimpleGrid>
  );
}

export default Products;
