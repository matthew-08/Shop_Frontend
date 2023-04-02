import { Container, Flex, Image, VStack, Heading } from '@chakra-ui/react';
import React from 'react';
import type { ShopItem } from '../../../generated/graphql';

function ProductCard({ productInfo }: { productInfo: ShopItem }) {
  return (
    <VStack
      minH="360px"
      border="1px"
      borderColor="gray.100"
      borderRadius="10px"
    >
      <Container marginX="auto" display="block" padding="3rem" width="100%">
        <Image
          src={productInfo.itemImage}
          boxSize="200px"
          m="auto"
          objectFit="contain"
        />
      </Container>
      <Container>
        <Heading fontSize="1.5rem">{productInfo.itemName}</Heading>
        <Container>
            <Text>
                {productInfo.}
            </Text>
        </Container>
      </Container>
    </VStack>
  );
}

export default ProductCard;
