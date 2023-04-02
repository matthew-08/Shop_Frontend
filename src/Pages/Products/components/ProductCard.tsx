import {
  Container,
  Flex,
  Image,
  VStack,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import type { ShopItem } from '../../../generated/graphql';

function ProductCard({ productInfo }: { productInfo: ShopItem }) {
  return (
    <VStack
      minH="360px"
      border="1px"
      borderColor="gray.100"
      borderRadius="10px"
      padding="1.3rem"
    >
      <Container marginX="auto" display="block" padding="3rem" width="100%">
        <Image
          src={productInfo.itemImage}
          boxSize="200px"
          m="auto"
          objectFit="contain"
        />
      </Container>
      <VStack height="100%" width="100%">
        <Text fontSize="1.5rem" mr="auto" noOfLines={4}>
          {productInfo.itemName}
        </Text>
        <Flex height="100%" flexDir="column" width="100%">
          <Text fontSize="2rem" mt="auto" mb="0.5rem">
            ${productInfo.itemPrice}
          </Text>

          <Button
            width="100%"
            size="lg"
            padding="0.5rem"
            color="white"
            backgroundColor="blackAlpha.800"
          >
            Add to cart
          </Button>
        </Flex>
      </VStack>
    </VStack>
  );
}

export default ProductCard;
