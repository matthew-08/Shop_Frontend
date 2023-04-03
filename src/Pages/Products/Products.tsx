import { Flex, SimpleGrid } from '@chakra-ui/react';
import { useContext } from 'react';
import { useFetchShopItemsQuery } from '../../generated/graphql';
import ProductCard from './components/ProductCard';

function Products() {
  const { loading, data } = useFetchShopItemsQuery();
  let products;
  if (loading) {
    products = <div>Loading...</div>;
  } else {
    products = data?.allItems.map((item) => {
      return <ProductCard productInfo={item} />;
    });
  }
  return (
    <SimpleGrid as="main" px="20rem" gap="2rem" minChildWidth="330px" py="1rem">
      {products}
    </SimpleGrid>
  );
}

export default Products;
