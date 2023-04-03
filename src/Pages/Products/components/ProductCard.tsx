import {
  Container,
  Flex,
  Image,
  VStack,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import type { ShopItem } from '../../../generated/graphql';
import { AuthContext } from '../../../components/AccountContext';
import { UserCartContext } from '../../../components/CartContext';

function ProductCard({ productInfo }: { productInfo: ShopItem }) {
  const { user } = useContext(AuthContext);
  const { handleAddToCart } = useContext(UserCartContext);

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
        <Flex width="100%">
          <Text fontSize="1.5rem" mr="auto" noOfLines={3} textAlign="left">
            {productInfo.itemName}
          </Text>
        </Flex>
        <Flex height="100%" minH="150px" flexDir="column" width="100%">
          <Text fontSize="2rem" mt="auto" mb="0.8rem">
            ${productInfo.itemPrice}
          </Text>

          <Button
            width="100%"
            size="lg"
            padding="1.5rem"
            py="2rem"
            color="white"
            onClick={() => handleAddToCart(productInfo)}
            _hover={{
              backgroundColor: 'blackAlpha.700',
            }}
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
