import { SimpleGrid, Flex, useMediaQuery } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';
import { Audio } from 'react-loader-spinner';
import { memo, useMemo } from 'react';
import { ShopItem, useFetchShopItemsQuery } from '../../generated/graphql';
import MemoProductCard from './components/ProductCard';

function Products() {
  const { loading, data } = useFetchShopItemsQuery();
  const [isSmallerThan1000] = useMediaQuery('(max-width: 1000px)');
  let products;
  if (loading) {
    products = (
      <Flex m="auto" mt="3rem">
        <Audio height="300" width="300" color="#C4F1F9" ariaLabel="loading" />
      </Flex>
    );
  } else {
    products = data?.allItems.map((item) => {
      return <MemoProductCard key={uuid()} productInfo={item} />;
    });
  }
  return (
    <SimpleGrid
      as="main"
      px={isSmallerThan1000 ? '1rem' : '20rem'}
      gap="2rem"
      minChildWidth="330px"
      py="1rem"
    >
      {products}
    </SimpleGrid>
  );
}

export default Products;
